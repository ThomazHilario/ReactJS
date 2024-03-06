export default function Home(){
    return(
        <main className="bg-slate-700 h-screen flex justify-center items-center">
            <form className="flex flex-col items-center gap-1">
                <legend className="mb-5 font-bold text-5xl">DevZustand</legend>
                <div>
                    <input type="text" 
                    className="w-[70vw] pl-5 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite o seu nome..."/>
                </div>

                <div>
                    <input type="text" 
                    className="w-[70vw] pl-5 bg-violet-500/40 rounded-md h-8 text-white"
                    placeholder="Digite o seu email..."/>
                </div>

                <div>
                    <button className="w-[70vw] bg-zinc-900 text-white rounded-md h-8">
                        Entrar
                    </button>
                </div>
            </form>
        </main>
    )
}