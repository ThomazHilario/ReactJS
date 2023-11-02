import {useState} from 'react'
import './home.css'
export default function Home(){
    return(
        <div id='container'>
            <fieldset>
                <legend>Formulario</legend>
                <form>
                        <div className='container_input'>
                            <label>Name:</label>
                            <input type='text'/>
                        </div>

                        <div className='container_input'>
                            <label>Age:</label>
                            <input type='number'/>
                        </div>

                        <div>
                            <button>Cadastrar</button>
                        </div>
                </form>
            </fieldset>
            
        </div>
    )
}