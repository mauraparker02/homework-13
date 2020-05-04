// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers;", function(err, result){
            if (err) {throw err};
            cb(result); //callback function that should select all the data from the table burgers 
        })
    },

    createNew: function(name,cb) {
        console.log(name);
        connection.query(`INSERT INTO burgers (name) VALUES ('${name}');`, function(err, result){
            if (err) {throw err};
            cb(result); 
        })
    },

    updateTable: function(change,id,cb){
        console.log(change, id);
        connection.query(`UPDATE burgers SET ate = ${change} WHERE id=${id};`, function(err,result){
            if (err) {throw err};
            cb(result); 
        })
    },

    delete: function(id,cb) {
        connection.query(`DELETE FROM burgers WHERE id=${id}`, function(err,result){
            if (err) {throw err};
            cb(result); 
        })
    }
}

// Export the orm object for the model
module.exports = orm;
