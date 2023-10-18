// adicionando estilos ao app
import './app.css'
import Requisicoes from './Components - aulas/Aprendizado/13 - requisicaoHTTP'
// componente exportado.
export default function App(){
  return(
    <main>
      <h2>Seja bem vindo ao meu app react de aprendizados</h2>
      <Requisicoes/>
    </main>
  )
}

// Depois de criado e exportado basta importa-lo no index.js