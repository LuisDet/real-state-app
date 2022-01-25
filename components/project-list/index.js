import ProjectCard from '../project-card'
import { useDataFetch } from '../../hooks/useDataFetch'

export default function ProjectList() {
  const { data: projects } = useDataFetch('project')
  console.log(projects)
  if (!projects) return <div>loading...</div>
  if (!projects.length) return <div>Not Found</div>
  return (
    <>
      <div className='projects-container'>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            statusPromo={project.statusPromo}
            comission={project.comission}
            date={project.dateRange}
            clientCounter={project.clientCounter}
          />
        ))}
      </div>
      <style jsx>{`
        .projects-container {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
      `}</style>
    </>
  )
}
