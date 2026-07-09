console.log("🔥 deudas.js cargado");

// ==========================
// CONTENEDOR
// ==========================
const contenedor = document.getElementById("contenedor-deudas");

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

    } catch (error) {
        console.log("❌ Error cargando deudas:", error);
    }
}

async function cargarDeudas() {

    try {

        const res = await fetch("/api/deudas");
        deudas = await res.json();

        renderDeudas();

        actualizarResumen(); // 💥 IMPORTANTE

    } catch (error) {
        console.log("❌ Error cargando deudas:", error);
    }
}

// ==========================
// RENDER DEUDAS
// ==========================
function renderDeudas() {

    contenedor.innerHTML = "";

    if (!deudas || deudas.length === 0) {
        contenedor.innerHTML = "<p>No hay deudas registradas 💜</p>";
        return;
    }

    deudas.forEach(d => {

        // ==========================
        // NORMALIZACIÓN SEGURA
        // ==========================
        const estado = (d.estado || "pendiente")
            .toLowerCase()
            .replace(/\s+/g, "-");

        const deudor = (d.deudor || "desconocido")
            .toLowerCase()
            .trim();

        contenedor.innerHTML += `
            <div class="deuda-card ${estado} ${deudor}">

                <h3>${d.titulo || "Sin título"}</h3>
                <p>${d.descripcion || ""}</p>

                <div class="info">
                    <span><b>Deudor:</b> ${d.deudor}</span><br>
                    <span><b>Acreedor:</b> ${d.acreedor}</span>
                </div>

                <div class="estado">
                    ${d.estado}
                </div>

                <div class="botones">

                    <button onclick="cambiarEstado('${d._id}', 'Pagado')">
                        ✔ Pagado
                    </button>

                    <button onclick="cambiarEstado('${d._id}', 'Pendiente')">
                        ⏳ Pendiente
                    </button>

                    <button onclick="cambiarEstado('${d._id}', 'En curso')">
                        🔄 En curso
                    </button>

                    <button onclick="eliminarDeuda('${d._id}')">
                        🗑 Eliminar
                    </button>

                </div>

            </div>
        `;
    });
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

async function crearDeuda() {

    const nuevaDeuda = {
        titulo: document.getElementById("titulo")?.value?.trim(),
        descripcion: document.getElementById("descripcion")?.value?.trim(),
        deudor: document.getElementById("deudor")?.value,
        acreedor: document.getElementById("acreedor")?.value,
        estado: "Pendiente"
    };

    console.log("📤 Enviando deuda:", nuevaDeuda);

    // VALIDACIÓN BÁSICA
    if (!nuevaDeuda.titulo || !nuevaDeuda.deudor || !nuevaDeuda.acreedor) {
        alert("⚠️ Completa todos los campos");
        return;
    }

    try {
        const res = await fetch("/api/deudas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevaDeuda)
        });

        const data = await res.json();
        console.log("📥 Respuesta backend:", data);

        await cargarDeudas(); // 🔥 CLAVE

    } catch (error) {
        console.log("❌ Error creando deuda:", error);
    }
}

// ==========================
// INICIALIZAR
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    cargarDeudas();
});

function actualizarResumen() {

    let miguelDebe = 0;
    let camilaDebe = 0;
    let total = deudas.length;
    let pagadas = 0;

    deudas.forEach(d => {

        const estado = (d.estado || "").toLowerCase();
        const deudor = (d.deudor || "").toLowerCase();

        // contar pagadas
        if (estado === "pagado") {
            pagadas++;
        }

        // deuda por persona
        if (deudor === "miguel") {
            miguelDebe++;
        }

        if (deudor === "camila") {
            camilaDebe++;
        }
    });

    document.getElementById("miguel-debe").textContent = miguelDebe;
    document.getElementById("camila-debe").textContent = camilaDebe;
    document.getElementById("total-deudas").textContent = total;
    document.getElementById("deudas-pagadas").textContent = pagadas;
}

console.log("🔥 deudas.js cargado");

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

