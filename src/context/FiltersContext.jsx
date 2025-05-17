import { createContext, useReducer, useEffect } from "react";
import  getSessionObject  from "../utils/getSessionObject";


export const FiltersContext = createContext(null);
export const FiltersDispatchContext = createContext(null);

export default function FiltersContextProvider({ children }) {
    const [filtersState, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
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

const initialState = {
    searchTerm: sessionStorage.getItem("searchTerm") || "",
    sortBy: sessionStorage.getItem("sortBy") || "Dni",
    toShow: getSessionObject("toShow", {
        Dni: true,
        Nombre: true,
        Apellidos: true,
        Ciudad: true,
        País: true,
        Edad: true,
        Género: true,
        Compañía: true,
        Teléfono: true,
        Correo: true,
        Pagado: true
    }),
    filtersList: getSessionObject("filters", {
        Género: null,
        Pagado: null,
        Correo: null,
        Número: null
    }),
};


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
        default:
            return filtersState;
    }
}
