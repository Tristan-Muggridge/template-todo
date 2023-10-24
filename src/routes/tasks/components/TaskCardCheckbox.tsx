import Task from "../../../models/Task";
import React, { useState } from 'react';

interface TaskCardProps {
    task: Task;
    onComplete: () => void;
    onIncomplete: () => void;
}
export const TaskCardCheckbox = ({ task, onComplete, onIncomplete }: TaskCardProps) => {

    const [checked, setChecked] = useState(task.completed);

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        
        // perform synchronous state change
        setChecked( checked => !checked);
        
        // perform asynchronous side effect
        checked ? onIncomplete() : onComplete();
    };

    return (
        <button className={`
            w-6 h-6 rounded-full items-center justify-center transition-all duration-200
            ${checked ? "bg-emerald-200" : "bg-neutral-100"}
        `} onClick={onClick}>
            {<span className={`text-emerald-600 font-bold transition-all duration-200 ${checked ? 'opacity-100' : 'opacity-0'}`}>✓</span>}
        </button>
    );
};
