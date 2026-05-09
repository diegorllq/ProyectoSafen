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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="alertas.css">
</head>
<body>
 <div id="alerta" class="alerta"></div>
    <form method="POST">
  <h2>Recuperar contraseña</h2>
  <input type="email" name="correo" placeholder="Tu correo" required>
  <button type="submit" name="enviar">Enviar enlace</button>
</form>
<script src="alertas.js"></script>
</body>
</html>