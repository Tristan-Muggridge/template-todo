import { generateId } from "../../utils";

export default class {
    private _id: string;
    constructor(
        id?:string
    ) {
        this._id = id || generateId();
    }
    
    public get id() { return this._id; }
}