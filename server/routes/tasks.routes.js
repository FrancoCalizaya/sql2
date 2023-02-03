//import { Router } from "express"; // Para poder usar el metodo Router de express
const { Router } = require("express"); // Para poder usar el metodo Router de express
const router = Router(); // Guardar el metodo Router en la constante router
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require ("../controllers/tasks.controllers");

// get para obtener datos
// post enviar datos
// put actualizar datos
// delete eliminar datos

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

//export default router; // Exportar el modulo router
module.exports = router; // Exportar el modulo router
