import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Project'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
    </>
  )
}

export default App
