// import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./Pages/home"
import UserInfo from './Pages/userInfo'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<UserInfo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
