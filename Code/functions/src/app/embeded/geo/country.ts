import { Entity } from "../Entity";

export class Country extends Entity{
   
    private _lang:number; // refrences to Lang Enumeration
    
    get lang() { return this._lang}
    set lang(s: number ) { this.lang = s; }
    
    
}