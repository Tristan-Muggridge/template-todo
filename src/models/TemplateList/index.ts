import Template, { ITemplate } from '../Template/model';

export interface TemplateList {
	templates: Template[];
	addTemplate: (template: Template) => void;
	addTemplates: (templates: Template[]) => void;
	removeTemplate: (template: Template) => void;
	updateTemplate: (template: Template) => void;

	toJSON: () => ITemplate[];
	loadTemplates: (templates: Template[]) => void;
}

export default TemplateList;