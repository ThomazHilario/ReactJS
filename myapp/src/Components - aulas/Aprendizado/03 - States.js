/* 
    -> states
    - Estados que consegue trocar de valor, sendo assim dinamicas.
*/

import {Component} from 'react'

export class Contador extends Component{

    //constructor
    constructor(props){
        // Chamando a funcao super passando props, para usar as propriedades do state
        super(props)

        // declarando o state
        this.state = {
            contador: 0,
        }

        // Colocando bind para que o constructor reconheca a function increment eo decrement
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment(){
        // Criando variavel state que recebe o state do constructor
        let state = this.state

        // incrementando o state.contador
        state.contador += 1
        
        // Setando o novo estado
        this.setState(state)
        
        // Condicao caso state.contador seja maior que 0
        if(state.contador > 0){
            document.querySelector('h3').style.color = 'green'
        }
    }

    decrement(){
        // Criando variavel state que recebe o state do constructor
        let state = this.state

        // decrementando o state.contador
        state.contador -= 1

        // setando o state
        this.setState(state)

        if(state.contador < 0){
            document.querySelector('h3').style.color = 'red'
        }
    }

    // exibe o resultado na tela
    render(){
        return(
            <div>
                <button onClick={this.increment}>Increment</button>
                <h3>{this.state.contador}</h3>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}