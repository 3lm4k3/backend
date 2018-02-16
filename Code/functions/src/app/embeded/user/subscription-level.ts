import { Entity } from "../Entity";

export class SubscriptionLevel extends Entity{
    private _formula:string;
    private _order:number;// The order of this subscription level   

	public get order(): number {
		return this._order;
	}

	public set order(value: number) {
		this._order = value;
	}

	
}