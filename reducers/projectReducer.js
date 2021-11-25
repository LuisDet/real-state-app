import { useReducer } from 'react';
import { ApiContext, apiDefaultValue } from '../context/ApiContext';
import uniqid from 'uniqid';

const reducer = (state, action) => {
  if (action.type === 'create') {
    const { dateFrom, dateTo } = action.payload;
    const dateRange = `${dateFrom} / ${dateTo}`;
    const statusPromo = 'No Activo';
    const clientCounter = 0;
    const id = uniqid();
    return {
      ...state,
      projects: [
        ...state.projects,
        { ...action.payload, dateRange, statusPromo, clientCounter, id }
      ]
    };
  }
  return state;
};

function ProjectReducer({ children }) {
  const [state, dispatch] = useReducer(reducer, apiDefaultValue);

  const createProject = (newProject) => {
    dispatch({ type: 'create', payload: newProject });
  };
  return (
    <ApiContext.Provider value={{ ...state, createProject }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ProjectReducer;
