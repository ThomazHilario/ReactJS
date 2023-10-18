// adicionando estilos ao app
import './app.css'
import Rotas from './Components - aulas/Aprendizado/14 - Rotas'
// componente exportado.
export default function App(){
  return(
    <main>
      <h2>Seja bem vindo ao meu app react de aprendizados</h2>
      <Rotas/>
    </main>
  )
}

// Depois de criado e exportado basta importa-lo no index.js