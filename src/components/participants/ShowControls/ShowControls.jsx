import { useContext } from "react";
import { FiltersContext, FiltersDispatchContext } from "../../../context/FiltersContext";

export default function ShowControls() {

    const filters = useContext(FiltersContext);
    const dispatch = useContext(FiltersDispatchContext);


    function handleChange(e) {
        const { name, checked } = e.target;


        dispatch({
            type: "SET_TO_SHOW",
            payload: filters.toShow.map(column => column.key === name ? { ...column, show: checked} : column)
        });
    }

    return (
        <>
            <div className="flex flex-col gap-2 col-start-2 row-start-1">
                <h2>Mostrar:</h2>
                
                {filters.toShow.map((column, index) => (
                    <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" onChange={handleChange} checked={column.show} name={column.key} id={column.key} />
                        {column.label}
                    </label>
                ))}
                
            </div>
        </>
    )
}