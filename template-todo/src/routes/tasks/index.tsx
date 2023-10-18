import { UserTaskList } from '../../models/TaskList';
import NewTaskForm from './components/NewTaskForm';
import UnorderedTasks from './components/UnorderedTasks';

export default () => {
    
    const taskList = new UserTaskList();
    
    return (
        <div className='flex flex-col w-full p-4 gap-4'>
            <NewTaskForm {...{taskList}}/>

            <UnorderedTasks label='Completed' tasks={taskList.tasks.filter(task => !task.completed)} taskList={taskList}/>
            <UnorderedTasks label='Completed' tasks={taskList.tasks.filter(task => task.completed)} taskList={taskList}/>
        </div>
    )
}