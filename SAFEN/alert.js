
function mostrarAlerta(mensaje, tipo = "info") {

    const alerta = document.getElementById("alerta");

    if (!alerta) return;

    alerta.textContent = mensaje;
    alerta.className = "alerta " + tipo;

    setTimeout(() => {
        alerta.classList.add("show");
    }, 50);

    setTimeout(() => {
        alerta.classList.remove("show");
    }, 3000);
}

function mostrarAlertaConfirmacion(mensaje, callbackAceptar) {

    const alerta = document.getElementById("alerta");

    if (!alerta) return;

    alerta.innerHTML = `
        <p>${mensaje}</p>
        <div style="margin-top:10px;">
            <button id="btn-ok">Aceptar</button>
            <button id="btn-cancel">Cancelar</button>
        </div>
    `;

    alerta.className = "alerta show";

    document.getElementById("btn-ok").onclick = () => {
        alerta.classList.remove("show");
        callbackAceptar();
    };

    document.getElementById("btn-cancel").onclick = () => {
        alerta.classList.remove("show");
    };
}


//  html cargado
document.addEventListener("DOMContentLoaded", () => {

    let cambiosSinGuardar = false;

    // detectar cambios
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", () => {
            cambiosSinGuardar = true;
        });
    });

    // botón volver 
    const btnVolver = document.getElementById("btn-volver");

    if (btnVolver) {
        btnVolver.addEventListener("click", function () {

            if (cambiosSinGuardar) {

                mostrarAlertaConfirmacion(
                    "Tienes cambios sin guardar ¿Salir igual?",
                    () => {
                        window.location.href = "index.php";
                    }
                );

            } else {
                window.location.href = "index.php";
            }

        });
    }

});