import { useContext } from "react"
import { FiltersContext, FiltersDispatchContext } from "../../../context/FiltersContext"

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
                onChange={(e) => dispatch({ type: "SET_SORT_BY", payload: e.target.value})}>
                    <option value="Dni">Dni</option>
                    <option value="Nombre" >Nombre</option>
                    <option value="Apellido_Paterno">Apellidos</option>
                    <option value="Ciudad">Ciudad</option>
                    <option value="País">País</option>
                    <option value="Edad">Edad</option>
                    <option value="Compañía">Compañía</option>
                </select>
            </label>
        </div>
    )
}

