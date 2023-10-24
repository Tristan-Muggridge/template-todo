import Task from "../../../models/Task";
import { BsTrash } from 'react-icons/bs';
import { TaskCardCheckbox } from "./TaskCardCheckbox";
import Card from "../../components/Card";

interface TaskCardProps {
    task: Task;
    onComplete: () => void;
    onIncomplete: () => void;
    deleteTask: (task: Task) => void;
}

export const TaskCard = ({ task, onComplete, onIncomplete, deleteTask }: TaskCardProps) => {
    return (
        <Card className='flex items-center justify-between gap-0.5'>
            <div className="flex gap-2 items-center w-full">
                <TaskCardCheckbox {...{ task, onComplete, onIncomplete }} />
                <h2 className={`md:text-xl ${task.completed ? 'line-through' : ''}`}>{task.title}</h2>
            </div>

            <div className="flex flex-col gap-1 justify-end">
                <button className="hover:text-rose-500 self-end" onClick={() => deleteTask(task)}> <BsTrash /> </button>
                <div className="flex justify-center gap-2 items-center">
                    {/* <BsCalendar className="w-4 h-4 text-neutral-400" />
                    <DateDisplay date={task.dueDate} /> */}
                </div>
            </div>

        </Card>
    );
};
