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