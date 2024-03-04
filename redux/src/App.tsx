import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import components
import { Home } from './Components/home'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
