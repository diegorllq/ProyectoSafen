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

    $actual = $_POST["actual"];
    $nueva = $_POST["nueva"];
    $confirmar = $_POST["confirmar"];

    $fotoNombre = $_FILES["foto"]["name"];
    $rutaTemporal = $_FILES["foto"]["tmp_name"];

    $updatePassword = "";


    if (!empty($actual) || !empty($nueva) || !empty($confirmar)) {

        if (!password_verify($actual, $usuario["password"])) {
            echo "<script>alert('Contraseña actual incorrecta');</script>";
        } else if ($nueva !== $confirmar) {
            echo "<script>alert('Las contraseñas no coinciden');</script>";
        } else {
            $passwordHash = password_hash($nueva, PASSWORD_DEFAULT);
            $updatePassword = ", password='$passwordHash'";
        }
    }

    
    $sql = "UPDATE usuarios 
            SET nombre='$nuevoNombre',
                correo='$nuevoCorreo',
                telefono='$telefono'
                $updatePassword";

    
    if (!empty($fotoNombre)) {
        $fotoFinal = time() . "_" . $fotoNombre;
        move_uploaded_file($rutaTemporal, "img/" . $fotoFinal);

        $sql .= ", foto='$fotoFinal'";
    }

    $sql .= " WHERE nombre='$nombre'";

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
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Perfil</title>
<link rel="stylesheet" href="css/perfil.css">
</head>
<body>

<div class="perfil-container">

    
    <div class="left">

        <?php if ($usuario["foto"]) { ?>
            <img src="img/<?php echo $usuario["foto"]; ?>" class="foto">
        <?php } else { ?>
            <img src="https://ui-avatars.com/api/?name=<?php echo urlencode($usuario['nombre']); ?>&background=15173d&color=fff" class="foto">
        <?php } ?>

        <h2><?php echo $usuario["nombre"]; ?></h2>
        <p><?php echo $usuario["correo"]; ?></p>

    </div>

    
    <div class="right">

        <h1>Ajustes</h1>

        <form method="POST" enctype="multipart/form-data">

            <label>Nombre</label>
            <input type="text" name="nombre" value="<?php echo $usuario["nombre"]; ?>">

            <label>Email</label>
            <input type="email" name="correo" value="<?php echo $usuario["correo"]; ?>">

            <label>Teléfono</label>
            <input type="text" name="telefono" value="<?php echo $usuario["telefono"]; ?>">

            
            

            <label>Foto de perfil</label>
            <input type="file" name="foto">

            div id="cambiar-pass" style="display:none;">

                <label>Contraseña actual</label>
                <input type="password" name="actual">

                <label>Nueva contraseña</label>
                <input type="password" name="nueva">

                <label>Confirmar contraseña</label>
                <input type="password" name="confirmar">

            </div>
            <div class="btns">
                <button type="button" id="btn-password" class="btn-guardar">
                Cambiar contraseña
            </button>

            
                <button type="submit" name="guardar" class="btn-guardar">
                    Guardar cambios
                </button>

                <a href="logout.php">
                    <button type="button" class="btn-logout">
                        Cerrar sesión
                    </button>
                </a>
            </div>

        </form>

    </div>

</div>


<script src="cotrasena.js"></script>

</body>
</html>