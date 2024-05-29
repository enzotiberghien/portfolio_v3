import email from '../assets/contacts/email.svg'
import phone from '../assets/contacts/phone.svg'
import location from '../assets/contacts/location.svg'
import linkedin from '../assets/contacts/linkedin.svg'
import github from '../assets/contacts/github.svg'

const Contact = () => {
  return (
    <div className='space-y-12' id='contact'>
      <h2 className='text-2xl md:text-3xl font-medium'>Contact <span className='text-orange'>/</span></h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        <div className='flex items-center space-x-4'><img className='w-6 md:w-8' src={email} alt="" /> <div>enzotiberghien28@gmail.com</div></div>
        <div className='flex items-center space-x-4'><img className='w-6 md:w-8' src={phone} alt="" /> <div>+33 6 35 37 13 44</div></div>
        <div className='flex items-center space-x-4'><img className='w-6 md:w-8' src={location} alt="" /> <div>Malmö, Sweden</div></div>
        <div><a target='_blank' className='flex items-center space-x-4' href="https://github.com/enzotiberghien"><img className='w-6 md:w-8' src={github} alt="" /> <div>/enzotiberghien</div></a></div>
        <div><a target='_blank' className='flex items-center space-x-4' href="https://linkedin.com/in/enzo-tiberghien"><img className='w-6 md:w-8' src={linkedin} alt="" /> <div>/enzo-tiberghien</div></a></div>
      </div>
    </div>
  )
}

export default Contact