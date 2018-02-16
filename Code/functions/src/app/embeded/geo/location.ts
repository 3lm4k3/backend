import { Entity } from "../Entity";

export class Location extends Entity{

    private _city:number;
    private _country:number;
    private _latitude:number;
    private _longitude:number;

    get city(): number { return this._city }
    set city(s: number ) { this._city = s; }

    get country(): number { return this._country }
    set country(s: number ) { this._country = s; }

    get latitude(): number { return this._latitude }
    set latitude(s: number ) { this._latitude = s; }
    
    get longitude(): number { return this._longitude }
    set longitude(s: number ) { this._longitude = s; }
   
}