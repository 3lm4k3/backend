import { Entity } from "../../embeded/entity";

export class SubscriptionLevel extends Entity{
    private _formula:string;
    private _order:number;// The order of this subscription level   

	public get order(): number {
		return this._order;
	}

	public set order(value: number) {
		this._order = value;
	}

	public get formula(): string {
		return this._formula;
	}

	public set formula(value: string) {
		this._formula = value;
	}

	
}