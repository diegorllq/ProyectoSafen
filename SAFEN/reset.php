<?php
include("conexion.php");

// VALIDAR TOKEN SEGURIDAD
if (!isset($_GET["token"])) {
  die("Token inválido");
}

$token = $_GET["token"];

$stmt = $conn->prepare("SELECT * FROM usuarios WHERE reset_token=? AND token_expira > NOW()");
$stmt->bind_param("s", $token);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows == 0) {
  die("Token inválido o expirado");
}

$usuario = $resultado->fetch_assoc();


// CAMBIAR CONTRA
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $nueva = $_POST["nueva"];
  $confirmar = $_POST["confirmar"];

  if ($nueva !== $confirmar) {
    echo "Las contraseñas no coinciden";
  } else {

    $hash = password_hash($nueva, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("UPDATE usuarios SET password=?, reset_token=NULL, token_expira=NULL WHERE id=?");
    $stmt->bind_param("si", $hash, $usuario["id"]);
    $stmt->execute();

    echo "Contraseña actualizada correctamente";
  }
}
?>

<form method="POST">
  <h2>Nueva contraseña</h2>
  <input type="password" name="nueva" placeholder="Nueva contraseña" required>
  <input type="password" name="confirmar" placeholder="Confirmar contraseña" required>
  <button type="submit">Cambiar contraseña</button>
</form>