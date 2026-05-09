<?php include("conexion.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registro</title>
</head>
<body>

<div id="alerta" class="alerta"></div>

    <form method="POST">
  <input type="text" name="nombre" placeholder="Nombre" required>
  <input type="email" name="correo" placeholder="Correo" required>
  <input type="password" name="password" placeholder="Contraseña" required>
  <button type="submit">Registrarse</button>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $nombre = $_POST["nombre"];
  $correo = $_POST["correo"];
  $password = $_POST["password"];

  $passwordHash = password_hash($password, PASSWORD_DEFAULT);

  $sql = "INSERT INTO usuarios (nombre, correo, password)
          VALUES ('$nombre', '$correo', '$passwordHash')";

  if (mysqli_query($conn, $sql)) {
    echo "<p>Usuario registrado correctamente</p>";
  } else {
    echo "<p>Error al registrar</p>";
  }
}
?>
<script src="alertas.js"></script>
</body>
</html>
</body>
</html>