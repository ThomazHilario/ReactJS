import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// types
import { FormEvent } from "react"

// import useselector e useDispach
import { useDispatch } from 'react-redux'

// import  createUser
import { createUser } from '../Redux/User/slice'

export const Home = () => {

    // navigate
    const navigate = useNavigate()

    // Buscando action do redux
    const dispatch = useDispatch()

    // states - name and email
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    // singIN
    function singIn(e:FormEvent){
        // Cancelando envio do formulario
        e.preventDefault()

        if(name !== '' && email !== ''){
            // Enviando dados com redux
            dispatch(createUser({
                name:name,
                email:email,
                address:null
            }))

            // Navegando para a rota painel
            navigate('/painel')
        }

        
    }
    return (
        <main className="bg-green-100 h-screen flex flex-col justify-center items-center gap-4">

            {/* Title */}
            <Link to='/painel' className="text-3xl font-bold">Dev Login</Link>

            <form className="flex flex-col justify-center items-center gap-2"
            onSubmit={singIn}>
                <div>
                    <input type="text"
                    placeholder="Digite seu nome..."
                    className="w-[40vw] h-10 pl-4 rounded-md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <input type="email" placeholder="Digite seu email..." 
                    className="w-[40vw] h-10 pl-4 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <button type="submit" className="w-[40vw] h-10 bg-blue-600 rounded-md text-white">Entrar</button>
                </div>
            </form>
        </main>
    )
}