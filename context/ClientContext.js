import { createContext } from 'react';

const clientDefaultValue = {
  clients: [
    {
      name: 'Luis Heriquez',
      phone: '809-431-3123',
      document: '',
      budget: '5000'
    }
  ],
  createClient: (newClient) => {}
};

const ClientContext = createContext(clientDefaultValue);

export { ClientContext, clientDefaultValue };
