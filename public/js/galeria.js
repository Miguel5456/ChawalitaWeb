window.addEventListener("DOMContentLoaded", () => {

    const imagenes = [
        "Galeria/Foto1.jpeg",
        "Galeria/Foto2.jpeg",
        "Galeria/Foto3.jpeg",
        "Galeria/Foto4.jpeg"
    ];

    const imagenAleatoria =
        imagenes[Math.floor(Math.random() * imagenes.length)];

    const fotoDestacada =
        document.getElementById("foto-destacada");

    if (fotoDestacada) {
        fotoDestacada.style.backgroundImage =
            `url('${imagenAleatoria}')`;
    }

    // ==========================
    // SLIDERS (PROTEGIDO)
    // ==========================
    const sliders =
        document.querySelectorAll(".slider-container");

    sliders.forEach(contenedor => {

        const slider = contenedor.querySelector(".slider");
        const btnNext = contenedor.querySelector(".next");
        const btnPrev = contenedor.querySelector(".prev");

        if (btnNext && slider) {
            btnNext.addEventListener("click", () => {
                slider.scrollLeft += 400;
            });
        }

        if (btnPrev && slider) {
            btnPrev.addEventListener("click", () => {
                slider.scrollLeft -= 400;
            });
        }
    });

    // ==========================
    // MODAL (PROTEGIDO)
    // ==========================
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal-img");
    const cerrar = document.querySelector(".cerrar");

    if (modal && modalImg && cerrar) {

        document.querySelectorAll(".slider img")
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
            if (e.target === modal) {
                modal.classList.remove("activo");
            }
        });
    }

});