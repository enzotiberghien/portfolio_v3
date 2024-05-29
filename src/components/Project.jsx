import Skill from "./Skill"
import { skillsList } from "../assets/skills"

const Project = ({ name, img, desc, skills, code, live }) => {
  const getSkillImage = (skillName) => {
    const skill = skillsList.find((s) => s.name === skillName);
    return skill ? skill.img : '';
  };

  return (
    <div className='flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-12'>
      <div className='w-12/12 lg:w-6/12'>
        <img src={img} alt="" />
      </div>
      <div className='w-12/12 lg:w-6/12 space-y-6'>
        <h3 className='text-xl lg:text-2xl font-medium'>{name}</h3>
        <p>{desc}</p>
        <ul className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <li key={i} className=''>
              <Skill name={skill} img={getSkillImage(skill)} small={true}></Skill>
            </li>
          ))}
        </ul>
        <div className='text-md md:text-md lg:text-lg flex space-x-4 md:space-x-4'>
          {live !== '' && (
            <a href={live} className='border border-orange rounded-lg py-2 px-12 text-orange min-32 md:min-w-32 hover:bg-orange hover:text-white transition duration-300 ease-in-out transform hover:scale-105'>Live</a>

          )}
          <a href={code} className='border bg-orange rounded-lg py-2 px-12 text-white min-w-32 md:min-w-32 hover:bg-orange hover:text-white transition duration-300 ease-in-out transform hover:scale-105'>Code</a>
        </div>
      </div>
    </div>
  )
}

export default Project