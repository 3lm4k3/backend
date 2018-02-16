import { Lang } from "./lang";

export class Localization{
    
    private _country:number;
    private _labels:Map<Lang,string>;
    
    get country(): number { return this._country }
    set country(s: number ) { this._country = s; }

	public get labels(): Map<Lang,string> {
		return this._labels;
	}

	public set labels(value: Map<Lang,string>) {
		this._labels = value;
	}
    
}