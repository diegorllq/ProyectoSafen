<<?php
header('Content-Type: application/json');

include("conexion.php");

$data = json_decode(file_get_contents("php://input"), true);

// Validar datos
if (!$data) {
    echo json_encode(["success" => false, "error" => "No hay datos"]);
    exit;
}

$nombre = $data['name'];
$desc = $data['desc'];
$lat = $data['lat'];
$lng = $data['lng'];
$color = $data['color'];

// NO incluimos id (AUTO_INCREMENT)
$sql = "INSERT INTO ubicaciones (nombre, descripcion, lat, lng, color) 
        VALUES (?, ?, ?, ?, ?)";

$stmt = $conexion->prepare($sql);

if (!$stmt) {
    echo json_encode(["success" => false, "error" => $conexion->error]);
    exit;
}

$stmt->bind_param("ssdds", $nombre, $desc, $lat, $lng, $color);

if($stmt->execute()){
    echo json_encode([
        "success" => true,
        "id" => $stmt->insert_id,
        "name" => $nombre,
        "desc" => $desc,
        "lat" => $lat,
        "lng" => $lng,
        "color" => $color
    ]);
} else {
    echo json_encode([
        "success" => false,
        "error" => $stmt->error
    ]);
}