const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar Cors
app.use(cors());
app.options("*", cors());

// Habilitar express.json
app.use(express.json({extended : true }));

// puerto de la app
const PORT = process.env.PORT || 4000;

// ImPORTar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

// arrancar la app
app.listen(PORT,'0.0.0.0',()=>{
    console.log(`El servidor esta funcionando el el puerto ${PORT}`);
});
