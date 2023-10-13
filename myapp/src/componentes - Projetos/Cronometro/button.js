import { Component } from "react";

export default class Button extends Component{
    render(){
        return(
            <div>
                <button className="btn" onClick={this.props.start}>{this.props.name}</button>
            </div>
        )
    }
}