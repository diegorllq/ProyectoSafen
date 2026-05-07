<?php
include("conexion.php");
session_start();

if (!isset($_SESSION["usuario"])) {
    header("Location: login.php");
    exit();
}

$nombre = $_SESSION["usuario"];

$sql = "SELECT * FROM usuarios WHERE nombre='$nombre'";
$resultado = mysqli_query($conn, $sql);

$usuario = mysqli_fetch_assoc($resultado);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil</title>
    <link rel="stylesheet" href="css/perfil.css">
</head>
<body>
    <div class="perfil-container">
     <div class="left">
        <img src="https://ui-avatars.com/api/?name=<?php echo $usuario['nombre']; ?>&background=15173d&color=fff" class="foto">
     <H2>
        <?php echo $usuario["nombre"]; ?>
     </H2>
     <p>
         <?php echo $usuario["correo"]; ?>
     </p>

    </div>
    <div class="right">
<h1>Ajustes</h1>

<form method="POST">
    <label>Nombre</label>
<input type="text"
name="nombre"
value="<?php echo $usuario["correo"]; ?>">

<label>Email</label>

<input type="email"
name="correo"
value="<?php echo $usuario["correo"]; ?>">

<label>Teléfono</label>

<input type="text"
name="telefono"
value="<?php echo $usuario["telefono"]; ?>">

<button type="submit" name="guardar"> 
    Guardar cambios
</button>
</form>

<a href="logout.php">
            <button class="logout">
                Cerrar sesión
            </button>
        </a>


   </div>
   

</div>
</html>