

import mysql from 'mysql'

// conexion en mysql

const conexionmysql = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test',
    port:3306
});


export {conexionmysql};

 