// adicionando estilos ao app
import './app.css'
import UseMemo from './Components - aulas/Aprendizado/11 - useMemo'
// componente exportado.
export default function App(){
  return(
    <main>
      <h2>Seja bem vindo ao meu app react de aprendizados</h2>
      <UseMemo/>
    </main>
  )
}

// Depois de criado e exportado basta importa-lo no index.js