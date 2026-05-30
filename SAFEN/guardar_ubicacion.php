<?php
include("conexion.php");

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];
$nombre = $data['name'];
$desc = $data['desc'];
$lat = $data['lat'];
$lng = $data['lng'];
$color = $data['color'];

$sql = "INSERT INTO ubicaciones (id, nombre, descripcion, lat, lng, color) 
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conexion->prepare($sql);
$stmt->bind_param("sssdds", $id, $nombre, $desc, $lat, $lng, $color);

if($stmt->execute()){
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}