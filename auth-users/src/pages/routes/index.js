import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../home'


export default function PageRoute(){
    return(
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>}/>

                    {/* pagina default */}
                </Routes>
            </main>
        </BrowserRouter>
    )
}