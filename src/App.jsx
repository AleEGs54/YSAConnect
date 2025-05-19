
import Sidebar from "./components/layout/Sidebar/Sidebar"
import AppRouter from "./routes/AppRouter"
import Header from "./components/layout/Header/Header"
import { useState } from "react";

export default function App() {
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);


    return (
        <>
            <main
            id="main"
                className='flex flex-col relative p-0.5 pt-3 pb-2.5'
            // className="grid grid-cols-[16fr] grid-rows-2 h-screen"
            >
                <Header isMenuCollapsed={isMenuCollapsed} setIsMenuCollapsed={setIsMenuCollapsed} />
                <Sidebar isMenuCollapsed={isMenuCollapsed} setIsMenuCollapsed={setIsMenuCollapsed} />
                <div className={isMenuCollapsed ? 'block' : 'hidden'}>
                    <AppRouter />
                </div>
            </main>
        </>
    )
}