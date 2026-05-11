<?php
include("conexion.php");

// VALIDAR TOKEN
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

$mensaje = "";
$tipo = "";

// CAMBIAR CONTRASEÑA
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $nueva = $_POST["nueva"];
  $confirmar = $_POST["confirmar"];

  if ($nueva !== $confirmar) {
    $mensaje = "Las contraseñas no coinciden";
    $tipo = "error";
  } else {

    $hash = password_hash($nueva, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("UPDATE usuarios SET password=?, reset_token=NULL, token_expira=NULL WHERE id=?");
    $stmt->bind_param("si", $hash, $usuario["id"]);
    $stmt->execute();

    $mensaje = "Contraseña actualizada correctamente";
    $tipo = "success";
  }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nueva contraseña</title>

<link rel="stylesheet" href="css/alertas.css">
<link rel="stylesheet" href="css/reset.css">

</head>
<body>

<div id="alerta" class="alerta"></div>
<a href="forgot.php" class="back-btn">
  ←
</a>

<main class="reset-container">



  <div class="reset-header">
    <h2>Cambiar contraseña</h2>
    <span class="close" onclick="window.location.href='login.php'">✖</span>
  </div>

  <p>
    Tu contraseña debe tener al menos 6 caracteres e incluir una combinación
    de números, letras y caracteres especiales.
  </p>

  <form method="POST">
    <input type="password" name="nueva" placeholder="Nueva contraseña" required>
    <input type="password" name="confirmar" placeholder="Vuelve a escribir la nueva contraseña" required>
    <button type="submit">Cambiar contraseña</button>
  </form>

</main>

<script src="alert.js"></script>

<!-- MOSTRAR ALERTA -->
<?php if (isset($mensaje) && $mensaje != "") { ?>
<script>
mostrarAlerta(<?php echo json_encode($mensaje); ?>, "<?php echo $tipo; ?>");

<?php if ($tipo == "success") { ?>
setTimeout(() => {
    window.location.href = "login.php";
}, 2000);
<?php } ?>
</script>
<?php } ?>