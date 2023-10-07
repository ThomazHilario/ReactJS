/*
    -> Component
    - Entende-se que componente e o site / aplicação dividida em pedaços(components), ex: Header,main,footer,div,nav...
    - Todo componente deve comecar com letra maiuscula.
*/

// Criando um componente funcional: que nao tem estado / ciclo de vida (funções javaScript)
export function ExibindoAlgo(props){
    // Podemos ter props que são atributos que podem ser passados no componente.
  
    // usamos return para retornar algo do component
    return(
  
      // abrindo chaves {}, dentro podemos usar javascript, assim manipulando props como se fosse um objeto.
      <h2>Seja bem vindo {props.nome}</h2>
    )
}

// Exercicio: crie um componente que dentro dele haverá outro componente que resolverá algo
function Sobre(props){
    return(
        <p>{props.name} {props.age} {props.cargo}</p>
    )
}
export function ExibindoFuncionarios(props){
    // retornando algo / html
    return(
        <h2><Sobre name={props.name} age={props.age} cargo={props.cargo}/></h2>
    )
}

