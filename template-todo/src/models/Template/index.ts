import Record from "../Record";
import TaskList, { UserTaskList } from "../TaskList";

export abstract class Template extends Record {    
    constructor(
        public title: string,
        public description: string,
        private _taskList: TaskList,
    ) { super(); }

    public get taskList() { return this._taskList; }
} 

export class TaskTemplate extends Template {
    constructor(
        title: string,
        description: string = "",
        tasks: TaskList = new UserTaskList(),
    ) {
        super(title, description, tasks);
    }
}

export default Template;