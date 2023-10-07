// adicionando estilos ao app
import './app.css'

// Criando um componente funcional: que nao tem estado / ciclo de vida (funções javaScript)
function ExibindoAlgo(props){
  // Podemos ter props que são atributos que podem ser passados no componente.

  // usamos return para retornar algo do component
  return(

    // abrindo chaves {}, dentro podemos usar javascript, assim manipulando props como se fosse um objeto.
    <h2>Seja bem vindo {props.nome}</h2>
  )
}
// componente exportado.
export default function App(){
  return(
    <main>
      <h1>Seja bem vindo ao meu primeiro app em ReactJS: Hello World</h1>
      <ExibindoAlgo nome="ThomazHilario"/>
      <ExibindoAlgo nome="Matheus"/>
    </main>
  )
}

// Depois de criado e exportado basta importalo no index.js