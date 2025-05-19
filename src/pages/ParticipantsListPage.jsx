import { useEffect, useState, useContext } from "react";
import SearchBar from "../components/registration/SearchBar/SearchBar";
import RegistrationTable from "../components/registration/RegistrationTable/RegistrationTable";
import axios from "axios";
import FilterControls from "../components/registration/FilterControls/FilterControls";
import SortControls from "../components/registration/SortControls/SortControls";
import ShowControls from "../components/registration/ShowControls/ShowControls";
import FiltersContextProvider from "../context/FiltersContext";
import ToggleButton from "../components/common/Button/ToggleButton";
import { FiltersContext, FiltersDispatchContext } from "../context/FiltersContext";

export default function ParticipantsListPage() {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([]);

    

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
            className="flex flex-col gap-2 max-h-lvh items-center"
        // className="row-span-2 col-start-3 col-end-17 grid grid-cols-6 grid-rows-[50px_5rem_1fr] h-full pl-2 gap-2"
        >
            <header className="col-span-full row-span-1 flex flex-col items-center justify-center">
                <h1>Lista de Participantes</h1>
            </header>

            <FiltersContextProvider >

                <ParticipantsTable
                    users={users}
                    filteredUsers={filteredUsers}
                    setFilteredUsers={setFilteredUsers}
                />

            </FiltersContextProvider>
        </div>
    )
}

function ParticipantsTable({ users, filteredUsers, setFilteredUsers }) {
    //Mostrar filtros state
    const [isOpen, setIsOpen] = useState(false);

    //Habilitar 'Rol'
    const filters = useContext(FiltersContext);
    const dispatch = useContext(FiltersDispatchContext);

    useEffect(() => {
        dispatch({
            type: "SET_TO_SHOW",
            payload: {
                ...filters.toShow,
                'Rol': false
            }
        })
    },[])


    return (
        <>
            <SearchBar placeholder="Buscar participante" />

            <div className=" flex flex-col gap-2 mb-5 w-[90%]">
                <ToggleButton label1="Ocultar filtros" label2="Mostrar filtros" state={isOpen} handleOnClick={() => setIsOpen(!isOpen)} />
                <div className={`order-3 flex flex-col gap-2  p-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                    <SortControls />
                    <FilterControls users={users} setFilteredUsers={setFilteredUsers} />
                    <ShowControls users={filteredUsers}/>
                </div>
            </div>

            <RegistrationTable data={filteredUsers} isOpen={isOpen} />
        </>
    )
}

// function resetFilters() {
//     sessionStorage.removeItem("sortBy");
//     sessionStorage.removeItem("toShow");
//     sessionStorage.removeItem("filters");
//     sessionStorage.removeItem("searchTerm");
// }
