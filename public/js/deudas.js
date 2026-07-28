console.log("🔥 deudas.js cargado");

// ==========================
// CONTENEDOR
// ==========================
const tablaMiguel =
document.getElementById("tabla-miguel");

const tablaCamila =
document.getElementById("tabla-camila");

// ==========================
// ESTADO LOCAL
// ==========================
let deudas = [];

// ==========================
// CARGAR DEUDAS (READ)
// ==========================
async function cargarDeudas() {

    try {

        console.log("📡 Cargando deudas desde API...");

        const res = await fetch("/api/deudas");
        deudas = await res.json();

        console.log("📦 Datos recibidos:", deudas);

        renderDeudas();

        actualizarResumen();

    } catch (error) {

        console.log("❌ Error cargando deudas:", error);

    }

}

function crearTabla(lista){

    if(lista.length===0){

        return "<p>No hay registros.</p>";

    }

    let html = `

    <table class="tabla-deudas">

        <thead>

            <tr>

                <th>Título</th>
                <th>Descripción</th>
                <th>Acreedor</th>
                <th>Estado</th>
                <th>Acciones</th>

            </tr>

        </thead>

        <tbody>

    `;

    lista.forEach(d=>{

        const estadoClase = (d.estado || "")
            .toLowerCase()
            .replace(/\s+/g, "-");

        html += `

        <tr class="${estadoClase}">

            <td>${d.titulo}</td>

            <td>${d.descripcion}</td>

            <td>${d.acreedor}</td>

            <td>${d.estado}</td>

            <td>

                <button onclick="cambiarEstado('${d._id}','Pagado')">

                    ✔

                </button>

                <button onclick="cambiarEstado('${d._id}','Pendiente')">

                    ⏳

                </button>

                <button onclick="cambiarEstado('${d._id}','En curso')">

                    🔄

                </button>

                <button onclick="eliminarDeuda('${d._id}')">

                    🗑

                </button>

            </td>

        </tr>

        `;

    });

    html += `

        </tbody>

    </table>

    `;

    return html;

}

function renderDeudas(){

    const miguel = deudas.filter(d =>
        d.deudor.toLowerCase()=="miguel"
    );

    const camila = deudas.filter(d =>
        d.deudor.toLowerCase()=="camila"
    );

    tablaMiguel.innerHTML = crearTabla(miguel);

    tablaCamila.innerHTML = crearTabla(camila);

    actualizarResumen();

}

// ==========================
// CAMBIAR ESTADO (PATCH)
// ==========================
async function cambiarEstado(id, estado) {

    try {

        await fetch(`/api/deudas/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ estado })
        });

        cargarDeudas();

    } catch (error) {
        console.log("❌ Error actualizando estado:", error);
    }
}

// ==========================
// ELIMINAR DEUDA (DELETE)
// ==========================
async function eliminarDeuda(id) {

    try {

        await fetch(`/api/deudas/${id}`, {
            method: "DELETE"
        });

        cargarDeudas();

    } catch (error) {
        console.log("❌ Error eliminando deuda:", error);
    }
}


// ==========================
// INICIALIZAR
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    cargarDeudas();
});

function actualizarResumen(){

    console.log("Entró a actualizarResumen");

    let miguelDebe = 0;
    let camilaDebe = 0;
    let total = deudas.length;
    let pagadas = 0;

    deudas.forEach(d => {

        console.log(d.deudor, d.estado);

        if(d.deudor === "Miguel"){
            miguelDebe++;
        }

        if(d.deudor === "Camila"){
            camilaDebe++;
        }

        if(d.estado === "Pagado"){
            pagadas++;
        }

    });

    console.log({
        miguelDebe,
        camilaDebe,
        total,
        pagadas
    });

    document.getElementById("miguel-debe").textContent = miguelDebe;
    document.getElementById("camila-debe").textContent = camilaDebe;
    document.getElementById("total-deudas").textContent = total;
    document.getElementById("deudas-pagadas").textContent = pagadas;

}


// ==========================
// CREAR DEUDA
// ==========================

document.getElementById("btn-crear").addEventListener("click", crearDeuda);

async function crearDeuda() {

    const nuevaDeuda = {
        titulo: document.getElementById("titulo").value.trim(),
        descripcion: document.getElementById("descripcion").value.trim(),
        deudor: document.getElementById("deudor").value,
        acreedor: document.getElementById("acreedor").value,
        estado: "Pendiente"
    };

    // validación básica
    if (!nuevaDeuda.titulo || !nuevaDeuda.deudor || !nuevaDeuda.acreedor) {
        alert("⚠️ Completa todos los campos");
        return;
    }

    try {

        await fetch("/api/deudas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevaDeuda)
        });

        await cargarDeudas();

        resetFormulario(); // 💜 LIMPIA TODO

    } catch (error) {
        console.log("❌ Error creando deuda:", error);
    }
}

// ==========================
// RESET FORMULARIO (100% SEGURO)
// ==========================

function resetFormulario() {

    const inputs = document.querySelectorAll(".form-deudas input");
    const selects = document.querySelectorAll(".form-deudas select");

    inputs.forEach(input => input.value = "");
    selects.forEach(select => select.selectedIndex = 0);

}

