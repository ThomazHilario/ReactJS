/*
    -> Rotas
    - Antes de trabalhar com rotas, devemos instalar usando o comando: npm install react-router-dom.
    - Depois devemos importar as rotas do react-router-dom: BrowserRouter, Routes, Route
    - EstruturaÇ BrowserRouter > Routes > Route - em Route e onde estara a nossa rota.
    - o BrowserRouter ira definir a área de rotas da pagina.
    - Routes - onde irá acontecer a mudança de uma rota para outra.
    - Route - será o componente que irá aparecer, o Route possui o atributo path: como quer acessamos pela url para o component aparecer, e
    o atributo element no qual será passado o componente.
*/
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Cronometro from '../../componentes - Projetos/Cronometro'
import Request from './13 - requisicaoHTTP'

// Componente de pagina notFound
function NotFound(){
    return(
        <h2>Ops! Essa pagina nao existe</h2>
    )
}

export default function Header(){
    return(
        // Area de navegação das rotas
        <BrowserRouter>

            <header>
                <a>Logo</a>
                <menu>

                    {/* Links chamando a url */}
                    <Link to="/">Home</Link>
                    <Link to="/Cronometro">Mais</Link>

                </menu>
            </header>

            {/* onde aparecerá as rotas */}
            <Routes>

                {/* Chamadas dos componentes por meio do Route */}
                <Route path='/'element={<Request/>}/>
                <Route path='/Cronometro' element={<Cronometro/>}/>

                {/* Pagina NotFound */}
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
