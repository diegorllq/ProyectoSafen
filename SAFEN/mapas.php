<?php 
session_start();
include("conexion.php");

//  VALIDAR SESIÓN
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
    <title>Mis Ubicaciones</title>
    
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="anonymous"/>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Satisfy&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/mapa.css">
    <link rel="stylesheet" href="css/navbar.css">

</head>

<body>

  <?php include("navbar.php"); ?>

    <h1>Lo que esta pasando <span>ahora...</span></h1>
    
    <div class="container">
        <div id="map"></div>
        
        <div class="sidebar">
            <h3>Reportes recientes</h3>
            
            <div class="locations-list" id="locationsList">
                <div class="empty-state" id="emptyState">
                    <div class="icon">🗺️</div>
                    <p>Aun no hay ubicaciones guardadas.<br>Haz clic en el botón "Reportar desastre"</p>
                </div>
            </div>
            
            <button class="btn-primary" id="toggleFormBtn">Reportar desastre</button>
            
            <div class="add-form" id="addForm">
                <label>Nombre:</label>
                <input type="text" id="nameInput" placeholder="Nombre del lugar..." maxlength="50">
                
                <label>Descripcion:</label>
                <textarea id="descInput" placeholder="Descripcion (opcional)..."></textarea>
                
                <div class="color-picker">
                    <span>Color:</span>
                    <div class="color-options" id="colorOptions"></div>
                </div>
                
                <div class="pending-coords" id="pendingCoords">
                    <span>👆</span>
                    <span>Haz clic en el mapa para fijar un punto</span>
                </div>
                
                <button class="btn-primary" id="saveBtn" disabled>
                    Seleccionar ubicacion
                </button>
            </div>
        </div>
    </div>
    
    <div class="toast" id="toast"></div>
    
    <!-- Leaflet JS -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin="anonymous"></script>
    <script src="mapas.js"></script>
</body>
</html>