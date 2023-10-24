import { createContext, useContext, useEffect, useState } from "react";
import UILanguages, {UILanguage} from "../UILanguages";

interface LanguageContextType {
    language: UILanguage;
    setLanguage: (language: keyof typeof UILanguages) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    language: UILanguages.English,
    setLanguage: () => {throw new Error('Not implemented')}
});

const LanguageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [language, setLanguage] = useState(UILanguages.English)

    const setLanguageWrapper = (language: keyof typeof UILanguages) => {
        setLanguage(UILanguages[language]);
    }

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (!storedLanguage) return;

        setLanguage(UILanguages[storedLanguage as keyof typeof UILanguages]);
    
    }, []);

    useEffect(() => {
        localStorage.setItem('language', language._id);
    }, [language]);

    return (
        <LanguageContext.Provider value={{language, setLanguage: setLanguageWrapper}}>
            {children}
        </LanguageContext.Provider>
    )
}

const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('UseLanguage must be used within a LanguageProvider');
    }

    return context;
}

export {LanguageProvider, useLanguage};