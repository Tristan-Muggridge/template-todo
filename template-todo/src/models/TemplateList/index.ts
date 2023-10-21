import React from 'react'
import { UserTemplate } from '../Template';

export class UserTemplateList {
    private _templates: UserTemplate[] = [];
    private _setTemplateState: React.Dispatch<React.SetStateAction<UserTemplate[]>>;

    constructor(
        defaultTemplates: UserTemplate[] = [],
    ) { 
        const [templates, setTemplates] = React.useState<UserTemplate[]>(defaultTemplates);
        this._templates = templates;
        this._setTemplateState = setTemplates;
     }
    
    // getter
    public get templates() { return this._templates;}
    
    // Template List CRUD
    public addTemplate = (template: UserTemplate) => this._setTemplateState(state => [...state, template]);
    public addTemplates = (templates: UserTemplate[]) => this._setTemplateState(state => [...state, ...templates]);
    public deleteTemplate = (template: UserTemplate) => this._setTemplateState(state => state.filter(t => t.id !== template.id));
    public updateTemplate = (template: UserTemplate) => this._setTemplateState(state => state.map(t => t.id === template.id ? template : t));
}