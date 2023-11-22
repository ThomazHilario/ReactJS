// Importando o useState eo createContext
import {useState, createContext} from 'react'

// Criando um Context exportavel usando o creatteContext
export const Context = createContext({})

// Componente Provider
export default function Provider({children}){

    // State que sera usada globalmente
    const [name, setName] = useState('Thomaz')

    // Retorno
    return(
        // Chamando meu Context criando com Provider para responsavel por espalhar a state por todo app
        <Context.Provider value={{name}}>

            {/* Retornando o Filho */}
            {children}
        </Context.Provider>
    )
}