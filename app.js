import express from "express";
import pug from "pug";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Importar rutas
import rutasIngredientes from "./routes/rutasIngredientes.js";
import rutasProveedores from "./routes/rutasProveedores.js";

// Cargar variables de entorno
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PUERTO = process.env.PORT || 3000;

// Configurar motor de plantillas Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Sistema de Gestión de Restaurante",
  });
});

app.use("/ingredientes", rutasIngredientes);
app.use("/proveedores", rutasProveedores);

// Iniciar servidor
app.listen(PUERTO, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PUERTO}`);
  console.log("Rutas disponibles:");
  console.log("  - GET  / (Página principal)");
  console.log("  - GET  /ingredientes (Lista de ingredientes)");
  console.log("  - GET  /ingredientes/create (Formulario crear ingrediente)");
  console.log("  - POST /ingredientes (Crear ingrediente)");
  console.log(
    "  - GET  /ingredientes/:id/edit (Formulario editar ingrediente)"
  );
  console.log("  - POST /ingredientes/:id (Actualizar ingrediente)");
  console.log("  - POST /ingredientes/:id/delete (Eliminar ingrediente)");
  console.log("  - GET  /proveedores (Lista de proveedores)");
  console.log("  - GET  /proveedores/create (Formulario crear proveedor)");
  console.log("  - POST /proveedores (Crear proveedor)");
  console.log("  - GET  /proveedores/:id/edit (Formulario editar proveedor)");
  console.log("  - POST /proveedores/:id (Actualizar proveedor)");
  console.log("  - POST /proveedores/:id/delete (Eliminar proveedor)");
});
