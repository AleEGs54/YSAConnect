import FilterButton from "../../common/FilterButton/FilterButton"
import { useContext, useEffect } from "react";
import { FiltersContext, FiltersDispatchContext } from "../../../context/FiltersContext";
export default function FilterControls({ users, setFilteredUsers }) {
    const filters = useContext(FiltersContext);
    const dispatch = useContext(FiltersDispatchContext);



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
     * Think of filters.sex === null as a first filter (if it's null, then all users pass, because there is no filter), then think of user.sex === filters.sex as a second filter (this second filter determines whether the user passes or not, i.e. if we want men only, then women don't pass).
     * 
     * At the end the && chains the filters together, so that if one filter is false, then the user doesn't pass: If all return true, then the user passes.
     * @returns {Array<{}>} A filtered copy of the users array.
     */

    useEffect(() => {
        const filteredUsers = users.filter((user) => {
            return (
                (filters.filtersList.sex === null || user.sex === filters.filtersList.sex) &&
                (filters.filtersList.payment === null || user.payment === filters.filtersList.payment) &&
                (filters.filtersList.member_of_church === null || user.member_of_church === filters.filtersList.member_of_church)
            );
        });
        console.log(filteredUsers)
        setFilteredUsers(filteredUsers);
    }, [filters.filtersList, users]);


    return (
        <div className="flex flex-col gap-4 col-span-1 row-span-1">

            <h2>Filtrar:</h2>
            <div className="flex flex-row gap-2 justify-center">
                <FilterButton
                    label="Hombres"
                    isActive={filters.filtersList.sex === "Masculino"}
                    onClick={() => handleFilterClick("sex", "Masculino")}
                />
                <FilterButton
                    label="Mujeres"
                    isActive={filters.filtersList.sex === "FEMENINO"}
                    onClick={() => handleFilterClick("sex", "FEMENINO")}
                />
            </div>
            <div className="flex flex-row gap-2 justify-center">
                <FilterButton
                    label="Pagado"
                    isActive={filters.filtersList.payment === 'SI'}
                    onClick={() => handleFilterClick("payment", 'SI')}
                />
                <FilterButton
                    label="Sin Pagar"
                    isActive={filters.filtersList.payment === 'NO'}
                    onClick={() => handleFilterClick("payment", 'NO')}
                />
            </div>
            <div className="flex flex-row gap-2 justify-center">
                <FilterButton
                    label="Miembro"
                    isActive={filters.filtersList.member_of_church === 'SI'}
                    onClick={() => handleFilterClick("member_of_church", 'SI')}
                />
                <FilterButton
                    label="No Miembro"
                    isActive={filters.filtersList.member_of_church === 'NO'}
                    onClick={() => handleFilterClick("member_of_church", 'NO')}
                />
            </div>

        </div>
    )
}
