import {Component} from 'react'
import './css/style.css'
import Button from './button'

class index extends Component {
    // Constructor
    constructor(props){
        super(props)

        // state
        this.state = {
            nameBtn:'Start',
            horas:0,
            minutos:0,
            segundos:0,
            milisegundos:0
        }
        // propriedade
        this.isplay = true
        // bind
        this.start = this.start.bind(this)
    }

    start(){
        // Alocando o state a uma variavel
        let state = this.state

        // Condicao caso o state seja start
        if(state.nameBtn == 'Start'){
            setInterval(() => {
                if(this.isplay){
                    state.milisegundos += 1
    
                    if(state.milisegundos == 100){
                        state.milisegundos = 0
                        state.segundos += 1    
                    }
    
                    if(state.segundos > 59){
                        state.minutos += 1
                        state.segundos = 0
                    }
    
                    if(state.minutos > 59){
                        state.minutos = 0
                        state.horas += 1
                    }
                    
                    this.setState(state) 
                }
            },10)
            
            // Alterando o state.namesBtn para Pause
            state.nameBtn = 'Pause'

            // Caso o state.namesBtn seja Pause
        }else if(state.nameBtn == 'Pause'){
            state.nameBtn = 'Resume'
            this.isplay = false
            this.setState(state)

            // Caso state.namesBtn seja resume
        }else{
            this.isplay= true
            state.nameBtn = 'pause'
        }

    }

    render() {
        return (
            /* container */
            <div id='container'>

                {/* Container do cronometro*/}
                <div id='cronometro_container'>

                    <div>{this.state.horas < 10 ? '0' + this.state.horas : this.state.horas}:</div>
                    <div>{this.state.minutos < 10 ? '0' + this.state.minutos : this.state.minutos}:</div>
                    <div>{this.state.segundos < 10 ? '0' + this.state.segundos : this.state.segundos} <span>{this.state.milisegundos}</span></div>

                </div>

                {/* componente Button */}
                <Button start={this.start} pause={this.pause} name={this.state.nameBtn}/>
            </div>
        );
    }
}

export default index;