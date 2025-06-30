import useFetch from "./useFetch"
import { useEffect } from "react"

function useRolesList() {
    const rolesFetch = useFetch()
    useEffect(() => {
        rolesFetch.get(`${import.meta.env.VITE_API_URL}/roles/all`)
    }, [])
    return rolesFetch
}

export default useRolesList