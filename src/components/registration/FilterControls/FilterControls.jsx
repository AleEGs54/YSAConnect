import FilterButton from "../../common/FilterButton/FilterButton"
import { useContext, useEffect } from "react";
import { FiltersContext, FiltersDispatchContext } from "../../../context/FiltersContext";
export default function FilterControls({ users, setFilteredUsers }) {
    const filters = useContext(FiltersContext);
    const dispatch = useContext(FiltersDispatchContext);

    /**
     * Handle the click on a filter button.
     * If the filter is already applied, it removes it.
     * If the filter is not applied, it adds it.
     * @param {string} key - The key of the filter to change.
     * @param {any} value - The value of the filter to change.
     */
    function handleFilterClick(key, value) {

        dispatch({
            type: "SET_FILTERS",
            payload: {
                ...filters.filtersList,
                [key]: filters.filtersList[key] === value ? null : value

            }
        })
    }

    /**
     * Returns a filtered copy of the users array, based on the current filter settings.
     * 
     * Each filter is applied only if the corresponding filter key is not null.
     * If a filter key is null, the filter is not applied and all users pass.
     * 
     * Think of filters.Género === null as a first filter (if it's null, then all users pass, because there is no filter), then think of user.Género === filters.Género as a second filter (this second filter determines whether the user passes or not, i.e. if we want men only, then women don't pass).
     * 
     * At the end the && chains the filters together, so that if one filter is false, then the user doesn't pass: If all return true, then the user passes.
     * @returns {Array<{}>} A filtered copy of the users array.
     */

    useEffect(() => {
        const filteredUsers = users.filter((user) => {
            return (
                (filters.filtersList.Género === null || user.Género === filters.filtersList.Género) &&
                (filters.filtersList.Pagado === null || user.Pagado === filters.filtersList.Pagado) &&
                (filters.filtersList.Correo === null || user.Correo === filters.filtersList.Correo) &&
                (filters.filtersList.Número === null || user.Número === filters.filtersList.Número)
            );
        });

        setFilteredUsers(filteredUsers);
    }, [filters.filtersList, users]);


    return (
        <div className="flex flex-col gap-4 col-span-1 row-span-1">
            
            <h2>Filtrar:</h2>
            <div className="flex flex-row gap-2 justify-center">
                <FilterButton
                    label="Hombres"
                    isActive={filters.filtersList.Género === "H"}
                    onClick={() => handleFilterClick("Género", "H")}
                />
                <FilterButton
                    label="Mujeres"
                    isActive={filters.filtersList.Género === "M"}
                    onClick={() => handleFilterClick("Género", "M")}
                />
            </div>
            <div className="flex flex-row gap-2 justify-center">
                <FilterButton
                    label="Pagado"
                    isActive={filters.filtersList.Pagado === true}
                    onClick={() => handleFilterClick("Pagado", true)}
                />
                <FilterButton
                    label="No Pagado"
                    isActive={filters.filtersList.Pagado === false}
                    onClick={() => handleFilterClick("Pagado", false)}
                />
            </div>

        </div>
    )
}
