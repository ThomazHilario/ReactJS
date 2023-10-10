// adicionando estilos ao app
import './app.css'
import Listas from './Components - aulas/Aprendizado/07 - Listas'
// componente exportado.
export default function App(){
  return(
    <main>
      <h2>Seja bem vindo ao meu app react de aprendizados</h2>
      <Listas/>
    </main>
  )
}

// Depois de criado e exportado basta importalo no index.js