const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./configBD');  // Importamos la configuración de la base de datos

const app = express();
const port = 3000;

// Configuración de Express
app.set('view engine', 'ejs');  // Usamos EJS como motor de plantillas
app.use(bodyParser.urlencoded({ extended: true }));  // Para poder leer los datos de formularios
app.use(express.static(path.join(__dirname, 'public')));  // Servir archivos estáticos (CSS, JS, imágenes, etc.)

// Ruta para mostrar todos los dinosaurios
app.get('/', (req, res) => {
    const query = 'SELECT * FROM dinosaurios';  // Consulta para obtener todos los dinosaurios
    db.query(query, (err, resultados) => {
        if (err) {
            console.error('Error al obtener los dinosaurios:', err);
            res.send('Error');
        } else {
            res.render('index', { dinosaurios: resultados });  // Renderiza la página index.ejs con los dinosaurios
        }
    });
});

// Ruta para mostrar formulario de agregar un dinosaurio
app.get('/agregar', (req, res) => {
    res.render('agregar');  // Muestra el formulario de agregar dinosaurio
});

// Ruta para procesar agregar un dinosaurio
app.post('/agregar', (req, res) => {
    const { nombre, tipo, periodo, dieta, longitud, peso, descubrimiento } = req.body;
    const query = 'INSERT INTO dinosaurios (nombre, tipo, periodo, dieta, longitud, peso, descubrimiento) VALUES (?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [nombre, tipo, periodo, dieta, longitud, peso, descubrimiento], (err) => {
        if (err) {
            console.error('Error al agregar el dinosaurio:', err);
            res.send('Error');
        }
        res.redirect('/');  // Redirige a la página principal después de agregar el dinosaurio
    });
});

// Ruta para mostrar formulario de edición de un dinosaurio
app.get('/editar/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM dinosaurios WHERE id = ?', [id], (err, resultado) => {
        if (err) {
            console.error('Error al obtener el dinosaurio para editar:', err);
            res.send('Error');
        } else {
            res.render('editar', { dinosaurio: resultado[0] });  // Muestra los datos del dinosaurio para editar
        }
    });
});

// Ruta para procesar la edición de un dinosaurio
app.post('/editar/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, tipo, periodo, dieta, longitud, peso, descubrimiento } = req.body;
    const query = 'UPDATE dinosaurios SET nombre=?, tipo=?, periodo=?, dieta=?, longitud=?, peso=?, descubrimiento=? WHERE id=?';
    
    db.query(query, [nombre, tipo, periodo, dieta, longitud, peso, descubrimiento, id], (err) => {
        if (err) {
            console.error('Error al editar el dinosaurio:', err);
            res.send('Error');
        }
        res.redirect('/');  // Redirige a la página principal después de editar el dinosaurio
    });
});

// Ruta para eliminar un dinosaurio
app.get('/eliminar/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM dinosaurios WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('Error al eliminar el dinosaurio:', err);
            res.send('Error');
        }
        res.redirect('/');  // Redirige a la página principal después de eliminar el dinosaurio
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});