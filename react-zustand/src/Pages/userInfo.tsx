import { Link } from "react-router-dom"

import { userData } from "../Store/user"

export default function UserInfo(){

    // states
    const states = userData()

    return(
        <main className="bg-slate-700 h-screen flex flex-col gap-2 justify-center items-center">
            {states.user !== null ?
                <>
                    <div className="bg-white/50 grid grid-cols-2 gap-2 rounded-sm p-4 w-[40vw]">
                        <h1 className="text-2xl">Nome:</h1>
                        <h2 className="text-2xl">{states.user.name}</h2>

                        <h1 className="text-2xl">Data de nascimento:</h1>
                        <h2 className="text-2xl">{states.user.dataNascimento}</h2>

                        <h1 className="text-2xl">Cpf:</h1>
                        <h2 className="text-2xl">{states.user.cpf}</h2>

                        <h1 className="text-2xl">Cargo:</h1>
                        <h2 className="text-2xl">{states.user.cargo}</h2>

                        <h1 className="text-2xl">Rua:</h1>
                        <h2 className="text-2xl">{states.user.rua}</h2>

                        <h1 className="text-2xl">Estado:</h1>
                        <h2 className="text-2xl">{states.user.estado}</h2>

                        <h1 className="text-2xl">Email:</h1>
                        <h2 className="text-2xl">{states.user.email}</h2>

                        <h1 className="text-2xl">Telefone:</h1>
                        <h2 className="text-2xl">{states.user.telefone}</h2>
                    </div>

                    
                    <div className="flex justify-between w-[40vw]">
                        <Link to='/editUser' className="w-auto bg-green-500 p-1 px-5 rounded-sm">
                            Editar
                        </Link>
                        <button className="w-auto bg-zinc-800 p-1 px-5 rounded-sm text-white">
                            Confirmar inscricao
                        </button>
                    </div>
                </> :
                <div className="bg-white/50 flex items-center justify-center gap-2 rounded-sm p-4 w-[40vw]">
                    <h2 className="text-4xl ">Não tem cadastro</h2>
                </div>
            }
            
        </main>
    )
}