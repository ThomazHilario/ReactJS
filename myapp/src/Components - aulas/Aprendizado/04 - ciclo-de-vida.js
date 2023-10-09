import {Component} from 'react'


/*
    -> ciclo de vida dos components
    - os componentes possuem ciclo de vidas: inicialização, montagem, atualização e por fim desmontagem.

    - inicialização: o componenente se prepara para ser iniciadoalizado, configurando os seus estados e suas props.

    - montagem: o componente se prepara para ser montado na DOM podendo assim chamar alguns métodos para serem executados antes de montar o componente e depois de montar o componente.
    - componentWillMount() - executa algo antes do component ser criado.
    - componentDidMount() - Esta função permite executar algo depois que o componente é montado.

    - Atualização: quando o componente atualiza seus estados e suas props, assim podendo ser executado algo cada vez que algum estado ou props seja atualizados ou inseridos.
    - componentDidUpdate() - Toda vez que um component tem seustate alterado ele executa alguma coisa.

    - Desmontagem: Nesta fase o componente não é mais necessário e está prestes a ser desmontado da DOM
*/


// Criando uma class Component
export default class CicloDeVida extends Component{
    
    // Criando o constructor
    constructor(props){
        
        // function super passando props para pegar as propriedades do Component
        super(props)
        this.state = {
            relogio:'00:00:00'
        }

    }

    // Executando algo depois que o component for montado
   componentDidMount(){
    setInterval(()=>{

        let date = new Date()
        let seconds = date.getSeconds()
        let minutes = date.getMinutes()
        let hours = date.getHours()

        // variavel que recebe o state do constructor
        let state = this.state

        // alterando o state
        state.relogio = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`

        // Setando o novo state
        this.setState(state)
    },1000);
   }

   // Executando algo quando o state for atualizado
   componentDidUpdate(){
    let rgb = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    
    document.querySelector('body').style.backgroundColor = rgb
   }

    // Renderizando
    render(){
        
        // return do html
        return(
            <div>
                <h1>{this.state.relogio}</h1>
            </div>
        )
    }
}