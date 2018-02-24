import { Request, Response, NextFunction,Express } from "express";
import { ICtrl } from "../common/ictrl";
import { Interest } from "./embeded/interest";
import { InterestDao } from "./dao/interest-dao";

export class UserCtrl  implements ICtrl{
    private readonly _intersetDao:InterestDao=new InterestDao();
    constructor(){
        console.log(InterestDao);
    }
    public registerRoutes(router:Express):void{
       router.get("/user",this.findAll);
       router.post('/user/interset',this.addInterset);
    }
    public findAll (req: Request, res: Response):void{
        res.json({"Ahmed":"Khamis"});
    }
    public addInterset(req: Request, res: Response):void{
        
        let c=new Interest();
        c.id=1;
        c.tags=["Ahmed","Khamis"];
        this._intersetDao.add(c);
    }
}