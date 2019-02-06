// Importing mysql connection
const connection = require("./connection");

//Helper function for SQL syntax
function printQuestionMarks(num){
    let arr = [];
    for (let i = 0; i < num; i++){
        arr.push("?")
    }
    return arr.toString();
}

//Helper function to conver object key/value pairs to SQL syntax

function objToSql(ob){
    let arr = [];

    for (let key in ob){
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)){
            if (typeof value === "string" && value.indexOf(" ") >=0){
                value ="'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function(tableInput){
        const queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableInput], function(err, result){
            if(err) throw err;
            console.log(result);
        })
    },
    insertOne: function(table, cols, vals, cb){
        const queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if (err) throw err;

            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb){
        const queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += "WHERE";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;