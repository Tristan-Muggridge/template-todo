import { BsListCheck, BsGearFill, BsClipboardFill, BsLayoutSidebar } from "react-icons/bs";
import { useState } from "react";

import { Outlet, Link } from "react-router-dom";

const SideNav = () => {
    
    const [expanded, setExpanded] = useState(true);
    
    return (
        <nav className="w-28">
            <div className={`
                bg-neutral-900 h-full flex flex-col justify-center items-center w-24 shadow-lg shadow-black transition-all duration-200
                ${expanded ? "w-24" : "w-0"}
            `}>
                <div className="absolute top-4 left-10 text-2xl">
                    <button onClick={() => setExpanded(!expanded)}> <BsLayoutSidebar /> </button>
                </div>
                <div className="flex flex-col flex-wrap text-2xl items-center justify-around max-h-[25%] h-full w-full">
                    <Link to={'tasks'} className="flex w-full items-center justify-center grow hover:bg-neutral-600 transition-all duration-200"> <BsListCheck /> </Link>
                    <Link to={'templates'} className="flex w-full items-center justify-center grow hover:bg-neutral-600 transition-all duration-200"> <BsClipboardFill /> </Link>
                    <Link to={'configuration'} className="flex w-full items-center justify-center grow hover:bg-neutral-600 transition-all duration-200"> <BsGearFill /> </Link>
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