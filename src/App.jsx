import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className='px-4 sm:px-8 lg:px-32 container mx-auto space-y-24'>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div >
      <div className='mt-24 bg-orange text-white flex justify-center items-center h-16'>Enzo Tiberghien</div>
    </>
  )
}

export default App
