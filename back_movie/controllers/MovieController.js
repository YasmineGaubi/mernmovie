const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./../models/movie");
const Type = require("./../models/type");
//const axios = require("axios")
//const CircularJSON = require('circular-json');

const app = express();

// app.post("/add", (req, res) => {

//     let data = req.body;

//     Type.findOne({ _id: data.id_type })
//         .then((typefromDB) => {
//             if (!typefromDB) {
//                 res.status(404).send("Cannot add Type");
//             } else {

//                 let movie = new Movie({
//                     title: data.title,
//                     year: data.year,
//                     poster: data.poster,
//                     id_type: data.id_type,
//                     type: typefromDB
//                 })

//                 movie
//                     .save()
//                     .then(() => {
//                         res.status(201).send({ msg: "Movie added to DB" });
//                     })
//                     .catch(() => {
//                         res.status(400).send({ msg: "Error add" });
//                     });
//             }
//         })
//         .catch(() => {
//             res.status(400).send({ msg: "Error" });
//         });
// });


//La meme app.post que celle au dessus mais plus optimisée
app.post("/add", async (req,res) => {
    
    try{
        let data = req.body;

        let typefromDB = await Type.findOne({ name:data.id_type});

        let movie = new Movie({
            title: data.title,
                    year: data.year,
                    poster: data.poster,
                    id_type: data.id_type,
                    type: typefromDB
                  })
        await movie.save()
         res.status(201).send({ msg: "Movie added to DB" });

    }catch(e){
        if(e) throw e;
        res.status(400).send("Error")
    }

});

app.get("/all", (req, res) => {
    Movie
      .find()
      .then(datafromdb => {
        res.status(200).send(datafromdb);
      })
      .catch(() => {
        res.status(400).send({ msg: "Cannot find" });
      });
  });
  


// app.get("/search/:searchTerm",(req,res)=>{

//     let searchTerm = req.params.searchTerm;
//     const API_ENDPOINT=`http://www.omdbapi.com/?i=tt3896198&apikey=ce8f84bf&s=${searchTerm}`

//     axios.get(API_ENDPOINT)
//     .then((response) => {
//         if (!response) {
//             res.status(400).send({ msg: "Movie Not Found" })

//         }else{
//          let json = CircularJSON.stringify(response);
//             res.status(200).send(json)
//         }

//    })

//  })

module.exports = app;
