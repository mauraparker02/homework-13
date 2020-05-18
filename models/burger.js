var orm = require("../config/orm.js");

var burgerModel= {
    
    selectAllBurger: function(cb) {
        orm.selectAll(function(res) {
            cb(res); //here should callback the function to get all the databack
        })
    },

    createNewBurger: function(name, cb) {
        orm.createNew(name, function(res){
            cb(res);
        })
    },

    updateBurger: function(change, id, cb) {
        orm.updateTable(change, id, function(res){
            cb(res);
        })
    },

    deleteBurger: function(id, cb) {
        orm.delete(id, function(res){
            cb(res);
        })
    }
    
}

module.exports= burgerModel;