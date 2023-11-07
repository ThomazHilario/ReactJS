import './home.css'
import {useState} from 'react'
import {auth} from '../../service/firebaseconnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export default function Home(){
    // states - formulario
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    // state - login
    const [login, setLogin] = useState(false)
    const [detail, setDetail] = useState({})

    // function cadastro
    async function newUser(e){
        e.preventDefault()

        try {
            // cadastrando usuario
            const users = await createUserWithEmailAndPassword(auth, email, password)

            // Alerta de sucesso
            alert('usuario cadastrado')

            // mudando o valor da state login para true
            setLogin(true)

            // Setando valores na state detail
            setDetail({
                email:users.user.email,
                id:users.user.uid
            })

        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Email ja cadastrado tente outro!!')
            } else{
                alert('Senha fraca')
            }
        }
    }

    // function loginUser
    async function loginUser(e){
        e.preventDefault()

        try {
            // logando usuario
            const users = await signInWithEmailAndPassword(auth,email,password)

             // mudando o valor da state login para true
             setLogin(true)

             // Setando valores na state detail
             setDetail({
                 email:users.user.email,
                 id:users.user.uid
             })

            alert('usuario logado')
        } catch (error) {
            if(error.code === 'auth/invalid-login-credentials'){
                alert('Este email nao existe no app')
            }
        }
    }
    return(
        <div>

            {/* formulario */}
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
                    <button onClick={loginUser}>Login</button>
                </div>

            </form>

            {login === true && 
                <div>
                    <span>{detail.email}</span>
                    <span>{detail.id}</span>
                </div>
            }
        </div>
    )
}