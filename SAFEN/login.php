<?php 
include("conexion.php");
session_start();

// 🔐 REGISTRO
if (isset($_POST["registro"])) {

  $nombre = $_POST["nombre"];
  $correo = $_POST["correo_reg"];
  $password = $_POST["password_reg"];

  $passwordHash = password_hash($password, PASSWORD_DEFAULT);

  $sql = "INSERT INTO usuarios (nombre, correo, password)
          VALUES ('$nombre', '$correo', '$passwordHash')";

  if (mysqli_query($conn, $sql)) {
    header("Location: login.php"); // recarga limpia
    exit();
  } else {
    $error = "Error al registrar";
  }
}

// 🔐 LOGIN
if (isset($_POST["login"])) {

  $correo = $_POST["correo"];
  $password = $_POST["password"];

  $sql = "SELECT * FROM usuarios WHERE correo='$correo'";
  $resultado = mysqli_query($conn, $sql);

  if (mysqli_num_rows($resultado) == 1) {

    $usuario = mysqli_fetch_assoc($resultado);

    if (password_verify($password, $usuario["password"])) {

      $_SESSION["usuario"] = $usuario["nombre"];
      header("Location: index.php");
      exit();

    } else {
      $error = "Contraseña incorrecta";
    }

  } else {
    $error = "Usuario no encontrado";
  }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/stylelog.css">
</head>
<body>

<div class="container">

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

      <a href="#">Forgot password</a>
      <button class="buttom" name="login">Iniciar sesión</button>
    </form>
  </div>

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

<!-- 🔴 Mostrar error si existe -->
<?php if (isset($error)) { ?>
  <script>alert("<?php echo $error; ?>");</script>
<?php } ?>

<script src="script.js"></script>

</body>
</html>