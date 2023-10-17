/*
    -> useMemo
    - Usado para armazenar um valor computado.
    - Toda vez que modificamos uma state o return do componente é chamado, o useMemo faz com que para cada modificação em um componente, ele armazenará na memória algo específico ao inves de chamar todo return.
*/
import {useState, useMemo} from 'react'

export default function Test(){
    // State
    const [number1,setNumber] = useState(0)
    const [number2,setNumber2] = useState(0)


    // Toda vez que os states number1 e number2 forem modificados, executara o retorno da função useMemo, assim não executara toda a function, so vai atualizar o valor que está na memória.
    let value = useMemo(() => {
        return number1 + number2
    },[number1,number2])

    // return
    return(
        <div>
            <input type="number" value={number1} onChange={(e) => setNumber(Number(e.target.value))}></input>
            <input type="number" value={number2} onChange={(e) => setNumber2(Number(e.target.value))}></input>
            <h2>{value}</h2>
        </div>
    )
}