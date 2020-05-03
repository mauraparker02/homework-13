var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// throw in some routes in here eventually once I get the ORM working. 
router.get("/", function(req,res){
    console.log("working");
    burger.selectAll(function(data){
        res.render("index", {
            burger: data
        })
    })
})

router.post("/api/create/:burger", function(req, res){
    console.log(req.params.burger);
    burger.createNew(req.params.burger, function(data){
        console.log(data)
        res.redirect("/");
    })
})

router.put("/api/change/:booleen/:id", function(req, res) {
    console.log(req.params.booleen, req.params.id)
    if(req.params.booleen == "1"){
        var change = false;
    }else if(req.params.booleen == "0"){
        var change = true;
    }
    console.log(change)
    burger.updateTable(change, req.params.id, function(data){
        console.log(data)
    })
})

router.delete("/api/delete/:id", function(req, res){
    burger.delete(req.params.id, function(data){
        res.redirect("/");
    })
})

module.exports = router;


module.exports = router;