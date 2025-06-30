import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import FiltersContextProvider from "../context/FiltersContext";
import ParticipantsTable from "../components/participants/ParticipantsTable/ParticipantsTable";



export default function ParticipantsListPage() {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([]);

    const fetch = useFetch();

    useEffect(() => {
        fetch.get(`${import.meta.env.VITE_API_URL}/participants/all`);
    }, [])

    useEffect(() => {
        if (fetch.data) {
            setUsers(fetch.data.data);
            setFilteredUsers(fetch.data.data);
        }
    }, [fetch.data])

    return (
        <div
            id="ParticipantsListPage"
            className="flex flex-col gap-2 max-h-lvh items-center mt-4"
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
