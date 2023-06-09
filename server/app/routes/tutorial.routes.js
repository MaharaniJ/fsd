module.exports = app=>{
    const tutorials=require("../controllers/tutorial.controller")
    const router = require("express").Router()

    //create a new tutorial
    router.post("/",tutorials.create);
    //Retrieve all tutorials
    router.get("/",tutorials.findAll);
        //Retrieve a single tutorial with id
        router.get("/:id",tutorials.findOne);
        //Retrieve all published tutorials
        router.get("/published",tutorials.findAllPublished);
        //Update a tutorial with id
        router.put("/:id",tutorials.update);
        //Delete a tutorial with id
        router.delete("/:id",tutorials.delete);
        router.delete("/",tutorials.deleteAll);

        app.use("api/tutorials", router)
}