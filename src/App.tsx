import React from 'react';
import { useRoutes , useRedirect } from 'hookrouter';
import ErrorPage from './pages/Error';
import routes, { AEnum } from './routes';


const App: React.FC = (): JSX.Element => {
  const match = useRoutes(routes);
  useRedirect('/', AEnum.HOME);
  return match || <ErrorPage/>;
};

export default App;
