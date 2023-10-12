import {Component} from 'react'
import cookie from './cookie.png'

let frases = ['A vida trará coisas boas se tiver paciência','Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.','efeitos e virtudes são apenas dois lados da mesma moeda.','A juventude não é uma época da vida, é um estado de espírito.','Siga os bons e aprenda com eles.','A sorte favorece a mente bem preparada.','O amor está sempre mais próximo do que você imagina.','Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho','Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..','Realize o óbvio, pense no improvável e conquiste o impossível.']


class Biscoito extends Component {
    // Constructor
    constructor(props){
        super(props)

        // state
        this.state = {
            frase:''
        }

        // bind
        this.abrirBiscoito = this.abrirBiscoito.bind(this)        
    }

    abrirBiscoito(){
        // Trocando o estado frase para um valor aleatorio do array
        this.setState({frase:frases[Math.floor(Math.random() * frases.length)]})
    }

    // Exibindo na tela
    render() {
        return (
            <div id='container_biscoito'>
                {/* img */}
                <img src={cookie} alt='imagem do biscoito'/>

                {/* button */}
                <Button name="Abrir biscoito" action={this.abrirBiscoito} />

                {/* frase */}
                <h3>{this.state.frase}</h3>
            </div>
        );
    }
}

export default Biscoito;

// Component button
class Button extends Component{
    // Exibindo button na tela
    render(){
        return(
            <button onClick={this.props.action}>{this.props.name}</button>
        )
    }
}

// css 
/*
#container_biscoito{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 250px; 
}
#container_biscoito > h3{
    color: white;
    width: 400px;
    text-align: justify;
    text-align: center;
}
img{
    height: 150px;
}
*/