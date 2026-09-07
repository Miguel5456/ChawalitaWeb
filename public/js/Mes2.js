
/* =========================================
   ELEMENTOS
========================================= */

const inicio = document.getElementById("inicio");
const poema = document.getElementById("poema");
const escenaFinal = document.getElementById("final");

const textoPoema = document.getElementById("texto-poema");

const btnContinuar = document.getElementById("btn-continuar");

const oruga = document.getElementById("oruga");
const mariposa = document.getElementById("mariposa");
const corazon = document.getElementById("corazon");



/* =========================================
   POEMA
========================================= */

const poemaContenido = [

    {
        texto: `-Entonces... Soy un gusano?-`,
        clase: "frase-especial"
    },

    {
        texto: `Aun recuerdo la primera vez que lo dije.

Estaba enojado... y era una ofensa para mí.

Además...
me resultaba hiriente.`,
        clase: ""
    },

    {
        texto: `. . .`,
        clase: "frase-especial"
    },

    {
        texto: `En mi mente resonaban aquellas palabras...
una y otra vez.

Soy un gusano...
Soy un gusano...
Soy un gusano.

No eran solo esas palabras,
ni su significado lo que dolía.

Lo que realmente me importaba...
fue quien me las dijo.`,
        clase: ""
    },

    {
        texto: `Tú.

Con esa voz juguetona y sarcástica.
Con esa actitud inocente...
pero a la vez cruel.

Con esa mirada afilada
que parecía ver a través de mí.

Eras Tú...
siendo Tú.`,
        clase: ""
    },

    {
        texto: `Pensé en resignarme.
No lo voy a negar.

Después de todo...
¿cómo iba un gusano a estar contigo?...`,
        clase: ""
    },

    {
        texto: `Aunque pensé...

Gusanos hay de todo tipo.

Largos y pequeños...
calvos y peludos...

Blancos y coloridos...
inofensivos y venenosos...

Además, se pueden encontrar
en muchos lugares.

En la tierra...
en el pasto...
en las ramas...
en las hojas...

Hay muchos tipos de gusanos, sí.

Pero todos tienen algo en común...

dan asco.`,
        clase: ""
    },

    {
        texto: `Se arrastran...
y se arrastran...
buscando qué comer.

Pueden ser aplastados
en cualquier momento.

Y al morir...
solo dejan su viscoso interior
regado por todas partes.`,
        clase: ""
    },

    {
        texto: `Soy un gusano...

Nunca me vas a querer.

Solo a esa conclusión pude llegar.

Aunque parecía algo realista...
hoy considero que fui pesimista.`,
        clase: "gusano"
    },

    {
        texto: `Después de todo...

tú me enseñaste que...

ser un gusano no está mal.`,
        clase: "frase-especial"
    },

    {
        texto: `Conforme pasaba el tiempo,
me hiciste dar cuenta que no era
un simple gusano...

sino... algo más.

Gracias a que creíste en mí,
yo también pude hacerlo.

Me tuviste paciencia,
incluso cuando yo parecía
echarlo todo a perder.

Me comprendiste y descifraste
cuando mi mente era solo un caos.

Me acompañas en todo momento...
incluso cuando quiero ser pequeño
y desaparecer.

Cuando todo parece lastimar
y causar dolor...
ahí estás tú,
para brindarme cariño.

Un solo beso...
llena de amor mi interior.

Un solo abrazo...
me libra de toda soledad.

Una sola caricia...
basta para darme fuerzas.

Y una sola de tus sonrisas...
basta para alegrar cualquiera
de mis días.`,
        clase: ""
    },

    {
        texto: `Por eso hoy quiero agradecerte
por todo lo que haces por mí.

Sé que me brindas más
incluso de lo que tú misma
puedes notar.

Así que...

Gracias.`,
        clase: ""
    },

    {
        texto: `Por eso hoy quiero decirte
que te amo.

Porque donde nos faltan las palabras,
al no saber qué decir...

siempre estamos ahí,
el uno para el otro.

Quiero que mis sonrisas
alegren tus días.

Que mis caricias
te brinden fuerzas.

Que mis abrazos
te hagan sentir compañía.

Quiero que mis besos
te hagan sentir amada.

Y sobre todo...

quiero que seas Feliz.`,
        clase: ""
    },

    {
        texto: `Te amo.

Te amo.

Te amo.`,
        clase: "te-amo"
    },

    {
        texto: `Te amo tanto...

pues después de todo,
tú me enseñaste que
ser un gusano no estaba mal.

Pues me haces sentir especial.
Me haces sentir que no soy
un simple bicho.

Me haces sentir vivo...

y...
quizá no soy un gusano.`,
        clase: ""
    },

    {
        texto: `Hoy por hoy, soy optimista.

Quizá no estaba destinado
a arrastrarse.

Soy optimista porque sueño
con una vida a tu lado.

Soy optimista porque
me encanta estar contigo.

Soy Optimista porque aprendí
que ser un gusano no está mal...`,
        clase: ""
    },

    {
        texto: `Soy optimista porque
entre todos los gusanos...

puedo ser una Oruga.`,
        clase: "frase-especial"
    },

    {
        texto: `Una pequeña Oruga en el mundo...

donde afortunadamente,
a la chica que ama...

le encantan las mariposas...`,
        clase: "frase-especial"
    }

];



/* =========================================
   VARIABLES
========================================= */

let escenaActual = "inicio";

let indice = 0;

let poemaTerminado = false;

let finalIniciado = false;


/* =========================================
   CAMBIAR ESCENA
========================================= */

function cambiarEscena(nuevaEscena) {

    inicio.classList.remove("activa");
    poema.classList.remove("activa");
    escenaFinal.classList.remove("activa");

    nuevaEscena.classList.add("activa");

}


/* =========================================
   MOSTRAR SIGUIENTE PÁRRAFO
========================================= */

function mostrarSiguienteParte() {

    /*
        Si ya terminó el poema,
        no hacemos nada.
    */

    if (poemaTerminado) {
        return;
    }


    /*
        Tomamos el párrafo actual.
    */

    const parte = poemaContenido[indice];


    /*
        Creamos un <p>.
    */

    const nuevoParrafo = document.createElement("p");


    /*
        Aplicamos la clase especial
        correspondiente.
    */

    if (parte.clase) {

        nuevoParrafo.classList.add(parte.clase);

    }


    /*
        El texto aparece COMPLETO.
        No hay máquina de escribir.
    */

    nuevoParrafo.textContent = parte.texto;


    /*
        Lo agregamos al poema.
    */

    textoPoema.appendChild(nuevoParrafo);


    /*
        Pasamos al siguiente.
    */

    indice++;


    /*
        Si era el último párrafo,
        cambiamos el texto del botón.
    */

    if (indice >= poemaContenido.length) {

        poemaTerminado = true;

        btnContinuar.textContent = "Ver final";

    }


    /*
        Desplazamiento suave hacia
        el párrafo que acaba de aparecer.
    */

    setTimeout(() => {

        nuevoParrafo.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);

}


/* =========================================
   INICIAR POEMA
========================================= */

function iniciarPoema() {

    escenaActual = "poema";

    cambiarEscena(poema);

    btnContinuar.textContent = "Continuar";


    /*
        Esperamos a que la escena
        aparezca antes del primer párrafo.
    */

    setTimeout(() => {

        mostrarSiguienteParte();

    }, 1200);

}


/* =========================================
   INICIAR FINAL
========================================= */

function iniciarFinal() {

    if (finalIniciado) {
        return;
    }

    finalIniciado = true;

    escenaActual = "final";

    cambiarEscena(escenaFinal);

    /*
        Ocultamos el botón.
    */

    btnContinuar.classList.add("oculto");


    /* =====================================
       APARECE LA ORUGA
    ===================================== */

    setTimeout(() => {

        oruga.classList.add("mostrar");

    }, 1000);


    /* =====================================
       DESAPARECE LA ORUGA
    ===================================== */

    setTimeout(() => {

        oruga.classList.remove("mostrar");

        oruga.classList.add("transformar");

    }, 4000);


    /* =====================================
       APARECE LA MARIPOSA
    ===================================== */

    setTimeout(() => {

        mariposa.classList.add("volar");

    }, 5500);


    /* =====================================
       APARECE EL CORAZÓN
    ===================================== */

    setTimeout(() => {

        corazon.classList.add("mostrar");

    }, 10500);

}


/* =========================================
   BOTÓN CONTINUAR
========================================= */

btnContinuar.addEventListener("click", () => {


    /* =====================================
       INICIO → POEMA
    ===================================== */

    if (escenaActual === "inicio") {

        iniciarPoema();

        return;

    }


    /* =====================================
       SIGUIENTE PÁRRAFO
    ===================================== */

    if (escenaActual === "poema") {

        if (!poemaTerminado) {

            mostrarSiguienteParte();

            return;

        }


        /*
            Ya terminó el poema.
            Pasamos al final.
        */

        iniciarFinal();

        return;

    }

});


/* =========================================
   CONFIGURACIÓN INICIAL
========================================= */

cambiarEscena(inicio);

btnContinuar.classList.remove("oculto");

