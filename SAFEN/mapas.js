// MAPA
var map = L.map('map').setView([13.69, -89.21], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// LEYENDA
var legend = L.control({position: 'bottomleft'});

legend.onAdd = function () {
  var div = L.DomUtil.create('div', 'info legend');
  div.innerHTML = `
    <b>Impacto del desastre</b><br><br>
    <div><span style="color:red;">●</span> Alta urgencia</div>
    <div><span style="color:orange;">●</span> Urgencia media</div>
    <div><span style="color:green;">●</span> Urgencia leve</div>
  `;
  return div;
};

legend.addTo(map);

// CONTROL
let seleccionando = false;

function mostrarFormulario() {
  document.getElementById("formulario").style.display = "block";
}

function activarSeleccion() {
  alert("Haz clic en el mapa para ubicar el desastre");
  seleccionando = true;
}

// CLICK EN MAPA
map.on('click', function(e) {

  if (!seleccionando) return;

  let impacto = document.getElementById("impacto").value;
  let descripcion = document.getElementById("descripcion").value;

  let color;

  if (impacto === "alto") color = "red";
  else if (impacto === "medio") color = "orange";
  else color = "green";

  let icono = L.divIcon({
    html: `<div style="width:18px;height:18px;background:${color};border-radius:50%"></div>`,
    className: ''
  });

  L.marker(e.latlng, {icon: icono})
    .addTo(map)
    .bindPopup(`<b>Impacto:</b> ${impacto}<br>${descripcion}`);

  // LISTA
  let lista = document.getElementById("lista");
  let nuevo = document.createElement("div");
  nuevo.className = "reporte";
  nuevo.innerHTML = `<b>Impacto:</b> ${impacto}<br>${descripcion}`;
  lista.prepend(nuevo);

  seleccionando = false;
  document.getElementById("formulario").style.display = "none";
  document.getElementById("descripcion").value = "";
});
