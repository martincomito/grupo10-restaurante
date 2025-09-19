# Sistema de Gestión de Restaurante

Sistema web para gestionar el stock de ingredientes y proveedores de un restaurante.

## Características

- **Módulo de Stock de Ingredientes**: Gestión completa de inventario con CRUD
- **Módulo de Proveedores**: Administración de información de proveedores
- **Interfaz Web**: Plantillas Pug con diseño responsive
- **Base de Datos JSON**: Almacenamiento en archivos JSON (sin base de datos real)
- **ESM**: Utiliza módulos ECMAScript (import/export)

## Estructura del Proyecto

```
grupo10-restaurante/
├── app.js                 # Archivo principal de la aplicación
├── package.json           # Configuración y dependencias
├── .env                   # Variables de entorno
├── data/                  # Base de datos JSON
│   ├── ingredientes.json  # Datos de ingredientes
│   └── proveedores.json   # Datos de proveedores
├── models/                # Modelos de datos
│   ├── Ingrediente.js     # Modelo para ingredientes
│   └── Proveedor.js       # Modelo para proveedores
├── controllers/           # Controladores
│   ├── ingredienteController.js
│   └── proveedorController.js
├── routes/                # Rutas de la aplicación
│   ├── ingredientes.js
│   └── proveedores.js
└── views/                 # Plantillas Pug
    ├── layout.pug         # Layout base
    ├── index.pug          # Página principal
    ├── error.pug          # Página de error
    ├── ingredientes/      # Vistas de ingredientes
    │   ├── index.pug
    │   ├── create.pug
    │   └── edit.pug
    └── proveedores/       # Vistas de proveedores
        ├── index.pug
        ├── create.pug
        └── edit.pug
```

## Instalación

1. **Instalar dependencias**:

   ```bash
   npm install
   ```

2. **Configurar variables de entorno**:
   El archivo `.env` ya está configurado con el puerto 3000. Puedes modificarlo si necesitas otro puerto.

3. **Ejecutar la aplicación**:

   ```bash
   npm start
   ```

   O para desarrollo con auto-reload:

   ```bash
   npm run dev
   ```

4. **Acceder a la aplicación**:
   Abre tu navegador en `http://localhost:3000`

## Funcionalidades

### Stock de Ingredientes

- **Ver lista**: Visualizar todos los ingredientes con cantidad, precio y fecha de vencimiento
- **Agregar**: Crear nuevos ingredientes con toda la información necesaria
- **Editar**: Modificar datos de ingredientes existentes
- **Eliminar**: Remover ingredientes del inventario

### Proveedores

- **Ver lista**: Listar todos los proveedores con información de contacto
- **Agregar**: Registrar nuevos proveedores
- **Editar**: Actualizar información de proveedores
- **Eliminar**: Remover proveedores del sistema

## Estructura de Datos

### Ingredientes

```json
{
  "id": 1,
  "nombre": "Tomate",
  "cantidad": 50,
  "unidad": "kg",
  "precio": 2.5,
  "fechaVencimiento": "2024-02-15",
  "categoria": "Vegetales"
}
```

### Proveedores

```json
{
  "id": 1,
  "nombre": "Distribuidora Fresh Foods",
  "contacto": "Juan Pérez",
  "telefono": "+54 11 1234-5678",
  "email": "juan@freshfoods.com",
  "direccion": "Av. Corrientes 1234, CABA",
  "productos": ["Vegetales", "Frutas"],
  "activo": true
}
```

## Rutas Disponibles

### Página Principal

- `GET /` - Página de inicio con enlaces a los módulos

### Ingredientes

- `GET /ingredientes` - Lista de ingredientes
- `GET /ingredientes/create` - Formulario para crear ingrediente
- `POST /ingredientes` - Crear nuevo ingrediente
- `GET /ingredientes/:id/edit` - Formulario para editar ingrediente
- `POST /ingredientes/:id` - Actualizar ingrediente
- `POST /ingredientes/:id/delete` - Eliminar ingrediente

### Proveedores

- `GET /proveedores` - Lista de proveedores
- `GET /proveedores/create` - Formulario para crear proveedor
- `POST /proveedores` - Crear nuevo proveedor
- `GET /proveedores/:id/edit` - Formulario para editar proveedor
- `POST /proveedores/:id` - Actualizar proveedor
- `POST /proveedores/:id/delete` - Eliminar proveedor

## Tecnologías Utilizadas

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **Pug** - Motor de plantillas
- **dotenv** - Gestión de variables de entorno
- **ESM** - Módulos ECMAScript

## Desarrollo

El proyecto utiliza módulos ES6, por lo que no se requiere Babel ni configuración adicional. Los archivos JSON actúan como base de datos simple, perfecto para desarrollo y testing.

## Notas

- Los datos se almacenan en archivos JSON en la carpeta `data/`
- El sistema incluye validación básica en los formularios
- Las plantillas incluyen estilos CSS básicos integrados
- El sistema es completamente funcional sin base de datos externa
