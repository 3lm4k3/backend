export class Localization{
    private _city:number;
    private _country:number;
    private _arLabel:string;
    private _enLabel:string;
    private _frLabel:string;

    get city(): number { return this._city }
    set city(s: number ) { this._city = s; }

    get country(): number { return this._country }
    set country(s: number ) { this._country = s; }

    get arName(): string { return this._arLabel }
    set arName(s: string ) { this._arLabel = s; }
    
    get enName(): string { return this._enLabel }
    set enName(s: string ) { this._enLabel = s; }
   
    get frLabel(): string { return this._frLabel }
    set frLabel(s: string ) { this._frLabel = s; }
    
    
}