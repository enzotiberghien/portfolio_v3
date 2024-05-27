import { skillsList } from "../assets/skills" 
import Skill from "./Skill"

const Skills = () => {
  return (
    <div className='space-y-12' id='skills'>
      <h2 className='text-2xl md:text-3xl font-medium'>My Skills <span className='text-orange'>/</span></h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
        {skillsList.map((skill, i) => (
          <Skill name={skill.name} img={skill.img} key={i}></Skill>
        ))}
      </div>
    </div>
  )
}

export default Skills