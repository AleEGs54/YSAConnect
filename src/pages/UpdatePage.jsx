import axios from "axios";
import { useState, useEffect } from "react"
import usePost from "../hooks/usePost";

export default function UpdatePage() {

    const [file, setFile] = useState(null);
    const [response, setResponse] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const { data, loading, error, post } = usePost();

    useEffect(() => {
        if (loading) {
            setShowModal(true);
        }
    }, [loading]);

    const handleUpload = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file, file.name);
        try {

            await post(`${import.meta.env.VITE_API_URL}/operations/update-database`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setResponse(true);
        } catch (error) {
            console.error(error);
        }

    }

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            setFile(file);
        }
    }

    const handleRemoveFile = () => {
        setFile(null);
        document.getElementById('fileInput').value = '';
    }

    return (
        <div className="p-4 my-2  items-center">
            <h1 className="text-2xl m-auto text-center">Actualizar Base de Datos</h1>
            <div className="flex flex-col gap-2 my-4">
                <p className="bg-yellow-200 p-2">AVISO: Solo se aceptan archivos con extensión .csv. Si tienes un excel (.xlsx) no funcionará, primero conviértelo a .csv antes de subirlo.</p>
                <p className="bg-red-200 p-2">IMPORTANTE: Asegúrate de que tu archivo tenga la estructura correcta y/o que sea el archivo correcto. Un archivo incorrecto puede causar errores irreparables en la base de datos. Si estás inseguro de que el archivo se haya subido correctamente, Espera unos momentos para ver los cambios reflejados en la lista de participantes. <strong>Si crees haber subido un archivo incorrecto, contacta al administrador.</strong></p>
            </div>

            <form className=" rounded-2xl border-2 my-10 p-4 flex flex-col gap-8">
                {!response.success ?
                    <>
                        <p>Inserta un documento en formato CSV:</p>

                        <label
                            className="cursor-pointer bg-blue-500 hover:bg-blue-400 text-white font font-semibold py-2 px-4 rounded">
                            Seleccionar archivo
                            <input
                                id="fileInput"
                                type="file"
                                accept=".csv"
                                className="hidden"
                                name="participants_file"
                                onChange={handleFileChange}
                            />
                        </label>
                    </>
                    : <p className="text-red-500 font-bold">El archivo se ha subido correctamente.</p>}
                {!response.success && file && (
                    <>
                        <div className="flex flex-row gap-2">
                            <p className="text-sm text-gray-700">Archivo seleccionado: {file.name}</p>
                            <button
                                className="bg-red-500 hover:bg-red-400 text-white font font-semibold rounded max-w-10 p-2 flex items-center justify-center"
                                onClick={handleRemoveFile} type="button">
                                <svg width="24" height="24">
                                    <use href="/assets/icons/sprite.svg#icon-close" />
                                </svg>
                            </button>
                        </div>
                        <button
                            type="submit"
                            onClick={handleUpload}
                            className="bg-ysa-yellow hover:bg-green-400 text-white font font-semibold py-2 px-4 rounded"
                            disabled={!file}
                        >
                            Subir archivo
                        </button>
                    </>
                )}
            </form>
            {showModal &&
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">

                        {
                            data && data.success === true ?
                                <>
                                    <h2 className="text-lg font-bold mb-4">Base de datos actualizada</h2>
                                    <p>El proceso se ha completado con exito. Se han han subido <strong>{data.meta.total}</strong> participantes.</p>
                                    <p>Al cerrar se recargará la página.</p>
                                </>
                                : data && data.success === false ?
                                    <>
                                        <h2 className="text-lg font-bold mb-4">Error actualizando base de datos</h2>
                                        <p>Hubo un error actualizando la base de datos</p>
                                        <p>Referencia de la base de datos: {data.error} </p>
                                        <p>Referencia del cliente: {error} </p>
                                    </>
                                    :
                                    <>
                                        <h2 className="text-lg font-bold mb-4">Actualizando base de datos</h2>
                                        <p>Este proceso tomará solo un par de minutos...</p>
                                    </>
                        }
                        <div className="flex justify-end mt-4 gap-2">

                            {!loading &&
                                <button
                                    className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded"
                                    onClick={() => {
                                        setShowModal(false);
                                        setFile(null);
                                        window.location.reload();
                                    }}
                                >
                                    Cerrar
                                </button>
                            }


                        </div>
                    </div>
                </div>
            }
        </div>
    )
}