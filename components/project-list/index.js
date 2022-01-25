import ProjectCard from '../project-card'
import { useDataFetch } from '../../hooks/useDataFetch'
import { TailSpin } from 'react-loader-spinner'

export default function ProjectList() {
  const { data: projects } = useDataFetch('project')
  if (!projects)
    return (
      <div className='loader-container'>
        <TailSpin
          ariaLabel='loading-indicator'
          color={'#06A0A2'}
          height={150}
          width={150}
        />
        <style jsx>{`
          .loader-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 70vh;
            background-color: #00000011;
          }
        `}</style>
      </div>
    )
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
