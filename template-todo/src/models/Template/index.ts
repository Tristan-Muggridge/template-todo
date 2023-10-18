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
} 

export class TaskTemplate extends Template {
    constructor(
        title: string,
        description: string = "",
        tasks: string[] = [],
    ) {
        super(title, description, tasks);
    }
}

export default Template;