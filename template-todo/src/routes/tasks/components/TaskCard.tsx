import Task from "../../../models/Task";
import { BsCalendar, BsTrash } from 'react-icons/bs';
import { DateDisplay } from "./DateDisplay";
import { TaskCardCheckbox } from "./TaskCardCheckbox";
import Card from "../../components/Card";

export const TaskCard = ({ task, setTasks, deleteTask }: { task: Task; setTasks(task: Task): void; deleteTask(task: Task):void}) => {
    return (
        <Card className='flex items-center justify-between gap-0.5'>
            <div className="flex justify-center gap-2 items-center">
                <TaskCardCheckbox {...{ task, onComplete: completed => setTasks(completed ? task.markComplete() : task.markIncomplete()) }} />
                <h2 className={`text-xl ${task.completed ? 'line-through' : ''}`}>{task.title}</h2>
            </div>

            <div className="flex flex-col gap-1 justify-end">
                <button className="hover:text-rose-500 self-end" onClick={() => deleteTask(task)}> <BsTrash /> </button>
                <div className="flex justify-center gap-2 items-center">
                    <BsCalendar className="w-4 h-4 text-neutral-400" />
                    <DateDisplay date={task.dueDate} />
                </div>
            </div>

        </Card>
    );
};
