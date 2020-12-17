const mongoose = require("mongoose");
require("../config/db.config");
let MovieModel = require("../models/movie.model");

MovieModel
  .insertMany([{name: 'Home Alone', time: '1h40min', rating: '10'}, {name: 'Scarface', time: '2h20min', rating: '9'}, {name: 'Die Hard', time: '1h50min', rating: '8'}])
  .then(() => {
    console.log("movies inserted!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Users insertion error: ", err);
});
