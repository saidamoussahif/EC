const mongoose = require("mongoose");


const CompagnySchema = mongoose.Schema(
  {
    raisonSocial: {
      type: String,
      required: true,
    }, 
    adress:{
      type: String,
      required: true,
    },
    longitude:{
      required: true,
      type: Number,
    },
    latitude:{
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    }
  },
  {
    timeTamps: true,
  }
);

module.exports = mongoose.model("Compagny",CompagnySchema);
