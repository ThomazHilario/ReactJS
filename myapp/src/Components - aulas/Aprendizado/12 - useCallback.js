/*
    -> useCallback
    - Semelhante ao useMemo, porem executrá algo mais complexo, evitando que o componente seja renderizado toda vez ao ser modificado,
    evitando assim o desgaste de muito processamento.
*/

import {useState,useCallback} from 'react'

export default function UseCallback(){
    // states
    let [name,setName] = useState('')
    let [email,setEmail] = useState('')

    // state - list
    let [lista,setLista] = useState([])

    // add itens - A função myList ela irá não ira renderizar a cada modificação na state, ela irá ficar armazenada na memoria e depois que comparar a lista nova com a antiga,exclui a que está na memoria e adiciona a nova. Evitando executar / criar a função novamente
    let myList = useCallback((e)=>{
        // Cancelando o formulario
        e.preventDefault()

        // setando o novo valor a lista
        setLista([...lista,{name:name,email:email}])
    },[name,email,lista])

    return(
        <div>
            <form>
                <div>
                    <label>name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div>
                    <label>email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <button onClick={myList}>Add</button>
                </div>
            </form>

            <ul>
                {lista.map((item,idx) => {
                    return <li key={idx}>{item.name} / {item.email}</li>
                })}
            </ul>
        </div>
    )
}