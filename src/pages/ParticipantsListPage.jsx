import { useEffect, useState } from "react";
import SearchBar from "../components/registration/SearchBar/SearchBar";
import RegistrationTable from "../components/registration/RegistrationTable/RegistrationTable";
import axios from "axios";
import FilterControls from "../components/registration/FilterControls/FilterControls";
import SortControls from "../components/registration/SortControls/SortControls";
import ShowControls from "../components/registration/ShowControls/ShowControls";
import FiltersContextProvider from "../context/FiltersContext";


//No acabado
// function resetFilters() {
//     sessionStorage.removeItem("sortBy");
//     sessionStorage.removeItem("toShow");
//     sessionStorage.removeItem("filters");
// }

export default function ParticipantsListPage() {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    const getUsers = async () => {
        const response = await axios.get('json/participantes.json');
        setUsers(response.data);
        setFilteredUsers(response.data);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div
            id="ParticipantsListPage"
            className="mt-2 mb-2 flex flex-col gap-2 max-h-lvh items-center"
        // className="row-span-2 col-start-3 col-end-17 grid grid-cols-6 grid-rows-[50px_5rem_1fr] h-full pl-2 gap-2"
        >
            <header className="col-span-full row-span-1 flex flex-col items-center justify-center">
                <h1>Lista de Participantes</h1>
            </header>

            <FiltersContextProvider >

                <SearchBar placeholder="Buscar participante" />

                <div className=" flex flex-col gap-2 mb-5 w-[90%]">
                    <button onClick={() => setIsOpen(!isOpen)} className="bg-ysa-yellow rounded-full p-2">
                        {isOpen ? "Cerrar" : "Filtros"}
                    </button>
                    <div className={`order-3 flex flex-col gap-2  p-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                        <SortControls />
                        <FilterControls users={users} setFilteredUsers={setFilteredUsers} />
                        <ShowControls />
                    </div>
                </div>

                <RegistrationTable data={filteredUsers} isOpen={isOpen}/>

            </FiltersContextProvider>
        </div>
    )
}


