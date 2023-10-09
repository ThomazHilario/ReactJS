// adicionando estilos ao app
import './app.css'
import Eventos from './Components - aulas/Aprendizado/05 - Eventos'
// componente exportado.
export default function App(){
  return(
    <main>
      <h2>Seja bem vindo ao meu app react de aprendizados</h2>
      <Eventos nome="Thomaz"/>
    </main>
  )
}

// Depois de criado e exportado basta importalo no index.js