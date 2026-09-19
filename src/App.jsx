import { useState } from 'react'
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        {/* <Hero/> */}
        <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
        <div id="contact">
          <Contact />
        </div>
      </Router>
    </>
  )
}

export default App
