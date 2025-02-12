const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde "public"
app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Ruta API simple
app.get("/api", (req, res) => {
  res.json({ message: "Hola desde la API en Azure primer intento 🚀" });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
