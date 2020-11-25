const mongoose = require("mongoose");


const Client = mongoose.model("clients", {
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,

        required:true
    },
});

module.exports = Client;