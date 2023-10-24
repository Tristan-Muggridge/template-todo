import React, { useEffect } from "react";
import { StorageFactory, StorageStrategies } from "../../LocalStorage";
import Task, {ITask} from "../Task";

export type TaskList = {
    tasks: Task[];
    addTask: (task: Task) => void;
    addTasks: (tasks: Task[]) => void;
    removeTask: (task: Task) => void;
    updateTask: (task: Task) => void;
    
    toJSON: () => ITask[];
    loadTasks: (tasks: Task[]) => void;
    removeTasks: (tasks: Task[]) => void;
}

export default () => {
    const [tasks, setTasks] = React.useState<Task[]>([]);

    useEffect(() => {
        const storage = StorageFactory(StorageStrategies.LocalStorage);
        setTasks([...storage.getTasks()]);
    }, [])

    useEffect(() => {
        const storage = StorageFactory(StorageStrategies.LocalStorage);
        storage.setTasks(tasks);
    }, [tasks])

    return {
        tasks,
        addTask: (task: Task) => setTasks([...tasks, task]),
        addTasks: (newTasks: Task[]) => setTasks([...tasks, ...newTasks]),
        removeTask: (task: Task) => setTasks(tasks.filter(t => t.id !== task.id)),
        updateTask: (task: Task) => setTasks([...tasks.map(t => t.id === task.id ? task : t)]),
        toJSON: () => tasks.map(task => task.toJSON()),
        loadTasks: (tasks: Task[]) => setTasks([...tasks]),
        removeTasks: (deleteTasks: Task[]) => setTasks([...tasks.filter(t => !deleteTasks.some(dt => dt.id === t.id))])
    };
};