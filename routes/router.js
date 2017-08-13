let express = require("express");
let router = express.Router();
let dataModel = require("../database/database");

router.get("/", (req, res, next) => {
    res.send("Home");
})

router.get("/contacts", (req, res, next) => {
    dataModel.find((err, data) => {
        if(err){
            res.json("Oops something went wrong");
        }else{
            res.json(data);
        }
    });
});
router.post("/contacts", (req, res, next) => {
    let data = new dataModel({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            phone : req.body.phone
        });
        data.save((err, contact) => {
            if(err){
                res.json({msg : "Cannot add to database"});
            }else{
                res.json(contact);
            }
        });
});

router.delete("/contacts/:id", (req, res, next) => {
    dataModel.findOneAndRemove(req.params.id, (err, success) => {
        if(err){
            res.json(err);
        }else{
            res.json(success);
        }
    })
})
module.exports = router;