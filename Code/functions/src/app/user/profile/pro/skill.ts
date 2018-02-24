import { Entity } from "../../../embeded/entity";

export class Skill extends Entity{
   
    private _tags:Array<string>;

	public get tags(): Array<string> {
		return this._tags;
	}

	public set tags(value: Array<string>) {
		this._tags = value;
	}
    
}