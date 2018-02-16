import { Entity } from "../Entity";

export class City extends Entity{
   
    private _country:number;
    
    get city(): number { return this._country }
    set city(s: number ) { this._country = s; }
    
}