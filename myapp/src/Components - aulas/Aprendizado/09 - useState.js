/*
    -> useState
    - Api useState permite usar states / estados em componentes funcionais.
    - Ao declarar o useState em uma variavel, podemos desconstruir ele em dois, o primeiro sera o nome do state, e o segundo o nome da função que iremos chamar para setar alguma alteração naquele state.
*/

import {useState} from 'react'

export function ListaTaferas(){
    // state de lista de usuarios
    let [usuarios,setUsuarios] = useState([
        {username:'Luiz',email:'luiz@email.com'},
        {username:'Arthur',email:'arthur@email.com'}
    ])

    // States dos inputs
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')

    // adicionar usuarios
    function adduser(e){
        e.preventDefault()
        setUsuarios([...usuarios,{username:username,email:email}])
    }

    
    return(
        <div>
            {usuarios.map((item,idx) => {
                return(
                    <div key={idx}>{item.username} / {item.email}</div>
                )
            })}


            <form>
                <div>
                    <label>Username:</label>
                    <input type='text' value={username} onInput={(e) => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' value={email} onInput={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={adduser}>Adicionar</button>
                </div>
            </form>
        </div>
    )
}

// treinando userState - contador
export function Contador(){
    // state - contador
    let [contador,setContador] = useState(0)

    // incrementando
    function incrementCont(){
        setContador(contador += 1)
    }

    // decrementando
    function decrementCont(){
        setContador(contador -= 1)
    }

    // resetando
    function reset(){
        setContador(contador = 0)
    }
    return(
        <div>
            <h2>{contador}</h2>

            <button onClick={incrementCont}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrementCont}>Decrement</button>
        </div>
    )
}