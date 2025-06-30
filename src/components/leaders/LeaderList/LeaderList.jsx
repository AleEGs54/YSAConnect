import { useState, useEffect, useMemo } from "react";
import useFetch from "../../../hooks/useFetch";

export default function LeaderList() {
    const [role, setRole] = useState("all");
    const [rolesList, setRolesList] = useState([]);

    const rolesFetch = useFetch();
    const leadersFetch = useFetch();

    // Cargar roles al montar el componente
    useEffect(() => {
        rolesFetch.get(`${import.meta.env.VITE_API_URL}/roles/all`);
    }, []);

    // Actualizar rolesList cuando rolesFetch.data cambie
    useEffect(() => {
        if (rolesFetch.data) {
            setRolesList(rolesFetch.data.data);
        }
    }, [rolesFetch.data]);

    // Cargar líderes cada vez que cambie el role seleccionado
    useEffect(() => {
        const url =
            role === "all"
                ? `${import.meta.env.VITE_API_URL}/leaders`
                : `${import.meta.env.VITE_API_URL}/leaders/role/${role}`;
        leadersFetch.get(url);
    }, [role]);

    const rolesMap = useMemo(() => {
        const map = new Map();
        rolesList.forEach((role) => map.set(role.staff_role_id, role.role_name));
        return map;
    }, [rolesList]);

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    return (
        <>
            <label className="flex flex-row items-center justify-evenly mx-2 bg-ysa-black max-w-[300px] rounded-[8px] p-2 text-white">
                Ver Roles:
                <select
                    className=" bg-ysa-blue-dark rounded-[8px] p-2"
                    name="roles"
                    id="roles"
                    value={role}
                    onChange={handleRoleChange}
                >
                    <option value="all">Todos</option>
                    {rolesList.map((roleItem, index) => (
                        <option key={index} value={roleItem.staff_role_id}>
                            {roleItem.role_name}
                        </option>
                    ))}
                </select>
            </label>

            {leadersFetch.loading && <p className="text-center">Cargando líderes...</p>}
            {leadersFetch.error && (
                <p className="text-center text-red-500">Error cargando líderes</p>
            )}

            <div className="overflow-auto">
                <table className="mx-2">
                    <thead className="sticky top-0 bg-ysa-black text-white z-10">
                        <tr>
                            <th className="px-2 py-1 border border-white">ID</th>
                            <th className="px-2 py-1 border border-white">Rol</th>
                            <th className="px-2 py-1 border border-white">Nombre</th>
                            <th className="px-2 py-1 border border-white">Apellido</th>
                            <th className="px-2 py-1 border border-white">Correo</th>
                        </tr>
                    </thead>
                    <tbody className="text-center [&>tr>td]:py-4 ">
                        {leadersFetch.data?.data?.map((leader) => {
                            const roleName = rolesMap.get(leader.staff_role_id) || "Sin rol";
                            return (
                                <tr
                                    key={leader.participant_id}
                                    className="odd:bg-ysa-yellow-light hover:bg-ysa-blue-light"
                                >
                                    <td className="px-2 py-1 border-x border-x-white">
                                        {leader.participant_id}
                                    </td>
                                    <td className="px-2 py-1 border-x border-x-white">{roleName}</td>
                                    <td className="px-2 py-1 border-x border-x-white">
                                        {leader.first_name}
                                    </td>
                                    <td className="px-2 py-1 border-x border-x-white">
                                        {leader.last_name}
                                    </td>
                                    <td className="px-2 py-1 border-x border-x-white">{leader.email}</td>
                                    <td className="px-2 py-1 border-x border-x-white">
                                        <div className="flex flex-col items-center gap-2 justify-center">
                                            <span>Eliminar</span>
                                            <svg width={30} height={30} viewBox="0 0 24 24" fill="#000">
                                                <use href="/assets/icons/sprite.svg#icon-trash" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="px-2 py-1 border-x border-x-white">
                                        <div className="flex flex-col items-center gap-2 justify-center">
                                            <span>Editar</span>
                                            <svg width={30} height={30} viewBox="0 0 24 24" fill="#000">
                                                <use href="/assets/icons/sprite.svg#icon-pen" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}