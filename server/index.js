//import express from "express"; // "type": "module", in package.json. Para poder importar modulos
require("dotenv").config();
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const express = require("express");
//import { PORT } from "./config"; // Importar modulo config.js, con extension por que lo cree yo
const cors = require("cors");
//import cors from "cors";

const indexRoutes = require("./routes/index.routes");
const taskRoutes = require("./routes/tasks.routes");
//import indexRoutes from "./routes/index.routes"; // Importar modulo index.routes.js, con extension por que lo cree yo
//import taskRoutes from "./routes/tasks.routes"; // Importo todo con el nombre taskRoutes

const app = express(); // Guardar modulo importado en la constante app

// cors es un middleware que nos permite controlar el acceso a los recursos de un servidor
// origin es la url de donde se va a consumir el servidor
// cors() por defecto permite el acceso a todos los recursos
//app.use(cors({
//    origin: "http://localhost:5173"
//}));
app.use(cors());

app.use(express.json()); // (ANTES QUE LLEGUEN A LAS RUTAS PROCESAR LOS DATOS DEL CLIENTES

app.use(indexRoutes); // Usar modulo index.routes.js
app.use(taskRoutes); // Las rutas me devuelven los mensajes

const PORTED = process.env.PORT || 4000

app.listen(PORTED); // Escuchar o ejecutar en el puerto 3000

console.log(`Server is listening on port: ${PORTED}`); // Imprimir en consola
console.log('DB config ', DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT); // Imprimir en consola