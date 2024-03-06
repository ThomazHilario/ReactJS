export default function Home(){
    return(
        <main className="bg-slate-700 h-screen flex justify-center items-center">
            <form className="flex flex-col items-center gap-1">
                <legend className="mb-5 font-bold text-5xl">DevZustand</legend>
                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite o seu nome..."/>
                </div>

                <div>
                    <input type="date" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Data de nascimento"/>
                </div>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Cargo atual"/>
                </div>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite seu cpf..."/>
                </div>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite sua Rua"/>
                </div>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite seu estado..."/>
                </div>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite o seu email..."/>
                </div>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-3 pr-3 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite o seu telefone..."/>
                </div>

                <div>
                    <button className="w-[70vw] bg-zinc-900 text-white rounded-md h-8">
                        Cadastrar
                    </button>
                </div>
            </form>
        </main>
    )
}