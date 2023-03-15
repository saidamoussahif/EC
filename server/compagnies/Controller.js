const Compagny = require("./Schema");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// *************************************************************************


const Register = asyncHandler(async (req, res) => {
  const { raisonSocial, adress, phone, password , latitude , longitude  } = req.body;

  if (!raisonSocial  || !adress || !phone || !password || !latitude || !longitude  ) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //check if user exists
  const compagnyExists = await Compagny.findOne({ raisonSocial });
  if (compagnyExists) {
    res.status(400).json({message : "already exist"})
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword)

  //Create Company
  const compagny = await Compagny.create({
    raisonSocial,
    adress,
    phone,
    password: hashedPassword,
    latitude,
    longitude
  });

  if (compagny) {
    res.status(201).json({
      _id: compagny.id,
      raisonSocial: compagny.raisonSocial,
      adress: compagny.adress,
      token: generateToken(compagny._id),
      message: "Your compagny has been created successfully",
      status: "SUCCESS",
    });
  } else {
    res.status(400);
    throw new Error("Invalid company data");
  }
});

// *************************************************************************










const Login = asyncHandler(async (req, res) => {
  const { raisonSocial, password } = req.body;

  //Check for company email
  const compagny = await Compagny.findOne({ raisonSocial });
  if (!compagny) {
    res.status(400).json({
      message: "Company does not exist",
      status: "ERROR",
    });
  }
  const match = await bcrypt.compare(password, compagny.password);
  if (compagny && match) {
    res.json({
      _id: compagny.id,
      raisonSocial: compagny.raisonSocial,
      token: generateToken(compagny._id),
      message: "You have successfully logged in",
      status: "success",
    });
  } else {
    res.json({
      message: "Invalid Credentials",
      status: 400,
    });
  }
});


// Create token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN, {
    expiresIn: "2h",
  });
};

// *************************************************************************

const getCompanies = asyncHandler(async (req, res) => {

  const compagnies = await Compagny.find({});
  res.json(compagnies);
});


module.exports = { Register, Login, getCompanies };
