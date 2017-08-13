let mongoose = require("mongoose");
let contactSchema =  mongoose.Schema({
    firstname : {
        type : String,
        required : true   
    },
    lastname : {
        type : String,
        required : true   
    },
    phone : {
        type : String,
        required : true   
    }
});
const contactModel = mongoose.model("dataModel", contactSchema);
module.exports = contactModel;