export class Entity {

    private _id: number;
    private _uuid: string;
    private _label: number;//refrences localization
    private _updatedBy: number;
    private _updatedOn: Date;
    private _clientInfo:Map<string,Object>;

    get id(): number { return this._id }
    set id(s: number ) { this._id = s; }

    get uuid(): string { return this._uuid }
    set uuid(s: string ) { this._uuid = s; }
    
    get label(): number { return this._label }
    set label(s: number ) { this._label = s; }

    get updatedBy(): number { return this._updatedBy }
    set updatedBy(s: number ) { this._updatedBy = s; }

    get clientInfo(): Map<string,Object> { return this._clientInfo }
    set clientInfo(s: Map<string,Object> ) { this._clientInfo = s; }
}