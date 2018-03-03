import { Request, Response, NextFunction,Express } from "express";
import { ICtrl } from "../common/ictrl";
import { Interest } from "./embeded/interest";
import { InterestDao } from "./dao/interest-dao";
import { SMSAuthenticator } from "../auth/sms-verification";

export class UserCtrl  implements ICtrl{
    private  _intersetDao:InterestDao;

    constructor(){
       
        this._intersetDao=new InterestDao();
    }
    public registerRoutes(router:Express):void{
       router.get("/user",this.findAll);
       router.post('/user/interset',this.addInterset);
       router.get('/user/send-message',this.sendMessage);
    }
    public findAll (req: Request, res: Response):void{
        res.json({"Ahmed":"Khamis"});
    }
    public addInterset(req: Request, res: Response):void{
        
        const c=new Interest();
        c.id=1;
        c.tags=["Ahmed","Khamis"];
        this._intersetDao.add(c);
    }
    public sendMessage(req: Request, res: Response):void{
        console.log(this);
        let _authenticator=new SMSAuthenticator();
        _authenticator.sendMessage();
        res.json({"33":"Message is Sent"});
    }
}