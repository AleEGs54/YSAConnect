export default  function Table({tHeader, data}){

    // If the data is not an array or is empty, return a loading message
    if (!Array.isArray(data) || data.length === 0) {
        return <p className="text-center py-4">Cargando datos...</p>;
    }

    //If the header and data are not the same length, return null
    // This is to avoid rendering the table if the data columns are not the same as the header columns
    const toRender = tHeader.length ===  Object.keys(data[0]).length;
    if(!toRender) return null

    return (
            <table className="w-full h-full">
                <thead>
                    <tr className="sticky">
                        {tHeader.map((header, index) => {
                            return (
                                <th key={index} className="border-b-2 border-black">
                                    {header}
                                </th>
                            )
                        }
                        )}
                    </tr>
                </thead>
                <tbody className="text-center ">
                    {data.map((row, rowIndex) => {
                       return (<tr key={rowIndex} className=" border-b-2 border-black odd:bg-gray-200">
                            <td className="border-r-2">{row.DNI}</td>
                            <td className="border-r-2">{row.Nombre}</td>
                            <td className="border-r-2">{row.Apellido_Paterno}</td>
                            <td className="border-r-2">{row.Apellido_Materno}</td>
                            <td className="border-r-2">{row.Ciudad}</td>
                            <td >{row.Pais}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
    )
}

// Solicitamos 
// **DNI (Indispensable)**
// Nombre 
// *1 er Apellido*
// *2do Apellido*
// Nombre de preferencia 
// Fecha de nacimiento 
// Sexo 
// Número de celular 
// Correo Electrónico 
// Edad 
// Elija el tamaño de su camiseta 
// ¿Eres miembro de la iglesia de Jesucristo de los santos de los últimos días? 
// **Seleccione su estaca/distrito/ misión (Opcion para marcar - no para redactar) **
// **Barrio/Rama/GrupoFamiliar Opcion para marcar - no para redactar)**
// Grupo sanguíneo y factor (RH)
// ¿Sufres de algún tipo de alergia?
// ¿Recibes algún tipo de tratamiento médico? 
// ¿Eres diabético o asmático? 
// ¿Con qué seguro médico cuentas?
// ¿Con cuántas dosis de vacunación contra COVID cuentas? 
// Nombre - Persona de contacto
// Apellido - Persona de contacto
// Correo electrónico - Persona de contacto
// Teléfono - Persona de contacto