let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let cors = require("cors");
let mongoose = require("mongoose");
let router = require("./routes/router");
let port = 3000;
let app = express();

//Connection to database
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/contactList", (err, success) => {
    if(err){
        console.log(err);
    }else{
        console.log("Database connected successfully")
    }
});
//Middlewares
app.use(cors());
app.use(bodyParser.json());

//static files 
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/api", router);

//Server creation
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});