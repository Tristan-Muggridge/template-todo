import React from 'react';
import TemplateModel from './model';
import Card from '../../routes/components/Card';
import { FiEdit, FiPlus, FiTrash } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

interface TemplateProps {
	onToggleEnabled: () => void;
	onDeleteTask: (task:string) => void;
 	onNewTaskFormSubmit: (e: string) => void; 
	onDeleteTemplate: () => void;
  	template: TemplateModel;
}

const TemplateView: React.FC<TemplateProps> = ({ 
	onDeleteTask, 
	onDeleteTemplate,
	onToggleEnabled,
	onNewTaskFormSubmit,
	template
}) => {

	const [newTaskInput, setNewTaskInput] = React.useState('');
	const {language} = useLanguage();

	return (	
		<Card className={`${template.isEnabled ? '' : 'opacity-50'} flex flex-col gap-4`}>
			<div>
				<div className="flex justify-between">
					<h2 className="text-2xl text-neutral-50 font-bold shrink">{template?.name}</h2>
					
					<div className='flex gap-2 items-center md:flex-row'>
						<button onClick={() => onDeleteTemplate()} className="text-neutral-500 hover:text-rose-500"> <FiTrash /> </button>

						{/* isEnabled indicator */}
						<button 
							onClick={() => onToggleEnabled()}
							className={`rounded-md text-sm w-20 h-8 font-bold ${template?.isEnabled ? 'bg-neutral-700 text-emerald-500' : 'bg-neutral-700 text-rose-500'}`}>
							{template?.isEnabled ? language.enabled : language.disabled}
						</button>
					</div>				
				</div>
				<p>{template?.description}</p>
			</div>
	
			{/* Template Task List */}
			<div>
				<h3 className="text-lg">{language.templateTasks} ({template.tasks.length})</h3>
				<form onSubmit={e => {
					e.preventDefault();
					const trimmedInput = newTaskInput.trim();
					if (!trimmedInput) return;

					onNewTaskFormSubmit(trimmedInput);
					setNewTaskInput('');
				}} className='flex px-4 gap-4'>
					<input 
						type="text" 
						name="new-task" 
						id="new-task" 
						className={`
							rounded-md px-2 py-0.5 text-neutral-800 bg-transparent outline-none border-none cursor-pointer 
							hover:bg-neutral-100 transition-all duration-200 focus:bg-neutral-100
							flex-grow
						`}
						placeholder={language.createANewTask} 
						value={newTaskInput} 
						onChange={e => setNewTaskInput(e.target.value)} />
					<button type="submit"><FiPlus /></button>
				</form>
				<ul className={`gap-0.5 flex flex-col transition-all duration-200`}>
					{
						template?.tasks.map( task => (
							<li key={task} className="px-4 flex items-center gap-4"> 
								<div className="flex-grow">{task}</div>
								<button className="text-neutral-500 hover:text-neutral-700"> <FiEdit /> </button>
								<button className="text-neutral-500" onClick={() => onDeleteTask(task)}> <FiTrash /> </button>
							</li>
						))
					}
				</ul>
			</div>
		</Card>
	)
}

export default TemplateView;