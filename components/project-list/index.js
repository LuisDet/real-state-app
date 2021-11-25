import useProjectContext from '../../hooks/useProjectContext';
import ProjectCard from '../project-card';

export default function ProjectList() {
  const { projects } = useProjectContext();
  return (
    <>
      <div className='projects-container'>
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
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
  );
}
