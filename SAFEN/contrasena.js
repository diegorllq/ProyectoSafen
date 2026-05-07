document.addEventListener("DOMContentLoaded", () => {

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

});