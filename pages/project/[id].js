import Card from '../../components/card'
import { Percentage, Builder, Date, Location } from '../../components/icon'
import { TableRelation } from '../../components/table-relation'

export default function Project() {
  return (
    <>
      <section>
        <div className='card-container'>
          <Card
            flex={{
              justifyContent: 'center',
              alignItems: 'center',
              direction: 'column'
            }}
          >
            <div className='card-title'>
              <Percentage />
              <p>Comision</p>
            </div>
            <p className='card-text'>4%</p>
          </Card>
          <Card
            flex={{
              justifyContent: 'center',
              alignItems: 'center',
              direction: 'column'
            }}
          >
            <div className='card-title'>
              <Builder />
              <p>Constructora</p>
            </div>
            <p className='card-text'>Eduardo Giron</p>
          </Card>
          <Card
            flex={{
              justifyContent: 'center',
              alignItems: 'center',
              direction: 'column'
            }}
          >
            <div className='card-title'>
              <Date />
              <p>Fecha</p>
            </div>
            <div className='card-date'>
              <div>
                <p className='card-date-text'>Desde</p>
                <p className='card-date-text'>01/10/2021</p>
              </div>
              <div>
                <p className='card-date-text'>Hasta</p>
                <p className='card-date-text'>01/10/2021</p>
              </div>
            </div>
          </Card>
          <Card
            flex={{
              justifyContent: 'center',
              alignItems: 'center',
              direction: 'column'
            }}
          >
            <div className='card-title'>
              <Location />
              <p>Ubicacion</p>
            </div>
            <p className='card-text'>Santo Domingo</p>
          </Card>
          <Card
            flex={{
              justifyContent: 'center',
              alignItems: 'center',
              direction: 'column'
            }}
            className='grid-col-span'
          >
            <div className='card-title'>Description</div>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              repellendus consequuntur officia quibusdam obcaecati tenetur id
              commodi quia deserunt voluptatem!
            </p>
          </Card>
        </div>
      </section>

      <TableRelation />

      <style jsx>{`
        .card-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5px;
        }
        .card-title {
          display: flex;
          font-size: 14px;
          font-weight: 500;
          align-items: center;
          gap: 5px;
        }
        .card-text {
          font-size: 14px;
        }

        .card-date {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        .card-date-text {
          font-size: 12px;
          text-align: center;
        }
        :global(.grid-col-span) {
          grid-column: 1 / span 2;
        }
      `}</style>
    </>
  )
}
