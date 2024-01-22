import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// regex para verificar formato do email digitado
const regex = new RegExp(/\S+@\S+\.\S+/)

interface SchemaForm{
    email:string,
    password:string,
}

const schemaForm = z.object({
    email:z.string().regex(regex,'Email invalido ou nao registrado'),
    password:z.string()
})

export default function Login():JSX.Element{
    // buscando o register eo handkeSubmit

    const { register, handleSubmit } = useForm<SchemaForm>({resolver:zodResolver(schemaForm)})

    function entrandoNaConta(data:SchemaForm){
        console.log(data.email, data.password)
    }

    return(
        <form onSubmit={handleSubmit(entrandoNaConta)} className="formulario">
            <legend>Login</legend>

            <div className="campos">
                <label>Email</label>
                <input type="text" {...register('email')} />
            </div>

            <div className="campos">
                <label >Password</label>
                <input type="text" {...register('password')} />
            </div>

            <div className="campos">
                <button>Entrar</button>
            </div>
        </form>
    )
}