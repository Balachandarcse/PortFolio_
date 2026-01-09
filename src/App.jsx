import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Project'
import Skills from './components/Skills'
import Certifications from './components/Certifications'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <Projects/>
      <Skills/>
      <Certifications/>
      <About/>
      <Contact/>
    </>
  )
}

export default App
