import { useReducer } from 'react';
import uniqid from 'uniqid';
import { ClientContext, clientDefaultValue } from '../context/ClientContext';

const reducer = (state, action) => {
  if (action.type === 'create') {
    const id = uniqid();
    return {
      ...state,
      clients: [...state.clients, { ...action.payload, id }]
    };
  }
  return state;
};

function ClientReducer({ children }) {
  const [state, dispatch] = useReducer(reducer, clientDefaultValue);

  const createClient = (newClient) => {
    dispatch({ type: 'create', payload: newClient });
  };
  return (
    <ClientContext.Provider value={{ ...state, createClient }}>
      {children}
    </ClientContext.Provider>
  );
}

export default ClientReducer;
