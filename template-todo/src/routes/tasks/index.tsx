import { UserTaskList } from '../../models/TaskList';
import { UserTask } from '../../models/Task';
import { TaskCard } from './components/TaskCard';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export default () => {
    
    const taskList = new UserTaskList();

    const tasks = taskList.tasks;

    const [showError, setShowError] = useState(false);
    const [formState, setFormState] = useState({
        title: {
            value: '',
            validationRules: [
                (value: string) => value.trim().length > 0 || ''
            ]
        }
    })

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        taskList.addTask(new UserTask(formState.title.value));
        setFormState( form => {
            return {
                ...form,
                title: {
                    ...form.title,
                    value: ''
                }
            }
        });
    }

    return (
        <div className='flex flex-col w-full p-4 gap-4'>
            
            {/* New Task Form */}
            <form onSubmit={onSubmit} className='flex flex-col'>
                <div className='overflow-hidden rounded-md w-full flex '>
                    <input type="text" className="grow h-full p-2 text-neutral-800 outline-transparent" placeholder="New Task" value={formState.title.value} 
                        onChange={
                            e => setFormState( form => {
                                return {
                                    ...form,
                                    title: {
                                        ...form.title,
                                        value: e.target.value
                                    }
                                }
                            })
                        }
                        
                        onFocus={() => setShowError(true)}
                        onBlur={() => setShowError(false)}
                    />

                    <button 
                        type='submit' 
                        className='w-24 bg-emerald-500 text-2xl font-bold flex items-center justify-center h-full disabled:cursor-not-allowed disabled:opacity-50' 
                        disabled={formState.title.validationRules.some( rule => rule(formState.title.value) !== true)}
                    > <FiPlus /> </button>
                </div>

                <p>
                    {
                        showError && formState.title.validationRules.map( (rule, i) => {
                            const result = rule(formState.title.value);
                            return <span key={i} className="text-red-500">{result}</span>
                        })
                    }
                </p>
            </form>

            <div>
                <h2 className="text-2xl">Todo</h2>     
                <ul className="p-4 gap-2 flex flex-col">
                    {tasks.filter(task => !task.completed).map( (task) => (
                        <li key={task.id} className="flex items-center gap-4"> 
                            <TaskCard {...{task, setTasks: task => taskList.updateTask(task)}}/>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div>
                <h2 className="text-2xl">Completed</h2>
                <ul className="p-4 gap-2 flex flex-col">
                    {tasks.filter(task => task.completed).map( (task) => (
                        <li key={task.id} className="flex items-center gap-4"> 
                            <TaskCard {...{task, setTasks: task => taskList.updateTask(task)}}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}