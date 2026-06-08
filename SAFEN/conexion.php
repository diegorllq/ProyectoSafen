<?php
$conn = mysqli_connect("localhost", "root", "", "safen");

if (!$conn) {
    die("Error de conexión");
}

// 🔥 SOLUCIÓN
$conexion = $conn;

?>