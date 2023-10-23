import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export interface FormTemplate {
    [key: string]: {
        type: 'text' | 'textarea' | 'number' | 'checkbox' | 'select' | 'radio',
        label: string,
        rules: ((value: string) => string | boolean)[],
        id?: string
        value?: string,
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    }
}

interface InputProps {
    label: string,
    name: string,
    id: string,
    value: string,
    errors: string[],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({label, name, id, value, onChange, errors}: InputProps) => (
    <div className='flex flex-col gap-1 text-neutral-800'>
        <label htmlFor={id} className='text-neutral-100 font-semibold'>{label}</label>
        <input type="text" name={name} id={id} className='rounded-md px-2 py-1' value={value} onChange={onChange}/>
        <div className="flex flex-col gap-1 text-red-500 text-sm">
            {
                errors.map((error, index) => (
                    <span key={index}>{error}</span>
                ))
            }
        </div>
    </div>
)

const FormElementFactory = (type: FormTemplate[keyof FormTemplate]['type']) => {
    switch(type) {
        case 'text':
            return Input;
        default:
            return Input;
    }
}

interface TemplateFormProps <T>{
    onSubmit: (form: T) => void,
    formTemplate: T
}

const TemplateForm = <T extends FormTemplate>({onSubmit, formTemplate}: TemplateFormProps<T>) => {
    const [form, setForm] = useState(formTemplate);
    const {language} = useLanguage();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: {
                ...form[name],
                value
            }
        })
    }

    const resetFormValues = () => {
        const newForm = Object.entries(form).reduce((acc, [key, value]) => {
            acc[key] = {
                ...value,
                value: ''
            }
            return acc;
        }, {} as FormTemplate);
        setForm(newForm as T);
    }

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        resetFormValues();
    }

    return (
        <form onSubmit={onSubmitForm} className='flex flex-col gap-4'>
            {
                Object.entries(form).map(([key, value]) => {
                    const FormElement = FormElementFactory(value.type);
                    return (
                        <FormElement 
                            key={key}
                            label={value.label}
                            name={key}
                            id={value.id || key}
                            onChange={onChange}
                            value={value.value || ''}
                            errors={
                                value.rules.map((rule) => {
                                    return rule(value.value || '');
                                }).filter((error) => typeof error === 'string') as string[]
                            }
                        />
                    )
                })
            }
            
            <button 
                type='submit' 
                disabled={
                    Object.values(form).some((value) => {
                        return value.rules.some((rule) => {
                            return typeof rule(value.value || '') === 'string';
                        })
                    })
                }
                className={`
                    rounded-md bg-green-500 text-neutral-100 font-semibold px-2 py-1
                    transition-all duration-200
                    disabled:bg-neutral-700 disabled:cursor-not-allowed
                `}>
                    {language.submit}
                </button>
        </form>
    )
}


export default {
    TemplateForm, 
    Input
};