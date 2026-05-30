<?php
include("conexion.php");

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];

$sql = "DELETE FROM ubicaciones WHERE id = ?";

$stmt = $conexion->prepare($sql);
$stmt->bind_param("s", $id);

if($stmt->execute()){
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}