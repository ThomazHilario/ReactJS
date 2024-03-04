// -> no slice configuramos as actions e os estados do redux <-

// createSlice
import { createSlice } from '@reduxjs/toolkit'

// Criando uma interface para o estado inicial
export interface InitialStateProps{
    user:UserStateprops | null
}

export interface UserStateprops{
    name:string,
    age:number,
    email:string,
    address: string | null
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

    }
})


export default userSlice.reducer