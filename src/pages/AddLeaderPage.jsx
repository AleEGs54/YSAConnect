import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import usePost from "../hooks/usePost"
import useFetch from "../hooks/useFetch"
import FindLeader from "../components/leaders/FindLeader/FindLeader"
import LeaderForm from "../components/leaders/LeaderForm/LeaderForm"

export default function AddLeaderPage() {

    //Future leader info
    const [leader, setLeader] = useState({})


    //Form data
    const [selectedRole, setSelectedRole] = useState("")
    const [account_password, setAccountPassword] = useState("")

    //Hooks
    const leaderFetch = useFetch();
    const newLeaderPost = usePost()
    const navigate = useNavigate();

    console.log(leaderFetch)
    
    const handleNewLeaderFormSubmit = async(e) => {
        e.preventDefault()
        
        if (selectedRole !== "" && account_password !== "") {
            const headers = {
                'Content-Type': 'application/json'
            }
            
            const body = {
                participant_id: leader.participant_id,
                account_email: leader.email,
                account_password: account_password,
                staff_role_id: selectedRole
            }
            
            await newLeaderPost.post(`${import.meta.env.VITE_API_URL}/leaders/add-leader`, body, headers)
        }
    }

    useEffect(() => {
        //Redirect to leader management page if leader is added successfully
    if (newLeaderPost.data?.success) {
        navigate("/tools/manage-leaders", {
            state: {
                leaderInfo: newLeaderPost.data
            }
        });
    }
}, [newLeaderPost.data?.success]);

    //Set data when leaderFetch.data change
    useEffect(() => {
        if (leaderFetch?.data?.success) {
            setLeader(leaderFetch.data.data);
        } else if (leaderFetch?.error?.status === 404) {
            setLeader({error: "No existe un participante con ese ID"});
        }
    }, [leaderFetch.data, leaderFetch.error]);

    const handleSubmit = (id) => {
        leaderFetch.get(`${import.meta.env.VITE_API_URL}/participants/id/${id}`)
    }

    return (
        <>
            <FindLeader
                handleSubmit={handleSubmit}
            />
            <LeaderForm
                leader={leader}
                isLoading={leaderFetch.loading}
                selectedRole={selectedRole}
                setSelectedRole={setSelectedRole}
                setAccountPassword={setAccountPassword}
                onSubmit={handleNewLeaderFormSubmit}
            />
        </>
    )
}