import Record from "../Record";

abstract class Task extends Record {    
    constructor(
        public title: string,
        public description: string,
        public dueDate: Date,
        public completed: boolean,
        public status: string,
        public priority: string,
        public subTasks: Task[],
    ) { super(); }

    public markComplete = () => {
        this.completed = true;
        return this;
    }

    public markIncomplete = () => {
        this.completed = false;
        return this;
    }
}

const defaultDate = () => {
    const now = new Date();
    const twelveHoursFromNow = new Date(now.getTime() + 12 * 60 * 60 * 1000);
    return twelveHoursFromNow;
}

export class UserTask extends Task {    
    
    constructor(
        title: string,
        description: string = "",
        dueDate: Date|null = null,
        completed: boolean = false,
        status: string = 'upcoming',
        priority: string = 'low',
        subTasks: Task[] = [],
    ) {
        if (!dueDate) dueDate = defaultDate();
        super(title, description, dueDate, completed, status, priority, subTasks);
    }
}

export default Task;