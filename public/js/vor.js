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


/* ======================================
            JUGADORES
====================================== */

const jugadores = [

    "Miguel",

    "Camila"

];

let turno = 0;



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

const verdades = [
    "¿Cuál es la fantasía sexual más salvaje que has tenido conmigo pero nunca me has contado?",
    "Describe con detalle la vez que más excitado/a te has sentido en tu vida.",
    "¿Qué parte de mi cuerpo te vuelve loco/a y por qué?",
    "¿Has fingido un orgasmo alguna vez? ¿Con quién y por qué?",
    "¿Cuál es tu posición sexual favorita y qué te gusta exactamente de ella?",
    "¿Qué juguete sexual te gustaría probar conmigo la próxima vez?",
    "Cuenta la experiencia sexual más vergonzosa pero excitante que has tenido.",
    "¿Qué te pone más: besos suaves, mordidas o que te agarren fuerte?",
    "Si pudieras hacerme una sola cosa sexual ahora mismo sin consecuencias, ¿qué sería?",
    "¿Cuál es tu secreto más sucio sobre masturbación?",
    "Describe cómo te imaginas una noche perfecta de sexo entre nosotros.",
    "¿Te has tocado pensando en mí? Cuenta los detalles más calientes.",
    "¿Qué olor mío te excita más (perfume, sudor, etc.)?",
    "¿Prefieres sexo lento y sensual o rápido y salvaje? ¿Por qué?",
    "¿Cuál es el lugar más arriesgado donde te gustaría hacerlo conmigo?",
    "¿Qué palabra o frase sucia te pone muy caliente cuando te la digo?",
    "¿Has tenido un sueño erótico conmigo? Cuéntalo sin censura.",
    "¿Qué te gusta más: dar o recibir sexo oral?",
    "¿Cuál es tu fetiche oculto que pocos saben?",
    "Si pudieras grabar un video sexual con nosotros, ¿qué haríamos exactamente?",
    "¿Qué parte de tu cuerpo te gustaría que besara durante horas?",
    "¿Te excita más el dolor leve o solo placer puro?",
    "Cuenta una verdad sobre tu primer beso o primera vez sexual.",
    "¿Qué outfit mío te pone instantáneamente cachondo/a?",
    "¿Prefieres luces encendidas o apagadas durante el sexo? ¿Por qué?",
    "¿Qué fantasía de rol te gustaría que interpretáramos?",
    "¿Cuál ha sido el mejor orgasmo que te he provocado y cómo lo hice?",
    "¿Te gusta que te hablen sucio? ¿Qué palabras te encantan?",
    "¿Has comparado mi cuerpo o mi forma de hacer el amor con alguien más?",
    "Describe tu zona erógena más sensible que casi nadie conoce.",
    "¿Qué es lo más atrevido que has visto en porno que te gustaría probar?",
    "¿Te excita la idea de que alguien nos escuche teniendo sexo?",
    "¿Cuál es tu ritmo ideal: lento, profundo o rápido y fuerte?",
    "¿Qué sabor o textura te encanta sentir en mi boca durante el sexo oral?",
    "¿Has tenido celos sexuales pensando en mí con otra persona?",
    "¿Qué comando sexual te gustaría que te diera yo?",
    "Describe el momento en que más húmedo/a te has puesto conmigo.",
    "¿Te gusta más el sexo en la cama, en la ducha o en el sofá?",
    "¿Cuál es tu mayor inseguridad sexual y cómo puedo ayudarte con ella?",
    "¿Qué tipo de caricias te hacen perder el control?",
    "¿Prefieres que te domine o dominarme a mí en la cama?",
    "Cuenta un secreto sexual de tu adolescencia.",
    "¿Qué canción te pone en mood para follar?",
    "¿Te excita más ver mi cara de placer o sentirme temblar?",
    "¿Cuál es la cosa más romántica y sexual que has imaginado para nosotros?",
    "¿Te gusta que te aten o atarme? Explica por qué.",
    "¿Qué parte del sexo te da más vergüenza admitir que te encanta?",
    "¿Has usado algún objeto casero para masturbarte pensando en mí?",
    "¿Qué te pone más: besos en el cuello, pezones o muslos internos?",
    "Describe cómo te gustaría que terminara nuestra próxima sesión de sexo.",
    "¿Te excita la idea de sexo anal? ¿En qué nivel?",
    "¿Cuál es tu forma favorita de que te toquen los genitales?",
    "¿Has tenido un orgasmo múltiple? ¿Cómo fue?",
    "¿Qué es lo que más te gusta de mi forma de besarte?",
    "¿Prefieres sexo matutino, diurno o nocturno?",
    "¿Te gusta que te miren mientras te masturbas?",
    "¿Cuál es tu límite sexual que aún no hemos cruzado pero te intriga?",
    "Describe el beso más caliente que me has dado.",
    "¿Qué te hace sentir más deseado/a: palabras, miradas o toques?",
    "¿Has fantaseado con sexo en público con riesgo de que nos vean?",
    "¿Qué es lo más largo que has durado teniendo sexo?",
    "¿Te excita el sudor, los fluidos y la humedad real del sexo?",
    "¿Cuál es tu guilty pleasure sexual que nunca confesarías fuera de este juego?",
    "¿Cómo te gusta que te agarre el pelo o las caderas?",
    "¿Qué verdad sexual sobre ti te da más vergüenza pero también te excita contarla?",
    "¿Qué ha sido el momento más feliz que has vivido conmigo? (mezcla romántica)",
    "¿Cuál es el momento más feliz que has vivido conmigo?",
    "¿Qué fue lo primero que pensaste cuando me conociste?",
    "¿Qué es lo que más te gusta de mí?",
    "¿Cuál es tu mayor miedo en una relación?",
    "¿Qué recuerdo nuestro jamás olvidarías?",
    "¿Qué se siente cuando estás dentro de mí y qué es lo que más te gusta de esa sensación? (Para él)",
    "¿Qué es lo que más te gusta sentir cuando te penetro? (Para ella)",
    "¿Te gusta más darme nalgadas o que yo te las dé a ti? (Para él)",
    "¿Te excita más que te domine o que seas tú quien tome el control? (Para ella)"
];


/* ======================================
        RETOS GENERALES
====================================== */

const retosGenerales = [
    // Retos divertidos y ligeros
    "Imita tu propia cara de orgasmo durante 20 segundos sin reírte.",
    "Baila como un robot sexy durante 30 segundos.",
    "Habla con acento mexicano (o el que elijas) durante los próximos 3 minutos.",
    "Haz 10 flexiones mientras me das un beso cada vez que bajas.",
    "Canta una canción de amor pero con voz de ópera dramática.",
    "Imita a un gato en celo durante 20 segundos.",
    "Camina como modelo en pasarela por toda la habitación con ropa interior.",
    "Inventa una canción improvisada sobre mis partes íntimas.",
    "Haz una declaración de amor exagerada y cursi de rodillas.",
    "Imita a un personaje de anime teniendo un momento dramático.",
    
    // Retos incómodos / vergonzosos
    "Cuéntame en detalle tu experiencia sexual más vergonzosa.",
    "Deja que te haga cosquillas durante 30 segundos sin poder moverte.",
    "Muestra tu historial de búsquedas en el celular (las últimas 5).",
    "Imita cómo te masturbas pero de forma exagerada y graciosa.",
    "Dime 5 cosas que te gustan de mi cuerpo pero usando solo palabras sucias.",
    "Habla durante un minuto describiendo cómo te sientes ahora mismo de forma poética y sexual.",
    "Deja que te ponga un apodo ridículo que tendrás que usar el resto del juego.",
    "Intenta hacer un twerking serio pero fallando a propósito.",
    "Cuéntame tu fantasía más rara y absurda.",
    "Haz una confesión incómoda sobre algo que te excite pero te da vergüenza.",
    
    // Retos coquetos / románticos / intermedios
    "Dale un masaje en los pies durante 2 minutos.",
    "Bésame el cuello, la oreja y los labios lentamente durante 60 segundos.",
    "Escríbeme un mensaje de texto sucio como si fuera para enviarlo mañana.",
    "Siéntate en mi regazo y mírame a los ojos sin hablar durante 1 minuto.",
    "Hazme 10 cumplidos seguidos, cada uno más atrevido que el anterior.",
    "Deja que te peine o cepille el cabello de forma sensual.",
    "Baila lento pegado a mí como si estuviéramos en una canción romántica.",
    "Toma una foto sexy pero graciosa de los dos y guárdala.",
    "Susúrrame tu color favorito de ropa interior que me pondría.",
    "Haz un corazón con tus manos alrededor de mi zona íntima.",
    
    // Retos más picantes variados
    "Quítate una prenda usando solo la boca.",
    "Lame un camino desde mi cuello hasta donde yo te diga.",
    "Frótate contra alguna parte de mi cuerpo durante 60 segundos.",
    "Mastúrbate frente a mí durante 45 segundos sin tocarme.",
    "Baila sensualmente mientras te quitas solo una prenda.",
    "Susúrrame las 3 cosas que más quieres que te haga ahora.",
    "Ponte de rodillas y dime exactamente qué quieres hacerme.",
    "Usa hielo o algo frío en tu boca mientras me besas el cuerpo.",
    "Hazme un striptease de solo 20 segundos pero muy intenso.",

    "Quítate una prenda de ropa lentamente mientras me miras a los ojos.",
    "Bésame el cuello durante 60 segundos sin usar las manos.",
    "Hazme un striptease sensual de 30 segundos con música que elijas.",
    "Mastúrbate frente a mí durante un minuto completo sin que te toque.",
    "Lame lentamente desde mi cuello hasta mi ombligo.",
    "Susúrrame al oído las cosas más sucias que quieres que te haga.",
    "Deja que te vende los ojos y te bese donde quiera durante un minuto.",
    "Hazme sexo oral durante exactamente 90 segundos.",
    "Baila sensualmente encima de mí completamente desnudo/a.",
    "Tócate los pezones mientras me dices lo mucho que me deseas.",
    "Siéntate en mi regazo y frótate contra mí sin penetración durante 2 minutos.",
    "Bésame los muslos internos subiendo muy lento.",
    "Usa tu lengua para dibujar mi nombre en mi piel.",
    "Déjame atarte las manos y haz lo que yo quiera durante 3 minutos.",
    "Grábate un audio gimiendo mi nombre de forma sexy.",
    "Camina por la casa desnudo/a durante los próximos 5 minutos.",
    "Hazme un masaje con aceite en la zona que yo elija.",
    "Chúpame los dedos uno por uno mirándome a los ojos.",
    "Ponte en cuatro y gime mi nombre mientras te acaricio.",
    "Bésame profundamente mientras me aprietas las nalgas.",
    "Usa hielo en tu boca y recórreme el cuerpo con ella.",
    "Mastúrbame con las manos mientras me miras sin parpadear.",
    "Deja que te escriba algo sucio en el cuerpo con labial.",
    "Haz 10 sentadillas completamente desnudo/a encima de mí.",
    "Lame crema o chocolate de mi pecho o muslos.",
    "Susúrrame una fantasía mientras me tocas por debajo de la ropa.",
    "Deja que te dé nalgadas suaves mientras estás en mi regazo.",
    "Realiza un baile erótico solo con ropa interior.",
    "Bésame todo el cuerpo excepto los genitales durante 2 minutos.",
    "Usa tu boca para quitarme una prenda de ropa.",
    "Frótate contra mi pierna hasta que te mojes visiblemente.",
    "Deja que te haga sexo oral mientras tú intentas no hacer ruido.",
    "Tócate frente al espejo mientras yo miro desde atrás.",
    "Bésame el cuello profundamente y húmedo durante un minuto.",
    "Baila sensualmente y quítate la ropa interior con los dientes.",
    "Frótate contra mi cara sin quitarte la ropa interior.",
    "Realiza un 69 durante exactamente 90 segundos.",
    "Tócate los genitales mientras me cuentas una fantasía.",
    "Ponte aceite en el cuerpo y deslízate contra mí.",
    "Hazme una felación o cunnilingus con mucho entusiasmo durante 2 minutos.",
    "Deja que te dé besos y mordidas suaves en las nalgas.",
    "Siéntate en mi cara durante 60 segundos (con o sin ropa interior).",
    "Usa la lengua para explorar mis zonas más sensibles.",
    "Hazme correr con solo tus manos o boca en menos de 4 minutos.",
    "Realiza un masaje erótico completo en la zona que yo elija.",
    "Gime mi nombre mientras te penetro con los dedos.",
    "Realiza un reto romántico: bésame lentamente todo el rostro y cuello."
];


/* ======================================
        RETOS CAMILA
====================================== */

const retosCamila = [
    "Ponte lencería sexy que tengas y hazme un desfile privado solo para mí.",
    "Mastúrbate con los dedos o con un vibrador mientras yo te miro sin tocarte durante un minuto completo.",
    "Monta encima de mí y cabálgame lentamente durante 3 minutos, controlando el ritmo.",
    "Baila sensualmente encima de mí completamente desnuda.",
    "Siéntate en mi regazo y frótate contra mí sin penetración durante 2 minutos.",
    "Bésame los muslos internos subiendo muy lento con tu boca.",
    "Deja que te vende los ojos y te bese donde quiera durante un minuto.",
    "Hazme sexo oral durante exactamente 90 segundos con mucho entusiasmo.",
    "Tócate los pezones mientras me dices lo mucho que me deseas.",
    "Frótate contra mi pierna hasta que te mojes visiblemente.",
    "Ponte en cuatro y gime mi nombre mientras te acaricio.",
    "Bésame profundamente mientras me aprietas las nalgas.",
    "Usa hielo en tu boca y recórreme todo el cuerpo con ella.",
    "Deja que te escriba algo sucio en el cuerpo con labial.",
    "Lame crema o chocolate de mi pecho o muslos.",
    "Realiza un baile erótico solo con ropa interior y quítatela poco a poco.",
    "Bésame todo el cuerpo excepto los genitales durante 2 minutos.",
    "Frótate contra mi cara sin quitarte la ropa interior.",
    "Tócate frente al espejo mientras yo miro desde atrás.",
    "Baila twerking sensual contra mi cuerpo.",
    "Déjame atarte las manos y haz lo que yo quiera durante 3 minutos.",
    "Gime mi nombre mientras te penetro con los dedos.",
    "Ponte aceite en el cuerpo y deslízate sensualmente contra mí.",
    "Siéntate en mi cara durante 60 segundos.",
    "Realiza un 69 durante exactamente 90 segundos.",
    "Usa tu boca para quitarme una prenda de ropa lentamente.",
    "Camina por la casa completamente desnuda durante 5 minutos.",
    "Haz un striptease completo terminando arrodillada frente a mí.",
    "Lame lentamente desde mi cuello hasta mi ombligo.",
    "Susúrrame al oído las cosas más sucias que quieres que te haga."
];


/* ======================================
        RETOS MIGUEL
====================================== */

const retosMiguel = [
    "Levántame en brazos y hazme el amor contra la pared (o simúlalo sensualmente).",
    "Lame mi clítoris durante 2 minutos completos sin parar.",
    "Quítame la ropa lentamente mientras me miras a los ojos.",
    "Hazme un masaje con aceite en la zona que yo elija durante 3 minutos.",
    "Mastúrbame con las manos mientras me miras sin parpadear.",
    "Bésame todo el cuerpo excepto los genitales durante 2 minutos.",
    "Chúpame los dedos uno por uno mirándome a los ojos.",
    "Déjame atarte las manos y haz lo que yo quiera durante 3 minutos.",
    "Hazme un striptease sensual de 30 segundos.",
    "Usa tu lengua para dibujar mi nombre en mi piel.",
    "Bésame el cuello durante 60 segundos sin usar las manos.",
    "Frótame contra tu cuerpo mientras estás desnudo.",
    "Hazme sexo oral durante exactamente 90 segundos con mucho entusiasmo.",
    "Ponte en cuatro y déjame acariciarte mientras gimes mi nombre.",
    "Susúrrame al oído las cosas más sucias que quieres hacerme.",
    "Baila sensualmente contra mí completamente desnudo.",
    "Usa hielo en tu boca y recórreme el cuerpo con ella.",
    "Déjame escribir algo sucio en tu cuerpo con labial.",
    "Realiza 10 sentadillas encima de mí completamente desnudo.",
    "Lame crema o chocolate de mis pechos o muslos.",
    "Tócate frente a mí mientras yo te miro.",
    "Haz un masaje erótico completo en la zona que yo elija.",
    "Bésame profundamente mientras me aprietas las nalgas.",
    "Realiza un 69 durante exactamente 90 segundos.",
    "Gime mi nombre mientras me tocas.",
    "Levántame y sostenme mientras me besas intensamente.",
    "Usa la lengua para explorar mis zonas más sensibles.",
    "Hazme correr con solo tu boca o manos en menos de 4 minutos.",
    "Baila un twerking sensual o mueve las caderas provocativamente contra mí."
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

    const indice = Math.floor(

        Math.random()*verdades.length

    );

    return verdades[indice];

}


/* ======================================
        RETO ALEATORIO
====================================== */

function obtenerReto(){

    let lista = [...retosGenerales];

    if(jugadores[turno]==="Camila"){

        lista.push(...retosCamila);

    }

    else{

        lista.push(...retosMiguel);

    }

    const indice = Math.floor(

        Math.random()*lista.length

    );

    return lista[indice];

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