import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Enzo Tiberghien</a>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-500">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <a href="#about" className="block py-2 text-gray-700">About</a>
          <a href="#skills" className="block py-2 text-gray-700">Skills</a>
          <a href="#projects" className="block py-2 text-gray-700">Projects</a>
          <a href="#contact" className="block py-2 text-gray-700">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar