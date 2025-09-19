import express from "express";
import {
  obtenerTodosProveedores,
  mostrarFormularioCrear,
  crearProveedor,
  mostrarFormularioEditar,
  actualizarProveedor,
  eliminarProveedor,
} from "../controllers/controladorProveedores.js";

const router = express.Router();

// GET /proveedores - Mostrar todos los proveedores
router.get("/", obtenerTodosProveedores);

// GET /proveedores/create - Mostrar formulario para crear nuevo proveedor
router.get("/create", mostrarFormularioCrear);

// POST /proveedores - Crear nuevo proveedor
router.post("/", crearProveedor);

// GET /proveedores/:id/edit - Mostrar formulario para editar proveedor
router.get("/:id/edit", mostrarFormularioEditar);

// POST /proveedores/:id - Actualizar proveedor
router.post("/:id", actualizarProveedor);

// POST /proveedores/:id/delete - Eliminar proveedor
router.post("/:id/delete", eliminarProveedor);

export default router;
