import React, { useEffect } from "react";
import Task, { UserTask } from "../Task";

abstract class TaskList {
    private _tasks: Task[] = [];
    private _setTaskState: React.Dispatch<React.SetStateAction<Task[]>>;

    constructor(
        defaultTasks: Task[] = [],
    ) { 
        const [tasks, setTasks] = React.useState<Task[]>(defaultTasks);
        this._tasks = tasks;
        this._setTaskState = setTasks;

        useEffect(() => {
            const storedTasks = localStorage.getItem('tasks');
            if (storedTasks) {
                this.addTasks(JSON.parse(storedTasks).map((task:any) => {
                    return UserTask.fromJSON(task);
                }));
                console.log(storedTasks)
            }
        }, [])

        useEffect(() => {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }, [tasks])
     }
    
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
        tasks: Task[] = [],
    ) {
        super(tasks);
    }

    static fromJSON = (json: any) => {
        const tasks = json.tasks.map((task: any) => UserTask.fromJSON(task));
        return new UserTaskList(tasks);
    }
}

export default TaskList;