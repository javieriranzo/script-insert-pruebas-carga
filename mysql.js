const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '270792',
    database: 'pruebas'
})

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log("Conectado a la base de datos"); 
    }
})

const selectAllSQL = "SELECT * FROM trabajadores"

for (let i = 0; i < 5000; i++) {
    const insertSQL = "INSERT INTO trabajadores (id, nombre, apellidos, dni) values (NULL, 'Javier" + i + "', 'Iranzo" + i +  "Rebenaque" + i + "', '4591061" + i + "Q')"
    connection.query(insertSQL, (err, rows) => {
        if (err) throw err
    })
}


connection.query(selectAllSQL, (err, rows) => {
    if (err) {
        throw err;
    } else {
        console.log("Los datos de la tabla son: "); 
        console.log(rows); 
    }
})



connection.end();