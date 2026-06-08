<?php include("conexion.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Refugiate</title>
     <link rel="stylesheet" href="css/refugios.css">
     <link rel="stylesheet" href="css/navbar.css">
     <link rel="stylesheet" href="css/footer.css">
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
    <header><?php include("navbar.php"); ?></header>
    <!--comienzo refugios-->
    <main class="main-wrapper">
        <header class="header">
            <div class="title-text">
                <h1>¿Buscas dónde <span>refugiarte?</span></h1>
                <p>Conoce los refugios más cercanos a tu ubicación.</p>
            </div>
            <button class="btn-filter" onclick="toggleModal()">FILTRAR REFUGIOS</button>
        </header>

        <section class="shelter-section">
            <div class="wave-bg">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#5e7d9a" d="M0,192 C360,120 1080,120 1440,192 L1440,320 L0,320 Z"></path>
                </svg>
            </div>
            <div class="cards-grid">
                <div class="card">
                    <div class="image-box" style="background-image: url('img/SanSalvador/CentroComunitarioMonseñorRomero.jpeg');"></div>
                    <div class="card-caption"><h3>Albergue Misericordia</h3></div>
                </div>
                <div class="card">
                    <div class="image-box" style="background-image: url('img/SantaAna/CasaComunalSAPajonal.jpg');"></div>
                    <div class="card-caption"><h3>Albergue Divina Misericordia</h3></div>
                </div>
                <div class="card">
                    <div class="image-box" style="background-image: url('img/LaUnion/CentroDeDesarrolloMeanguer.JPG');"></div>
                    <div class="card-caption"><h3>Albergue Katia Miranda</h3></div>
                </div>
            </div>
        </section>
    </main>
 <!--filtrar refugios-->
    <div id="locationModal" class="modal-overlay">
        <div class="modal-content">
            <span class="close-btn" onclick="toggleModal()">&times;</span>
            <div id="view-departments">
                <h2>¿Dónde te encuentras?</h2>

                <div class="locations-grid">
                    <ul class="location-column">
                        <li onclick="showShelters('ahuachapan')" class="li-selectable">Ahuachapán</li>
                        <li onclick="showShelters('cabanas')" class="li-selectable">Cabañas</li>
                        <li onclick="showShelters('chalatenango')" class="li-selectable">Chalatenango</li>
                        <li onclick="showShelters('cuscatlan')" class="li-selectable">Cuscatlán</li>
                        <li onclick="showShelters('lalibertad')" class="li-selectable">La Libertad</li>
                        <li onclick="showShelters('lapaz')" class="li-selectable">La Paz</li>
                        <li onclick="showShelters('launion')" class="li-selectable">La Unión</li>
                    </ul>
                    <ul class="location-column">
                        <li onclick="showShelters('morazan')" class="li-selectable">Morazán</li>
                        <li onclick="showShelters('sanmiguel')" class="li-selectable">San Miguel</li>
                        <li onclick="showShelters('sansalvador')" class="li-selectable">San Salvador</li>
                        <li onclick="showShelters('sanvicente')" class="li-selectable">San Vicente</li>
                        <li onclick="showShelters('santaana')" class="li-selectable">Santa Ana</li>
                        <li onclick="showShelters('sonsonate')" class="li-selectable">Sonsonate</li>
                        <li onclick="showShelters('usulutan')" class="li-selectable">Usulután</li>
                    </ul>
                </div>
            </div>

            <div id="view-shelters" style="display: none;">
                <div class="shelter-header-actions">
                    <button class="back-arrow" onclick="showDepartments()">➔</button>
                    <h2 id="dept-title"></h2>
                </div>
                <div class="shelters-scroll-container" id="shelters-list"></div>
            </div>
        </div>
    </div>
    <script src="refugios.js"></script>
    <?php include("footer.php"); ?>
</body>
</html>