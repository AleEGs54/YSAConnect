import RegistrationRow from "../RegistrationRow/RegistrationRow";

export default function RecordsTable({ data, isOpen }) {



    // If the data is not an array or is empty, return a loading message
    if (!Array.isArray(data) || data.length === 0) {
        return <p className="text-center py-4">Buscando datos...</p>;
    }
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

