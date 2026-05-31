<?php
header('Content-Type: application/json');

include("conexion.php");

if (!isset($_GET['id'])) {
    echo json_encode(["success" => false, "error" => "No hay ID"]);
    exit;
}

$id = $_GET['id'];

$sql = "DELETE FROM ubicaciones WHERE id = ?";
$stmt = $conexion->prepare($sql);

if (!$stmt) {
    echo json_encode(["success" => false, "error" => $conexion->error]);
    exit;
}

$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}