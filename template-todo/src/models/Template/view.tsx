import React from 'react';
import TemplateModel from './model';
import Card from '../../routes/components/Card';
import { FiEdit, FiPlus, FiTrash } from 'react-icons/fi';

interface TemplateProps {
  template: TemplateModel;
}

const TemplateView: React.FC<TemplateProps> = ({ template }) => (
	<Card className={`${template.isEnabled ? '' : 'opacity-50'} flex flex-col gap-4`}>
		<div>
			<div className="flex justify-between">
				<h2 className="text-2xl text-neutral-50 font-bold">{template?.name}</h2>
				
				{/* isEnabled indicator */}
				<button 
					onClick={() => template.toggleEnabled()}
					className={`px-2 py-1 rounded-md text-sm font-bold ${template?.isEnabled ? 'bg-neutral-700 text-emerald-500' : 'bg-neutral-700 text-rose-500'}`}>
					{template?.isEnabled ? 'Enabled' : 'Disabled'}
				</button>
			
			</div>
			<p>{template?.description}</p>
		</div>

		{/* Template Task List */}
		<div>
			<h3 className="text-lg">Template Tasks ({template.tasks.length})</h3>
			<form onSubmit={template.onNewTaskFormSubmit} className='flex px-4 gap-4'>
				<input 
					type="text" 
					name="new-task" 
					id="new-task" 
					className={`
						rounded-md px-2 py-0.5 text-neutral-800 bg-transparent outline-none border-none cursor-pointer 
						hover:bg-neutral-100 transition-all duration-200 focus:bg-neutral-100
						flex-grow
					`}
					placeholder='Create a new task' 
					value={template.newTaskInput} 
					onChange={template.newTaskInputOnChange} />
				<button type="submit"><FiPlus /></button>
			</form>
			<ul className={`gap-0.5 flex flex-col transition-all duration-200`}>
				{
					template?.tasks.map( task => (
						<li key={task} className="px-4 flex items-center gap-4"> 
							<div className="flex-grow">{task}</div>
							<button className="text-neutral-500 hover:text-neutral-700"> <FiEdit /> </button>
							<button className="text-neutral-500" onClick={() => template.deleteTask(task)}> <FiTrash /> </button>
						</li>
					))
				}
			</ul>
		</div>
	</Card>
)

export default TemplateView;