import * as functions from 'firebase-functions';
import * as express from 'express';
import { UserCtrl } from './app/user/user-ctrl';

const expressRouter =  express();

const  ctrl= new UserCtrl();

ctrl.registerRoutes(expressRouter);


// Cloud Function

exports.api = functions.https.onRequest(expressRouter);