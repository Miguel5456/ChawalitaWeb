/* ======================================
            ELEMENTOS
====================================== */

const rainAudio = document.getElementById("rainAudio");

const thunderSounds = [

    document.getElementById("thunder1"),
    document.getElementById("thunder2"),
    document.getElementById("thunder3")

];

const lightningOverlay =
document.getElementById("lightning");


/* ======================================
        INICIAR AUDIO
====================================== */

window.addEventListener("click", iniciarAudio, { once: true });

function iniciarAudio(){

    if(!rainAudio) return;

    rainAudio.volume = 0.35;

    rainAudio.play().catch(err=>{

        console.log(err);

    });

}


/* ======================================
        FLASH
====================================== */

function flash(){

    if(!lightningOverlay) return;

    lightningOverlay.style.transition = "none";

    lightningOverlay.style.opacity = "0.95";

    setTimeout(()=>{

        lightningOverlay.style.opacity = "0";

    },80);

}


/* ======================================
        TRUENO
====================================== */

function reproducirTrueno(){

    const sonido =

    thunderSounds[
        Math.floor(
            Math.random()*thunderSounds.length
        )
    ];

    if(!sonido) return;

    sonido.currentTime = 0;

    sonido.volume = 0.55;

    sonido.play().catch(()=>{});

}


/* ======================================
        RELÁMPAGO
====================================== */

function relampago(){

    flash();

    if(Math.random()>.45){

        setTimeout(flash,100);

    }

    if(Math.random()>.75){

        setTimeout(flash,180);

    }

    setTimeout(()=>{

        reproducirTrueno();

    },300+Math.random()*700);

}


/* ======================================
        TORMENTA
====================================== */

function iniciarTormenta(){

    siguienteRelampago();

}


function siguienteRelampago(){

    const espera =

        3500 +

        Math.random()*9000;

    setTimeout(()=>{

        relampago();

        siguienteRelampago();

    },espera);

}


/* ======================================
        INICIAR
====================================== */

iniciarTormenta();