import { useStorage } from '../../context/storageContext';
import Task from '../../models/Task';
import NewTaskForm from './components/NewTaskForm';
import UnorderedTasks from './components/UnorderedTasks';
import { useLanguage } from '../../context/LanguageContext';
export default () => {
    
    const { taskList, templateList  } = useStorage();
    const { language } = useLanguage();

    const loadFromTemplates = () => {
        
        const tasksToAdd: Task[] = [];
        
        templateList.templates.filter(template => template.isEnabled).forEach(template => {
            const currentTaskTitles = new Set(taskList.tasks.map(task => task.title));
            const tasksNotInTaskList = template.tasks.filter(task => !currentTaskTitles.has(task));
            const newTasks = tasksNotInTaskList.map(task => new Task(task));
            tasksToAdd.push(...newTasks);
        });

        taskList.addTasks(tasksToAdd);
    }

    const completeTasks = taskList.tasks.filter(task => task.completed);


    return (
        <div className='flex flex-col w-full p-4 gap-4'>
            <NewTaskForm {...{taskList}}/>
            <button onClick={loadFromTemplates}>
                <span>{language.loadFromTemplates}</span>
                <span className='text-sm text-neutral-500'> ({templateList.templates.filter(template => template.isEnabled).length}) </span>
            </button>

            {/* Progress Bar */}
            {
                taskList.tasks.length > 0 && (
                    <div className="flex w-full flex-col gap-0.5">
                        <span className="self-end text-xs text-neutral-400"> {completeTasks.length} / {taskList.tasks.length} </span>
                        <div className="flex-grow h-2 bg-neutral-200 rounded-lg overflow-hidden">
                            <div className={`h-full bg-emerald-500 transition-colors duration-200 delay-200`} style={{width: `${completeTasks.length/taskList.tasks.length*100}%`}}></div>
                        </div>
                    </div>
                )
            }

            <UnorderedTasks 
                label={language.toDo}
                tasks={taskList.tasks.filter(task => !task.completed)} 
                taskList={taskList}
                showClearAll
            />
            
            <UnorderedTasks 
                label={language.completed}
                tasks={taskList.tasks.filter(task => task.completed)} 
                taskList={taskList}
                showClearAll
            />
        </div>
    )
}