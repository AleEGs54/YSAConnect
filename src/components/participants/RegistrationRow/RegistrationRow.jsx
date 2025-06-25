import utilities from "../../../utils/index";
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
    const normalizedSearchTerm = utilities.removeAccents(searchTerm.toLowerCase().trim());
    const fieldsToSearch = ["first_name", "last_name", "email", "mobile_number"];

    if (normalizedSearchTerm === "") return data;

    const filteredData = data.filter((participant) =>
        fieldsToSearch.some((field) => utilities.removeAccents(participant[field].toLowerCase()).includes(normalizedSearchTerm))
    );

    return filteredData;

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
        const valA = utilities.removeAccents((a[sortBy] || "").toString().toLowerCase());
        const valB = utilities.removeAccents((b[sortBy] || "").toString().toLowerCase());

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
                    {toShow.map((column, index) =>
                       column.show && <th key={index} className="px-4 py-2 border border-white">{column.label}</th>
                    )}
                </tr>
            </thead>

            {/* Rows */}
            <tbody className="text-center [&>tr>td]:py-4">
                {/* for each participant */}
                {filteredData.map((data, rowIndex) => (
                    <tr key={rowIndex} 
                    className={'odd:bg-ysa-yellow-light hover:bg-ysa-blue-light'}
                    >
                        {/* For each attribute of the participant */}
                        {Object.keys(data).map((key, index) =>
                            toShow.find(column => column.key === key)?.show &&
                                <td
                                    className="px-4 py-2 border-x border-x-white"
                                    key={index}>
                                    {data[key]}
                                </td>
                            
                        )}
                    </tr>
                ))}
            </tbody>
        </>
    );
}