import { projectsList } from "../assets/projects"
import Project from "./Project"

const Projects = () => {
  return (
    <div className='space-y-24' id='projects'>
      <h2 className='text-2xl md:text-3xl font-medium'>My Projects <span className='text-orange'>/</span></h2>
      {projectsList.map((project, i) => (
        <Project
          name={project.name}
          img={project.img}
          desc={project.desc}
          skills={project.skills}
          code={project.code}
          live={project.live}
          key={i}
        ></Project>
      ))}
    </div>
  )
}

export default Projects