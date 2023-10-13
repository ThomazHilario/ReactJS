// adicionando estilos ao app
import './app.css'
import Cronometro from './componentes - Projetos/Cronometro/'
// componente exportado.
export default function App(){
  return(
    <main>
      <h2>Seja bem vindo ao meu app react de aprendizados</h2>
      <Cronometro/>
    </main>
  )
}

// Depois de criado e exportado basta importalo no index.js