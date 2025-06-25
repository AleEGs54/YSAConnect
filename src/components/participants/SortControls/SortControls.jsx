import { useContext } from "react"
import { FiltersContext, FiltersDispatchContext } from "../../../context/FiltersContext"
import { COLUMN_DEFINITIONS } from "../../../constants/columns";

export default function SortControls() {
    const filters = useContext(FiltersContext);
    const dispatch = useContext(FiltersDispatchContext);


    return (
        <div className="col-span-2 ">
            <label>
                <p>Ordenar por:</p>
                <select 
                name="order" 
                id="order" 
                value={filters.sortBy}
                className="border-2 border-black rounded-md p-2 w-full"
                onChange={(e) => dispatch({ type: "SET_SORT_BY", payload: e.target.value})}
                >
                    {COLUMN_DEFINITIONS.filter(c => c.sortable).map((column, index) => (
                        <option key={index} value={column.key}>{column.label}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}

