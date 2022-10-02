'use strict'
const express = require ('express');
const morgan = require ('morgan');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');
let peopleRoutes = require ('./routes/people.js');
let pathPublic = express.static (`${__dirname}/public`);
let viewURL = `${__dirname}/views`;
let port = (process.env.PORT || 3000);
let app = express ();
app
    // Configuracion
    .set ('port', port)
    .set ('views', viewURL)
    .set ('view engine', 'ejs')
    // Middlewares
    .use (express.urlencoded ({
        extended: false
    }))
    .use (morgan ('dev'))
    .use (myConnection (mysql, {
        host: 'localhost',
        database: 'CRUD',
        user: 'root',
        password: 'Halloween88',
        port: 3306
    }, 'single'))
    // Rutas
    .use ('/', peopleRoutes)
    // Archivos estaticos
    .use (pathPublic)
    .listen (port, () => {
        console.clear ();
        console.log ('Server on port ' + port);
    });