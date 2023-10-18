import Task from "../Task";

abstract class TaskList {
    private _tasks: Task[] = [];
    private _setTaskState: React.Dispatch<React.SetStateAction<Task[]>>;

    constructor(
        setTaskState: React.Dispatch<React.SetStateAction<Task[]>>,
        tasks: Task[] = [],
    ) { this._tasks = tasks; this._setTaskState = setTaskState; }
    
    // getter
    public get tasks() { return this._tasks;}
    
    // Task List CRUDTemplate
    public addTask = (task: Task) => this._setTaskState(state => [...state, task]);
    public addTasks = (tasks: Task[]) => this._setTaskState(state => [...state, ...tasks]);
    public deleteTask = (task: Task) => this._setTaskState(state => state.filter(t => t.id !== task.id));
    public updateTask = (task: Task) => this._setTaskState(state => state.map(t => t.id === task.id ? task : t));
}

export class UserTaskList extends TaskList {
    constructor(
        taskState: React.Dispatch<React.SetStateAction<Task[]>>,
        tasks: Task[] = [],
    ) {
        super(taskState, tasks);
    }
}

export default TaskList;