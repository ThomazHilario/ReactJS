import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import './component.css'

// Criando tipagem para o schemaform
interface SchemaForm{
    email:string,
    password:string
}

// regex para verificar formato do email digitado
const regex = new RegExp(/\S+@\S+\.\S+/)

// schema do form
const schemaform = z.object({
    email:z.string().regex(regex,'Email invalido'),
    password:z.string().min(8),
})

export default function Home(){

    // Buscando register handleSubmit
    const {register, handleSubmit} = useForm<SchemaForm>({resolver:zodResolver(schemaform)})

    // chamando a funcao dentro do handleSubmit
    function createUser(data:SchemaForm){
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(createUser)} className='formulario'>
            <legend>Cadastro</legend>

            <div className='campos'>
                <label>Email</label>
                <input type="text" id='email' {...register('email')} />
            </div>

            <div className='campos'>
                <label>Password</label>
                <input type="password" id='password' {...register('password')} />
            </div>

            <div className='campos'>
                <button>Cadastrar</button>
            </div>
        </form>
    )
}