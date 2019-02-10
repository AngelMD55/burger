// Set up MYSQL connection
const mysql = require("mysql");
const passwordFile = require("../password.js");
const mysqlPassword = process.env.password;
let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
    host: "k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "nqknq639d7vbfc0d",
    password: "x4ua61z595l63ztn",
    database: "xgv6yr9tnfq5h3mh"
});

//Make Connection
connection.connect(function(err){
    if (err){
        console.log("error connection: " + err.stack);
        return;
    }
    console.log("connected ad id " + connection.threadId);
})

module.exports = connection;