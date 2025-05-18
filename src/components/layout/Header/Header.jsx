export default function Header({ isMenuCollapsed, setIsMenuCollapsed }) {

    function toggleSidebar() {
        setIsMenuCollapsed(!isMenuCollapsed);
    }

    return (
        <header
            className="z-50 top-2.5 left-2.5 bg-white fixed"
        >
            <div
                className="cursor-pointer"
                onClick={toggleSidebar}
            >
                {
                    isMenuCollapsed
                        ?
                        <svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                            <use href="/assets/icons/sprite.svg#icon-menu" />
                        </svg>
                        :
                        <span className="text-3xl">X</span>
                }
            </div>
        </header>
    )
}

