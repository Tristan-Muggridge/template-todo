import { UserTaskList } from '../../models/TaskList';
import NewTaskForm from './components/NewTaskForm';
import UnorderedTasks from './components/UnorderedTasks';

export default () => {
    
    const taskList = new UserTaskList();

    return (
        <div className='flex flex-col w-full p-4 gap-4'>
            
            <NewTaskForm {...{taskList}}/>

            <div>
                <h2 className="text-2xl">Todo</h2>     
                <UnorderedTasks tasks={taskList.tasks.filter(task => !task.completed)} taskList={taskList}/>
            </div>
            
            <div>
                <h2 className="text-2xl">Completed</h2>
                <UnorderedTasks tasks={taskList.tasks.filter(task => task.completed)} taskList={taskList}/>
            </div>
        </div>
    )
}