import ClientItem from '../client-item';
import { ClientContext, clientDefaultValue } from '../../context/ClientContext';
import { useContext } from 'react';

export default function ClientList() {
  const context = useContext(ClientContext);
  return (
    <>
      <div className='client-container'>
        {context.clients.map((client, idx) => (
          <ClientItem
            key={idx}
            name={client.name}
            phone={client.phone}
            budget={client.budget}
          />
        ))}
      </div>
      <style jsx>{`
        .client-container {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
      `}</style>
    </>
  );
}
