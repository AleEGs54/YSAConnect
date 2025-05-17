import FilterControls from "../FilterControls/FilterControls";
import SortControls from "../SortControls/SortControls";
import ShowControls from "../ShowControls/ShowControls";
import { useState } from "react";



export default function ViewControls({ users, setFilteredUsers}) {
    const [isOpen, setIsOpen] = useState(false);
    


    return (
        <div
            className="order-3 flex flex-col gap-2  p-4"
        // className=" col-start-[6] col-end-[6] p-5 border-neutral-400 border-l-2 grid grid-cols-[repeat(2,1fr)] gap-4"
        >
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-ysa-yellow rounded-full p-2"
            >
                {isOpen ? "Cerrar" : "Filtros"}
            </button>
            {isOpen &&
            <>
            <FilterControls users={users} setFilteredUsers={setFilteredUsers}/>
            <SortControls/>
            <ShowControls/>
            </>
            }
        </div>
    )
}