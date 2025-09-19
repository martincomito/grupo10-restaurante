import express from "express";
import {
  obtenerTodosIngredientes,
  mostrarFormularioCrear,
  crearIngrediente,
  mostrarFormularioEditar,
  actualizarIngrediente,
  eliminarIngrediente,
} from "../controllers/controladorIngredientes.js";

const router = express.Router();

// GET /ingredientes - Mostrar todos los ingredientes
router.get("/", obtenerTodosIngredientes);

// GET /ingredientes/create - Mostrar formulario para crear nuevo ingrediente
router.get("/create", mostrarFormularioCrear);

// POST /ingredientes - Crear nuevo ingrediente
router.post("/", crearIngrediente);

// GET /ingredientes/:id/edit - Mostrar formulario para editar ingrediente
router.get("/:id/edit", mostrarFormularioEditar);

// POST /ingredientes/:id - Actualizar ingrediente
router.post("/:id", actualizarIngrediente);

// POST /ingredientes/:id/delete - Eliminar ingrediente
// ! Intentamos implementar el delete con method-override pero no podemos hacerlo funcionar
router.post("/:id/delete", eliminarIngrediente);

export default router;
