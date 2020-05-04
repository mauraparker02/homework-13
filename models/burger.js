var orm = require("../config/orm.js");

var burgerModel= {
    
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res); //here should callback the function to get all the databack
        })
    },

    createNew: function(name, cb) {
        orm.createNew(name, function(res){
            cb(res);
        })
    },

    updateTable: function(change, id, cb) {
        orm.updateTable(change, id, function(res){
            cb(res);
        })
    },

    delete: function(id, cb) {
        orm.delete(id, function(res){
            cb(res);
        })
    }
    
}

module.exports=burgerModel;