require("dotenv").config();
require("./config/mongo");

const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const morgan = require("morgan"); // morgan est un logger
const app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());
var logger = require('morgan');

app.use(logger('dev'));


app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// CORS SETUP
app.use(cors("*"));

// API CALL LOGGIN
app.use(morgan("dev"));

// SESSION SETUP
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60000 }, // in millisec
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // 1 day
    }),
    saveUninitialized: true,
    resave: true,
  })
);

app.get("/", (req, res) => res.send(`"hello :) my api is working on port${process.env.PORT}"`));

app.get("/", (req, res) => res.send("hello my api is working"));
app.use("/user", require("./routes/user"));
app.use("/annonce", require("./routes/annonce"));
app.use("/associations", require("./routes/associations.js"));
app.use("/categories", require("./routes/categories"));
app.use("/messagerie", require("./routes/messagerie"));
app.use("/api/auth", require("./routes/api.auth"));
app.use("/api/contact", require("./routes/api.contact"));



module.exports = app;
