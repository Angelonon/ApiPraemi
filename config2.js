const mysql = require('mysql');
const config = {
    host: 'localhost',
    user: 'root',
    password:'1234',
    database: 'praemi',
    waitForConnections: true,
    connectionLimit:  2,
    queueLimit: 0,
    debug: false,
    port:3306
};
const pool = mysql.createPool(config);
module.exports = pool;