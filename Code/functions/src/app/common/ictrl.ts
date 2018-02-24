import { Express } from "express";

export interface ICtrl{

  registerRoutes(router:Express):void;

}