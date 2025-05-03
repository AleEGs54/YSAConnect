import { useEffect, useState } from "react";
import SearchBar from "../components/common/Searchbar/Searchbar";
import Table from "../components/common/Table/Table";
import axios from "axios";
import { get } from "react-hook-form";


export default  function ParticipantsListPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await axios.get('json/participantes.json');
        console.log(response.data);
        setUsers(response.data);
    }

    useEffect(() => {
        getUsers();
    },[])

    const tableHeader = [
        'DNI',
        'Nombre',
        'Apellido Paterno',
        'Apellido Materno',
        'Barrio',
        'Estaca',
    ]



    return (
        <div className="row-span-2 grid grid-cols-4 grid-rows-[50px_5rem_1fr] h-full gap-2">
            <header className="col-span-full row-span-1 flex flex-col items-center justify-center">
                <h1>Lista de Participantes</h1>
            </header>
            <div className="col-span-full row-span-1 flex flex-col items-center justify-center">
                <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Buscar participante" />
            </div>
            <div className="col-span-3 w-full h-90% border-2  overflow-scroll ">
                <Table tHeader={tableHeader} data={users}/>
            </div>
            <div className=" border-1 flex flex-col items-center justify-center">
                <Filter />
            </div>
        </div>
    )
}

function Filter(){
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="filter">Filtrar por:</label>
            <select name="filter" id="filter" className="border-2 border-black rounded-md p-2">
                <option value="dni">DNI</option>
                <option value="nombre">Nombre</option>
                <option value="apellido">Apellido</option>
                <option value="barrio">Barrio</option>
                <option value="estaca">Estaca</option>
            </select>
        </div>
    )
}