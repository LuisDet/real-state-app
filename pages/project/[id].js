import Card from '../../components/card';

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
            <div>
              <p>Comision</p>
            </div>
            <div>4%</div>
          </Card>
          <Card
            flex={{
              justifyContent: 'center',
              alignItems: 'center',
              direction: 'column'
            }}
          >
            <div>Constructora</div>
            <div>4%</div>
          </Card>
          <Card
            flex={{
              justifyContent: 'center',
              alignItems: 'center',
              direction: 'column'
            }}
          >
            <div>Fecha</div>
            <div>4%</div>
          </Card>
          <Card
            flex={{
              justifyContent: 'center',
              alignItems: 'center',
              direction: 'column'
            }}
          >
            <div>Ubicacion</div>
            <div>4%</div>
          </Card>
        </div>
        <Card
          flex={{
            justifyContent: 'center',
            alignItems: 'center',
            direction: 'column'
          }}
          className='card-description'
        >
          <div>Ubicacion</div>
          <div>4%</div>
        </Card>
      </section>
      <style jsx>{`
        .card-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        :global(.card-description) {
          margin-top: 15px;
        }
      `}</style>
    </>
  );
}
