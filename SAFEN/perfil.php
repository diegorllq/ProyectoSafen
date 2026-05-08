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

if (isset($_POST["guardar"])) {

    $nuevoNombre = $_POST["nombre"];
    $nuevoCorreo = $_POST["correo"];
    $telefono = $_POST["telefono"];

    $fotoNombre = $_FILES["foto"]["name"];
    $rutaTemporal = $_FILES["foto"]["tmp_name"];

    // Si subió imagen
    if (!empty($fotoNombre)) {

        // nombre único
        $fotoFinal = time() . "_" . $fotoNombre;

        move_uploaded_file($rutaTemporal, "img/" . $fotoFinal);

        $sql = "UPDATE usuarios 
                SET nombre='$nuevoNombre', correo='$nuevoCorreo', telefono='$telefono', foto='$fotoFinal'
                WHERE nombre='$nombre'";
    } else {

        $sql = "UPDATE usuarios 
                SET nombre='$nuevoNombre', correo='$nuevoCorreo', telefono='$telefono'
                WHERE nombre='$nombre'";
    }

    if (mysqli_query($conn, $sql)) {

        $_SESSION["usuario"] = $nuevoNombre;

        header("Location: perfil.php");
        exit();

    } else {
        echo "<script>alert('Error al actualizar');</script>";
    }
}
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
   
<button id="btn-volver" class="btn-back">
    &#8592;
</button>
<div class="perfil-container">
     <div class="left">
        <?php if ($usuario["foto"]) { ?>
    <img src="img/<?php echo $usuario["foto"]; ?>" class="foto">
<?php } else { ?>
    <img src="https://ui-avatars.com/api/?name=<?php echo urlencode($usuario['nombre']); ?>&background=15173d&color=fff" class="foto">
<?php } ?>
     <H2>
        <?php echo $usuario["nombre"]; ?>
     </H2>
     <p>
         <?php echo $usuario["correo"]; ?>
     </p>

    </div>
    <div class="right">
<h1>Ajustes</h1>

<form method="POST" enctype="multipart/form-data">
    <label>Nombre</label>
<input type="text"
name="nombre"
value="<?php echo $usuario["nombre"]; ?>">

<label>Email</label>

<input type="email"
name="correo"
value="<?php echo $usuario["correo"]; ?>">

<label>Teléfono</label>

<input type="text"
name="telefono"
value="<?php echo $usuario["telefono"]; ?>">


<label>Foto de perfil</label>
<input type="file"
name="foto">

<div class="btns">
    <button type="submit" name="guardar" class="btn-guardar">
        Guardar cambios
    </button>

    <a href="logout.php">
        <button type="button" class="btn-logout">
            Cerrar sesión
        </button>
    </a>
</div>

   </div>
   

</div>
<script src="contrasena.js"></script>
</body>
</html>