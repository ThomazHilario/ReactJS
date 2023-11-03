import {useState} from 'react'
import {toast} from 'react-toastify'
import database from '../../database/firebaseConnection'
import {collection, addDoc, getDocs} from 'firebase/firestore'
import './home.css'
export default function Home(){
    // state - input
    const [inputName,setName] = useState('')
    const [inputAge,setAge] = useState('')

    // state - usuarios
    const [users,setUsers] = useState([])

    // Adicionando usuarios ao banco de dados
    async function addUser(e){
        e.preventDefault()
        try {
            await addDoc(collection(database,'users'), {
                Name:inputName,
                Age:inputAge
            })

            toast.success("usuario Cadastrado com sucesso")
        } catch (error) {
            toast.error("Usuario nao cadastrado")
        }
    }

    // Pegando todos os usuarios
    async function getUsers(){

        // Fazendo a requisicao para pegar todos os usuarios
        const docSnap = await getDocs(collection(database,'users'))

        // array para armazenar os usuarios
        let array = []

        // percorrendo array
        docSnap.forEach(element => {
            
            array.push(element.data())
            
        });

        // setando na state o array com os usuarios
        setUsers(array)
    }
    return(
        <div id='container'>
            <fieldset>
                <legend>Formulario</legend>
                <form>
                        <div className='container_input'>
                            <label>Name:</label>
                            <input type='text' value={inputName} onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className='container_input'>
                            <label>Age:</label>
                            <input type='number' value={inputAge} onChange={(e) => setAge(e.target.value)}/>
                        </div>

                        <div>
                            <button onClick={addUser}>Cadastrar</button>
                        </div>
                </form>
            </fieldset>
            <button onClick={getUsers}>Pegar usuarios</button>

            <ul>
                {users.map((item,idx) => {
                    return(
                        <li key={idx}>{item.Name}</li>
                    )
                })}
            </ul>
        </div>
    )
}