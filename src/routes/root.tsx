import { BsListCheck, BsClipboardFill, BsLayoutSidebar } from "react-icons/bs";
import { useEffect, useState } from "react";

import { Outlet, Link } from "react-router-dom";
import { IoLanguageSharp } from "react-icons/io5";
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguages } from "../UILanguages";

const LanguageToggle = () => {
    
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        document.title = language._id === SupportedLanguages.English ? 'Template Todo' : 'マイ・タスク';
    }, [language]);
    
    return (
        <button className=" text-center w-full flex items-center justify-center mx-auto" onClick={() => {
            language._id === SupportedLanguages.English ? setLanguage(SupportedLanguages.Japanese) : setLanguage(SupportedLanguages.English);
        }}> 
            <IoLanguageSharp /> 
        </button>
    )
}

const SideNav = () => {
    
    const [expanded, setExpanded] = useState(false);
    const [page, setPage] = useState(window.location.href.split('/').pop());

    const onNavClick = () => {
        setExpanded(false);
        setPage(window.location.href.split('/').pop());
    }

    const { language } = useLanguage();

    return (
    <nav className={`flex flex-col w-12`}>
        <span className="bg-neutral-900 p-4 text-2xl flex items-center justify-center"
         onClick={() => setExpanded(!expanded)}>    
            <BsLayoutSidebar /> 
        </span>
        
        <div className={`
            flex flex-col gap-4 w-full h-full transition-all duration-200
        `}>
            <div className={`
                flex flex-col gap-4 w-12 fixed md:static md:h-full top-12 bottom-0 left-0 bg-neutral-900 transition-all duration-200
                ${expanded ? '-left-0' : '-left-12'}
                justify-between items-center py-4 text-2xl
                
                z-10
            `}>
                    <div/>
                    <div className="flex flex-col gap-8">
                        {
                            [
                                {
                                    to: '/',
                                    icon: <BsListCheck />
                                },
                                {
                                    to: language._id === SupportedLanguages.English ? 'templates' : 'テンプレート',
                                    icon: <BsClipboardFill />
                                },
                            ].map( ({to, icon}) => (
                                <Link 
                                    key={to} 
                                    to={to} 
                                    className={`
                                        flex w-full items-center justify-center grow hover:text-neutral-700 transition-all duration-200
                                        ${page === to ? 'text-neutral-700' : ''}
                                    `}
                                    onClick={onNavClick}
                                > 
                                    {icon} 
                                </Link>
                            ))
                        }
                    </div>

                    <LanguageToggle />
            </div>

        </div>
    </nav>
    )
}

export default function Root() {  
    return (
        <main className="bg-neutral-800 supports-[height:100cqh]:min-h-[100cqh] supports-[height:100svh]:min-h-[100svh] text-neutral-100 flex flex-col md:flex-row">
            <SideNav />
            <div className="flex justify-center w-full h-full mt-16 md:ml-24">
                <Outlet />
            </div>
        </main>
    )
}