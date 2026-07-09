require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Servir frontend (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("🍃 Conectado a MongoDB"))
.catch(err => console.log("Error MongoDB:", err));

// Rutas API
const deudasRoutes = require("./routes/deudas");
app.use("/api/deudas", deudasRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "public", "Index.html"));

});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});