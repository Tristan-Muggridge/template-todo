import { BsListCheck, BsGearFill, BsClipboardFill, BsLayoutSidebar } from "react-icons/bs";
import { useEffect, useState } from "react";

import { Outlet, Link } from "react-router-dom";
import { IoLanguageSharp } from "react-icons/io5";
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguages } from "../UILanguages";

const SideNav = () => {
    
    const [expanded, setExpanded] = useState(true);
    const [page, setPage] = useState(window.location.href.split('/').pop());
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        document.title = language._id === SupportedLanguages.English ? 'Template Todo' : 'マイ・タスク';
    }, [language])

    return (
        <nav className="w-28">
            <div className={`
                h-full flex flex-col justify-between items-center w-24 transition-all duration-200 relative
            `}>
                
                <span className="bg-neutral-900 p-4 flex justify-center items-center shadow-lg shadow-black transition-all duration-200 w-full absolute top-0 left-0" onClick={() => setExpanded(!expanded)}> <BsLayoutSidebar /> </span>

                <div className={`
                    bg-neutral-900 p-4 shadow-lg shadow-black transition-all duration-200 grow justify-between flex flex-col w-full absolute top-10 bottom-0
                    
                `}>
                    <div/>
                    <div className="flex flex-col text-2xl items-center gap-24 w-full">
                        {
                            [
                                {
                                    to: language._id === SupportedLanguages.English ? '/' : '/',
                                    icon: <BsListCheck />
                                },
                                {
                                    to: language._id === SupportedLanguages.English ? 'templates' : 'テンプレート',
                                    icon: <BsClipboardFill />
                                },
                                {
                                    to: language._id === SupportedLanguages.English ? 'configuration' : '設定',
                                    icon: <BsGearFill />
                                }
                            ].map( ({to, icon}) => (
                                <Link 
                                    key={to} 
                                    to={to} 
                                    className={`
                                        flex w-full items-center justify-center grow hover:text-neutral-700 transition-all duration-200
                                        ${page === to ? 'text-neutral-700' : ''}
                                    `}
                                    onClick={() => setPage(to)}
                                > 
                                    {icon} 
                                </Link>
                            ))
                        }
                    </div>

                    <button className="text-2xl flex justify-center" onClick={() => {
                        // This is actually awful, TODO: Fix this
                        language._id === SupportedLanguages.English ? setLanguage(SupportedLanguages.Japanese) : setLanguage(SupportedLanguages.English);
                    }}> <IoLanguageSharp /> </button>
                </div>
            </div>
        </nav>
    )
}

export default function Root() {  
    return (
        <main className="bg-neutral-800 supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] text-neutral-100 flex">
            <SideNav />
            <div className="flex justify-center w-full h-full">
                <Outlet />
            </div>
        </main>
    )
}