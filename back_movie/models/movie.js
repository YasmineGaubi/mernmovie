const mongoose = require("mongoose");
const  {ObjectId ,Types }  = mongoose.Schema;

// mongoose.schema = {
//     ObjectId: fun
// }


const Movie = mongoose.model("movies", {
    title:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    poster:{
        type:String,
        required:true
    },
    id_type: {
      type: String ,
    //   ref: "types", //nom de la collection du model Type
      required: true,
    },
    type: {
      type:Types.Mixed,     
      required: true,
    },
});


//nekhdmou API mtaa l movies
//fel ajout najouti:  title, year, poster, id_type
//a partir mel id kifeh nzid el type

module.exports = Movie;



/* 

const mongoose = require("mongoose");
const uuidv1 = require("uuid/v1");
const { ObjectId } = mongoose.Schema;


const EntrepriseSchema = new mongoose.Schema({
    nom_entreprise: {
        type: String,
    },email: {
        type: String,
        trim: true,
    },
    nom_responsable: {
        type: String,
    },
    photo: {
        data: Buffer,
        contenType: String
    }, 
    telephone: {
        type: String,
    },
    adresse: {
        type: String,
    },
    
    localisation: {
        type: String,
    },
     
   
    domaine_activite: {
        type: String,
    },
    type_entreprise: {
        type: String,
    },
    description: {
        type: String,
    },
    

   
    kind: {
        type: ObjectId,
        ref:'User'
    }
});




module.exports = mongoose.model("entreprise", EntrepriseSchema);


*/
