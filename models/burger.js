const orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb){
        // console.log('models hit --------------Good')
        orm.selectAll("burgers", function(res){
            cb(res)
        });
        
    },
    insertOne: function(cols, vals, cb){
        // console.log("insertOne Hit---------------Good")
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb){
        // console.log("updateOne Hit ---------------Good")
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
}

module.exports = burger;