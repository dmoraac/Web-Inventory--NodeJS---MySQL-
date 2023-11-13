// Instancias.
const express = require('express');
const path = require('path');
const morgan = require('morgan'); // Morgan: Utilizado para recibir las peticiones de las vistas solicitadas por el usuario.
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

// Importando Rutas.
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

// Ajustes
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs'); // Motor de plantillas EJS.
app.set('views', path.join(__dirname, 'views')); // Declaración de la configuración de la ubicación de la carpeta VIEWS.

// Middleware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'inventory_db'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// Rutas
app.use('/', userRoutes);
app.use('/', productRoutes);

// Archivos estáticos.
app.use(express.static(path.join(__dirname, 'public')));

// Inicializando el Servidor.
app.listen(app.get('port'), () => {
    console.log('Servidor en http://localhost:3000');
});