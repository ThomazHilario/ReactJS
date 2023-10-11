/*
    -> Formulários em react
    - Em react podemos trabalhar com formulários por meio das states.
    - O valor padrão do formulário será uma chave do state, e por meio dos eventos onChange ou onInput alteramos o state atual pelo o que está sendo digitado no input.
*/
// importando component
import {Component} from 'react'

// component Form
export class Form extends Component{

    //constructor
    constructor(props){
        super(props)

        // state
        this.state = {
            email:'',
            senha:'',
            sexo:''
        }

        // binds
        this.mudarValor = this.mudarValor.bind(this)
        this.trocarSexo = this.trocarSexo.bind(this)
    }
    
    // mudar valor
    mudarValor(e){
        let valorDigitado = e.target.value

        this.setState({email:valorDigitado})
    }

    // trocando o sexo
    trocarSexo(e){
        this.setState({sexo:e.target.value})
    }

    // exibir algo na tela
    render(){
        // retornando o commponent
        return(
            <form>
                <div>
                    <label>Email</label>
                    <input type='email' id='iemail' onInput={this.mudarValor} value={this.state.email}/>
                </div>

                <div>
                    <label>Senha</label>
                    <input type="password" id="isenha" onInput={(e) => this.setState({senha:e.target.value})} value={this.state.senha}/>
                </div>

                <div>
                    <select onChange={this.trocarSexo}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                </div>
                <h3>{this.state.email}</h3>
                <h3>{this.state.senha}</h3>
                <h3>{this.state.sexo}</h3>
            </form>
        )
    }
}

// Praticando formulario

export class Cadastro extends Component{
    // constructor
    constructor(props){
        super(props)

        // state
        this.state = {
            nome:'',
            email:'',
            sexo:'Masculino',
            senha:''
        }

        // bind
        this.enviar = this.enviar.bind(this)
    }
    enviar(e){
        // cancelando o envio do formulario
        e.preventDefault()
        let {nome, email, sexo ,senha } = this.state
        // Validacao
        if(nome == ''){
            alert('preencha o campo de nome')
        } else if(email == ''){
            alert('preencha o campo de email')
        } else if(senha == ''){
            alert('preencha o campo de senha')
        } else{
            alert(`Nome: ${nome} \nEmail: ${email} \nSexo: ${sexo} \nSenha: ${senha}`)
        }
    }
    render(){
        return(
            <form>
                <div>
                    <label>Nome Completo</label>
                    <br/>
                    <input type='text' value={this.state.nome} onInput={(e) => this.setState({nome:e.target.value})}></input>
                </div>

                <div>
                    <label>Email</label>
                    <br/>
                    <input type='email' value={this.state.email} onInput={(e) => this.setState({email:e.target.value})}></input>
                </div>

                <div>
                    <select value={this.state.sexo} onInput={(e) => this.setState({sexo:e.target.value})}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                </div>

                <div>
                    <label>Senha</label>
                    <br/>
                    <input type='password' value={this.state.senha} onInput={(e) => this.setState({senha:e.target.value})}></input>
                </div>

                <div>
                    <button onClick={this.enviar}>Cadastrar</button>
                </div>
            </form>
        )
    }
}