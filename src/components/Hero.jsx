import picture from "../assets/profile-picture.jpeg"

const Hero = () => {
  return (
    <div>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='flex flex-col w-6/6 md:w-4/6 justify-center space-y-16'>
          {/* Title and buttons */}
          <div className='text-center md:text-left text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl'>
            <h1>Hi, I'm <span className='text-orange font-medium'>Enzo</span></h1>
            <h1 className='text-center'>a <span className='text-orange font-medium'>Full Stack Developer</span></h1>
          </div>
          <div className="text-md md:text-lg lg:text-xl flex justify-center space-x-4 md:space-x-8">
            <a href="#projects" className='border border-orange rounded-lg py-2 px-12 text-orange min-w-36 md:min-w-44 hover:bg-orange hover:text-white transition duration-300 ease-in-out transform hover:scale-105'>Projects</a>
            <a href="#contact" className='bg-orange rounded-lg py-2 px-12 text-white min-w-36 md:min-w-44 hover:bg-orange-dark transition duration-300 ease-in-out transform hover:scale-105'>Contact</a>
          </div>
        </div>
        <div className='flex mx-auto flex-col w-4/6 md:w-2/6'>
          {/* Image */}
          <img src={picture} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero