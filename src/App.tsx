import { useRoutes, useRedirect } from 'hookrouter';
import React from 'react';
import Header from './components/Header';
import ErrorPage from './pages/Error';
import routes, { AEnum } from './routes';

const App: React.FC = (): JSX.Element => {

  const match = useRoutes(routes);
  useRedirect('/', AEnum.HOME);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <ErrorPage />
  );
};

export default App;
