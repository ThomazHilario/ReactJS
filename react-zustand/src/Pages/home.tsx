// import react
import { FormEvent, useState } from "react"

// import navigate
import { useNavigate } from "react-router-dom"

// import store from zustand
import { userData } from "../Store/user"

export default function Home(){

    const navigate = useNavigate()

    // zustand
    const state = userData()

    const [name, setName] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [cargo, setCargo] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [rua, setRua] = useState<string>('')
    const [estado, setEstado] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')

    // createUser
    function createUser(e:FormEvent){
        // Cancelando envio do formulario
        e.preventDefault()

        // inserindo dados no zustand
        state.insertData(name, date, cargo, cpf, rua, estado, email, telefone)

        // navegando para a pagina user
        navigate('/user')
    }

    return(
        <main className="bg-slate-700 h-screen flex justify-center items-center">
            <form className="flex flex-col items-center gap-2">

                <legend className="mb-5 font-bold text-5xl">DevZustand</legend>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite o seu nome..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>

                <div>
                    <input type="date" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Data de nascimento"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}/>
                </div>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Cargo atual"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}/>
                </div>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite seu cpf..."
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}/>
                </div>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite sua Rua"
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}/>
                </div>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite seu estado..."
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}/>
                </div>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite o seu email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite o seu telefone..."
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}/>
                </div>

                <div>
                    <button className="w-[70vw] bg-zinc-900 text-white rounded-md h-8" 
                    onClick={createUser}>
                        Cadastrar
                    </button>
                </div>
            </form>
        </main>
    )
}