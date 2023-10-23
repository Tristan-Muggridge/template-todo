export enum SupportedLanguages {
    English = "English",
    Japanese = "Japanese",
}

export interface UILanguage {
    _id: SupportedLanguages;
    toDo: string;
    completed: string;
    loadFromTemplates: string;
    newTask: string;

    templates: string;
    createNewTemplate: string;
    name: string;
    description: string;
    submit: string;
    templateTasks: string;
    enabled: string;
    disabled: string;
    createANewTask: string;

    nameIsRequired: string;
}

const UILanguages: {[key in SupportedLanguages]: UILanguage} = {
    English: {
        _id: SupportedLanguages.English,
        toDo: 'To Do',
        completed: 'Completed',
        loadFromTemplates: 'Load from Templates',
        newTask: 'New Task',

        templates: 'Templates',
        createNewTemplate: 'Create New Template',
        name: 'Name',
        description: 'Description',
        submit: 'Submit',
        templateTasks: 'Template Tasks',
        enabled: 'Enabled',
        disabled: 'Disabled',
        createANewTask: 'Create a New Task',

        nameIsRequired: 'Name is required',
    },

    Japanese: {
        _id: SupportedLanguages.Japanese,
        toDo: 'やること',
        completed: '完了',
        loadFromTemplates: 'テンプレートからロード',
        newTask: '新しいタスク',

        templates: 'テンプレート',
        createNewTemplate: '新しいテンプレート',
        name: '名前',
        description: '説明',
        submit: '保存',
        templateTasks: 'テンプレートタスク',
        enabled: '有効',
        disabled: '無効',
        createANewTask: '新しいタスクを作成',

        nameIsRequired: '名前は必須です',
    }
}

export default UILanguages;