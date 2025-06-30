export default function LeaderRegistrationForm({onSubmit, handlePasswordChange, handleRoleChange, selectedRole, rolesList}) {
    return (
        <form
            id="newLeaderForm"
            className="flex flex-col gap-4 justify-center items-center"
            onSubmit={onSubmit}
        >
            <label className="flex flex-col gap-2 w-full  justify-center mx-2 bg-ysa-black max-w-[300px] rounded-[8px] p-4 text-white">
                Crea una contraseña segura:
                <input
                    id="account_password"
                    className="bg-ysa-blue-dark rounded-[8px] p-2"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{12,}$"
                    required={true}
                    type="password"
                    name="account_password"
                    placeholder="Contraseña"
                    onChange={handlePasswordChange}
                />
                <em><small>La contraseña debe tener al menos 12 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.</small></em>
                <button
                    className="bg-ysa-yellow text-ysa-black rounded-[8px] w-3/4 p-2"
                    type="button"
                    onClick={() => utilities.showPassword()}>Mostrar / Ocultar</button>
            </label>
            <label className="flex flex-col gap-2 w-full justify-evenly mx-2 bg-ysa-black max-w-[300px] rounded-[8px] p-4 text-white">
                Escoge el rol:
                <select
                    className=" bg-ysa-blue-dark rounded-[8px] p-2"
                    name="roles"
                    id="roles"
                    value={selectedRole}
                    onChange={handleRoleChange}
                    required={true}
                >
                    <option value="" disabled>Selecciona un rol</option>
                    {rolesList.map((roleItem, index) => (
                        <option key={index} value={roleItem.staff_role_id}>
                            {roleItem.role_name}
                        </option>
                    ))}
                </select>
            </label>

            <button
                id="newLeaderSubmit"
                className="bg-ysa-yellow cursor-pointer text-ysa-black rounded-[8px] w-3/4 p-2"
                type="submit"
            >
                Confirmar
            </button>

        </form>
    )
}