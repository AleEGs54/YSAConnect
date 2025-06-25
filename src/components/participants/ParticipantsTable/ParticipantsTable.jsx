import { useContext, useState } from "react";
import RecordsTable from "../RecordsTable/RecordsTable";
import SearchBar from "../SearchBar/SearchBar";
import SortControls from "../SortControls/SortControls";
import FilterControls from "../FilterControls/FilterControls";
import ShowControls from "../ShowControls/ShowControls";
import ToggleButton from "../../common/Button/ToggleButton";
import { FiltersContext, FiltersDispatchContext } from "../../../context/FiltersContext";

export default function ParticipantsTable({ users, filteredUsers, setFilteredUsers }) {
    //Mostrar filtros state
    const [isOpen, setIsOpen] = useState(false);


    //Habilitar 'Rol'
    const filters = useContext(FiltersContext);
    const dispatch = useContext(FiltersDispatchContext);


    return (
        <>
            <SearchBar placeholder="Buscar participante" />

            <div className=" flex flex-col gap-2 mb-5 w-[90%]">
                <ToggleButton label1="Ocultar filtros" label2="Mostrar filtros" state={isOpen} handleOnClick={() => setIsOpen(!isOpen)} />
                <div className={`order-3 flex flex-col gap-2  p-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                    <SortControls />
                    <FilterControls users={users} setFilteredUsers={setFilteredUsers} />
                    <ShowControls />
                </div>
            </div>

            <RecordsTable data={filteredUsers} isOpen={isOpen} />
        </>
    )
}
