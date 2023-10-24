import React, { createContext, useContext } from 'react';
import { TemplateList } from '../models/TemplateList';
import useTasks, { TaskList } from '../models/TaskList';
import useTemplateList from '../models/TemplateList/useTemplateList';

interface StorageContextType {
    taskList: TaskList;
    templateList: TemplateList;
}

const storageContext = createContext<StorageContextType>({
    taskList: {
        tasks: [],
        addTask: () => {throw new Error('Not implemented')},
        addTasks: () => {throw new Error('Not implemented')},
        removeTask: () => {throw new Error('Not implemented')},
        updateTask: () => {throw new Error('Not implemented')},
        
        toJSON: () => {throw new Error('Not implemented')},
        loadTasks: () => {throw new Error('Not implemented')},
        clearCompleted: () => {throw new Error('Not implemented')},
    },
    templateList: {
        templates: [],
        addTemplate: () => {throw new Error('Not implemented')},
        addTemplates: () => {throw new Error('Not implemented')},
        removeTemplate: () => {throw new Error('Not implemented')},
        updateTemplate: () => {throw new Error('Not implemented')},
        
        toJSON: () => {throw new Error('Not implemented')},
        loadTemplates: () => {throw new Error('Not implemented')},
    }
});

const StorageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    
    const taskList = useTasks();
    const templateList = useTemplateList();

    return (
        <storageContext.Provider value={{taskList, templateList}}>
            {children}
        </storageContext.Provider>
    )
}

const useStorage = () => {
    const context = useContext(storageContext);
    if (context === undefined) {
        throw new Error('UseStorage must be used within a StorageProvider');
    }

    return context;
}

export {StorageProvider, useStorage};