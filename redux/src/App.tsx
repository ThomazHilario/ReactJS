import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import components
import { Home } from './Components/home'
import { Painel } from './Components/painel'
import { Address } from './Components/address'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/painel' element={<Painel/>}/>
        <Route path='/address' element={<Address/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
