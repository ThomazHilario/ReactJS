// adicionando estilos ao app
import './app.css'
import Rota from './Components - aulas/Aprendizado/14 - Rotas'
// componente exportado.
export default function App(){
  return(
    <div id="myApp">
      <Rota/>
      <h2>Seja bem vindo ao meu app react de aprendizados</h2>
    </div>
  )
}

// Depois de criado e exportado basta importa-lo no index.js