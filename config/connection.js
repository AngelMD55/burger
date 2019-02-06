// Set up MYSQL connection
const mysql = require("mysql");
const passwordFile = require("../password.js");
const mysqlPassword = process.env.password;
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: mysqlPassword,
    database: "burgers_db"
});

//Make Connection
connection.connect(function(err){
    if (err){
        console.log("error connection: " + err.stack);
        return;
    }
    console.log("connected ad id " + connection.threadId);
});

module.exports = connection;