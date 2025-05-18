import { useContext } from "react";
import { FiltersContext, FiltersDispatchContext } from "../../../context/FiltersContext";

export default function SearchBar({ placeholder = "Buscar" }) {
    const filters = useContext(FiltersContext);
    const dispatch = useContext(FiltersDispatchContext);

    return (
        <div 
        className="flex w-[90%] items-center justify-center mt-3 mb-3"
        //className="col-span-full row-span-1 flex flex-col items-center justify-center"
        >
            <div className="relative w-full">
                <input
                    type="text"
                    name="search"
                    placeholder={placeholder}
                    className="border-1 w-full h-10 rounded-full p-4 pr-10"
                    value={filters.searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    onChange={(e) => dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value})}
                />

                {filters.searchTerm && (
                    <button
                        type="button"
                        onClick={() => dispatch({ type: "SET_SEARCH_TERM", payload: ""})}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
                    >
                        Ⅹ
                    </button>
                )}
            </div>
        </div>
    );
}