const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json()); // A aplicaçao passa a entender as requests como JSON
app.use(routes);
/*
    * Métodos HTTP:
    * GET: Buscar uma informação do back-end
    * POST: Criar uma informação no back-end
    * PUT: Alterar uma informação no back-end
    * DELETE: Deletar uma informação no back-end
*/

/**
    * Tipos de parâmetros:
    * 
    * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
    * Route Params: Parâmetros utilizados para identificar recursos
    * Request Body: Corpo da requisição utilizado para criar ou alterar usuários
 */

 /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc 
 */

 /**
    * Formas de se comunicar com o banco
    * Drivers: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
  */

app.listen(3333);