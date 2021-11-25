import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

function useProjectContext() {
  return useContext(ApiContext);
}

export default useProjectContext;
