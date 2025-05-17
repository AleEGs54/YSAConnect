import removeAccents from "../../../utils/removeAccents";
import { useMemo } from "react";
import { useContext } from "react";
import { FiltersContext } from "../../../context/FiltersContext";

/**
 * Filters the data by checking if the searchTerm is contained in the DNI, the full name, the email or the phone number.
 * @param {Object[]} data - The data to filter
 * @param {string} searchTerm - The string to search for
 * @returns {Object[]} - The filtered data
 */
function findData(data, searchTerm) {
    return data.filter(
        ({ DNI, Nombre, Segundo_Nombre, Apellido_Paterno, Apellido_Materno, Correo, Teléfono }) =>
            searchTerm.trim() === "" ||
            [
                DNI,
                `${Nombre} ${Segundo_Nombre} ${Apellido_Paterno} ${Apellido_Materno}`,
                Correo,
                Teléfono,
            ]
                .filter(Boolean)
                .some((value) => removeAccents(value.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase())))
    );
}

/**
 * Sorts the data array based on the specified key.
 * The sorting is case-insensitive and accents are removed for comparison.
 * 
 * @param {string} sortBy - The key by which to sort the data.
 * @param {Object[]} data - The array of objects to be sorted.
 * @returns {Object[]} - The sorted array of objects.
 */

function sortData(sortBy, data) {

    const sorted = [...data]

    sorted.sort((a, b) => {
        const valA = removeAccents((a[sortBy] || "").toString().toLowerCase());
        const valB = removeAccents((b[sortBy] || "").toString().toLowerCase());

        return valA - valB || valA.localeCompare(valB, 'es');
    })

    return sorted

}

export default function RegistrationRow({ data }) {
    const filters = useContext(FiltersContext)

    const searchTerm = filters.searchTerm
    const toShow = filters.toShow
    const sortBy = filters.sortBy
    
    const filteredData = useMemo(() => {
        let newData;
        newData = sortData(sortBy, data)
        newData =findData(newData, searchTerm), [data, searchTerm]
        return newData
    }

    );



    return (
        <>
            {/* Headers */}
            <thead className="sticky top-0 bg-ysa-black text-white z-10">
                <tr>
                    {Object.keys(toShow).map((key, index) =>
                        toShow[key] && <th key={index} className="px-4 py-2 border border-white">{key}</th>
                    )}
                </tr>
            </thead>

            {/* Rows */}
            <tbody className="text-center [&>tr>td]:py-4 ">
                {filteredData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="odd:bg-ysa-yellow-light hover:bg-ysa-blue-light">
                        {Object.keys(toShow).map((key, index) =>
                            toShow[key] && (
                                <td
                                    className="px-4 py-2 border-x border-x-white"
                                    key={index}>
                                    {(() => {
                                        let content;
                                        if (key === "Teléfono") {
                                            content = row.Teléfono && /^\+51\s?\d{9}$/.test(row.Teléfono) ? row.Teléfono : 'No Válido';
                                        } else if (key === "Correo") {
                                            content = row.Correo && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.Correo) ? row.Correo : 'No Válido';
                                        } else if (key === "Pagado") {
                                            content = row.Pagado ? 'Sí' : 'No';
                                        } else if (key === "Nombre") {
                                            content = `${row.Nombre || ''} ${row.Segundo_Nombre || ''}`.trim();
                                        } else if (key === "Apellidos") {
                                            content = `${row.Apellido_Paterno || ''} ${row.Apellido_Materno || ''}`.trim();
                                        } else {
                                            content = row[key];
                                        }
                                        return content;
                                    })()}
                                </td>
                            )
                        )}
                    </tr>
                ))}
            </tbody>
        </>
    );
}