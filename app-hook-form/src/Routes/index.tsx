import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Login from '../Pages/Login'

export default function RoutesPage(){
    return(
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path='/' element={ <Home/> }/>
                    <Route path='/login' element={<Login/>} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}