import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import '/assets/icons/sprite.svg';
import { set } from "react-hook-form";

export default function Sidebar() {

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [showText, setShowText] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
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

    return (
        <>
            <nav className={"col-span-1 row-span-2 flex flex-col h-full border-2 border-black p-4 justify-center w-2xs transition-all duration-300 ease-in-out overflow-hidden " + (isCollapsed ? " w-27" : " w-54")}>
                <div>
                    <img src="assets/logos/confeJasLogo.png" alt="Logo" className="w-15 " />
                </div>
                <ul className="flex flex-col gap-4 mt-10 mb-10 w-full justify-center pr-2.5 pl-2.5">
                    <li>
                        <Link to='/participants' className="nav-link">
                            <svg width={40} height={40} viewBox="0 0 24 24" fill="none">
                                <use href="/assets/icons/sprite.svg#icon-table" />
                            </svg>
                            {showText && <span>Participantes</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to='/stats' className="nav-link">
                            <svg width={40} height={40} viewBox="0 0 24 24" fill="none">
                                <use href="/assets/icons/sprite.svg#icon-stats" />
                            </svg>
                            {showText && <span>Estadísticas</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to='/leaders' className="nav-link">
                            <svg width={40} height={40} viewBox="0 0 24 24" fill="none">
                                <use href="/assets/icons/sprite.svg#icon-leaders" />
                            </svg>
                            {showText && <span>Líderes</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to='/duplicates' className="nav-link">
                            <svg width={40} height={40} viewBox="0 0 24 24" fill="none">
                                <use href="/assets/icons/sprite.svg#icon-duplicate" />
                            </svg>
                            {showText && <span>Duplicados</span>}
                        </Link>
                    </li>
                    <br />
                    <li>
                        <Link to='/help' className="nav-link">
                            <svg width={40} height={40} viewBox="0 0 24 24" fill="none">
                                <use href="/assets/icons/sprite.svg#icon-help" />
                            </svg>
                            {showText && <span>Ayuda</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className="nav-link">
                            <svg width={40} height={40} viewBox="0 0 24 24" fill="none">
                                <use href="/assets/icons/sprite.svg#icon-logout" />
                            </svg>
                            {showText && <span>Cerrar Sesión</span>}
                        </Link>
                    </li>
                    <li>
                        <button className="nav-link cursor-pointer w-full" onClick={toggleSidebar}>
                            <svg width={40} height={40} viewBox="0 0 24 24" fill="none">
                                <use href={`/assets/icons/sprite.svg#${isCollapsed ? 'icon-chevrons-right' : 'icon-chevrons-left'}`} />
                            </svg>
                            {showText && <span>Minimizar</span>}
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}