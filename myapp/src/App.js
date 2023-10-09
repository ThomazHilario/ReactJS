// adicionando estilos ao app
import './app.css'
import Ciclodevida from './Components - aulas/Aprendizado/04 - ciclo-de-vida'
// componente exportado.
export default function App(){
  return(
    <main>
      <h2>Seja bem vindo ao meu app react de aprendizados</h2>
      <Ciclodevida/>
    </main>
  )
}

// Depois de criado e exportado basta importalo no index.js