import React, { useState } from 'react';
import TemplateView from '../../models/Template/view';
import Card from '../components/Card';
import Template from '../../models/Template/model';
import Form from '../components/Form';
import { useStorage } from '../../context/storageContext';
import { useLanguage } from '../../context/LanguageContext';

const App: React.FC = () => {
    
    const {templateList: {templates, addTemplate, removeTemplate, updateTemplate}} = useStorage();
    const [showNewTemplateForm, setShowNewTemplateForm] = useState(false);
    const {language} = useLanguage();

    return (
        <div className='flex flex-col gap-4 p-4 w-full'>
            <h1 className="text-3xl">{language.templates}</h1>

            <Card className='flex justify-center flex-col items-center' onClick={() => setShowNewTemplateForm(!showNewTemplateForm)}>
                <h2>{language.createNewTemplate}</h2>
            </Card>
            
            { showNewTemplateForm && (
                <Form.TemplateForm 
                    formTemplate={{
                        name: {
                            type: 'text',
                            label: 'Name',
                            value: '',
                            rules: [
                                (value: string) => value.trim().length > 0 || language.nameIsRequired
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
            )}
                
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
