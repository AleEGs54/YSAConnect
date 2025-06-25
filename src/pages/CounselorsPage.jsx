import { useEffect, useState, useContext } from "react";
import SearchBar from "../components/participants/SearchBar/SearchBar";
import RecordsTable from "../components/participants/RecordsTable/RecordsTable";
import axios from "axios";
import FilterControls from "../components/participants/FilterControls/FilterControls";
import SortControls from "../components/participants/SortControls/SortControls";
import ShowControls from "../components/participants/ShowControls/ShowControls";
import FiltersContextProvider from "../context/FiltersContext";
import ToggleButton from "../components/common/Button/ToggleButton";
import { FiltersContext, FiltersDispatchContext } from "../context/FiltersContext";

export default function CounselorsPage() {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get('json/participantes.json');
        const leaders = response.data.filter((user) => user.Rol)
        setUsers(leaders);
        setFilteredUsers(leaders);
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
                <h1>Lista de Consejeros</h1>
            </header>

            <FiltersContextProvider >

                <LeadersTable
                    users={users}
                    filteredUsers={filteredUsers}
                    setFilteredUsers={setFilteredUsers} />

            </FiltersContextProvider>
        </div>
    )
}

function LeadersTable({ users, filteredUsers, setFilteredUsers }) {
    const [isOpen, setIsOpen] = useState(false);

    const filters = useContext(FiltersContext);
    const dispatch = useContext(FiltersDispatchContext);

    //Habilitar 'Rol'
    // useEffect(() => {
    //     dispatch({
    //         type: "SET_TO_SHOW",
    //         payload: {
    //             ...filters.toShow,
    //             'Rol': true
    //         }
    //     });
    // }, []);


    return (
        <>
            <SearchBar placeholder="Buscar líder" />

            <div className=" flex flex-col gap-2 mb-5 w-[90%]">
                <ToggleButton label1="Ocultar filtros" label2="Mostrar filtros" state={isOpen} handleOnClick={() => setIsOpen(!isOpen)} />
                <div className={`order-3 flex flex-col gap-2  p-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                    <SortControls users={users} />
                    <FilterControls users={users} setFilteredUsers={setFilteredUsers} />
                    <ShowControls users={filteredUsers} />
                </div>
            </div>

            <RecordsTable data={filteredUsers} isOpen={isOpen} />
        </>
    )
}