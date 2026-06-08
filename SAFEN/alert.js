function mostrarAlerta(mensaje, tipo = "info") {

    const alerta = document.getElementById("alerta");

    if (!alerta) return;

    alerta.textContent = mensaje;
    alerta.className = "alerta " + tipo;

    // mostrar con animación
    setTimeout(() => {
        alerta.classList.add("show");
    }, 50);

    // ocultar
    setTimeout(() => {
        alerta.classList.remove("show");
    }, 3000);
}