import { useState, useEffect } from "react"
import useFetch from '../../../hooks/useFetch'

export default function FindLeader({handleSubmit}) {
    const [leaderId, setLeaderId] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        handleSubmit(leaderId)
    }

    return (
        <div className="m-2">
            <h1 className="text-center underline">Agregar Líder</h1>

            <form onSubmit={onSubmit} className="flex flex-col my-2 gap-4  rounded-2xl p-2">
                <label className="flex flex-col gap-2">
                    Escribe el ID del nuevo líder (ID de participante):
                    <input
                        required={true}
                        className="border-2 border-ysa-blue-dark rounded-[8px] p-2 w-full"
                        type="number"
                        placeholder="456"
                        value={leaderId}
                        min={1}
                        onChange={(e) => setLeaderId(e.target.value)} />
                </label>
                <button
                    className="bg-ysa-blue-dark  text-white rounded-[8px] w-fit px-4 py-2"
                    type="submit"
                >Buscar</button>
            </form>
        </div>
    )
}