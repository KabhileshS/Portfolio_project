import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
// import Portfolio from './Components/FunctionalComponents/Portfolio'
import Navbar from './Components/FunctionalComponents/Navbar'
import Home from './Components/FunctionalComponents/Home'
import Contact from './Components/FunctionalComponents/Contact'
import Skills from './Components/FunctionalComponents/Skills'
import Education from './Components/FunctionalComponents/Education'
import Projects from './Components/FunctionalComponents/Projects'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path='/' element={ <Home/> } />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/education' element={<Education/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contact' element={<Contact/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
