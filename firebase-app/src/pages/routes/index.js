import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './routes.css'
import Home from '../home'

export default function RoutePage(){
    return(
        <BrowserRouter>
            <header>
                <Link to="/">Home</Link>
            </header>

            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}