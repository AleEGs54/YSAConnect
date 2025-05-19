import RegistrationRow from "../RegistrationRow/RegistrationRow";

export default function RegistrationTable({ data, isOpen }) {



    // If the data is not an array or is empty, return a loading message
    if (!Array.isArray(data) || data.length === 0) {
        return <p className="text-center py-4">Cargando datos...</p>;
    }

    //If the header and data are not the same length, return null
    // This is to avoid rendering the table if the data columns are not the same as the header columns
    // const toRender = tHeader.length ===  Object.keys(data[0]).length;
    // if(!toRender) return null

    return (
        <div
            className={`col-span-5 w-full overflow-auto order-4 ${isOpen ? "hidden" : ""}`}
        >
            <table className="min-w-full border-collapse">
                <RegistrationRow data={data} />
            </table>
            
        </div>
    )
}

