import { createContext } from 'react';

const apiDefaultValue = {
  projects: [
    { name: 'Relax', statusPromo: 'activo', comission: '5%', date: '10 10' }
  ],
  createProject: (newProject) => {}
};

const ApiContext = createContext(apiDefaultValue);

export { ApiContext, apiDefaultValue };
