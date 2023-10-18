import { BsListCheck, BsGearFill, BsClipboardFill, BsLayoutSidebar } from "react-icons/bs";
import { useState } from "react";

import { Outlet, Link } from "react-router-dom";
import { IoLanguageSharp } from "react-icons/io5";

const SideNav = () => {
    
    const [expanded, setExpanded] = useState(true);
    const [page, setPage] = useState(window.location.href.split('/').pop());

    return (
        <nav className="w-28">
            <div className={`
                h-full flex flex-col justify-between items-center w-24 transition-all duration-200 relative
            `}>
                
                <button className="bg-neutral-900 p-4 flex justify-center items-center shadow-lg shadow-black transition-all duration-200 w-full absolute top-0 left-0" onClick={() => setExpanded(!expanded)}> <BsLayoutSidebar /> </button>

                <div className={`
                    bg-neutral-900 p-4 shadow-lg shadow-black transition-all duration-200 grow justify-between flex flex-col w-full absolute top-10 bottom-0
                    ${expanded ? "left-0" : "-left-[100%]"}
                `}>
                    <div/>
                    <div className="flex flex-col text-2xl items-center gap-24 w-full">
                        {
                            [
                                {
                                    to: 'tasks',
                                    icon: <BsListCheck />
                                },
                                {
                                    to: 'templates',
                                    icon: <BsClipboardFill />
                                },
                                {
                                    to: 'configuration',
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

                    <button className="text-2xl flex justify-center"> <IoLanguageSharp /> </button>
                </div>
            </div>
        </nav>
    )
}

export default function Root() {  
    return (
        <main className="bg-neutral-800 h-[100vh] text-neutral-100 flex">
            <SideNav />
            <div className="flex justify-center w-full">
                <Outlet />
            </div>
        </main>
    )
}