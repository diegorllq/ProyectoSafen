<?php
include("conexion.php");

if (isset($_POST["enviar"])) {

  $correo = $_POST["correo"];

  $token = bin2hex(random_bytes(32));
  $expira = date("Y-m-d H:i:s", strtotime("+1 hour"));

  $stmt = $conn->prepare("UPDATE usuarios SET reset_token=?, token_expira=? WHERE correo=?");
  $stmt->bind_param("sss", $token, $expira, $correo);

  if ($stmt->execute()) {

    $link = "http://localhost/SAFEN/reset.php?token=" . $token;

    echo "<p>Link de recuperación:</p>";
    echo "<a href='$link'>$link</a>";

  } else {
    echo "Error";
  }
}
?>

<form method="POST">
  <h2>Recuperar contraseña</h2>
  <input type="email" name="correo" placeholder="Tu correo" required>
  <button type="submit" name="enviar">Enviar enlace</button>
</form>