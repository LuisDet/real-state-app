import Card from '../card';

export default function ClientItem({ name, phone, budget }) {
  return (
    <>
      <Card flex={{ direction: 'row', gap: '15', alignItems: 'center' }}>
        <div className='image-container'>
          <h3>{name}</h3>
        </div>
        <div className='card-info'>
          <ul>
            <li>
              <span>Telefono:</span> {phone}
            </li>
            <li>
              <span>Presupuesto:</span> {budget} $
            </li>
          </ul>
        </div>
      </Card>
      <style jsx>{`
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
    </>
  );
}
