import HeadArticle from '../../components/head-articule'
import ProjectList from '../../components/project-list'

export default function Projects() {
  return (
    <section>
      <HeadArticle title='Projectos' link='/project/create' />
      <ProjectList />
    </section>
  )
}
