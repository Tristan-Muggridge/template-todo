import { useLanguage } from "../../../context/LanguageContext";
import Task from "../../../models/Task";
import { TaskList } from "../../../models/TaskList";
import { TaskCard } from "./TaskCard";

interface UnorderedTasksProps {
    tasks: Task[];
    taskList: TaskList;
    label: string;
    showClearAll?: boolean;
}

export default ({tasks, taskList, label, showClearAll}:UnorderedTasksProps) => {
    
    const {language} = useLanguage();

    return (
        <div>
            <div className="flex gap-2 w-full">
                <h2 className="text-2xl grow">{label} ({tasks.length})</h2>
                {
                    showClearAll && (
                        <button 
                            className="self-end text-xs justify-self-end hover:text-rose-500 transition-all duration-200"
                            onClick={() => taskList.clearCompleted()}
                        >
                    
                        ({language.clearAll})
                    
                        </button>
                    )
                }
            </div>
            <ul className={`p-4 gap-3 flex flex-col transition-all duration-200`}>
                {
                    tasks.map( task => (
                        <li key={task.id} className="flex items-center gap-4"> 
                            <TaskCard {...{
                                task, 
                                setTasks: (task: Task) => taskList.updateTask(task), 
                                deleteTask: task => taskList.removeTask(task),
                                onComplete: () => taskList.updateTask(task.markComplete()),
                                onIncomplete: () => taskList.updateTask(task.markIncomplete()),
                            }}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}