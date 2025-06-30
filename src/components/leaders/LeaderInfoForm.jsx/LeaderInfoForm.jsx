export default function LeaderInfoForm({leader}) {
    return (
        <div className="w-full h-full border-t-2 border-b-2 p-4">
                        <h2 className="text-center my-4"><strong>Información del participante</strong></h2>
                        <form className="flex flex-col gap-2 justify-center">

                            <label className="flex flex-col">
                                Nombres
                                <input
                                    className="border-2 border-ysa-blue-dark rounded-[8px] p-2  "
                                    type="text" disabled={true} value={leader.first_name ?? ''} />
                            </label>
                            <label className="flex flex-col">
                                Apellidos
                                <input
                                    className="border-2 border-ysa-blue-dark rounded-[8px] p-2  "
                                    type="text" 
                                    disabled={true} 
                                    value={leader.last_name ?? ''} />
                            </label>
                            <label className="flex flex-col">
                                Correo
                                <input
                                    className="border-2 border-ysa-blue-dark rounded-[8px] p-2  "
                                    type="text" disabled={true} value={leader.email ?? ''} />
                                <em>Este es el correo que usará para iniciar sesión.</em>
                            </label>
                        </form>
                    </div>
    )
}