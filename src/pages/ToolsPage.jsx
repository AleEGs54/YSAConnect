import { Link } from "react-router-dom"
export default function ToolsPage() {
    return (
        <div className="flex flex-col gap-2 max-h-lvh items-center mx-4">
            <h1>Herramientas</h1>
            <div className="flex flex-col gap-2 w-full">
                <Link
                    to='update-database'
                    className="bg-ysa-yellow rounded-full p-2">
                    Actualizar Base de Datos
                </Link>
                <Link 
                to='manage-participants' className="bg-ysa-yellow rounded-full p-2">Participantes</Link>
                <Link 
                to='manage-leaders' className="bg-ysa-yellow rounded-full p-2">Líderes</Link>
                <Link 
                to='manage-companies' className="bg-ysa-yellow rounded-full p-2">Compañías</Link>
            </div>
        </div>
    )
}