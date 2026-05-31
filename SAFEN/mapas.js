// Configuracion de colores
const COLORS = {
    red: { hex: '#e05c5c', label: 'Rojo' },
    green: { hex: '#5ec49a', label: 'Verde' },
    orange: { hex: '#e8a04a', label: 'Naranja' },
};

let locations = [];
let pendingLatLng = null;
let selectedColor = 'red';
let markers = {};
let pendingMarker = null;

// Elementos del DOM
const locationsList = document.getElementById('locationsList');
const emptyState = document.getElementById('emptyState');
const toggleFormBtn = document.getElementById('toggleFormBtn');
const addForm = document.getElementById('addForm');
const nameInput = document.getElementById('nameInput');
const descInput = document.getElementById('descInput');
const colorOptions = document.getElementById('colorOptions');
const pendingCoordsEl = document.getElementById('pendingCoords');
const saveBtn = document.getElementById('saveBtn');
const toastEl = document.getElementById('toast');

// Inicializar mapa
const map = L.map('map').setView([13.80, -89.21], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Leyenda
const legend = L.control({ position: 'bottomleft' });
legend.onAdd = function() {
    const div = L.DomUtil.create('div', 'leyenda');
    div.innerHTML = `
        <b>Impacto del desastre</b>
        <div>${createFlagSVG('#e05c5c', 16)} Alta urgencia</div>
        <div>${createFlagSVG('#e8a04a', 16)} Media</div>
        <div>${createFlagSVG('#5ec49a', 16)} Leve</div>
    `;
    return div;
};
legend.addTo(map);

// SVG bandera
function createFlagSVG(color, size = 24) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24">
        <path d="M5 21V4" stroke="#555" stroke-width="2"/>
        <path d="M5 4C5 4 6.5 3 9.5 3C12.5 3 14 5 17 5C20 5 21 4 21 4V14C21 14 20 15 17 15C14 15 12.5 13 9.5 13C6.5 13 5 14 5 14"
        fill="${color}" stroke="${color}"/>
    </svg>`;
}

// Icono mapa
function createFlagIcon(color) {
    return L.divIcon({
        className: 'flag-icon',
        html: createFlagSVG(color, 32),
        iconSize: [32, 40],
        iconAnchor: [6, 40]
    });
}

// Selector colores
function initColorPicker() {
    colorOptions.innerHTML = '';
    Object.keys(COLORS).forEach(colorKey => {
        const btn = document.createElement('button');
        btn.className = `color-btn ${colorKey === selectedColor ? 'selected' : ''}`;
        btn.style.backgroundColor = COLORS[colorKey].hex;
        btn.onclick = (e) => selectColor(colorKey, e);
        colorOptions.appendChild(btn);
    });
}

function selectColor(colorKey, e) {
    selectedColor = colorKey;
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');
    updatePendingMarker();
}

// Toast
function showToast(message, isError = false) {
    toastEl.textContent = message;
    toastEl.className = `toast visible ${isError ? 'error' : 'success'}`;
    setTimeout(() => toastEl.classList.remove('visible'), 2400);
}

// OBTENER
async function loadLocations() {
    try {
        const res = await fetch('obtener_ubicaciones.php');
        locations = await res.json();

        locations.forEach(loc => addMarkerToMap(loc));
        renderLocationsList();
    } catch (e) {
        console.error(e);
        showToast('Error al cargar datos ❌', true);
    }
}

// GUARDAR
async function saveLocation() {
    if (!pendingLatLng) return showToast('Haz clic en el mapa primero', true);
    if (!nameInput.value.trim()) return showToast('Escribe un nombre', true);

    const newLocation = {
        name: nameInput.value.trim(),
        desc: descInput.value.trim(),
        lat: pendingLatLng.lat,
        lng: pendingLatLng.lng,
        color: selectedColor
    };

    try {
        const res = await fetch('guardar_ubicacion.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newLocation)
        });

        const response = await res.json();

        if (!response.success) {
            throw new Error(response.error || "Error al guardar");
        }

        const saved = {
            id: response.id,
            name: response.name,
            desc: response.desc,
            lat: response.lat,
            lng: response.lng,
            color: response.color
        };

        locations.unshift(saved);
        addMarkerToMap(saved);
        renderLocationsList();

        showToast(`"${saved.name}" guardada`);

    } catch (e) {
        console.error(e);
        showToast('Error al guardar ❌', true);
    }

    // limpiar
    nameInput.value = '';
    descInput.value = '';

    if (pendingMarker) {
        map.removeLayer(pendingMarker);
        pendingMarker = null;
    }

    pendingLatLng = null;
    updatePendingCoordsUI();
}

// 🔥 ELIMINAR (CORREGIDO)
async function deleteLocation(id) {

    if (!confirm("¿Eliminar esta ubicación?")) return;

    try {
        const res = await fetch('eliminar_ubicacion.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        });

        const response = await res.json();

        if (!response.success) {
            throw new Error("No se pudo eliminar en la BD");
        }

        // SOLO eliminar si la BD respondió bien
        map.removeLayer(markers[id]);
        delete markers[id];

        locations = locations.filter(l => l.id !== id);
        renderLocationsList();

        showToast('Ubicación eliminada 🗑️');

    } catch (e) {
        console.error(e);
        showToast('Error al eliminar ❌', true);
    }
}

// Marcador
function addMarkerToMap(loc) {
    const marker = L.marker([loc.lat, loc.lng], {
        icon: createFlagIcon(COLORS[loc.color].hex)
    }).addTo(map);

    marker.bindPopup(`<b>${loc.name}</b><br>${loc.desc || ''}`);
    markers[loc.id] = marker;
}

// Lista
function renderLocationsList() {
    locationsList.innerHTML = '';

    if (!locations.length) {
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';

    locations.forEach(loc => {
        const card = document.createElement('div');
        card.className = 'location-card';
        card.innerHTML = `
            <h4>${loc.name}</h4>
            <p>${loc.desc || ''}</p>
            <button onclick="deleteLocation('${loc.id}')">Eliminar</button>
        `;
        locationsList.appendChild(card);
    });
}

// Pendiente
function updatePendingMarker() {
    if (pendingMarker) map.removeLayer(pendingMarker);

    if (pendingLatLng) {
        pendingMarker = L.marker([pendingLatLng.lat, pendingLatLng.lng], {
            icon: createFlagIcon(COLORS[selectedColor].hex),
            opacity: 0.7
        }).addTo(map);
    }
}

function updatePendingCoordsUI() {
    if (pendingLatLng) {
        pendingCoordsEl.innerHTML = `${pendingLatLng.lat.toFixed(5)}, ${pendingLatLng.lng.toFixed(5)}`;
    } else {
        pendingCoordsEl.innerHTML = 'Haz clic en el mapa';
    }
}

// Eventos
map.on('click', (e) => {
    pendingLatLng = e.latlng;
    updatePendingMarker();
    updatePendingCoordsUI();
});

toggleFormBtn.onclick = () => addForm.classList.toggle('visible');
nameInput.oninput = () => saveBtn.disabled = !(pendingLatLng && nameInput.value.trim());

saveBtn.onclick = (e) => {
    e.preventDefault();
    saveLocation();
};

// Init
initColorPicker();
loadLocations();