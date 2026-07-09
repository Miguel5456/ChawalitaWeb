let ultimaMariposa = 0;

document.addEventListener("mousemove", (e) => {

    const ahora = Date.now();

    // Solo una mariposa cada 250 ms
    if (ahora - ultimaMariposa < 250) return;

    ultimaMariposa = ahora;

    const mariposa = document.createElement("img");

    mariposa.src = "Galeria/mariposa.png";

    mariposa.className = "butterfly";

    mariposa.style.left = e.clientX + "px";
    mariposa.style.top = e.clientY + "px";

    mariposa.style.width =
        (18 + Math.random() * 10) + "px";

    mariposa.style.setProperty(
        "--x",
        (Math.random() * 120 - 60) + "px"
    );

    document.body.appendChild(mariposa);

    setTimeout(() => {

        mariposa.remove();

    }, 2500);

});

/* ==========================
   CORAZONES AL HACER CLICK
========================== */

document.addEventListener("click",(e)=>{

    for(let i=0;i<8;i++){

        const heart =
        document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤";

        heart.style.left =
        e.clientX + (Math.random()*40-20) + "px";

        heart.style.top =
        e.clientY + (Math.random()*40-20) + "px";

        heart.style.color =
        `hsl(${290 + Math.random()*30},70%,75%)`;

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },900);

    }

});

