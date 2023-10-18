import Task from "../../../models/Task";
import TaskList from "../../../models/TaskList";
import { TaskCard } from "./TaskCard";

export default ({tasks, taskList}:{tasks: Task[], taskList: TaskList}) => (
    <ul className="p-4 gap-3 flex flex-col">
        {
            tasks.map( task => (
                <li key={task.id} className="flex items-center gap-4"> 
                    <TaskCard {...{task, setTasks: task => taskList.updateTask(task)}}/>
                </li>
            ))
        }
    </ul>
)