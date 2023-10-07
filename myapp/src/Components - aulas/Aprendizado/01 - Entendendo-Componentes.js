/*
    -> Component
    - Entende-se que componente e o site / aplicação dividida em pedaços(components), ex: Header,main,footer,div,nav...
*/

// Criando um componente funcional: que nao tem estado / ciclo de vida (funções javaScript)
export default function ExibindoAlgo(props){
    // Podemos ter props que são atributos que podem ser passados no componente.
  
    // usamos return para retornar algo do component
    return(
  
      // abrindo chaves {}, dentro podemos usar javascript, assim manipulando props como se fosse um objeto.
      <h2>Seja bem vindo {props.nome}</h2>
    )
  }