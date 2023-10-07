// adicionando estilos ao app
import './app.css'
import {Exibindo} from './Components - aulas/Aprendizado/02 - Class-Component'
// componente exportado.
export default function App(){
  return(
    <main>
      <h2>Seja bem vindo ao meu app react de aprendizados</h2>
      <Exibindo/>
    </main>
  )
}

// Depois de criado e exportado basta importalo no index.js