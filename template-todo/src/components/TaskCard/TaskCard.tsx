import Task from "../../models/Task";
import { BsCalendar } from 'react-icons/bs';
import { DateDisplay } from "./DateDisplay";
import { TaskCardCheckbox } from "./TaskCardCheckbox";

export const TaskCard = ({ task, setTasks }: { task: Task; setTasks(task: Task): void; }) => {
    return (
        <div className="flex items-center justify-between gap-0.5 bg-neutral-600 text-neutral-300 rounded-md p-2 w-full">
            <div className="flex justify-center gap-2 items-center">
                <TaskCardCheckbox {...{ task, onComplete: completed => setTasks(completed ? task.markComplete() : task.markIncomplete()) }} />
                <h2 className={`text-xl ${task.completed ? 'line-through' : ''}`}>{task.title}</h2>
            </div>

            <div className="flex justify-center gap-2 items-center">
                <BsCalendar className="w-4 h-4 text-neutral-400" />
                <DateDisplay date={task.dueDate} />
            </div>

        </div>
    );
};
