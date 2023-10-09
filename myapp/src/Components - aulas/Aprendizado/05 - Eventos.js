/*
    -> Eventos
    - Aprendendo a usar eventos do javascript nos componentes.
    - Quando queremos usar uma função ao clicar passando parâmetro no onclick, devemos indicar como função anônima: () => this.entrar()
*/

// importando o componet de react
import {Component} from 'react'

// Criando uma class component
export default class Eventos extends Component{

    //constructor
    constructor(props){
        super(props)

        // Statte
        this.state = {
            nome:props.nome
        }

        // bind
        this.entrar = this.entrar.bind(this)
        this.sair = this.sair.bind(this)
    }

    // funcction entrar
    entrar(value){
        this.setState({nome:value})
    }

    // Sair
    sair(){
        this.setState({nome:'voce saiu'})
    }

    // Render
    render(){

        //return
        return(
            <div>
                <button onClick={() => this.entrar('Leo')}>Entrar</button>
                <button onClick={this.sair}>Sair</button>
                <h3>{this.state.nome}</h3>
            </div>
        )
    }
}