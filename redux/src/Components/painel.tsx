// import from react-router-dom
import { Link } from "react-router-dom"

// import type
import { InitialStateProps } from "../Redux/User/slice"

// import useSelector
import { useSelector,useDispatch } from "react-redux"

// import logOutUser
import { logOutUser } from "../Redux/User/slice"

export const Painel = () => {

    // dispatch
    const dispatch = useDispatch()

    // Buscando dados do redux
    const { user } = useSelector<InitialStateProps>(root => root.user) as InitialStateProps

    function logOut(){
        dispatch(logOutUser())
    }

    return(
        <main className="bg-green-100 h-screen flex flex-col items-center gap-5">
            <header className="h-20 w-full bg-white flex justify-around items-center gap-x-96">
                <h1 className="text-4xl font-bold">
                    Dev<strong className="text-purple-500">Redux</strong>
                </h1>
                
                {user ? 
                    <button className="bg-red-500 text-white rounded-sm px-5 h-8" onClick={logOut}>
                        Sair
                    </button> 
                    : 
                    <button className="bg-blue-600 text-white rounded-sm px-5 h-8">Fazer Login</button>
                }
            </header>

            <div className=" w-[70vw] flex flex-col gap-5">
                {/* container button */}
                <div className="flex gap-5">
                    <Link to='/' className="bg-slate-400 rounded-sm px-4 py-1">Login</Link>
                    <Link to='/painel' className="bg-slate-400 rounded-sm px-4 py-1">Painel</Link>
                    <Link to='/address' className="bg-slate-400 rounded-sm px-4 py-1">Meus Enderecos</Link>
                </div>
            
                <div className="bg-white rounded-sm pl-2 py-2 flex flex-col gap-1">
                    <h1 className="text-3xl font-bold">ola {user?.name} seja bem-vindo</h1>

                    <div>
                        <p>Email: {user?.email}</p>
                    </div>

                    <div>
                        <h1 className="font-bold">Endereco atual:</h1>
                        
                        <div className="flex gap-5">
                            <p>Rua endereco, 980 </p> 
                            <button className="text-red-500">Deletar endereco</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}