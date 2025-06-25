import { useState, useEffect } from "react"
import usePost from "../hooks/usePost"
import useFetch from "../hooks/useFetch"

export default function AddLeaderPage() {
    const [leaderId, setLeaderId] = useState('')
    const [leader, setLeader] = useState({})
    const [rolesList, setRolesList] = useState([])
    const [selectedRole, setSelectedRole] = useState('')

    const participant = useFetch();
    const getRolesList = useFetch();

    console.log(rolesList)
    console.log(selectedRole)

    useEffect(() => {
        if (participant.data) {
            setLeader(participant.data.data[0]);
        }
        if (getRolesList.data) {
            setRolesList(getRolesList.data.data);
        }
    }, [participant.data, getRolesList.data]);

    useEffect(() => {
        getRolesList.get(`${import.meta.env.VITE_API_URL}/account/leaders/getRoles`);
    }, []);

    const handleChange = (e) => {
        setLeaderId(e.target.value)
    }

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        participant.get(`${import.meta.env.VITE_API_URL}/participants/${leaderId}`)
    }

    return (
        <div className="m-2">
            <h1 className="text-center underline">Agregar Líder</h1>

            <form onSubmit={handleSubmit} className="flex flex-col my-2 gap-4  rounded-2xl p-2">
                <label className="flex flex-col gap-2">
                    Escribe el ID del nuevo líder (ID de participante):
                    <input
                        required={true}
                        className="border-2 border-ysa-blue-dark rounded-[8px] p-2 w-full"
                        type="number"
                        placeholder="456"
                        value={leaderId}
                        onChange={handleChange} />
                </label>
                <button
                    className="bg-ysa-blue-dark text-white rounded-[8px] w-3/4 p-2"
                    type="submit"
                >Obtener participante</button>
            </form>

            {Object.keys(leader).length > 0 && !participant.loading &&


                <>
                    <div className="w-full h-full border-2 p-4">
                        <h2 className="text-center my-4"><strong>Información del participante</strong></h2>
                        <form className="flex flex-col gap-2 justify-center items-center">

                            <label className="flex flex-col">
                                Nombres
                                <input
                                    className="border-2 border-ysa-blue-dark rounded-[8px] p-2 min-w-70 "
                                    type="text" disabled={true} value={leader.first_name} />
                            </label>
                            <label className="flex flex-col">
                                Apellidos
                                <input
                                    className="border-2 border-ysa-blue-dark rounded-[8px] p-2 min-w-70 "
                                    type="text" disabled={true} value={leader.last_name} />
                            </label>
                            <label className="flex flex-col">
                                Correo
                                <input
                                    className="border-2 border-ysa-blue-dark rounded-[8px] p-2 min-w-70 "
                                    type="text" disabled={true} value={leader.email} />
                                <em>Este es el correo que usará para iniciar sesión.</em>
                            </label>
                        </form>
                    </div>
                    <div>
                        <form className="flex flex-col">
                            <label>
                                Crea una contraseña segura:
                                <input type="password" name="account_password" placeholder="Contraseña" />
                            </label>
                            <label className="flex flex-row items-center justify-evenly mx-2 bg-ysa-black max-w-[300px] rounded-[8px] p-2 text-white">
                                Ver Roles:
                                <select
                                    className=" bg-ysa-blue-dark rounded-[8px] p-2"
                                    name="roles"
                                    id="roles"
                                    onChange={handleRoleChange}
                                >
                                    <option value="" disabled>Selecciona un rol</option>
                                    {rolesList.map((roleItem, index) => (
                                        <option key={index} value={roleItem.staff_role_id}>
                                            {roleItem.role_name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </form>
                    </div>

                </>
            }

        </div>
    )
}