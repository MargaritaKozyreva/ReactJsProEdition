import React from 'react';
import s from './App.module.scss';

const App: React.FC = (): JSX.Element => {
  return (
    <div className={s.header}>
      This is <span>App Component!</span>
    </div>
  );
};

export default App;
