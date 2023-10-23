import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Task from "../../../models/Task";
import { TaskList } from "../../../models/TaskList";
import { useLanguage } from "../../../context/LanguageContext";

export default ({taskList}:{taskList: TaskList}) => {
    const {language} = useLanguage();
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
        taskList.addTask(new Task(formState.title.value));
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
        <form onSubmit={onSubmit} className='flex flex-col'>
            <div className='overflow-hidden rounded-md w-full flex '>
                <input type="text" className="grow h-full p-2 text-neutral-800 outline-transparent" placeholder={language.createANewTask} value={formState.title.value} 
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
    )
}