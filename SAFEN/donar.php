<?php 
session_start();
include("conexion.php");

// Validar sesión
if (!isset($_SESSION["id"])) {
  header("Location: login.php");
  exit();
}

$mensaje = "";
$tipo = "";

//  Procesar donación
if (isset($_POST["donar"])) {

  $monto = floatval($_POST["monto"]);
  $metodo = $_POST["metodo"];
  $usuario_id = $_SESSION["id"];

  //  Validaciones
  if (empty($metodo)) {
    $mensaje = "Selecciona un método de pago";
    $tipo = "error";

  } elseif ($monto < 1) {
    $mensaje = "El monto mínimo es $1";
    $tipo = "error";

  } else {

    // Guardar en base de datos
    $stmt = $conn->prepare("INSERT INTO donaciones (usuario_id, monto, metodo_pago) VALUES (?, ?, ?)");
    $stmt->bind_param("ids", $usuario_id, $monto, $metodo);

 if ($stmt->execute()) {
  $mensaje = "¡Donación realizada con éxito!";
  $tipo = "success";

  $_POST = []; // limpia el formulario

} else {
  $mensaje = "Error al donar";
  $tipo = "error";
}

    $stmt->close();
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<link rel="stylesheet" href="/SAFEN/css/alertas.css">
<link rel="stylesheet" href="/SAFEN/css/donar.css">

</head>

<body>
    <div id="alerta" class="alerta"></div>
 

 <main class="donar-container">
    <!-- izquierda -->
     <section class="donar-left">

        <h1>¡Haz tu donación!</h1>
    <form method="POST">

    <label>Monto a donar</label>
<input type="number" name="monto" min="1" step="0.01"
placeholder="Ingrese un monto mayor o igual a $1.00" required>
<label>Método de pago</label>
<select name="metodo" required>
    <option value="">Seleccionar</option>
     <option value="tarjeta">Tarjeta</option>
      <option value="paypal">Paypal</option>
       <option value="efectivo">Efectivo</option>
</select>

<button type="submit" name="donar">DONAR</button>

    </form>

     </section>

     <section  class="donar-right">
<h2>
      Lo que para ti puede ser poco,<br>
      para alguien más puede significar<br>
      <span>volver a empezar</span>
    </h2>
     </section>

 </main>

 <script src="/SAFEN/alert.js"></script>

<?php if ($mensaje != "") { ?>
<script>
mostrarAlerta(<?php echo json_encode($mensaje); ?>, "<?php echo $tipo; ?>");
</script>
<?php } ?>
</body>
</html>