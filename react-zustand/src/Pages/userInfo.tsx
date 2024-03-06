import { Link } from "react-router-dom"

export default function UserInfo(){
    return(
        <main className="bg-slate-700 h-screen flex flex-col gap-2 justify-center items-center">
            <div className="bg-white/50 grid grid-cols-2 gap-2 rounded-sm p-4 w-[40vw]">
                <h1 className="text-2xl">Nome:</h1>
                <h2 className="text-2xl">Thomaz</h2>

                <h1 className="text-2xl">Data de nascimento:</h1>
                <h2 className="text-2xl">19</h2>

                <h1 className="text-2xl">Cpf:</h1>
                <h2 className="text-2xl">9090-0909009-090</h2>

                <h1 className="text-2xl">Cargo:</h1>
                <h2 className="text-2xl">Desenvolvedor back-end</h2>

                <h1 className="text-2xl">Rua:</h1>
                <h2 className="text-2xl">Rua avenida brasil</h2>

                <h1 className="text-2xl">Estado:</h1>
                <h2 className="text-2xl">Ceara</h2>

                <h1 className="text-2xl">Email:</h1>
                <h2 className="text-2xl">thomaz@teste.com</h2>

                <h1 className="text-2xl">Telefone:</h1>
                <h2 className="text-2xl">85 98686-8686</h2>
            </div>

            
            <div className="flex justify-between w-[40vw]">
                <Link to='/editUser' className="w-auto bg-green-500 p-1 px-5 rounded-sm">
                    Editar
                </Link>
                <button className="w-auto bg-zinc-800 p-1 px-5 rounded-sm text-white">
                    Confirmar inscricao
                </button>
            </div>
            
        </main>
    )
}