# Redux - React

## O que e o redux ?
- redux é um gerenciador de estados que permite compartilhar e usar estados globais por toda a aplicação.

## Como adicionar o redux a um projeto
- Ir na pasta do projeto, abrir um terminal, e usar o comando: npm install redux react-redux @reduxjs/toolkit

## Como usar o redux:
- Primeiro criar uma pasta chamada redux (dentro de src). (organização)
- Depois dentro da pasta redux criar arquivos js com os nomes: root-Reducers e store
- Depois criar uma pasta para dizer que dentro desta pasta tera estados sobre algo dele, ex:User.

- Agora dentro da pasta User devemos criar um arquivo slice.js: responsavel por configurar as states e as actions.

 - Dentro de slice.js devemos configurar as states ex:
   
```
    // importando o createSlice
    import { createSlice } from '@reduxjs/toolkit'

    // Criando as states
    const states = {
        user:null
    }

    // Configurando slice com as states
    export const userSlice = createSlice({
        name:"user",
        states,
        reducers:{

        }
    })

    // exportando
    export default userSlice.reducer
```


 - Agora devemos configurar o arquivo root-reducer:
   
```
    // importar combine reducers
    import { combineReducers } from 'redux'

    // import reducer
    import userSlice from './User/slice'

    // conigurando CombineReducers
    const combine = combineReducers({
        user:userSlice
    })

    // Exportando o combine
    export default combine   
```

 -> Agora no arquivo store.js:
 
```
    // importar o configureStore
    import { configureStore } from '@reduxjs/toolkit'

    // import o combine
    import combine from './root-reducer'

    // configurar a store
    export const Store = configureStore({
        reducer: combine
    })
```

-> Agora devemos importar o Provider do redux e a store configurada, e colocar envolta do app.
```
    // import my Store
    import { Store } from './Redux/store.tsx'

    // import Provider
    import { Provider } from 'react-redux'

    ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={Store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    )
```
