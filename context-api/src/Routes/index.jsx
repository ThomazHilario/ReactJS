import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../components/Home'

export default function RoutePage(){
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}