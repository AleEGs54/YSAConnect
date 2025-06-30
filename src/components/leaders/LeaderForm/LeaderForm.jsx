import useRolesList from "../../../hooks/useRolesList"
import utilities from "../../../utils"
import useFetch from "../../../hooks/useFetch"
import { useEffect, useState } from "react"
import LeaderInfoForm from "../LeaderInfoForm.jsx/LeaderInfoForm"
import LoadingMessage from "../../common/LoadingMessage/LoadingMessage"
import ExistingLeaderInfo from "../ExistingLeaderInfo/ExistingLeaderInfo"
import LeaderRegistrationForm from "../LeaderRegistrationForm/LeaderRegistrationForm"

export default function LeaderForm({ leader, isLoading, selectedRole, setSelectedRole, setAccountPassword, onSubmit }) {

    const rolesFetch = useRolesList()
    const rolesList = rolesFetch.data?.data

    const showForm = Object.keys(leader).length > 0 && !isLoading

    const participantFetch = useFetch()

    const isLeader = participantFetch.data?.success && !participantFetch.loading

    useEffect(() => {
        //si el leader tiene un participant_id
        if (leader.participant_id) {

            participantFetch.get(`${import.meta.env.VITE_API_URL}/leaders/id/${leader.participant_id}`)
        }
    }, [leader?.participant_id])


    const handlePasswordChange = (e) => {
        setAccountPassword(e.target.value)
    }


    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value)
    }

    //Si no se encuentra el participante, retorna un mensaje de error.
    if (leader.error) {
        return (
            <div className="m-2">
                <h2 className="text-center my-4"><strong>{leader.error}</strong></h2>
            </div>
        )
    } else if (!leader.data && leader.loading) {
        return (
            <div className="m-2">
                <h2 className="text-center my-4"><strong>Cargando...</strong></h2>
            </div>
        )
    }


    return (
        <div className="m-2">
            {showForm &&
                <>
                    <LeaderInfoForm leader={leader} />
                    <div className="my-4">
                        {participantFetch.loading ? (
                            <LoadingMessage />
                        ) : isLeader ? (
                            <ExistingLeaderInfo
                                rolesList={rolesList}
                                leader_staff_role_id={participantFetch.data.data.staff_role_id} />
                        ) : (
                            <LeaderRegistrationForm
                                rolesList={rolesList}
                                selectedRole={selectedRole}
                                handleRoleChange={handleRoleChange}
                                handlePasswordChange={handlePasswordChange}
                                onSubmit={onSubmit} />
                        )}
                    </div>
                </>
            }
        </div>
    )
}