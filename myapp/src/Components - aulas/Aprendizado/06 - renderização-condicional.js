/*
    -> Renderização condicional
    - É uma forma de renderizar ; mostrar algo na tela, se cumprir uma determinada condição.
*/


// Importando o component do react
import {Component} from 'react'

// Class component
export default class Render extends Component{
    
    //constructor
    constructor(props){
        super(props)

        //state
        this.state = {
            status:false,
            nome:'thomaz',
        }

        this.mudarStatus = this.mudarStatus.bind(this)
    }

    // function para mudar status
    mudarStatus(){
        let state = this.state

        if(state.status == true){
            state.status = false
        }else{
            state.status = true
        }

        this.setState(state)
    }

    // render: exibir algo na tela
    render(){

        // return
        return(
            <div>
                {this.state.status == true ? <div><h2>Bem-vindo ao sistema</h2>
                <button onClick={this.mudarStatus}>Sair</button></div> : 
                <div><h2>logue no sistema</h2><button onClick={this.mudarStatus}>Entrar</button></div>}
            </div>
        )
    }
}