import './home.css'
import {useState} from 'react'
import {auth} from '../../service/firebaseconnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Home(){
    // states - formulario
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    // function cadastro
    async function newUser(e){
        e.preventDefault()

        try {
            await createUserWithEmailAndPassword(auth,email,password)
            alert('usuario cadastrado')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        // formulario
        <form>
            {/* Campo de email */}
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            {/* Campo de senha */}
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            {/* button */}
            <div>
                <button onClick={newUser}>Cadastrar</button>
            </div>
        </form>
    )
}