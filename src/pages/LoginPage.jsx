import { useState } from "react"
import usePost from "../hooks/usePost"

export default function LoginPage(){
    const [loginInfo, setLoginInfo] = useState({account_email: null, account_password: null})
    const { data, loading, error, post } = usePost()

    const handleOnChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(`loginInfo: `, loginInfo)

        const headers = {
            'Content-Type': 'application/json'
        }

        post(`${import.meta.env.VITE_API_URL}/account/login`, loginInfo, headers)

    }
    
    console.log(data, error)

    return(
        <div className="h-lvh">
            <div className="relative h-lvh z-1">
                <img src="/assets/images/confeJasPic.webp" alt="Confejas image" className="h-full object-cover"/>
            </div>
            <div className="z-10 absolute inset-0 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.3)] my-20 mx-3">
                {!error 
                //si no hay error : null, si hay y tiene errors : el mensaje, si hay y no tiene errors : mensaje genérico
                ? null
                : error.errors
                ? <div className="bg-ysa-yellow rounded-[8px] p-2 m-2">Error: {error.errors.errors.map(e => e.msg)}</div>
                : <div className="bg-ysa-yellow rounded-[8px] p-2 m-2">Error: Contraseña o correo incorrectos</div>
                }
                <form onSubmit={handleOnSubmit} className="flex flex-col justify-center w-80 gap-5 p-5 bg-white rounded-[8px]" >
                    <label className="flex flex-col gap-2 ">
                        Correo Electrónico
                        <input
                        name="account_email" 
                        type="email" 
                        required 
                        className="border-1 rounded-[8px] px-2 py-1"
                        placeholder="joedoe@email.com"
                        onChange={handleOnChange}
                        />
                    </label>
                    <label className="flex flex-col gap-2 mt-2">
                        Contraseña
                        <input 
                        name="account_password"
                        type="password" 
                        required 
                        className="border-1 rounded-[8px] px-2 py-1"
                        placeholder="password123"
                        onChange={handleOnChange}
                         />
                    </label>
                    <button 
                    type="submit"
                    className="bg-zinc-700 rounded-[8px] p-2 text-white"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    )
}