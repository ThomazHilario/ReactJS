// adicionando estilos ao app
import './app.css'
import {Contador} from './Components - aulas/Aprendizado/03 - States'
// componente exportado.
export default function App(){
  return(
    <main>
      <h2>Seja bem vindo ao meu app react de aprendizados</h2>
      <Contador/>
    </main>
  )
}

// Depois de criado e exportado basta importalo no index.js