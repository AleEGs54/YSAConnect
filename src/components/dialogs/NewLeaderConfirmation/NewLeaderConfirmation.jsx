import useFetch from "../../../hooks/useFetch"
import { useEffect } from "react"

export default function NewLeaderConfirmation({ leaderInfo }) {

    const rolesFetch = useFetch()
    let roleName

    if (rolesFetch.data?.data?.length > 0) {
        roleName = rolesFetch.data.data[0].role_name;
    }


    useEffect(() => {
        rolesFetch.get(`${import.meta.env.VITE_API_URL}/roles/${leaderInfo.data.staff_role_id}`)
    }, [leaderInfo.data.staff_role_id])


    return (

        leaderInfo && roleName &&

        (<div className="flex flex-col gap-2 bg-amber-400 m-5 p-2">
            <span>Se ha añadido correctamente a: </span>
            <span><strong>{leaderInfo.data.first_name} {leaderInfo.data?.last_name}</strong> como <strong>{roleName}</strong></span>
        </div>)


    )
}