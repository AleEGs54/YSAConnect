import LeaderList from "../components/leaders/LeaderList/LeaderList"
import { Link } from "react-router-dom"

export default function LeaderManagementPage() {


    return (
        <div className="my-2 flex flex-col gap-2 max-h-lvh justify-center">
            <h1 className="text-center underline">Administrar Líderes</h1>


                <Link to='/tools/add-leader' className="m-2 bg-ysa-blue-dark max-w-[200px] rounded-[8px] p-2 text-white">Agregar Líder</Link>


            <LeaderList />
        </div>
    )
}