"use strict";

const functions = require("firebase-functions");
const user = require("./app/ctrl/user-ctrl")
const express = require("express");

// setup ExpressJS Server
const expressRouter = new express.Router();

console.log(new user());

expressRouter.get("*", (req, res) => {
  res.send(new user());
});

// Cloud Function
exports.express = functions.https.onRequest(expressRouter);
