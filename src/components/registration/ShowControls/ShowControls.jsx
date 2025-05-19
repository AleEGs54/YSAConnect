import { useContext } from "react";
import { FiltersContext, FiltersDispatchContext } from "../../../context/FiltersContext";

export default function ShowControls({users}) {

    const filters = useContext(FiltersContext);
    const dispatch = useContext(FiltersDispatchContext);

    function handleChange(e) {
        const { name, checked } = e.target;


        dispatch({
            type: "SET_TO_SHOW",
            payload: {
                ...filters.toShow,
                [name]: checked
            }
        });
    }

    return (
        <>
            <div className="flex flex-col gap-2 col-start-2 row-start-1">
                <h2>Mostrar:</h2>
                {Array.isArray(users) && users.every(u => u.Rol) && <label className="flex items-center gap-2">
                    <input type="checkbox" onChange={handleChange} checked={filters.toShow.Rol} name="Rol" id="Rol" />
                    Rol
                </label> }
                <label className="flex items-center gap-2">
                    <input type="checkbox" onChange={handleChange} checked={filters.toShow.Dni} name="Dni" id="Dni" />
                    Dni
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" onChange={handleChange} checked={filters.toShow.Nombre} name="Nombre" id="nombre" />
                    Nombre
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" onChange={handleChange} checked={filters.toShow.Apellidos} name="Apellidos" id="apellidos" />
                    Apellidos
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" onChange={handleChange} checked={filters.toShow.Ciudad} name="Ciudad" id="Ciudad" />
                    Ciudad
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" onChange={handleChange} checked={filters.toShow.País} name="País" id="País" />
                    País
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" onChange={handleChange} checked={filters.toShow.Edad} name="Edad" id="edad" />
                    Edad
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" onChange={handleChange} checked={filters.toShow.Género} name="Género" id="Género" />
                    Género
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" onChange={handleChange} checked={filters.toShow.Compañía} name="Compañía" id="compañia" />
                    Compañía
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" onChange={handleChange} checked={filters.toShow.Teléfono} name="Teléfono" id="teléfono" />
                    Teléfono
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" onChange={handleChange} checked={filters.toShow.Correo} name="Correo" id="correo" />
                    Correo
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" onChange={handleChange} checked={filters.toShow.Pagado} name="Pagado" id="Pagado" />
                    Pagado
                </label>
            </div>
        </>
    )
}