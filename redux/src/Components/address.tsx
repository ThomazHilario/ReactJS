import { Link } from "react-router-dom"
import { useState } from "react"
export const Address = () => {

    // state - street and numberStreet
    const [streetHouse, setStreetHouse] = useState<string>('')
    const [numberStreet, setNumberStreet] = useState<string>('')

    return(
        <main className="bg-green-100 h-screen flex flex-col items-center gap-5">
            <header className="h-20 w-full bg-white flex justify-around items-center gap-x-96">
                <h1 className="text-4xl font-bold">
                    Dev<strong className="text-purple-500">Redux</strong>
                </h1>
                
                <button className="bg-blue-600 text-white rounded-sm px-5 h-8">Fazer Login</button>
            </header>

            <div className="w-[70vw]">
                <Link to='/painel'>Voltar para o painel</Link>

                <div className="bg-white px-2 py-2 mt-4">

                    {/* titulo do form */}
                    <h1 className="mb-2 text-2xl">Meu Endereco</h1>

                    <form className="flex flex-col gap-2">

                        <input type="text" 
                        className="h-8 bg-teal-100 pl-3 rounded-sm" 
                        placeholder="Sua rua"
                        value={streetHouse}
                        onChange={(e) => setStreetHouse(e.target.value)}/>

                        <input type="text" 
                        className="h-8 bg-teal-100 pl-3 rounded-sm" 
                        placeholder="Numero"
                        value={numberStreet}
                        onChange={(e) => setNumberStreet(e.target.value)}/>

                        <button className="bg-blue-600 h-8 rounded-sm">Salvar alteracao</button>
                    </form>
                </div>
            </div>
        </main>
    )
}