import { environmentVariables, EnvironmentVariables } from './injectables';
import { GlobalStyles } from './styles';
import Router from './Router';

const App = () => {
  return (
    <EnvironmentVariables.Provider value={environmentVariables}>
      <GlobalStyles />
      <Router />
    </EnvironmentVariables.Provider>
  );
};

export default App;
