import React, { useState } from 'react';
import TemplateController from '../../models/Template/controller';
import TemplateView from '../../models/Template/view';
import Card from '../components/Card';
import Template from '../../models/Template/model';
import Form from '../components/Form';

const App: React.FC = () => {
    const {templates, addTemplate, removeTemplate, updateTemplate} = TemplateController();
    const [showNewTemplateForm, setShowNewTemplateForm] = useState(false);

    return (
            <div className='flex flex-col w-full p-4 gap-4'>
                <h1 className="text-3xl">Templates</h1>

                <Card className='flex justify-center flex-col items-center' onClick={() => setShowNewTemplateForm(!showNewTemplateForm)}>
                    <h2>Create a new Template</h2>
                </Card>
                
                <div className={`
                    transition-all duration-200 overflow-hidden
                    ${showNewTemplateForm ? 'max-h-[20vh]' : 'max-h-[0px]'}
                `}>
                    <Form.TemplateForm 
                        formTemplate={{
                            name: {
                                type: 'text',
                                label: 'Name',
                                value: '',
                                rules: [
                                    (value: string) => value.trim().length > 0 || 'Name is required'
                                ]
                            },
                            description: {
                                type: 'text',
                                label: 'Description',
                                value: '',
                                rules: [
                                ]
                            }
                        }}
                        onSubmit={form => {
                            const template = new Template(form.name.value, form.description.value);
                            addTemplate(template);
                            setShowNewTemplateForm(false);
                        }} 
                    />
                </div>
                    
                <div className="flex flex-col gap-4">
                    {
                        templates.map( (template) => (
                            <TemplateView 
                                key={template.id} 
                                template={template} 
                                onDeleteTemplate={() => removeTemplate(template)}
                                onToggleEnabled={() => updateTemplate(template.toggleEnabled())}
                                onDeleteTask={task => updateTemplate(template.removeTask(task))}
                                onNewTaskFormSubmit={task => updateTemplate(template.addTask(task))}
                            />
                        ))
                    }
                </div>
                
            </div>
        )
}

export default App;
