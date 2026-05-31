<?php
header('Content-Type: application/json');

include("conexion.php");

$resultado = $conexion->query("SELECT * FROM ubicaciones ORDER BY id DESC");

$ubicaciones = [];

if ($resultado) {
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
}

echo json_encode($ubicaciones);