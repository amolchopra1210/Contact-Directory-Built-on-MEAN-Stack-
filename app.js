let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let cors = require("cors");
let mongoose = require("mongoose");
let router = require("./routes/router");
let port = process.env.PORT;
let app = express();

//Connection to database
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://amolchopra:mytimeisnow@ds129043.mlab.com:29043/contactlist", (err, success) => {
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
