const { Router } = require("express");

module.exports= app =>{
    const admindbs = require("../controllers/admindb.controller.js");
    var router=require("express").Router();
    router.post("/", admindbs.create);
    router.put("/:id",admindbs.update);
    router.delete("/:id",admindbs.delete);
    router.delete("/",admindbs.deleteAll);
    router.get("/:id",admindbs.readSingle);

    router.get("/",admindbs.findAll);
    router.get("/publish",admindbs.findAllPublished);
    app.use('/api/admindbs',router);
    

};