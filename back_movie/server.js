//serves.js : Router

//import libraries
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
require("./db/config");
const typeController = require("./controllers/typeController"); //on a importe app de typcontroller
const MovieController = require("./controllers/MovieController");
const ClientController = require("./controllers/ClientController");
const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.get("/:id/:idpost/:idphoto", (req, res) => {
//   const { id ,idpost , idphoto} = req.params ;
//   res.status(200).send({
//     msg: `Le Id que vous avez passé en parametre est = ${idpost} ${id} ${idphoto}`,
//   });
// });


// const hetelprofile = (req,res,next)=>{
//        console.log(req.params.username);  
//        next();          
// }
// const hetelmdp = (req,res)=>{
//   console.log(req.params.password); 
//   res.status(200).send({
//     msg: `C bon ya ${req.params.username} les deux params w traitement mta les deux fonctions sarou`,
//   });           
// }


// app.get('/:username/:password',hetelprofile,hetelmdp);


app.use("/type", typeController);
app.use("/movie",MovieController);
app.use("/client",ClientController)




//creation serveur
app.listen(3100, () => console.log("Server started"));
