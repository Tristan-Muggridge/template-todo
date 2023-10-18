import { generateId } from "../../utils";

export default class {
    private _id: string = generateId();    
    public get id() {
        return this._id;
    }
}