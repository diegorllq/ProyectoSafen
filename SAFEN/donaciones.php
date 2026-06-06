<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donaciones</title>
    <link rel="stylesheet" href="/SAFEN/css/donaciones.css">
    <link rel="stylesheet" href="/SAFEN/css/navbar.css">
    <link rel="stylesheet" href="/SAFEN/css/footer.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Satisfy&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Satisfy&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <?php include("navbar.php"); ?>
<div class="hero">
  <img src="/SAFEN/img/img-donaciones.png" alt="imagen">

<div class="hero-text">

<!-- Texto sobre la imagen -->
<h1>Conectamos ayuda con quienes
  <span>más lo necesitan</span>
</h1>


</div>
  <!-- Curvas más altas pero rectas -->
  <svg class="waves" viewBox="0 0 1440 180" preserveAspectRatio="none">
    <path fill="#ffffff" d="
      M0,90
      C120,170 240,10 360,90
      C480,170 600,10 720,90
      C840,170 960,10 1080,90
      C1200,170 1320,10 1440,90
      L1440,180
      L0,180
      Z">
    </path>
  </svg>
</div>

</header>

    <section class="donacion-info">

<div class="donacion-left">
<h2>¡TÚ DONACIÓN NOS AYUDA A SEGUIR!</h2>
<a href="donar.php" class="btn-donar">
 ¡DONA AHORA!
</a>
</div>

<div class="donacion-right">

<h3 class="titulo">Juntos podemos hacer la diferencia</h3>

<div class="imagenes">
  <img src="/SAFEN/img/image1.png" alt="">
  <img src="/SAFEN/img/image2.png" alt="">
  <img src="/SAFEN/img/image3.png" alt="">
</div>

<p>Tu ayuda puede devolver esperanza a quienes lo perdieron todo.</p>
</div>

    </section>
    <?php include("footer.php"); ?>
</body>
</html>