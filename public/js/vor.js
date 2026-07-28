/* ======================================
            ELEMENTOS
====================================== */

const btnComenzar =
document.getElementById("btnComenzar");

const pantallaInicio =
document.getElementById("pantallaInicio");

const pantallaJuego =
document.getElementById("pantallaJuego");

const navbar =
document.querySelector(".navbar");

const footer =
document.querySelector(".footer");

const jugadorActual =
document.getElementById("jugadorActual");

const cartaVerdad =
document.getElementById("cartaVerdad");

const cartaReto =
document.getElementById("cartaReto");

const cartas =
document.getElementById("cartas");

const panelPregunta =
document.getElementById("panelPregunta");

const tipoPregunta =
document.getElementById("tipoPregunta");

const textoPregunta =
document.getElementById("textoPregunta");

const btnCumplido =
document.getElementById("btnCumplido");

const btnSalir =
document.getElementById("btnSalir");

const contadorTurno =
document.getElementById("contadorTurno");

const nivelActual =
document.getElementById("nivelActual");


/* ======================================
            JUGADORES
====================================== */

const jugadores = [

    "Miguel",

    "Camila"

];

let turno = 0;
let numeroTurno = 1;


/* ======================================
            INICIAR
====================================== */

btnComenzar.addEventListener(

    "click",

    iniciarJuego

);

function iniciarJuego(){

    /*
        Elegimos
        quién comienza.
    */

    turno =

        Math.floor(

            Math.random()*2

        );

    /*
        Ocultamos
        la interfaz.
    */

    navbar.classList.add(

        "ocultar-navbar"

    );

    footer.classList.add(

        "ocultar-footer"

    );

    pantallaInicio.classList.add(

        "desaparecer"

    );

    /*
        Esperamos
        la animación.
    */

    setTimeout(()=>{

        pantallaInicio.classList.add(

            "oculto"

        );

        pantallaJuego.classList.remove(

            "oculto"

        );

        mostrarJugador();
        actualizarInfoTurno();

    },700);

}


/* ======================================
        CAMBIAR TURNO
====================================== */

function siguienteJugador(){

    turno++;

    if(turno>=jugadores.length){

        turno=0;

    }

    mostrarJugador();

}

/* ======================================
            LISTAS
====================================== */

// =======================
// VERDADES
// =======================
const verdadesFaciles = [
    "¿Cuál es el momento más feliz que has vivido conmigo?",
    "¿Qué fue lo primero que pensaste cuando me conociste?",
    "¿Qué es lo que más te gusta de mí?",
    "¿Cuál es tu mayor miedo en una relación?",
    "¿Qué recuerdo nuestro jamás olvidarías?",
    "¿Qué outfit mío te pone instantáneamente cachondo/a?",
    "¿Prefieres luces encendidas o apagadas durante el sexo? ¿Por qué?",
    "¿Prefieres sexo matutino, diurno o nocturno?",
    "¿Qué canción te pone en mood para follar?",
    "¿Qué es lo que más te gusta de mi forma de besarte?",
    "Describe el beso más caliente que me has dado.",
    "¿Qué te hace sentir más deseado/a: palabras, miradas o toques?",
    "¿Cuál es la cosa más romántica y sexual que has imaginado para nosotros?",
    "¿Te gusta más el sexo en la cama, en la ducha o en el sofá?",
    "¿Cuál es tu ritmo ideal: lento, profundo o rápido y fuerte?"
];

const verdadesModeradas = [
    "¿Qué parte de mi cuerpo te vuelve loco/a y por qué?",
    "¿Qué te pone más: besos suaves, mordidas o que te agarren fuerte?",
    "¿Prefieres sexo lento y sensual o rápido y salvaje? ¿Por qué?",
    "¿Qué olor mío te excita más (perfume, sudor, etc.)?",
    "¿Qué palabra o frase sucia te pone muy caliente cuando te la digo?",
    "¿Qué te gusta más: dar o recibir sexo oral?",
    "¿Qué parte de tu cuerpo te gustaría que besara durante horas?",
    "¿Te gusta que te hablen sucio? ¿Qué palabras te encantan?",
    "¿Cuál es tu posición sexual favorita y qué te gusta exactamente de ella?",
    "¿Qué tipo de caricias te hacen perder el control?",
    "¿Prefieres que te domine o dominarme a mí en la cama?",
    "¿Te gusta que te aten o atarme? Explica por qué.",
    "¿Qué te pone más: besos en el cuello, pezones o muslos internos?",
    "¿Cómo te gusta que te agarre el pelo o las caderas?",
    "¿Cuál ha sido el mejor orgasmo que te he provocado y cómo lo hice?",
    "¿Te has tocado pensando en mí? Cuenta los detalles más calientes.",
    "¿Has tenido un sueño erótico conmigo? Cuéntalo sin censura.",
    "Describe cómo te imaginas una noche perfecta de sexo entre nosotros.",
    "¿Qué comando sexual te gustaría que te diera yo?",
    "¿Cuál es tu mayor inseguridad sexual y cómo puedo ayudarte con ella?"
];

const verdadesExtremas = [
    "¿Cuál es la fantasía sexual más salvaje que has tenido conmigo pero nunca me has contado?",
    "Describe con detalle la vez que más excitado/a te has sentido en tu vida.",
    "¿Has fingido un orgasmo alguna vez? ¿Con quién y por qué?",
    "¿Qué juguete sexual te gustaría probar conmigo la próxima vez?",
    "Cuenta la experiencia sexual más vergonzosa pero excitante que has tenido.",
    "Si pudieras hacerme una sola cosa sexual ahora mismo sin consecuencias, ¿qué sería?",
    "¿Cuál es tu secreto más sucio sobre masturbación?",
    "¿Cuál es el lugar más arriesgado donde te gustaría hacerlo conmigo?",
    "¿Cuál es tu fetiche oculto que pocos saben?",
    "Si pudieras grabar un video sexual con nosotros, ¿qué haríamos exactamente?",
    "¿Te excita más el dolor leve o solo placer puro?",
    "Cuenta una verdad sobre tu primer beso o primera vez sexual.",
    "¿Qué fantasía de rol te gustaría que interpretáramos?",
    "¿Has comparado mi cuerpo o mi forma de hacer el amor con alguien más?",
    "Describe tu zona erógena más sensible que casi nadie conoce.",
    "¿Qué es lo más atrevido que has visto en porno que te gustaría probar?",
    "¿Te excita la idea de que alguien nos escuche teniendo sexo?",
    "¿Qué sabor o textura te encanta sentir en mi boca durante el sexo oral?",
    "¿Has tenido celos sexuales pensando en mí con otra persona?",
    "Describe el momento en que más húmedo/a te has puesto conmigo.",
    "Cuenta un secreto sexual de tu adolescencia.",
    "¿Te excita más ver mi cara de placer o sentirme temblar?",
    "¿Qué parte del sexo te da más vergüenza admitir que te encanta?",
    "¿Has usado algún objeto casero para masturbarte pensando en mí?",
    "Describe cómo te gustaría que terminara nuestra próxima sesión de sexo.",
    "¿Te excita la idea de sexo anal? ¿En qué nivel?",
    "¿Cuál es tu forma favorita de que te toquen los genitales?",
    "¿Has tenido un orgasmo múltiple? ¿Cómo fue?",
    "¿Te gusta que te miren mientras te masturbas?",
    "¿Cuál es tu límite sexual que aún no hemos cruzado pero te intriga?",
    "¿Has fantaseado con sexo en público con riesgo de que nos vean?",
    "¿Qué es lo más largo que has durado teniendo sexo?",
    "¿Te excita el sudor, los fluidos y la humedad real del sexo?",
    "¿Cuál es tu guilty pleasure sexual que nunca confesarías fuera de este juego?",
    "¿Qué verdad sexual sobre ti te da más vergüenza pero también te excita contarla?",
    "¿Qué se siente cuando estás dentro de mí y qué es lo que más te gusta de esa sensación? (Para él)",
    "¿Qué es lo que más te gusta sentir cuando te penetro? (Para ella)",
    "¿Te gusta más darme nalgadas o que yo te las dé a ti? (Para él)",
    "¿Te excita más que te domine o que seas tú quien tome el control? (Para ella)"
];

// =======================
// RETOS GENERALES
// =======================
const retosGeneralesFaciles = [
    "Imita tu propia cara de orgasmo durante 20 segundos sin reírte.",
    "Baila como un robot sexy durante 30 segundos.",
    "Habla con acento mexicano (o el que elijas) durante los próximos 3 minutos.",
    "Canta una canción de amor pero con voz de ópera dramática.",
    "Imita a un gato en celo durante 20 segundos.",
    "Camina como modelo en pasarela por toda la habitación con ropa interior.",
    "Haz una declaración de amor exagerada y cursi de rodillas.",
    "Imita a un personaje de anime teniendo un momento dramático.",
    "Deja que tu pareja te haga cosquillas durante 30 segundos sin poder moverte.",
    "Deja que tu pareja te ponga un apodo ridículo que tendrás que usar el resto del juego.",
    "Intenta hacer un twerking serio pero fallando a propósito.",
    "Dale un masaje en los pies durante 2 minutos.",
    "Bésale el cuello, la oreja y los labios lentamente durante 60 segundos.",
    "Siéntate en el regazo de tu pareja y mírala a los ojos sin hablar durante 1 minuto.",
    "Baila lento pegado a tu pareja como si fuera una canción romántica.",
    "Tomen una foto sexy pero graciosa juntos y guárdenla.",
    "Haz un corazón con tus manos alrededor de su zona íntima.",
    "Realiza un reto romántico: bésale lentamente todo el rostro y cuello."
];

const retosGeneralesModerados = [
    "Haz 10 flexiones mientras le das un beso a tu pareja cada vez que bajas.",
    "Inventa una canción improvisada sobre las partes íntimas de tu pareja.",
    "Cuéntale en detalle tu experiencia sexual más vergonzosa.",
    "Muestra tu historial de búsquedas en el celular (las últimas 5).",
    "Imita cómo te masturbas pero de forma exagerada y graciosa.",
    "Dile 5 cosas que te gustan de su cuerpo usando solo palabras sucias.",
    "Habla durante un minuto describiendo cómo te sientes ahora mismo de forma poética y sexual.",
    "Cuéntale tu fantasía más rara y absurda.",
    "Haz una confesión incómoda sobre algo que te excite pero te da vergüenza.",
    "Escríbele un mensaje de texto sucio como si fuera para enviarlo mañana.",
    "Hazle 10 cumplidos seguidos, cada uno más atrevido que el anterior.",
    "Deja que tu pareja te peine o cepille el cabello de forma sensual.",
    "Susúrrale tu color favorito de ropa interior que le pondrías.",
    "Quítate una prenda usando solo la boca.",
    "Baila sensualmente mientras te quitas solo una prenda.",
    "Susúrrale las 3 cosas que más quieres que te haga ahora.",
    "Ponte de rodillas y dile exactamente qué quieres hacerle.",
    "Quítate una prenda de ropa lentamente mientras la miras a los ojos.",
    "Bésale el cuello durante 60 segundos sin usar las manos.",
    "Hazle un striptease sensual de 30 segundos con música que elijas.",
    "Lame lentamente desde su cuello hasta su ombligo.",
    "Susúrrale al oído las cosas más sucias que quieres que te haga.",
    "Usa tu lengua para dibujar su nombre en su piel.",
    "Grábate un audio gimiendo su nombre de forma sexy.",
    "Hazle un masaje con aceite en la zona que ella/él elija.",
    "Chúpale los dedos uno por uno mirándola/lo a los ojos.",
    "Bésala/lo profundamente mientras le aprietas las nalgas.",
    "Realiza un baile erótico solo con ropa interior.",
    "Bésale todo el cuerpo excepto los genitales durante 2 minutos."
];

const retosGeneralesExtremos = [
    "Lame un camino desde el cuello de tu pareja hasta donde ella/él te diga.",
    "Frótate contra alguna parte del cuerpo de tu pareja durante 60 segundos.",
    "Mastúrbate frente a tu pareja durante 45 segundos sin que te toque.",
    "Usa hielo o algo frío en tu boca mientras besas el cuerpo de tu pareja.",
    "Haz un striptease de solo 20 segundos pero muy intenso.",
    "Mastúrbate frente a tu pareja durante un minuto completo sin que te toque.",
    "Deja que te vende los ojos y te bese donde quiera durante un minuto.",
    "Hazle sexo oral durante exactamente 90 segundos.",
    "Baila sensualmente encima de tu pareja completamente desnudo/a.",
    "Tócate los pezones mientras le dices lo mucho que la/lo deseas.",
    "Siéntate en su regazo y frótate contra ella/él sin penetración durante 2 minutos.",
    "Bésale los muslos internos subiendo muy lento.",
    "Déjale atarte las manos y haz lo que ella/él quiera durante 3 minutos.",
    "Camina por la casa desnudo/a durante los próximos 5 minutos.",
    "Ponte en cuatro y gime su nombre mientras te acaricia.",
    "Usa hielo en tu boca y recórrele el cuerpo con ella.",
    "Mastúrbale con las manos mientras la/lo miras sin parpadear.",
    "Deja que te escriba algo sucio en el cuerpo con labial.",
    "Haz 10 sentadillas completamente desnudo/a encima de tu pareja.",
    "Lame crema o chocolate de su pecho o muslos.",
    "Susúrrale una fantasía mientras le tocas por debajo de la ropa.",
    "Deja que te dé nalgadas suaves mientras estás en su regazo.",
    "Usa tu boca para quitarle una prenda de ropa.",
    "Frótate contra su pierna hasta que te mojes / te excites visiblemente.",
    "Deja que te haga sexo oral mientras tú intentas no hacer ruido.",
    "Tócate frente al espejo mientras tu pareja mira desde atrás.",
    "Baila sensualmente y quítate la ropa interior con los dientes.",
    "Frótate contra su cara sin quitarte la ropa interior.",
    "Realiza un 69 durante exactamente 90 segundos.",
    "Tócate los genitales mientras le cuentas una fantasía.",
    "Ponte aceite en el cuerpo y deslízate contra tu pareja.",
    "Hazle una felación o cunnilingus con mucho entusiasmo durante 2 minutos.",
    "Deja que te dé besos y mordidas suaves en las nalgas.",
    "Siéntate en su cara durante 60 segundos (con o sin ropa interior).",
    "Usa la lengua para explorar sus zonas más sensibles.",
    "Hazla/lo correr con solo tus manos o boca en menos de 4 minutos.",
    "Realiza un masaje erótico completo en la zona que ella/él elija.",
    "Gime su nombre mientras te penetra con los dedos."
];

// =======================
// RETOS CAMILA
// =======================
const retosCamilaFaciles = [
    "Ponte lencería sexy y hazle un desfile privado solo para él.",
    "Bésale los muslos internos subiendo muy lento con tu boca.",
    "Tócate los pezones mientras le dices lo mucho que lo deseas.",
    "Bésalo profundamente mientras le aprietas las nalgas.",
    "Lame lentamente desde su cuello hasta su ombligo.",
    "Susúrrale al oído las cosas más sucias que quieres que te haga.",
    "Realiza un baile erótico solo con ropa interior y quítatela poco a poco.",
    "Bésale todo el cuerpo excepto los genitales durante 2 minutos."
];

const retosCamilaModerados = [
    "Baila sensualmente encima de él completamente desnuda.",
    "Siéntate en su regazo y frótate contra él sin penetración durante 2 minutos.",
    "Deja que él te vende los ojos y te bese donde quiera durante un minuto.",
    "Frótate contra su pierna hasta que te mojes visiblemente.",
    "Usa hielo en tu boca y recórrele todo el cuerpo con ella.",
    "Deja que él te escriba algo sucio en el cuerpo con labial.",
    "Lame crema o chocolate de su pecho o muslos.",
    "Frótate contra su cara sin quitarte la ropa interior.",
    "Tócate frente al espejo mientras él mira desde atrás.",
    "Baila twerking sensual contra su cuerpo.",
    "Usa tu boca para quitarle una prenda de ropa lentamente.",
    "Camina por la casa completamente desnuda durante 5 minutos.",
    "Haz un striptease completo terminando arrodillada frente a él."
];

const retosCamilaExtremos = [
    "Mastúrbate con los dedos o con un vibrador mientras él te mira sin tocarte durante un minuto completo.",
    "Móntate encima de él y cabálgalo lentamente durante 3 minutos, controlando el ritmo.",
    "Hazle sexo oral durante exactamente 90 segundos con mucho entusiasmo.",
    "Ponte en cuatro y gime su nombre mientras él te acaricia.",
    "Deja que él te ate las manos y haz lo que él quiera durante 3 minutos.",
    "Gime su nombre mientras él te penetra con los dedos.",
    "Ponte aceite en el cuerpo y deslízate sensualmente contra él.",
    "Siéntate en su cara durante 60 segundos.",
    "Realiza un 69 con él durante exactamente 90 segundos."
];

// =======================
// RETOS MIGUEL
// =======================
const retosMiguelFaciles = [
    "Quítale la ropa lentamente mientras la miras a los ojos.",
    "Bésale todo el cuerpo excepto los genitales durante 2 minutos.",
    "Chúpale los dedos uno por uno mirándola a los ojos.",
    "Bésale el cuello durante 60 segundos sin usar las manos.",
    "Usa tu lengua para dibujar su nombre en su piel.",
    "Hazle un striptease sensual de 30 segundos.",
    "Susúrrale al oído las cosas más sucias que quieres hacerle.",
    "Bésala profundamente mientras le aprietas las nalgas."
];

const retosMiguelModerados = [
    "Hazle un masaje con aceite en la zona que ella elija durante 3 minutos.",
    "Frótate contra su cuerpo mientras estás desnudo.",
    "Baila sensualmente contra ella completamente desnudo.",
    "Usa hielo en tu boca y recórrele el cuerpo con ella.",
    "Deja que ella te escriba algo sucio en el cuerpo con labial.",
    "Realiza 10 sentadillas encima de ella completamente desnudo.",
    "Lame crema o chocolate de sus pechos o muslos.",
    "Tócate frente a ella mientras te mira.",
    "Hazle un masaje erótico completo en la zona que ella elija.",
    "Levántala y sostenla mientras la besas intensamente.",
    "Baila un twerking sensual o mueve las caderas provocativamente contra ella.",
    "Deja que ella te ate las manos y haz lo que ella quiera durante 3 minutos."
];

const retosMiguelExtremos = [
    "Levántala en brazos y hazle el amor contra la pared (o simúlalo sensualmente).",
    "Lame su clítoris durante 2 minutos completos sin parar.",
    "Mastúrbala con las manos mientras la miras sin parpadear.",
    "Hazle sexo oral durante exactamente 90 segundos con mucho entusiasmo.",
    "Ponte en cuatro y déjale acariciarte mientras gimes su nombre.",
    "Realiza un 69 con ella durante exactamente 90 segundos.",
    "Gime su nombre mientras la tocas.",
    "Usa la lengua para explorar sus zonas más sensibles.",
    "Hazla correr con solo tu boca o manos en menos de 4 minutos."
];

/* ======================================
        EVENTOS
====================================== */

cartaVerdad.addEventListener(

    "click",

    ()=>elegirPregunta("Verdad")

);

cartaReto.addEventListener(

    "click",

    ()=>elegirPregunta("Reto")

);


function elegirPregunta(tipo){

    cartas.classList.add("ocultar");

    setTimeout(()=>{

        panelPregunta.classList.remove("oculto");

        panelPregunta.classList.add("mostrar");

        panelPregunta.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });

        tipoPregunta.textContent =

            tipo.toUpperCase();

        if(tipo==="Verdad"){

            textoPregunta.textContent =

                obtenerVerdad();

        }

        else{

            textoPregunta.textContent =

                obtenerReto();

        }

    },500);

}


/* ======================================
        VERDAD ALEATORIA
====================================== */

function obtenerVerdad(){

    const nivel = obtenerNivel();

    let lista;

    if(nivel=="facil"){

        lista = verdadesFaciles;

    }

    else if(nivel=="moderado"){

        lista = verdadesModeradas;

    }

    else{

        lista = verdadesExtremas;

    }

    const indice = Math.floor(

        Math.random()*lista.length

    );

    return lista[indice];

}


/* ======================================
        RETO ALEATORIO
====================================== */

function obtenerReto(){

    const nivel = obtenerNivel();

    let lista = [];

    if(nivel=="facil"){

        lista.push(...retosGeneralesFaciles);

        if(jugadores[turno]=="Camila"){

            lista.push(...retosCamilaFaciles);

        }

        else{

            lista.push(...retosMiguelFaciles);

        }

    }

    else if(nivel=="moderado"){

        lista.push(...retosGeneralesModerados);

        if(jugadores[turno]=="Camila"){

            lista.push(...retosCamilaModerados);

        }

        else{

            lista.push(...retosMiguelModerados);

        }

    }

    else{

        lista.push(...retosGeneralesExtremos);

        if(jugadores[turno]=="Camila"){

            lista.push(...retosCamilaExtremos);

        }

        else{

            lista.push(...retosMiguelExtremos);

        }

    }

    const indice = Math.floor(

        Math.random()*lista.length

    );

    return lista[indice];

}
function obtenerNivel(){

    const r = Math.random();

    // Turnos 1 a 4
    if(numeroTurno <= 4){

        return "facil";

    }

    // Turnos 5 a 8
    if(numeroTurno <= 8){

        if(r < 0.30){

            return "facil";

        }

        return "moderado";

    }

    // Turnos 9 a 12
    if(numeroTurno <= 12){

        if(r < 0.20){

            return "facil";

        }

        if(r < 0.70){

            return "moderado";

        }

        return "extremo";

    }

    // Turnos 13 y 16
    if(numeroTurno <= 16){

        if(r < 0.10){

            return "facil";

        }

        if(r < 0.55){

            return "moderado";

        }

        return "extremo";

    }

    // Turno 11+

    if(r < 0.05){

        return "facil";

    }

    if(r < 0.15){

        return "moderado";

    }

    return "extremo";

}

function actualizarInfoTurno(){

    contadorTurno.textContent =

        "Turno " + numeroTurno;

    const nivel = obtenerNivel();

    if(nivel=="facil"){

        nivelActual.textContent =
        "Nivel Fácil 🟢";

        nivelActual.style.background =
        "#d7ffd7";

        nivelActual.style.color =
        "#2e7d32";

    }

    else if(nivel=="moderado"){

        nivelActual.textContent =
        "Nivel Moderado 🟡";

        nivelActual.style.background =
        "#fff6c7";

        nivelActual.style.color =
        "#a87400";

    }

    else{

        nivelActual.textContent =
        "Nivel Extremo 🔥";

        nivelActual.style.background =
        "#ffd6d6";

        nivelActual.style.color =
        "#c62828";

    }

}
/* ======================================
        BOTÓN CUMPLIÓ
====================================== */

btnCumplido.addEventListener(

    "click",

    terminarTurno

);


/* ======================================
        TERMINAR TURNO
====================================== */

function terminarTurno(){

    /*
        Ocultamos la pregunta.
    */

    panelPregunta.classList.remove(

        "mostrar"

    );

    panelPregunta.classList.add(

        "oculto"

    );

    /*
        Mostramos nuevamente
        las cartas.
    */

    cartas.classList.remove(

        "ocultar"

    );

    /*
        Volvemos automáticamente
        a las cartas.
    */

    setTimeout(()=>{

        cartas.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });

    },100);

    /*
        Cambiamos el jugador.
    */

   numeroTurno++;
   actualizarInfoTurno();

siguienteJugador();
    

}



/* ======================================
        ANIMACIÓN DE TURNO
====================================== */

function mostrarJugador(){

    jugadorActual.style.opacity = "0";

    jugadorActual.style.transform =

        "translateY(20px)";

    setTimeout(()=>{

        jugadorActual.textContent =

            jugadores[turno];

        jugadorActual.style.opacity = "1";

        jugadorActual.style.transform =

            "translateY(0px)";

    },250);

}


/* ======================================
        EFECTO CLICK CARTAS
====================================== */

cartaVerdad.addEventListener(

    "mousedown",

    ()=>{

        cartaVerdad.classList.add(

            "seleccionada"

        );

    }

);

cartaVerdad.addEventListener(

    "mouseup",

    ()=>{

        cartaVerdad.classList.remove(

            "seleccionada"

        );

    }

);

cartaReto.addEventListener(

    "mousedown",

    ()=>{

        cartaReto.classList.add(

            "seleccionada"

        );

    }

);

cartaReto.addEventListener(

    "mouseup",

    ()=>{

        cartaReto.classList.remove(

            "seleccionada"

        );

    }

);


/* ======================================
        ENTRADA SUAVE
====================================== */

window.addEventListener(

    "load",

    ()=>{

        document.body.animate(

            [

                {

                    opacity:0

                },

                {

                    opacity:1

                }

            ],

            {

                duration:1000,

                fill:"forwards"

            }

        );

    }

);

/* ======================================
        FINALIZAR JUEGO
====================================== */

btnSalir.addEventListener(

    "click",

    ()=>{

        const confirmar = confirm(

            "¿Seguro que desean finalizar la partida?"

        );

        if(confirmar){

            window.location.href = "VoR.html";

        }

    }

);