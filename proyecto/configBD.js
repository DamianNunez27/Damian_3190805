const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',           // Tu usuario de MySQL
    password: 'root',     // Tu contraseña de MySQL
    database: 'dinosaurios' // El nombre de la base de datos
});

// Verifica la conexión
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;