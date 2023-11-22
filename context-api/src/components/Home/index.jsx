// Importando o useContext
import {useContext} from 'react'

// Importando nosso contextGlobal
import {Context} from '../../assets/contextApi'

// Componente Home
export default function Home(){
    
    // Pegando a state name por meio do context
    const {name} = useContext(Context)

    return(
        <main>
            <h1>Seja Bem-Vindo {name}</h1>
        </main>
    )
}