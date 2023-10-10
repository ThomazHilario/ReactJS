// adicionando estilos ao app
import './app.css'
import Render from './Components - aulas/Aprendizado/06 - renderização-condicional'
// componente exportado.
export default function App(){
  return(
    <main>
      <h2>Seja bem vindo ao meu app react de aprendizados</h2>
      <Render/>
    </main>
  )
}

// Depois de criado e exportado basta importalo no index.js