/*
    -> Listas
    - Em react podemos criar uma lista apartir da função map(), e assim criar uma lista para cada valor do array.
    - a lista deve conter uma key, que serve como um identificador para cada linha da lista.
*/


// importando o component
import {Component} from 'react'

export default class Lista extends Component{

    // Constructor
    constructor(props){
        super(props)

        //state
        this.state = {
            feed:[
                {username:'Luiz', curtidas:30, comentarios:14},
                {username:'Arthur', curtidas:40, comentarios:30},
                {username:'Lincoln', curtidas:60, comentarios:16},
                {username:'Eduh', curtidas:1, comentarios:0}
            ]
        }

    }

    // render
    render(){
        return(
            <div>
                <ul>
                    {this.state.feed.map((status,idx) => {
                        return(
                            <li key={idx}>
                                Username: {status.username}<br/> 
                                {status.curtidas > 1  ? 'Curtidas: ' + status.curtidas :  'Curtida: ' + status.curtidas}<br/> 
                                {status.comentarios > 1 ? `Comentarios: ${status.comentarios}` : `Comentario: ${status.comentarios}`}
                                <hr></hr>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}