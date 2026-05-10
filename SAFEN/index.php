<?php include("conexion.php"); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SAFEN</title>
    <link rel="stylesheet" href="/SAFEN/css/style.css">
    <link rel="stylesheet" href="/SAFEN/css/navbar.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
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
  <img src="/SAFEN/img/image (1).png" alt="imagen">

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

<!--bienvenida-->
<div class="bienvenida">
  <div class="info">
    
    <div class="left">
      <h1>
        Bienvenido <br>

        <span class="line">
          a <span class="safen">Safen</span>
          <button>¡Conectamos ayuda con quienes más lo necesitan!</button>
        </span>

      </h1>
    </div>

    <div class="right">
      <p>
        Safen es una plataforma confiable que organiza y coordina ayuda para
        comunidades afectadas por desastres naturales, conectando a las personas
        con profesionales especializados para agilizar la respuesta.
      </p>
   <p class="login">
  <a href="login.php">Crea una cuenta o inicia sesión</a>
</p>
    </div>

  </div>
</div>
<section class="about">
  <h2>Más sobre <span>nosotros</span></h2>
</section>

<div class="cards">

  <div class="card">
    <img src="/SAFEN/img/img-mision.jpg" alt="Misión">
    <h3>Misión</h3>
    <p>
      Conectar a las personas afectadas por desastres naturales en El Salvador con profesionales y voluntarios comprometidos con ayudar, activando una respuesta ágil, organizada y efectiva que genere un impacto real en momentos de emergencia.
    </p>
  </div>

  <div class="card">
    <img src="/SAFEN/img/img-vision.png" alt="Visión">
    <h3>Visión</h3>
    <p>
      Ser la plataforma líder en gestión de emergencias en El Salvador, construyendo un país más preparado, seguro y unido, donde comunidades e instituciones tengan acceso a soluciones tecnológicas, innovadoras, accesibles y confiables que permitan actuar con rapidez y proteger vidas en los momentos más críticos.
    </p>
  </div>

  <div class="card">
    <img src="/SAFEN/img/image-propo.png" alt="Propósito">
    <h3>Propósito</h3>
    <p>
      Mejorar la respuesta ante desastres naturales en El Salvador, conectando a las personas afectadas con quienes pueden ayudarlas en el momento en que más lo necesitan. SAFEN nace para proteger vidas, reducir la incertidumbre y acompañar a las comunidades en situaciones críticas.
    </p>
  </div>

</div>

</body>

</html>