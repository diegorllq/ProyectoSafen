// Configuracion de colores
const COLORS = {
    red: { hex: '#e05c5c', label: 'Rojo' },
    green: { hex: '#5ec49a', label: 'Verde' },
    orange: { hex: '#e8a04a', label: 'Naranja' },
};

const STORAGE_KEY = 'mis_ubicaciones_v1';

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

// Cargar ubicaciones desde BD
function loadLocations() {
    fetch('obtener_ubicaciones.php')
    .then(res => res.json())
    .then(data => {
        locations = data;
        locations.forEach(loc => addMarkerToMap(loc));
        renderLocationsList();
    });
}

// Crear SVG
function createFlagSVG(color, size = 24) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24">
        <path d="M5 21V4" stroke="#555" stroke-width="2"/>
        <path d="M5 4C5 4 6.5 3 9.5 3C12.5 3 14 5 17 5C20 5 21 4 21 4V14C21 14 20 15 17 15C14 15 12.5 13 9.5 13C6.5 13 5 14 5 14" fill="${color}"/>
    </svg>`;
}

// Icono
function createFlagIcon(color) {
    return L.divIcon({
        className: 'flag-icon',
        html: createFlagSVG(color, 30),
        iconSize: [30, 30]
    });
}

// Agregar marcador
function addMarkerToMap(loc) {
    const marker = L.marker([loc.lat, loc.lng], {
        icon: createFlagIcon(COLORS[loc.color].hex)
    }).addTo(map);

    marker.bindPopup(`<b>${loc.name}</b><br>${loc.desc || ''}`);
    markers[loc.id] = marker;
}

// Render lista
function renderLocationsList() {
    locationsList.innerHTML = '';

    if (locations.length === 0) {
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

// Guardar ubicación (BD)
function saveLocation() {
    if (!pendingLatLng || !nameInput.value.trim()) return;

    const newLocation = {
        id: 'loc_' + Date.now(),
        name: nameInput.value.trim(),
        desc: descInput.value.trim(),
        lat: pendingLatLng.lat,
        lng: pendingLatLng.lng,
        color: selectedColor
    };

    fetch('guardar_ubicacion.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLocation)
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            locations.unshift(newLocation);
            addMarkerToMap(newLocation);
            renderLocationsList();
        }
    });
}

// Eliminar ubicación (BD)
function deleteLocation(id) {
    fetch('eliminar_ubicacion.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            const marker = markers[id];
            if (marker) {
                map.removeLayer(marker);
                delete markers[id];
            }

            locations = locations.filter(l => l.id !== id);
            renderLocationsList();
        }
    });
}

// Eventos
map.on('click', function(e) {
    pendingLatLng = e.latlng;
});

saveBtn.onclick = saveLocation;

// Init
loadLocations();