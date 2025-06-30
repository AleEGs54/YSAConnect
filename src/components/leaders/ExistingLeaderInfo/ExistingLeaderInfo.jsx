export default function ExistingLeaderInfo({rolesList, leader_staff_role_id}) {
    return (
        <div className="bg-ysa-black text-white p-4 rounded-[8px] flex flex-col gap-4">
            <h2 className="text-center  "><strong>Ya es lider</strong></h2>
            <div className="text-center font-bold ">Asignación: {rolesList.find((role) => role.staff_role_id === leader_staff_role_id)?.role_name}</div>
        </div>
    )
}