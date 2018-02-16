import { Entity } from "../../../embeded/entity";

export class ProductCategory extends Entity{
   
    private _pic:string;

	public get pic(): string {
		return this._pic;
	}

	public set pic(value: string) {
		this._pic = value;
	}
    
}