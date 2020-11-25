const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Client = require("./../models/client");

const app = express();

app.post("/register", async (req, res) => {
  try {
    let data = req.body;

    let client = new Client({
      firstname: data.firstname,
      lastname: data.lastname,
      phone: data.phone,
      email: data.email,
      password: bcrypt.hashSync(data.password, bcrypt.genSaltSync(10)),
    });

    await client.save();
    res.status(201).send({ msg: "Client added to DB" });
  } catch (e) {
    res.status(400).send("Error");
  }
});

app.post("/login", async (req, res) => {
  try {
    let data = req.body;

    let client = await Client.findOne({ email: data.email });

    if (!client) {
      res.status(404).send({ msg: "Client not found" });
    } else {
      let compare = bcrypt.compareSync(data.password, client.password);

      if (!compare) {
        res.status(404).send({ msg: "false password dismatch" });
      } else {
        let token = jwt.sign({ idClient: client._id }, "ParentKey");
        res.status(200).send({ mytoken: token });
      }
    }
  } catch (e) {
    res.status(400).send("Error");
  }
});

module.exports = app;

//token nkhabiw fih maaloumet jeya mel front exple id client w yabaath chaine de caract cryptee
//token yetsajel fel localstorage
//ken fama fel localstorage token fama chkoun cnct sinon ken mafamech token mafama had cnct
//nemchi localstorage nekhou token ndecryptih w bel id client taamel li theb bl APIS
//fel logout localstorage yetfasakh men token
