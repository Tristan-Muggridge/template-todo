import React from "react";
import Record from "../Record";
export abstract class Template extends Record {    
    
    private _tasks: string[];
    private _setTasks: React.Dispatch<React.SetStateAction<string[]>>;
    
    public enabled: boolean = true;

    constructor(
        public title: string,
        public description: string,
        tasks: string[],
    ) { 
        super();
        [this._tasks, this._setTasks] = React.useState<string[]>(tasks);
     }

    public get tasks(): string[] {
        return this._tasks;
    }

    public set tasks(tasks: string[]) {
        this._setTasks(tasks);
    }

    public static fromJSON = (json: any): Template => {
       throw new Error("Not implemented");
    }

    public toggleEnabled = () => {
        this.enabled = !this.enabled;
        return this;
    }
} 

export class UserTemplate extends Template {
    constructor(
        title: string,
        description: string = "",
        tasks: string[] = [],
    ) {
        super(title, description, tasks);
    }

    public static fromJSON = (json: any) => {
        const { title, description, tasks } = json;
        return new UserTemplate(title, description, tasks);
    }
}

export default Template;