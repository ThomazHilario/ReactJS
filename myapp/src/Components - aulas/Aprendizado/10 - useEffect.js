/*
    -> useEffect
    - A api useEffect substituira todos os component de ciclo de vida em um componente funcional.
*/
import {useState,useEffect} from 'react'
export default function MyList(){
    // state - list
    let [lista,setLista] =useState([])

    // states - inputs
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    // Funcao para adicionar usuarios a lista
    function addUser(e){
        // cancelando o formulario
        e.preventDefault()

        setLista([...lista,{username:name,email:email}])
    }

    // usando useEffect para salvar os itens na local storage
    useEffect(() => {
        localStorage.setItem('myList',JSON.stringify(lista))
    },[lista])

    // buscando os itens na local storage
    useEffect(() => {
        setLista(JSON.parse(localStorage.getItem('myList')))
    },[])
    
    // return
    return(
        <div>
            <form>
                {/* name input */}
                <div>
                    <label>Name:</label>
                    <input value={name} onInput={(e) => setName(e.target.value)}></input>
                </div>

                {/* email input */}
                <div>
                    <label>Email:</label>
                    <input type='email' value={email} onInput={(e) => setEmail(e.target.value)}></input>
                </div>
                {/* button */}
                <div>
                    <button onClick={addUser}>Adicionar</button>
                </div>
            </form>
            <ul>
                {lista.map((item,idx) => <li key={idx}>name:{item.username} / Email:{item.email}</li>)}
            </ul>
        </div>
    )
}