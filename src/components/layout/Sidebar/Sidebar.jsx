import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import '/assets/icons/sprite.svg';

export default function Sidebar({ isMenuCollapsed, setIsMenuCollapsed }) {

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [showText, setShowText] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleMenu = () => {
        setIsMenuCollapsed(!isMenuCollapsed);
    };

    useEffect(() => {
        if (!isCollapsed) {
            const timer = setTimeout(() => {
                setShowText(true);  // Después de 0.3s, los textos se insertan en el DOM
            }, 300); // 300ms de espera
            return () => clearTimeout(timer);  // Limpia el timer cuando se desmonte
        } else {
            setShowText(false);  // Elimina los textos del DOM inmediatamente
        }
    }, [isCollapsed]);

    useEffect(() => {
        if (!isMenuCollapsed) {
            setShowText(true);
        } else {
            setShowText(false);
        }
    }, [isMenuCollapsed]);


    return (
        <>
            <nav
                className={
                    `${isMenuCollapsed ? "hidden" : " flex flex-col items-center w-full h-full p-4 animate-fade-in-up"} `
                }
            // className={"col-span-1 row-span-2 flex flex-col h-full border-2 border-black p-4  w-2xs transition-all duration-300 ease-in-out overflow-hidden " + (isCollapsed ? " w-27" : " w-54")}
            >
                <div>
                    <img src="assets/logos/confeJasLogo.png" alt="Logo" className="w-15 " />
                </div>
                <div className="flex flex-col justify-between h-full">
                    <ul className="flex flex-col gap-4 mt-10 mb-10 w-full justify-center pr-2.5 pl-2.5">
                        <li>
                            <Link
                                to='/dashboard'
                                className="nav-link"
                                onClick={toggleMenu}
                                >
                                <svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                                    <use href="/assets/icons/sprite.svg#icon-table" />
                                </svg>
                                {showText && <span>Dashboard</span>}
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to='/participants' 
                            className="nav-link"
                            onClick={toggleMenu}
                            >
                                <svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                                    <use href="/assets/icons/sprite.svg#icon-list" />
                                </svg>
                                {showText && <span>Participantes</span>}
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to='/stats' 
                            className="nav-link"
                            onClick={toggleMenu}
                            >
                                <svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                                    <use href="/assets/icons/sprite.svg#icon-stats" />
                                </svg>
                                {showText && <span>Estadísticas</span>}
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to='/leaders' 
                            className="nav-link"
                            onClick={toggleMenu}
                            >
                                <svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                                    <use href="/assets/icons/sprite.svg#icon-leaders" />
                                </svg>
                                {showText && <span>Consejeros</span>}
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to='/duplicates' 
                            className="nav-link"
                            onClick={toggleMenu}
                            >
                                <svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                                    <use href="/assets/icons/sprite.svg#icon-duplicate" />
                                </svg>
                                {showText && <span>Duplicados</span>}
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to='/tools' 
                            className="nav-link"
                            onClick={toggleMenu}
                            >
                                <svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                                    <use href="/assets/icons/sprite.svg#icon-tool" />
                                </svg>
                                {showText && <span>Herramientas</span>}
                            </Link>
                        </li>
                        
                        <li>
                            <Link 
                            to='/help' 
                            className="nav-link"
                            onClick={toggleMenu}
                            >
                                <svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                                    <use href="/assets/icons/sprite.svg#icon-help" />
                                </svg>
                                {showText && <span>Ayuda</span>}
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to='/' 
                            className="nav-link"
                            onClick={toggleMenu}
                            >
                                <svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                                    <use href="/assets/icons/sprite.svg#icon-logout" />
                                </svg>
                                {showText && <span>Cerrar Sesión</span>}
                            </Link>
                        </li>
                        {
                            isMenuCollapsed &&
                            <li>
                                <button
                                    className="nav-link cursor-pointer w-full"
                                    onClick={toggleSidebar}>
                                    <svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 24 24"
                                        fill="none">
                                        <use
                                            href={`/assets/icons/sprite.svg#${isCollapsed ? 'icon-chevrons-right' : 'icon-chevrons-left'}`} />
                                    </svg>
                                    {showText && <span>Minimizar</span>}
                                </button>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}