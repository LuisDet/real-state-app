import Card from '../card'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
  name,
  statusPromo,
  comission,
  date,
  clientCounter,
  id
}) {
  return (
    <Link href={`/project/${id}`}>
      <a>
        <Card flex={{ direction: 'row', gap: '15' }}>
          <div className='image-container'>
            <Image
              src='https://images5.alphacoders.com/117/thumb-1920-1172327.jpg'
              width='100'
              height='100'
              alt=''
              layout='fixed'
            />
          </div>
          <div className='card-info'>
            <h3>{name}</h3>
            <ul>
              <li>
                <span>Estatus Promo:</span> {statusPromo}
              </li>
              <li>
                <span>Comision:</span> {comission}
              </li>
              <li>
                <span>Fecha:</span> {date}
              </li>
              <li>
                <span>Cant. de clientes:</span> {clientCounter}
              </li>
            </ul>
          </div>
        </Card>
        <style jsx>{`
          .image-container {
            width: 100px;
            height: 100px;
          }
          .project-image {
            width: 700px;
            height: 700px;
          }
          h3 {
            font-size: 18px;
            text-align: center;
          }
          ul {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          li {
            font-size: 12px;
          }
          li > span {
            font-weight: 600;
          }
          .card-info {
            width: 100%;
          }
        `}</style>
      </a>
    </Link>
  )
}
