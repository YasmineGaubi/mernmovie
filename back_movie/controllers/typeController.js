const express = require("express");
const Type = require("./../models/type");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    msg: "Welcome to typeController",
  });
});

app.post("/add", (req, res) => {
  //sna3na objet  w recuperation des donnees de postman
  // let data = req.body; // req.body howa elli fi west el balise form el KOOOL elli jeya mil front 

  let type = new Type({  //model

    name: req.body.name,
  });

  type
    .save()
    .then(() => {
      res.status(200).send({ msg: "Added to DB" });
    })
    .catch(() => {
      res.status(400).send({ msg: "Error add" });
    });
});

app.get("/all", (req, res) => {
  Type
    .find()
    .then(datafromdb => {
      res.status(200).send(datafromdb);
    })
    .catch(() => {
      res.status(400).send({ msg: "Cannot find" });
    });
});

app.get("/one/:id", (req, res) => {

  let typeId = req.params.id;

  Type
    .findOne({
    _id: typeId,
  })
    .then((searchedType) => {
      if (!searchedType) res.status(404).send({ msg: "Type Not Found" });
      else res.status(200).send(searchedType);
    })
    .catch(() => {
      res.status(400).send({ msg: "Error" }); //exception de code lfou9 yemchi lel catch
    });
});

app.delete("/delete/:id", (req, res) => {

  let typeId = req.params.id;

  Type.findOneAndDelete({
    _id: typeId,
  })
    .then((deletedType) => {
      if (!deletedType) res.status(404).send({ msg: "Cannot delete" });
      else res.status(200).send(deletedType);
    })
    .catch(() => {
      res.status(400).send({ msg: "Error" }); 
    });
});

app.patch("/update/:id", (req, res) => {
  let data = req.body;
  let typeId = req.params.id;

  Type.findOneAndUpdate({ _id: typeId }, data)
    .then((UpdatedType) => {
      if (!UpdatedType) res.status(404).send({ msg: "Cannot update" });
      else res.status(200).send(UpdatedType);
    })
    .catch(() => {
      res.status(400).send({ msg: "Error" }); //exception de code lfou9 yemchi lel catch
    });
});





module.exports = app;
