/* ===========================
        ELEMENTOS
=========================== */

const intro =
document.getElementById("intro");

const btnEntrar =
document.getElementById("btnEntrar");

const poemaSection =
document.getElementById("poemaSection");

const textoPoema =
document.getElementById("textoPoema");

const finalPoema =
document.getElementById("finalPoema");

const btnCambiar =
document.getElementById("btnCambiar");

const mensajeFinal =
document.getElementById("mensajeFinal");


/* ===========================
        POEMA
=========================== */

const poema = `Te odio.

Odio como me hablas
Y tu manera de reír

Odio tu sonrisa y lo que me haces sentir

Odio tus abrazos y que me trates bien

Te odio hasta vomitar, que bien va a rimar

Odio, odio que sepas pensar
Y que me hagas reír

Odio como me haces vivir, 
y odio tu manera de amar

Odio tanto estar contigo, y nuestras cosas en común
Pero más odio, que no te puedo odiar

Y aunque sea un poco, contigo déjame soñar

<3`;


/* ===========================
        ENTRAR
=========================== */

btnEntrar.addEventListener(

    "click",

    ()=>{

        intro.classList.add("oculto");

        poemaSection.classList.remove("oculto");

        escribirPoema();

    }

);


/* ===========================
    EFECTO MÁQUINA
=========================== */

function escribirPoema(){

    let i = 0;

    const velocidad = 40;

    function escribir(){

        if(i < poema.length){

            textoPoema.innerHTML += poema.charAt(i);

            i++;

            // Hace scroll mientras escribe
            window.scrollTo({

                top: document.body.scrollHeight,

                behavior: "smooth"

            });

            setTimeout(

                escribir,

                velocidad

            );

        }

        else{

            finalPoema.classList.remove("oculto");

        }

    }

    escribir();

}


/* ===========================
    CAMBIAR ODIO -> AMO
=========================== */

btnCambiar.addEventListener(

    "click",

    transformarPoema

);

function transformarPoema(){

    btnCambiar.style.pointerEvents = "none";

    btnCambiar.style.opacity = ".5";

    // Buscar TODAS las apariciones de odio/Odio
    textoPoema.innerHTML = textoPoema.innerHTML.replace(

        /\bodio\b/gi,

        match => `<span class="odio">${match}</span>`

    );

    const palabras =

        document.querySelectorAll(".odio");

    palabras.forEach(

        (palabra,index)=>{

            setTimeout(()=>{

                const texto = palabra.textContent;

                if(texto === "Odio"){

                    palabra.textContent = "Amo";

                }

                else if(texto === "odio"){

                    palabra.textContent = "amo";

                }

                palabra.classList.add("amo");

            },

            index*400);

        }

    );

    // Cuando termina la transformación
    setTimeout(()=>{

        mensajeFinal.classList.remove("oculto");

    },

    palabras.length*400 + 1200);

}