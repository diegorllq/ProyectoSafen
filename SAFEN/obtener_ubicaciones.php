<?php
include("conexion.php");

$resultado = $conexion->query("SELECT * FROM ubicaciones ORDER BY created_at DESC");

$ubicaciones = [];

while($fila = $resultado->fetch_assoc()){
    $ubicaciones[] = [
        "id" => $fila['id'],
        "name" => $fila['nombre'],
        "desc" => $fila['descripcion'],
        "lat" => (float)$fila['lat'],
        "lng" => (float)$fila['lng'],
        "color" => $fila['color']
    ];
}

echo json_encode($ubicaciones);