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

    return (
        <div className='flex flex-col w-full p-4 gap-4'>
            <NewTaskForm {...{taskList}}/>
            <button onClick={loadFromTemplates}>
                <span>{language.loadFromTemplates}</span>
                <span className='text-sm text-neutral-500'> ({templateList.templates.filter(template => template.isEnabled).length}) </span>
            </button>
            <UnorderedTasks 
                label={language.toDo}
                tasks={taskList.tasks.filter(task => !task.completed)} 
                taskList={taskList}
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