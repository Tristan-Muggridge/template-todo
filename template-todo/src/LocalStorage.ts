// LocalStorage wrapper

import Task from "./models/Task";
import Template from "./models/Template/model";

interface StorageStrategy {
	getTemplates(): Template[];
    setTemplates(templates: Template[]): void;

    getTasks(): Task[];
    setTasks(tasks: Task[]): void;
}

class LocalStorage implements StorageStrategy {
    getTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        return tasks.map((task: Task) => Task.fromJSON(task));
    }

    setTasks(tasks: Task[]) {
        localStorage.setItem('tasks', JSON.stringify(tasks.map((task: Task) => task.toJSON())));
    }

    getTemplates() {
        const templates = JSON.parse(localStorage.getItem('templates') || '[]');
        return templates.map((template: Template) => Template.fromJSON(template));
    }

    setTemplates(templates: Template[]) {
        localStorage.setItem('templates', JSON.stringify(templates.map((template: Template) => template.toJSON())));
    }
}

// May add support for AWS / Google / Own Server Storage Options
export enum StorageStrategies {
    LocalStorage = 'LocalStorage',
}

export const StorageFactory = (strategy: StorageStrategies): StorageStrategy => {
    switch (strategy) {
        case StorageStrategies.LocalStorage:
            return new LocalStorage();
        default:
            return new LocalStorage();
    }
}
