var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//this route should grab all the data and render it to the index
    //when the router hits the path / run function for request and response 
        //if that works, it should log working -- this is not the case though it runs a 500 internal server error 
        //then the variable burger should go into the models which is getting data from the ORM for how to configure this functions select all function 
        //then run a function in it that takes in data 
        //the response should render this data to "index" in views which is the handlebars 
router.get("/", function(req,res){
    console.log("working"); 
    burger.selectAllBurger(function(data){
        res.render("index", {
            burger: data
        })
    })
})

router.post("/api/create/:burger", function(req, res){
    console.log(req.params.burger);
    burger.createNewBurger(req.params.burger, function(data){
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
    burger.updateBurger(change, req.params.id, function(data){
        console.log(data)
    })
})

router.delete("/api/delete/:id", function(req, res){
    burger.deleteBurger(req.params.id, function(data){
        res.redirect("/");
    })
})

module.exports = router;