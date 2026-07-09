/* =====================================================
                    ELEMENTOS
===================================================== */

const sobre = document.getElementById("sobre");

const carta = document.getElementById("carta");

const contenido = document.getElementById("contenido");

const btnSi = document.getElementById("btnSi");

const btnNo = document.getElementById("btnNo");

const modal = document.getElementById("modal");

const tituloModal = document.getElementById("tituloModal");

const textoModal = document.getElementById("textoModal");

const cerrarModal = document.getElementById("cerrarModal");


/* =====================================================
                    ESTADOS
===================================================== */

let sobreAbierto = false;

let cartaExpandida = false;


/* =====================================================
                INICIAR
===================================================== */

window.addEventListener("load", () => {

    document.body.animate(

        [

            { opacity: 0 },

            { opacity: 1 }

        ],

        {

            duration: 1000,

            fill: "forwards"

        }

    );

});


/* =====================================================
                CLICK SOBRE
===================================================== */

sobre.addEventListener("click", abrirSobre);


function abrirSobre(){

    if(sobreAbierto) return;

    sobreAbierto = true;

    /*
        Abrimos la solapa
    */

    sobre.classList.add("abierto");

    /*
        Esperamos un poco
    */

    setTimeout(() => {

        sacarCarta();

    }, 800);

}


/* =====================================================
                SACAR CARTA
===================================================== */

function sacarCarta(){

    /*
        La carta aparece
        desde el sobre
    */

    carta.classList.add("saliendo");

    /*
        Esperamos a que
        termine la salida
    */

    setTimeout(() => {

        expandirCarta();

    }, 1500);

}

/* =====================================================
                EXPANDIR CARTA
===================================================== */

function expandirCarta(){

    if(cartaExpandida) return;

    cartaExpandida = true;

    /*
        El sobre desaparece
    */

    sobre.classList.add("desaparecer");

    /*
        Quitamos la animación
        de salida
    */

    carta.classList.remove("saliendo");

    /*
        Expandimos la carta
    */

    carta.classList.add("expandida");

    /*
        Esperamos la transición
    */

    setTimeout(()=>{

        mostrarContenido();

    },900);

}


/* =====================================================
                MOSTRAR CONTENIDO
===================================================== */

function mostrarContenido(){

    carta.style.pointerEvents = "auto";

    /*
        Hacemos aparecer
        el contenido
    */

    contenido.style.opacity = "1";

    contenido.style.transform = "translateY(0)";

    /*
        Centramos la carta
    */

    setTimeout(()=>{

        carta.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });

    },300);

}


/* =====================================================
                EFECTO HOVER
===================================================== */

carta.addEventListener("mouseenter",()=>{

    if(!cartaExpandida) return;

    carta.style.transform =

        "translate(-50%,-50%) scale(1.01)";

});


carta.addEventListener("mouseleave",()=>{

    if(!cartaExpandida) return;

    carta.style.transform =

        "translate(-50%,-50%) scale(1)";

});


/* =====================================================
                BLOQUEAR ARRASTRE
===================================================== */

sobre.addEventListener("dragstart",(e)=>{

    e.preventDefault();

});

carta.addEventListener("dragstart",(e)=>{

    e.preventDefault();

});

/* =====================================================
                EFECTO CLICK
===================================================== */

function efectoClick(boton){

    boton.classList.add("boton-click");

    setTimeout(()=>{

        boton.classList.remove("boton-click");

    },450);

}


/* =====================================================
                DESTELLO
===================================================== */

function crearDestello(boton){

    const rect = boton.getBoundingClientRect();

    const destello = document.createElement("div");

    destello.className = "destello";

    destello.style.left =
        (rect.left + rect.width / 2) + "px";

    destello.style.top =
        (rect.top + rect.height / 2) + "px";

    document.body.appendChild(destello);

    setTimeout(()=>{

        destello.remove();

    },700);

}


/* =====================================================
                BOTÓN SI
===================================================== */

btnSi.addEventListener("click",()=>{

    efectoClick(btnSi);

    lluviaCorazones();

    crearDestello(btnSi);

    setTimeout(()=>{

        tituloModal.innerHTML="💖";

        textoModal.innerHTML=`

        Gracias por aceptar.

        <br><br>

        Me haces realmente feliz.

        <br><br>

        Prometo cuidar de ti,
        hacerte sonreír,
        acompañarte en tus días buenos
        y también en los difíciles.

        <br><br>

        Te amo muchísimo Camila ❤️

        `;

        modal.classList.add("mostrar");

    },250);

});


/* =====================================================
                BOTÓN NO
===================================================== */

btnNo.addEventListener("click",()=>{

    efectoClick(btnNo);

    crearDestello(btnNo);

    setTimeout(()=>{

        tituloModal.innerHTML="🤍";

        textoModal.innerHTML=`

        Gracias por llegar
        hasta el final.

        <br><br>

        Escribi estas cartas con todo mi corazón.

        <br><br>

        Gracias por leerlas.
        Pase lo que pase, te seguire amando.

        `;

        modal.classList.add("mostrar");

    },250);

});


/* =====================================================
                CERRAR MODAL
===================================================== */

cerrarModal.addEventListener("click",()=>{

    modal.classList.remove("mostrar");

});


/* =====================================================
            CERRAR HACIENDO CLICK AFUERA
===================================================== */

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("mostrar");

    }

});


/* =====================================================
                ESC PARA CERRAR
===================================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.classList.remove("mostrar");

    }

});


/* =====================================================
            PREVENIR DOBLE CLICK
===================================================== */

btnSi.addEventListener("mousedown",(e)=>{

    e.preventDefault();

});

btnNo.addEventListener("mousedown",(e)=>{

    e.preventDefault();

});


/* ======================================
        LLUVIA DE CORAZONES
====================================== */

function lluviaCorazones(){

    const emojis = [

        "💖",
        "💗",
        "💕",
        "💞",
        "💘",
        "🌸"

    ];

    for(let i=0;i<35;i++){

        setTimeout(()=>{

            const corazon =
            document.createElement("div");

            corazon.className="corazon";

            corazon.textContent=

            emojis[Math.floor(Math.random()*emojis.length)];

            corazon.style.left=

            Math.random()*100+"vw";

            corazon.style.fontSize=

            (18+Math.random()*20)+"px";

            corazon.style.animationDuration=

            (5+Math.random()*4)+"s";

            corazon.style.transform=

            `rotate(${Math.random()*360}deg)`;

            document.body.appendChild(corazon);

            setTimeout(()=>{

                corazon.remove();

            },9000);

        },i*120);

    }

}

/* =====================================================
                FINAL
===================================================== */

console.log("Carta cargada correctamente.");

