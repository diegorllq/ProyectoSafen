document.addEventListener("DOMContentLoaded", () => {

    //  BOTÓN CAMBIAR CONTRASEÑA
    const btnPass = document.getElementById("btn-password");
    const cajaPass = document.getElementById("cambiar-pass");

    btnPass.addEventListener("click", () => {
        if (cajaPass.style.display === "none") {
            cajaPass.style.display = "block";
            btnPass.textContent = "Cancelar cambio";
        } else {
            cajaPass.style.display = "none";
            btnPass.textContent = "Cambiar contraseña";
        }
    });

    //  DETECTAR CAMBIOS
    let cambios = false;

    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            cambios = true;
        });
    });

    // BOTÓN VOLVER
    const btnVolver = document.getElementById("btn-volver");

    btnVolver.addEventListener("click", () => {

        if (cambios) {
            const confirmar = confirm("¿Deseas salir sin guardar los cambios?");

            if (confirmar) {
                window.location.href = "index.php";
            }
        } else {
            window.location.href = "index.php";
        }

    });

});
