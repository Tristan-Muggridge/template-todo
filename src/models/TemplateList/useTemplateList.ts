import { useState, useEffect } from 'react';
import { StorageFactory, StorageStrategies } from '../../LocalStorage';
import Template from '../Template/model';
import { TemplateList } from '.';

export const useTemplates: () => TemplateList = () => {
	const [templates, setTemplates] = useState<Template[]>([]);

	useEffect(() => {
		const storage = StorageFactory(StorageStrategies.LocalStorage);
		setTemplates([...storage.getTemplates()]);
	}, [])

	useEffect(() => {
		const storage = StorageFactory(StorageStrategies.LocalStorage);
		storage.setTemplates(templates);
	}, [templates])

	return {
		templates,
		addTemplate: (template: Template) => setTemplates([...templates, template]),
		addTemplates: (templates: Template[]) => setTemplates([...templates, ...templates]),
		removeTemplate: (template: Template) => setTemplates(templates.filter(t => t.id !== template.id)),
		updateTemplate: (template: Template) => setTemplates([...templates.map(t => t.id === template.id ? template : t)]),
		toJSON: () => templates.map(template => template.toJSON()),
		loadTemplates: (templates: Template[]) => setTemplates([...templates])
	};
}

export default useTemplates;