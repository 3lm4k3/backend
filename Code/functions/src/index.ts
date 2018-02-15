import * as functions from 'firebase-functions';
import {User} from './app/user/user-ctrl';
import * as express from 'express';

const expressRouter =  express();

console.log(new User());

expressRouter.get("*", (req, res) => {
  res.send(new User());
});

// Cloud Function
exports.express = functions.https.onRequest(expressRouter);