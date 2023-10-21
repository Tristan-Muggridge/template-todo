import { UserTemplate } from "../../models/Template"
import { UserTemplateList } from "../../models/TemplateList";
import Card from "../components/Card";
import { FiEdit, FiTrash } from "react-icons/fi";

const TemplateCard = ({template, toggleEnabled}:{template: UserTemplate, toggleEnabled():void}) => (    
    <Card className={`${template.enabled ? '' : 'opacity-50'} flex flex-col gap-4`}>
        <div>
            <div className="flex justify-between">
                <h2 className="text-2xl text-neutral-50 font-bold">{template?.title}</h2>
                {/* enabled indicator */}
                
                <button
                    onClick={toggleEnabled} 
                    className={`px-2 py-1 rounded-md text-sm font-bold ${template?.enabled ? 'bg-neutral-700 text-emerald-500' : 'bg-neutral-700 text-rose-500'}`}>
                    {template?.enabled ? 'Enabled' : 'Disabled'}
                </button>
            
            </div>
            <p>{template?.description}</p>
        </div>

        {/* Template Task List */}
        <div>
            <h3 className="text-lg">Template Tasks ({template.tasks.length})</h3>
            <ul className={`gap-0.5 flex flex-col transition-all duration-200`}>
                {
                    template?.tasks.map( task => (
                        <li key={task} className="px-4 flex items-center gap-4"> 
                            <div className="flex-grow">{task}</div>
                            <button className="text-neutral-500 hover:text-neutral-700"> <FiEdit /> </button>
                            <button className="text-neutral-500"> <FiTrash /> </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    </Card>
)

export default () => {

    const templateManager = new UserTemplateList(
        [
            new UserTemplate(
                'Japanese Study', 
                'daily Japanese study template', 
                [
                    'Vocabulary',
                    'Grammar',
                    'Reading',
                    'Listening',
                    'Kanji'
                ]
            ),
            new UserTemplate(
                'Composition',
                'Daily piano practice for album',
                [
                    'Scales',
                    'Arpeggios',
                    'Fool',
                    'Emperor'
                ]
            ),
            new UserTemplate(
                'Software Engineering',
                'Daily software engineering practice / project work',
                [
                    'Project',
                    'Algorithms',
                    'Data Structures',
                    'Design Patterns',
                    'Testing',
                    'Debugging'
                ]
            )
    
        ]
    );

        const templates = templateManager.templates;

    return (
        <div className='flex flex-col w-full p-4 gap-4'>
            <h1 className="text-3xl">Templates</h1>

            <div className="flex flex-col gap-4">
                {
                    templates.map( template => (
                        <TemplateCard key={template.id} template={template}

                            toggleEnabled={() => templateManager.updateTemplate(template.toggleEnabled())}
                        />
                    ))
                }
            </div>
            
        </div>
    )
}