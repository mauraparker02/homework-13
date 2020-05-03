var orm = require("../config/orm.js");

var burgerModel= {
    
    selectAll: function(cb) {
        orm.all(function(res) {
            cb(res);
        })
    },

    createNew: function(name, cb) {
        orm.create(name, function(res){
            cb(res);
        })
    },

    updateTable: function(change, id, cb) {
        orm.update(change, id, function(res){
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