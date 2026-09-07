const frase = "Se que todas las historias tienen un final, pero no quiero encontrar el nuestro, me gustaria alargarlo un poquito más... y luego un poquito más... y más... y más y más. <3";

const texto = document.getElementById("texto");

let indice = 0;
let iniciada = false;

function escribir(){

    if(indice < frase.length){

        texto.innerHTML += frase.charAt(indice);

        indice++;

        setTimeout(escribir,50);

    }

}

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting && !iniciada){

            iniciada = true;

            escribir();

        }

    });

});

const fraseFinal = document.querySelector(".frase-final");

if(fraseFinal){

    observador.observe(fraseFinal);

}

/* ===========================
    CONTADOR DE NOVIOS 💜
=========================== */

const fechaNoviazgo = new Date(
    "2026-07-07T23:43:00-05:00"
);


/* ===========================
    ACTUALIZAR CONTADOR
=========================== */

function actualizarContador(){

    const ahora = new Date();

    let diferencia =
        ahora.getTime() -
        fechaNoviazgo.getTime();


    /*
        Si todavía no ha llegado
        la fecha del noviazgo
    */

    if(diferencia < 0){

        diferencia = 0;

    }


    /* ===========================
        MESES
    =========================== */

    let meses =
        (ahora.getFullYear() -
        fechaNoviazgo.getFullYear()) * 12;

    meses +=
        ahora.getMonth() -
        fechaNoviazgo.getMonth();


    let fechaTemporal =
        new Date(fechaNoviazgo);

    fechaTemporal.setMonth(
        fechaNoviazgo.getMonth() + meses
    );


    /*
        Si todavía no hemos llegado
        al mismo día y hora del mes,
        quitamos un mes.
    */

    if(ahora < fechaTemporal){

        meses--;

        fechaTemporal =
            new Date(fechaNoviazgo);

        fechaTemporal.setMonth(
            fechaNoviazgo.getMonth() + meses
        );

    }


    /* ===========================
        TIEMPO RESTANTE
    =========================== */

    let restante =
        ahora.getTime() -
        fechaTemporal.getTime();


    const dia =
        1000 * 60 * 60 * 24;

    const hora =
        1000 * 60 * 60;

    const minuto =
        1000 * 60;

    const segundo =
        1000;


    /* ===========================
        DÍAS
    =========================== */

    const dias =
        Math.floor(restante / dia);

    restante %= dia;


    /* ===========================
        HORAS
    =========================== */

    const horas =
        Math.floor(restante / hora);

    restante %= hora;


    /* ===========================
        MINUTOS
    =========================== */

    const minutos =
        Math.floor(restante / minuto);

    restante %= minuto;


    /* ===========================
        SEGUNDOS
    =========================== */

    const segundos =
        Math.floor(restante / segundo);


    /* ===========================
        MOSTRAR RESULTADOS
    =========================== */

    document.getElementById("meses").textContent =
        meses;

    document.getElementById("dias").textContent =
        dias;

    document.getElementById("horas").textContent =
        horas;

    document.getElementById("minutos").textContent =
        minutos;

    document.getElementById("segundos").textContent =
        segundos;

}


/* ===========================
    INICIAR
=========================== */

actualizarContador();


/*
    Actualizar cada segundo
*/

setInterval(

    actualizarContador,

    1000

);

/* ===========================
   SECRETO DEL CONTADOR 💜
=========================== */

const botonSecreto =
    document.getElementById("boton-secreto");

const modalSecreto =
    document.getElementById("modal-secreto");

const cerrarSecreto =
    document.getElementById("cerrar-secreto");

const inputPassword =
    document.getElementById("input-password");

const btnPassword =
    document.getElementById("btn-password");

const errorPassword =
    document.getElementById("error-password");


/* ===========================
   ABRIR
=========================== */

botonSecreto.addEventListener(
    "click",
    () => {

        modalSecreto.classList.remove("oculto");

        inputPassword.value = "";

        errorPassword.textContent = "";

        setTimeout(() => {

            inputPassword.focus();

        }, 100);

    }
);


/* ===========================
   CERRAR
=========================== */

cerrarSecreto.addEventListener(
    "click",
    () => {

        modalSecreto.classList.add("oculto");

    }
);


/* ===========================
   COMPROBAR
=========================== */

function comprobarPassword(){

    const password =
        inputPassword.value.trim();

    if(password === "0707"){

        window.location.href =
            "Mes2.html";

    }

    else{

        errorPassword.textContent =
            "Contraseña incorrecta. Inténtalo de nuevo. 💜";

        inputPassword.value = "";

        inputPassword.focus();

    }

}


/* ===========================
   BOTÓN
=========================== */

btnPassword.addEventListener(
    "click",
    comprobarPassword
);


/* ===========================
   ENTER
=========================== */

inputPassword.addEventListener(
    "keydown",
    (event) => {

        if(event.key === "Enter"){

            comprobarPassword();

        }

    }
);