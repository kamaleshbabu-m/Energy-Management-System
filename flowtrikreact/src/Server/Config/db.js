const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "12345",
database:"cimsdev" 
})

module.exports = db;