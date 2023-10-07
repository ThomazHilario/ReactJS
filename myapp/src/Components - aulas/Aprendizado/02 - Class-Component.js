import {Component} from 'react'
/*
    -> Class Component
    - Permite ter estados e ciclo de vida.
    - Se quando declararmos um component e passamos algumas propriedades, na classe temos acesso dessas propriedades por meio do this.props.nome-da-propriedade.
    - Podemos usar components funcionais na class component.
*/

// Estrutura de uma class comonente
export class Exibindo extends Component{
    // Dentro tem que ter a função render(), para renderizar o que ter ali dentro na tela
    render(){
        // aqui vai o return
        return(
            <div>
                <h2>Funcionou</h2>
            </div>
        )
    }
}

