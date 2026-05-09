function mostrarAlerta(mensaje, tipo = "info") {

    const alerta = document.getElementById("alerta");

    if (!alerta) return;

    alerta.textContent = mensaje;
    alerta.className = "alerta " + tipo;
    alerta.style.display = "block";

    setTimeout(() => {
        alerta.style.display = "none";
    }, 3000);
}