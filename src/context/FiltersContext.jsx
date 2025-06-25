import { createContext, useReducer, useEffect } from "react";
import utilities from "../utils";
import { COLUMN_DEFINITIONS } from "../constants/columns";

export const FiltersContext = createContext(null);
export const FiltersDispatchContext = createContext(null);

export default function FiltersContextProvider({ children }) {


    const [filtersState, dispatch] = useReducer(reducer, null, () => {
        // Get filters from session storage or set default values
        const storedSearchTerm = sessionStorage.getItem("searchTerm") || "";
        const storedSortBy = sessionStorage.getItem("sortBy") || COLUMN_DEFINITIONS.filter(c => c.sorting)?.key;
        const storedToShow = utilities.getsessionStorageObject("toShow", COLUMN_DEFINITIONS.filter(c => c.visible));
        const storedFilters = utilities.getsessionStorageObject("filters", COLUMN_DEFINITIONS.reduce((acc, column) => {
            if (column.filterable) {
                acc[column.key] = null;
            }
            return acc;
        }, {}));

        return {
            searchTerm: storedSearchTerm,
            sortBy: storedSortBy,
            toShow: storedToShow,
            filtersList: storedFilters,
        };
    });

    useEffect(() => {
        // Save filters to session storage and update state if data is available
        sessionStorage.setItem("searchTerm", filtersState.searchTerm);
        sessionStorage.setItem("sortBy", filtersState.sortBy);
        sessionStorage.setItem("toShow", JSON.stringify(filtersState.toShow));
        sessionStorage.setItem("filters", JSON.stringify(filtersState.filtersList));
    }, [filtersState]);

    return (
        <FiltersContext.Provider value={filtersState}>
            <FiltersDispatchContext.Provider value={dispatch}>
                {children}
            </FiltersDispatchContext.Provider>
        </FiltersContext.Provider>
    );
}

function reducer(filtersState, action) {
    switch (action.type) {
        case "SET_SEARCH_TERM":
            return { ...filtersState, searchTerm: action.payload };
        case "SET_SORT_BY":
            return { ...filtersState, sortBy: action.payload };
        case "SET_TO_SHOW":
            return { ...filtersState, toShow: action.payload };
        case "SET_FILTERS":
            return { ...filtersState, filtersList: action.payload };
        case "RESET_FILTERS":
            return {
                searchTerm: "",
                sortBy: COLUMN_DEFINITIONS.find(c => c.sorting)?.key,
                toShow: utilities.getsessionStorageObject("toShow", COLUMN_DEFINITIONS.filter(column => column.visible === true)),
                filtersList: COLUMN_DEFINITIONS.reduce((acc, col) => {
                    if (col.filterable) acc[col.key] = null;
                    return acc;
                }, {})
            };
        default:
            return filtersState;
    }
}