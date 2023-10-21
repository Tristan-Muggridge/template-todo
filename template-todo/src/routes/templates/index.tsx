import React from 'react';
import TemplateController from '../../models/Template/controller';
import TemplateView from '../../models/Template/view';

const App: React.FC = () => {
  const template = TemplateController.createTemplate('Sample Template', 'This is a sample template', ['Task 1', 'Task 2', 'Task 3'], true);

  return (
        <div className='flex flex-col w-full p-4 gap-4'>
            <h1 className="text-3xl">Templates</h1>

            <div className="flex flex-col gap-4">
            <TemplateView template={template} />

            </div>
            
        </div>
    )
}

export default App;
