import express from "express";
import pug from "pug";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";

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
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

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
  console.log("  - GET  /ingredientes/crear (Formulario crear ingrediente)");
  console.log("  - POST /ingredientes (Crear ingrediente)");
  console.log(
    "  - GET  /ingredientes/:id/editar (Formulario editar ingrediente)"
  );
  console.log("  - PUT  /ingredientes/:id (Actualizar ingrediente)");
  console.log("  - DELETE /ingredientes/:id/eliminar (Eliminar ingrediente)");
  console.log("  - GET  /proveedores (Lista de proveedores)");
  console.log("  - GET  /proveedores/crear (Formulario crear proveedor)");
  console.log("  - POST /proveedores (Crear proveedor)");
  console.log("  - GET  /proveedores/:id/editar (Formulario editar proveedor)");
  console.log("  - PUT  /proveedores/:id (Actualizar proveedor)");
  console.log("  - DELETE /proveedores/:id/eliminar (Eliminar proveedor)");
});
