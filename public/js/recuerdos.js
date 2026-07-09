const botones =
document.querySelectorAll(".acordeon-btn");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const contenido =
            boton.nextElementSibling;

        const icono =
            boton.querySelector(".icono");

        if(contenido.style.maxHeight){

            contenido.style.maxHeight = null;

            icono.textContent = "▼";

        }else{

            contenido.style.maxHeight =
                contenido.scrollHeight + "px";

            icono.textContent = "▲";

        }

    });

});

/* ==========================
   MODAL DE IMÁGENES
========================== */

const modal =
document.querySelector(".modal");

const modalImg =
document.querySelector(".modal-img");

const cerrar =
document.querySelector(".cerrar");

if(modal && modalImg && cerrar){

    document.querySelectorAll(".mini-galeria img")
    .forEach(imagen => {

        imagen.addEventListener("click", () => {

            modal.classList.add("activo");

            modalImg.src = imagen.src;

        });

    });

    cerrar.addEventListener("click", () => {

        modal.classList.remove("activo");

    });

    modal.addEventListener("click", (e) => {

        if(e.target === modal){

            modal.classList.remove("activo");

        }

    });

}