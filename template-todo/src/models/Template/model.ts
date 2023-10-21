import React from 'react'

export interface Template {
	name: string;
	description: string;
	tasks: string[];
	isEnabled: boolean;
	newTaskInput: string;
}

class TemplateModel implements Template {
	private _internalState: Template;
	private _setInternalState: React.Dispatch<React.SetStateAction<Template>>;

	constructor(
		name: string,
		description: string,
		tasks: string[],
		isEnabled: boolean,
	) {
		const [internalState, setInternalState] = React.useState<Template>({
			name,
			description,
			tasks,
			isEnabled,
			newTaskInput: '',
		});
		this._internalState = internalState;
		this._setInternalState = setInternalState;
	}

	// getter
	public get name() { return this._internalState.name; }
	public get description() { return this._internalState.description; }
	public get tasks() { return this._internalState.tasks; }
	public get isEnabled() { return this._internalState.isEnabled; }
	public get newTaskInput() { return this._internalState.newTaskInput; }

	// setter
	public set name(name: string) { this._setInternalState(state => ({ ...state, name })); }
	public set description(description: string) { this._setInternalState(state => ({ ...state, description })); }
	public set tasks(tasks: string[]) { this._setInternalState(state => ({ ...state, tasks })); }
	public set isEnabled(isEnabled: boolean) { this._setInternalState(state => ({ ...state, isEnabled })); }
	public set newTaskInput(newTaskInput: string) { this._setInternalState(state => ({ ...state, newTaskInput })); }

	// Template CRUD
	public updateTemplate = (template: Template) => this._setInternalState(state => ({ ...state, ...template }));
	public toggleEnabled = () => this._setInternalState(state => ({ ...state, isEnabled: !state.isEnabled }));

	public newTaskInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => this.newTaskInput = e.target.value;
	
	// Task CRUD
	public addTask = (task: string) => this._setInternalState(state => ({ ...state, tasks: [...state.tasks, task] }));
	public addTasks = (tasks: string[]) => this._setInternalState(state => ({ ...state, tasks: [...state.tasks, ...tasks] }));
	public deleteTask = (task: string) => this._setInternalState(state => ({ ...state, tasks: state.tasks.filter(t => t !== task) }));

	public onNewTaskFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		this.addTask(this.newTaskInput);
		this.newTaskInput = '';
	}

	// JSON
	public toJSON = () => ({
		name: this.name,
		description: this.description,
		tasks: this.tasks,
		isEnabled: this.isEnabled,
	})

	public fromJSON = (json: string) => {
		const template = JSON.parse(json);
		this.updateTemplate(template);
	}
}

export default TemplateModel;