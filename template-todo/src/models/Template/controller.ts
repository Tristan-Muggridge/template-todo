import Template from "./model";
import React from 'react'

const TemplateController = () => {
    const [templates, setTemplates] = React.useState<Template[]>([]);

    React.useEffect(() => {
        const templates = localStorage.getItem('templates');
        setTemplates(templates?.length ? JSON.parse(templates).map((template: Template) => Template.fromJSON(template)) : []);
    }, []);

    React.useEffect(() => {
        templates.length && localStorage.setItem('templates', JSON.stringify(templates));
    }, [templates]);    

    const addTemplate = (template: Template) => {
        setTemplates([...templates, template]);
    }

    const removeTemplate = (template: Template) => {
        setTemplates([...templates.filter(t => t.id !== template.id)]);
    }

    const updateTemplate = (template: Template) => {
        // use map or reduce to retain original order
        setTemplates([...templates.map(t => t.id === template.id ? template : t)]);
    }

    const removeTemplateTask = (templateIndex: number, task: string) => {
        const template = templates[templateIndex];
        template.tasks = template.tasks.filter(t => t !== task);
        updateTemplate(template);
    }   

    return {templates, addTemplate, removeTemplate, removeTemplateTask, updateTemplate}
}

export default TemplateController;