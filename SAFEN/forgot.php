<?php
include("conexion.php");

$link = null; // importante

if (isset($_POST["enviar"])) {

  $correo = $_POST["correo"];

  $token = bin2hex(random_bytes(32));
  $expira = date("Y-m-d H:i:s", strtotime("+1 hour"));

  $stmt = $conn->prepare("UPDATE usuarios SET reset_token=?, token_expira=? WHERE correo=?");
  $stmt->bind_param("sss", $token, $expira, $correo);

  if ($stmt->execute()) {

    //  link guardado
    $link = "http://localhost/SAFEN/reset.php?token=" . $token;

  }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recuperar contraseña</title>
    <link rel="stylesheet" href="/SAFEN/css/alertas.css">
   <link rel="stylesheet" href="/SAFEN/css/forgot.css">
</head>
<body>
 <div id="alerta" class="alerta"></div>

  <a href="login.php"  class="back-btn">
    ←
</a>
    <main class="forgot-container">

      
  

<h2>Recuperar contraseña</h2>
<p>Para recuperar tu contraseña, ingresa tu correo electrónico para enviarte un enlace de recuperación</p>

 <form method="POST">
  
  
  <input type="email" name="correo" placeholder="Tu correo" required>

  <button type="submit" name="enviar">Enviar enlace</button>
</form>

<!-- aqui se muestra, solo el boton -->
  <?php if ($link) { ?>
    <div class="link-box">
      <p>Tu enlace de recuperación está listo:</p>

      <div class="link">
        <a href="<?php echo $link; ?>" target="_blank">
          Ir a cambiar contraseña
        </a>
      </div>
    </div>
  <?php } ?>


</main>

<script src="/SAFEN/alert.js"></script>
</body>
</html>