import ProjectReducer from '../reducers/projectReducer';
import ClientReducer from '../reducers/ClientReducer';

function ContextProvider({ children }) {
  return (
    <ProjectReducer>
      <ClientReducer>{children}</ClientReducer>
    </ProjectReducer>
  );
}

export default ContextProvider;
