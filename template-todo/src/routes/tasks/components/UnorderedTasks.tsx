import Task from "../../../models/Task";
import TaskList from "../../../models/TaskList";
import { TaskCard } from "./TaskCard";

export default ({tasks, taskList, label}:{tasks: Task[], taskList: TaskList, label: string}) => (
    <div>
        <h2 className="text-2xl">{label} ({tasks.length})</h2>
        <ul className={`p-4 gap-3 flex flex-col transition-all duration-200`}>
            {
                tasks.map( task => (
                    <li key={task.id} className="flex items-center gap-4"> 
                        <TaskCard {...{task, setTasks: task => taskList.updateTask(task), deleteTask: task => taskList.deleteTask(task)}}/>
                    </li>
                ))
            }
        </ul>
    </div>
)