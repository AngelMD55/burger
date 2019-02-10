var mysql = require("mysql");
//connected to my localhost db via mySQL workshop and NPM package

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "nqknq639d7vbfc0d",
        password: "x4ua61z595l63ztn",
        database: "xgv6yr9tnfq5h3mh"

    });
}


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return err;
    }
    console.log("Connection id: " + connection.threadId);
});

//if my connection was successful console log  the thread id

module.exports = connection;