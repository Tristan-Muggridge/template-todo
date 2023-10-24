
import Record from '../Record';

export interface ITemplate {
	name: string;
	description: string;
	tasks: string[];
	isEnabled: boolean;
	id: string;
}

class Template extends Record implements ITemplate {
	constructor(
		public name: string,
		public description: string = '',
		public tasks: string[] = [],
		public isEnabled: boolean = true,
		id?: string,
	) {
		super(id);
	}


	static fromJSON(json: ITemplate) {
		return new Template(json.name, json.description, json.tasks, json.isEnabled, json.id);
	}

	toJSON() {
		return {
			name: this.name,
			description: this.description,
			tasks: this.tasks,
			isEnabled: this.isEnabled,
			id: this.id,
		}
	}

	toggleEnabled() {
		this.isEnabled = !this.isEnabled;
		return this;
	}

	removeTask(task: string) {
		this.tasks = this.tasks.filter(t => t !== task);
		return this;
	}

	addTask(task: string) {
		this.tasks = [...this.tasks, task];
		return this;
	}
}

export default Template;