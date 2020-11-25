//library bech tasneelna classe : mongoose
const mongoose = require("mongoose");
//Type class donc T maj
const Type = mongoose.model("types", { //types heya lcollections fiha attribut name
    name:{
        type: String,
        required:true,
        unique:true,

    }
})





module.exports= Type;