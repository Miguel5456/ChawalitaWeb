/* =====================================
            CANVAS
===================================== */

const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

function resize(){

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize", resize);


/* =====================================
            CONFIGURACIÓN
===================================== */

const gotas = [];

const cantidad = 350;


/* =====================================
            GOTA
===================================== */

class Gota{

    constructor(){

        this.reset(true);

    }

    reset(inicio = false){

        this.x = Math.random()*canvas.width;

        this.y = inicio
            ? Math.random()*canvas.height
            : -40;

        this.longitud = 12 + Math.random()*22;

        this.velocidad = 8 + Math.random()*8;

        this.alpha = 0.15 + Math.random()*0.35;

    }

    update(){

        this.x -= 0.35;

        this.y += this.velocidad;

        if(this.y > canvas.height + 50){

            this.reset();

        }

    }

    draw(){

        ctx.beginPath();

        ctx.strokeStyle =
        `rgba(220,235,255,${this.alpha})`;

        ctx.lineWidth = 1;

        ctx.moveTo(this.x,this.y);

        ctx.lineTo(

            this.x-2,

            this.y+this.longitud

        );

        ctx.stroke();

    }

}


/* =====================================
            CREAR
===================================== */

for(let i=0;i<cantidad;i++){

    gotas.push(new Gota());

}


/* =====================================
            LOOP
===================================== */

function lluvia(){

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

    gotas.forEach(g=>{

        g.update();

        g.draw();

    });

    requestAnimationFrame(lluvia);

}

lluvia();

