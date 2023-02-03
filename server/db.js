//import { createPool } from "mysql2/promise";
const { createPool } = require("mysql2/promise");
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Con este pool podremos ejecutar consultas a la base de datos

// crear pool de conexiones a la base de datos

const pool = createPool({
  host: DB_HOST, // -p en el terminal para ver el puerto de mysql
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

module.exports = pool;