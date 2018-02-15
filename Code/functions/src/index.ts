import * as functions from 'firebase-functions';
import {User} from './app/user/user-ctrl';
import * as express from 'express';
import {Constants} from './app/constant/constant'

const expressRouter =  express();
const user=new User();

expressRouter.get("", (req, res) => {

  res.json(user.findAll());
});

// Cloud Function
exports.express = functions.https.onRequest(expressRouter);