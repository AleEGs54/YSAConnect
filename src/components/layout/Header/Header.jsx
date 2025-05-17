export default function Header({ isMenuCollapsed, setIsMenuCollapsed }) {

    function toggleSidebar() {
        setIsMenuCollapsed(!isMenuCollapsed);
    }

    return (
        <header
            className="z-50 p-4 flex top-0 left-0 bg-white shadow-md "
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

