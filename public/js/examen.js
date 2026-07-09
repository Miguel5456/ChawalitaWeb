const btnIniciar =
document.getElementById("iniciar-examen");

const preguntas =
document.getElementById("preguntas");

const modal =
document.getElementById("countdown-modal");

const countdown =
document.getElementById("countdown");

const cronometro =
document.getElementById("cronometro");

let segundos = 0;

let timer;

function iniciarCronometro(){

    timer = setInterval(() => {

        segundos++;

        const min =
        String(Math.floor(segundos / 60))
        .padStart(2,"0");

        const seg =
        String(segundos % 60)
        .padStart(2,"0");

        cronometro.textContent =
        `${min}:${seg}`;

    },1000);

}

btnIniciar.addEventListener("click", () => {

    modal.classList.add("activo");

    let numero = 3;

    countdown.textContent = numero;

    const cuentaRegresiva =
    setInterval(() => {

        numero--;

        countdown.textContent = numero;

        if(numero === 0){

            clearInterval(cuentaRegresiva);

            modal.classList.remove("activo");

            document
            .querySelector(".caja-instrucciones")
            .style.display = "none";

            btnIniciar.style.display = "none";

            preguntas.style.display = "block";

            preguntas.scrollIntoView({
                behavior:"smooth"
            });

            iniciarCronometro();

        }

    },1000);

});

document
.getElementById("calcular-nota")
.addEventListener("click", () => {

    let puntaje = 0;

    const respuestas =
    document.querySelectorAll(
        "input[type='radio']:checked"
    );

    respuestas.forEach(respuesta => {

        puntaje += Number(respuesta.value);

    });

    const totalPreguntas =
    document.querySelectorAll(".pregunta-card").length;

    if(respuestas.length < totalPreguntas){

        alert(
            `⚠️ Aún faltan ${
                totalPreguntas - respuestas.length
            } preguntas por responder.`
        );

        return;

    }

    clearInterval(timer);

    const nota =
    (puntaje / totalPreguntas) * 5;

    let rango = "";
    let mensaje = "";

    if(nota === 5){

        rango = "👑 Miguelóloga Suprema";

        mensaje =
        "Resultado perfecto. Como seguro si estudio, puede pedir lo que quiera (Infinito).";

    }
    else if(nota >= 4.5){

        rango = "🏆 Miguelóloga Profesional";

        mensaje =
        "Conoces demasiados detalles. Pero no es perfecto, puede pedir lo que quiera (No infinito).";

    }
    else if(nota >= 4){

        rango = "🥇 Experta en Miguel";

        mensaje =
        "Si presto atención, pero le falta le falta. Habra que estudiar más (Se gano 1 deseo deseo)";

    }
    else if(nota >= 3){

        rango = "📚 Conocimiento Aceptable";

        mensaje =
        "Aprueba el examen, aunque ando es ofendido. Joa, no se gana nadota";

    }
    else if(nota >= 2){

        rango = "🤔 Debemos hablar más";

        mensaje =
        "Uy paisanada, dele pena, me debe algo usted a mi joa";

    }
    else if(nota >= 1){

        rango = "😅 ¿Segura que me conoces?";

        mensaje =
        "Me tenei que tratar re contra hyper mega serio, me debei deseos infinitos che";

    }
    else{

        rango = "🚨 Creo que respondiste al azar";

        mensaje =
        "Me tenei que tratar re contra hyper mega serio, me debei deseos infinitos che";

    }

    let colorRango = "#4d3b63";

    if(nota === 5){

        colorRango = "#d4af37";

    }
    else if(nota >= 4){

        colorRango = "#4caf50";

    }
    else if(nota >= 3){

        colorRango = "#2196f3";

    }
    else if(nota >= 2){

        colorRango = "#ff9800";

    }
    else{

        colorRango = "#f44336";

    }

    let riesgo = "";

    if(nota >= 4.5){

        riesgo =
        "🔴 Conoce secretos clasificados";

    }
    else if(nota >= 3){

        riesgo =
        "🟡 Sabe demasiadas cosas";

    }
    else{

        riesgo =
        "🟢 Normal";

    }

    const porcentaje =
    (puntaje / totalPreguntas) * 100;

    document.getElementById("resultado")
    .innerHTML = `

        <h2 style="color:${colorRango};">
            ${rango}
        </h2>

        <p>
            <strong>Aciertos:</strong>
            ${puntaje}/${totalPreguntas}
        </p>

        <p>
            <strong>Nota:</strong>
            ${nota.toFixed(1)} / 5.0
        </p>

        <br>

        <div class="barra-progreso">

            <div
                class="barra"
                style="width:${porcentaje}%;">

            </div>

        </div>

        <br>

        <p>
            <strong>Nivel de Riesgo:</strong>
            ${riesgo}
        </p>

        <br>

        <p>
            ${mensaje}
        </p>

    `;

});

