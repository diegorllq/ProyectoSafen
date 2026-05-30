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
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        
        // Agregar leyenda
        const legend = L.control({ position: 'bottomleft' });
        legend.onAdd = function() {
            const div = L.DomUtil.create('div', 'leyenda');
            div.innerHTML = `
                <b>Impacto del desastre</b>
                <div>${createFlagSVG('#e05c5c', 16)} Alta urgencia</div>
                <div>${createFlagSVG('#e8a04a', 16)} Urgencia media</div>
                <div>${createFlagSVG('#5ec49a', 16)} Urgencia leve</div>
            `;
            return div;
        };
        legend.addTo(map);
        
        // Crear SVG de bandera
        function createFlagSVG(color, size = 24) {
            return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 6px;">
                <path d="M5 21V4" stroke="#555" stroke-width="2" stroke-linecap="round"/>
                <path d="M5 4C5 4 6.5 3 9.5 3C12.5 3 14 5 17 5C20 5 21 4 21 4V14C21 14 20 15 17 15C14 15 12.5 13 9.5 13C6.5 13 5 14 5 14" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        }
        
        // Crear icono de bandera para marcador
        function createFlagIcon(color) {
            const svg = `<svg width="32" height="40" viewBox="0 0 32 40" class="flag-marker">
                <path d="M6 38V6" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M6 6C6 6 8 4 12 4C16 4 18 7 22 7C26 7 28 5 28 5V20C28 20 26 22 22 22C18 22 16 19 12 19C8 19 6 21 6 21" fill="${color}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="6" cy="38" r="3" fill="#333"/>
            </svg>`;
            
            return L.divIcon({
                className: 'flag-icon',
                html: svg,
                iconSize: [32, 40],
                iconAnchor: [6, 40],
                popupAnchor: [10, -35]
            });
        }
        
        // Inicializar selector de colores
        function initColorPicker() {
            colorOptions.innerHTML = '';
            Object.keys(COLORS).forEach(colorKey => {
                const btn = document.createElement('button');
                btn.className = `color-btn ${colorKey === selectedColor ? 'selected' : ''}`;
                btn.style.backgroundColor = COLORS[colorKey].hex;
                btn.title = COLORS[colorKey].label;
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
        
        // Mostrar toast
        function showToast(message, isError = false) {
            toastEl.textContent = message;
            toastEl.className = `toast visible ${isError ? 'error' : 'success'}`;
            setTimeout(() => {
                toastEl.classList.remove('visible');
            }, 2400);
        }
        
        // Cargar ubicaciones desde localStorage
        function loadLocations() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (raw) {
                    locations = JSON.parse(raw);
                    locations.forEach(loc => addMarkerToMap(loc));
                }
            } catch (e) {
                locations = [];
            }
            renderLocationsList();
        }
        
        // Guardar ubicaciones en localStorage
        function saveLocations() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(locations));
        }
        
        // Agregar marcador al mapa
        function addMarkerToMap(loc) {
            const marker = L.marker([loc.lat, loc.lng], {
                icon: createFlagIcon(COLORS[loc.color].hex)
            }).addTo(map);
            
            marker.bindPopup(`
                <div style="padding:5px;">
                    <b>Impacto:</b> ${loc.name}<br>
                    ${loc.desc || ''}
                </div>
            `);
            
            markers[loc.id] = marker;
        }
        
        // Renderizar lista de ubicaciones
        function renderLocationsList() {
            const cards = locationsList.querySelectorAll('.location-card');
            cards.forEach(card => card.remove());
            
            if (locations.length === 0) {
                emptyState.style.display = 'block';
                return;
            }
            
            emptyState.style.display = 'none';
            
            locations.forEach(loc => {
                const card = document.createElement('div');
                card.className = 'location-card';
                card.innerHTML = `
                    <div style="display:flex;align-items:flex-start;gap:12px;">
                        <span style="flex-shrink:0;">${createFlagSVG(COLORS[loc.color].hex, 24)}</span>
                        <div style="flex:1;min-width:0;">
                            <h4 style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${loc.name}</h4>
                            ${loc.desc ? `<p style="overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;">${loc.desc}</p>` : ''}
                            <p class="coords">${loc.lat.toFixed(5)}, ${loc.lng.toFixed(5)}</p>
                        </div>
                    </div>
                    <button class="delete-btn" onclick="event.stopPropagation();deleteLocation('${loc.id}')">🗑️</button>
                `;
                card.onclick = () => flyToLocation(loc.id);
                locationsList.appendChild(card);
            });
        }
        
        // Volar a ubicacion
        function flyToLocation(id) {
            const loc = locations.find(l => l.id === id);
            if (loc) {
                map.flyTo([loc.lat, loc.lng], 16, { duration: 1.2 });
                markers[id].openPopup();
            }
        }
        
        // Eliminar ubicacion
        function deleteLocation(id) {
            const marker = markers[id];
            if (marker) {
                map.removeLayer(marker);
                delete markers[id];
            }
            locations = locations.filter(l => l.id !== id);
            saveLocations();
            renderLocationsList();
            showToast('Ubicacion eliminada');
        }
        
        // Actualizar marcador pendiente
        function updatePendingMarker() {
            if (pendingMarker) {
                map.removeLayer(pendingMarker);
            }
            
            if (pendingLatLng) {
                pendingMarker = L.marker([pendingLatLng.lat, pendingLatLng.lng], {
                    icon: createFlagIcon(COLORS[selectedColor].hex),
                    opacity: 0.7
                }).addTo(map);
            }
        }
        
        // Actualizar estado de coordenadas pendientes
        function updatePendingCoordsUI() {
            if (pendingLatLng) {
                pendingCoordsEl.innerHTML = `
                    ${createFlagSVG(COLORS[selectedColor].hex, 20)}
                    <span>${pendingLatLng.lat.toFixed(5)}, ${pendingLatLng.lng.toFixed(5)}</span>
                `;
                pendingCoordsEl.classList.add('has-coords');
            } else {
                pendingCoordsEl.innerHTML = `
                    <span>👆</span>
                    <span>Haz clic en el mapa para fijar un punto</span>
                `;
                pendingCoordsEl.classList.remove('has-coords');
            }
            updateSaveButtonState();
        }
        
        // Actualizar estado del boton guardar
        function updateSaveButtonState() {
            const canSave = pendingLatLng && nameInput.value.trim();
            saveBtn.disabled = !canSave;
        }
        
        // Guardar nueva ubicacion
        function saveLocation() {
            if (!pendingLatLng) {
                showToast('Haz clic en el mapa primero', true);
                return;
            }
            if (!nameInput.value.trim()) {
                showToast('Escribe un nombre para el lugar', true);
                return;
            }
            
            const newLocation = {
                id: 'loc_' + Date.now(),
                name: nameInput.value.trim(),
                desc: descInput.value.trim(),
                lat: pendingLatLng.lat,
                lng: pendingLatLng.lng,
                color: selectedColor,
                createdAt: new Date().toISOString()
            };
            
            locations.unshift(newLocation);
            saveLocations();
            addMarkerToMap(newLocation);
            renderLocationsList();
            
            // Limpiar formulario
            nameInput.value = '';
            descInput.value = '';
            if (pendingMarker) {
                map.removeLayer(pendingMarker);
                pendingMarker = null;
            }
            pendingLatLng = null;
            updatePendingCoordsUI();
            
            showToast(`"${newLocation.name}" guardada`);
            
            setTimeout(() => flyToLocation(newLocation.id), 100);
        }
        
        // Event listeners
        map.on('click', function(e) {
            pendingLatLng = { lat: e.latlng.lat, lng: e.latlng.lng };
            updatePendingMarker();
            updatePendingCoordsUI();
        });
        
        toggleFormBtn.onclick = function() {
            addForm.classList.toggle('visible');
        };
        
        nameInput.oninput = updateSaveButtonState;
        saveBtn.onclick = saveLocation;
        
        // Inicializar aplicacion
        initColorPicker();
        loadLocations();