import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'

function App() {

  return (
    <>
    <Routes>
      <Route path='/about' element={<About />}/>
    </Routes>
    </>
  )
}

export default App
