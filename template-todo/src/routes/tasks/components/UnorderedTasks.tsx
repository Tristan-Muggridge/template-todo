import Task from "../../../models/Task";
import TaskList from "../../../models/TaskList";
import { TaskCard } from "./TaskCard";

interface UnorderedTasksProps {
    tasks: Task[];
    taskList: TaskList;
    label: string;
}

export default ({tasks, taskList, label}:UnorderedTasksProps) => (
    <div>
        <h2 className="text-2xl">{label} ({tasks.length})</h2>
        <ul className={`p-4 gap-3 flex flex-col transition-all duration-200`}>
            {
                tasks.map( task => (
                    <li key={task.id} className="flex items-center gap-4"> 
                        <TaskCard {...{
                            task, 
                            setTasks: (task: Task) => taskList.updateTask(task), 
                            deleteTask: task => taskList.removeTask(task),
                            onComplete: () => taskList.updateTask(task.markComplete()),
                            onIncomplete: () => taskList.updateTask(task.markIncomplete())
                        }}
                        />
                    </li>
                ))
            }
        </ul>
    </div>
)