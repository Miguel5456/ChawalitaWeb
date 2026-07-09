// ==========================
// ELEMENTOS
// ==========================

const darkness = document.getElementById("darkness");
const flame = document.getElementById("flame");

// ==========================
// MODOS
// ==========================

const MODOS = {
    VELA: 0,
    LUZ: 1,
    OSCURO: 2
};

let modo = MODOS.VELA;

// ==========================
// POSICIÓN DEL MOUSE
// ==========================

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// ==========================
// ACTUALIZAR LUZ
// ==========================
function actualizarVela() {

    // Movimiento aleatorio muy pequeño
    const offsetX = (Math.random() - 0.5) * 10;
    const offsetY = (Math.random() - 0.5) * 10;

    // Radio variable
    const radio = 170 + Math.random() * 35;

    darkness.style.background = `
        radial-gradient(
            circle ${radio}px at ${mouseX + offsetX}px ${mouseY + offsetY}px,

            rgba(255,230,170,.02),

            rgba(255,210,120,.10) 60px,

            rgba(0,0,0,.30) 110px,

            rgba(0,0,0,.82) 220px,

            rgba(0,0,0,.98) 420px
        )
    `;

}
// ==========================
// CAMBIAR MODO
// ==========================

function cambiarModo() {

    switch (modo) {

        // VELA -> LUZ
        case MODOS.VELA:

            modo = MODOS.LUZ;

            flame.style.opacity = "0";

            darkness.style.background = "rgba(0,0,0,.15)";

            break;

        // LUZ -> OSCURIDAD
        case MODOS.LUZ:

            modo = MODOS.OSCURO;

            flame.style.opacity = "0";

            darkness.style.background = "rgba(0,0,0,.98)";

            break;

        // OSCURIDAD -> VELA
        case MODOS.OSCURO:

            modo = MODOS.VELA;

            flame.style.opacity = "1";

            actualizarVela();

            break;

    }

}

// ==========================
// MOUSE
// ==========================

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    flame.style.left = mouseX + "px";
    flame.style.top = mouseY + "px";

    if (modo === MODOS.VELA) {

        actualizarVela();

    }

});

// ==========================
// DOBLE CLICK
// ==========================

document.addEventListener("dblclick", cambiarModo);

// ==========================
// TRANSICIONES
// ==========================

window.addEventListener("load", () => {

    darkness.style.transition = "background .8s ease";

    flame.style.transition = "opacity .5s ease";

});

// ==========================
// PARPADEO DE LA LUZ
// ==========================

setInterval(() => {

    if (modo === MODOS.VELA) {

        actualizarVela();

    }

}, 45);