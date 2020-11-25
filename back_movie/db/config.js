const mongoose = require("mongoose");
const MONGODB_URI =
  "mongodb+srv://root:root@cluster0.xdgzc.mongodb.net/movies_app?retryWrites=true&w=majority";
//root 1: useraname, root2: password, dbname: movies_app
const MONGODB_OPTIONS = {
  //pour dire qu on est entrain d utiliser la nvelle methode de cnx
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose
  .connect(MONGODB_URI, MONGODB_OPTIONS) 
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Connection error"));

module.exports = mongoose;
