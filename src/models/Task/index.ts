import Record from "../Record";

export interface ITask {
    title: string;
    description: string;
    dueDate: Date;
    completed: boolean;
    status: string;
    priority: string;
    subTasks: Task[];
    id: string;
}

class Task extends Record implements ITask {
    constructor (
        private _title: string,
        private _description: string = '',
        private _dueDate: Date = new Date(),
        private _completed: boolean = false,
        private _status: string = '',
        private _priority: string = '',
        private _subTasks: Task[] = [],
        id?: string,
    ) { super(id); }

    // getters
    get title () { return this._title; }
    get description () { return this._description; }
    get dueDate () { return this._dueDate; }
    get completed () { return this._completed; }
    get status () { return this._status; }
    get priority () { return this._priority; }
    get subTasks () { return this._subTasks; }

    static fromJSON(json: Task) {
        return new Task(json.title, json.description, new Date(json.dueDate), json.completed, json.status, json.priority, json.subTasks, json.id);
    }

    toJSON() {
        return {
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            completed: this.completed,
            status: this.status,
            priority: this.priority,
            subTasks: this.subTasks,
            id: this.id,
        }
    }

    // Used in state updates, so need to return a new object of self.
    markComplete() {
        this._completed = true;
        return this;
    }

    markIncomplete() {
        this._completed = false;
        return this;
    }
}

export default Task;