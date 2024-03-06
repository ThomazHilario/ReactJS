import { create } from "zustand";

interface PropsUserData{
    name:string | null,
    dataNascimento:string | null,
    cargo:string | null,
    cpf:string | null,
    rua:string | null,
    estado:string | null,
    email:string | null,
    telefone:string | null,
    insertData: (nameInsert:string,dtInsert:string,cargoInsert:string,cpfInsert:string,ruaInsert:string,estadoInsert:string,emailInsert:string,telefoneInsert:string) => void
}

export const userData = create<PropsUserData>((set) => ({
    name:null,
    dataNascimento:null,
    cargo:null,
    cpf:null,
    rua:null,
    estado:null,
    email:null,
    telefone:null,

    insertData: (nameInsert:string,dtInsert:string,cargoInsert:string,cpfInsert:string,ruaInsert:string,estadoInsert:string,emailInsert:string,telefoneInsert:string) => set(() => ({
        name:nameInsert,
        dataNascimento:dtInsert,
        cargo:cargoInsert,
        cpf:cpfInsert,
        rua:ruaInsert,
        estado:estadoInsert,
        email:emailInsert,
        telefone:telefoneInsert
    })) 
}))