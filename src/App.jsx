import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {

  return (
    <>
      <div className='px-4 sm:px-8 lg:px-32 container mx-auto space-y-16'>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
      </div >
    </>
  )
}

export default App
