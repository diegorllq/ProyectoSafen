<?php 
session_start();
include("conexion.php");

// 🔒 VALIDAR SESIÓN
if (!isset($_SESSION["id"])) {
  header("Location: login.php");
  exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mapa de Desastres</title>

<!-- CSS -->
<link rel="stylesheet" href="/SAFEN/css/navbar.css">
<link rel="stylesheet" href="/SAFEN/css/mapa.css">

<!-- FUENTES -->
<link href="https://fonts.googleapis.com/css2?family=Poppins&family=Satisfy&display=swap" rel="stylesheet">

<!-- LEAFLET -->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>

</head>

<body>

<!-- NAVBAR -->
<?php include("navbar.php"); ?>

<h1 id="titulo">
  Lo que está pasando <span>ahora...</span>
</h1>

<div id="contenedor">

  <!-- MAPA -->
  <div id="map"></div>

  <!-- PANEL -->
  <div id="panel">
    <h3 class="dd">Reportes recientes</h3>
    <div id="lista"></div>

    <br>
    <button onclick="mostrarFormulario()">Reportar desastre</button>

    <div id="formulario" style="display:none;">
      <p><b>Impacto:</b></p>
      <select id="impacto">
        <option value="alto">Alta urgencia</option>
        <option value="medio">Urgencia media</option>
        <option value="bajo">Urgencia leve</option>
      </select>

      <p><b>Descripción:</b></p>
      <textarea id="descripcion" rows="4"></textarea><br><br>

      <button onclick="activarSeleccion()">Seleccionar ubicación</button>
    </div>
  </div>

</div>

<!-- JS LEAFLET -->
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script src="/SAFEN/mapas.js"></script>
</body>
</html>