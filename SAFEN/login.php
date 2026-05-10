<?php 
include("conexion.php");
session_start();

$mensaje = "";
$tipo = "";

// REGISTRO
if (isset($_POST["registro"])) {

  $nombre = $_POST["nombre"];
  $correo = $_POST["correo_reg"];
  $password = $_POST["password_reg"];

  // Verificar si el correo ya existe
  $stmt = $conn->prepare("SELECT id FROM usuarios WHERE correo=?");
  $stmt->bind_param("s", $correo);
  $stmt->execute();
  $resultado = $stmt->get_result();

  if ($resultado->num_rows > 0) {

    $mensaje = "Este correo ya está registrado";
    $tipo = "error";

  } else {

    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO usuarios (nombre, correo, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $nombre, $correo, $passwordHash);

    if ($stmt->execute()) {

      $mensaje = "Cuenta creada correctamente";
      $tipo = "success";

    } else {
      $mensaje = "Error al registrar";
      $tipo = "error";
    }
  }
}


// LOGIN
if (isset($_POST["login"])) {

  $correo = $_POST["correo"];
  $password = $_POST["password"];

  $stmt = $conn->prepare("SELECT * FROM usuarios WHERE correo=?");
  $stmt->bind_param("s", $correo);
  $stmt->execute();
  $resultado = $stmt->get_result();

  if ($resultado->num_rows == 1) {

    $usuario = $resultado->fetch_assoc();

    if (password_verify($password, $usuario["password"])) {

      $_SESSION["usuario"] = $usuario["nombre"];
      $_SESSION["id"] = $usuario["id"];

      header("Location: index.php");
      exit();

    } else {
      $mensaje = "Contraseña incorrecta";
      $tipo = "error";
    }

  } else {
    $mensaje = "Usuario no encontrado";
    $tipo = "error";
  }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login</title>

<link rel="stylesheet" href="/SAFEN/css/stylelog.css">
<link rel="stylesheet" href="/SAFEN/css/alertas.css">

</head>
<body>

<div id="alerta" class="alerta"></div>

<div class="container">

  <!-- LOGIN -->
  <div class="container-form">
    <form class="sign-in" method="POST">
      <h2>Iniciar sesión</h2>
      
      <div class="container-input">
        <label>Email</label>                  
        <input type="email" name="correo" required> 
      </div>

      <div class="container-input">
        <label>Contraseña</label>                  
        <input type="password" name="password" required> 
      </div>

      <a href="forgot.php">¿Olvidaste tu contraseña?</a>
      <button class="buttom" name="login">Iniciar sesión</button>
    </form>
  </div>

  <!-- REGISTRO -->
  <div class="container-form">
    <form class="sign-up" method="POST">
      <h2>Crear cuenta</h2>

      <div class="container-input">
        <label>Nombre</label>                  
        <input type="text" name="nombre" required> 
      </div>

      <div class="container-input">
        <label>Email</label>                  
        <input type="email" name="correo_reg" required> 
      </div>

      <div class="container-input">
        <label>Contraseña</label>                  
        <input type="password" name="password_reg" required> 
      </div>

      <button class="buttom" name="registro">Crear cuenta</button>
    </form>
  </div>

  <!-- PANEL -->
  <div class="container-welcome">
    <div class="welcome-sign-up welcome">
      <h3>Bienvenido</h3>
      <button class="buttom" id="btn-sign-up">Crear cuenta</button>
    </div>

    <div class="welcome-sign-in welcome">
      <h3>¡Qué gusto verte de nuevo!</h3>
      <button class="buttom" id="btn-sign-in">Iniciar sesión</button>
    </div>
  </div>

</div>

<script src="/SAFEN/script.js"></script>
<script src="/SAFEN/alert.js"></script>

<!-- ALERTAS -->
<?php if ($mensaje != "") { ?>
<script>
mostrarAlerta(<?php echo json_encode($mensaje); ?>, "<?php echo $tipo; ?>");

<?php if ($tipo == "success") { ?>
setTimeout(() => {
  window.location.href = "login.php";
}, 2000);
<?php } ?>

</script>
<?php } ?>

</body>
</html>