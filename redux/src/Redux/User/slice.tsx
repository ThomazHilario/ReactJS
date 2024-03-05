// -> no slice configuramos as actions e os estados do redux <-

// createSlice
import { createSlice } from '@reduxjs/toolkit'

// Criando uma interface para o estado inicial
export interface InitialStateProps{
    user:UserStateprops | null
}

interface AddressProps{
    rua:string,
    numero:string
}

export interface UserStateprops{
    name:string,
    email:string,
    address: AddressProps | null
}

// States
const initialState:InitialStateProps = {
    user:null
}

// Meu slice
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        // Criando actions
        // Parametro state: permite pegar as informacoes das states criadas.
        // paramentro action: permite receber informacoes mandadas pelo usuario.
        createUser: (state,action) =>{
            console.log(action.payload)

            return{
                ...state,

                // inserindo dados na state user
                user:{
                    name: action.payload.name,
                    email:action.payload.email,
                    address:null,
                }
            }
        },
        logOutUser:(state) => {
            return{
                ...state,
                user:null
            }   
        }
    }
})

// exportando actions
export const { createUser, logOutUser } = userSlice.actions

// exportando reducer
export default userSlice.reducer