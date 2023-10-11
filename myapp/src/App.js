// adicionando estilos ao app
import './app.css'
import {Cadastro} from './Components - aulas/Aprendizado/08 - formularios'
// componente exportado.
export default function App(){
  return(
    <main>
      <h2>Seja bem vindo ao meu app react de aprendizados</h2>
      <Cadastro/>
    </main>
  )
}

// Depois de criado e exportado basta importalo no index.js