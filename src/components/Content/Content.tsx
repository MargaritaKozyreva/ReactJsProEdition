import React from 'react';
import style from './Content.module.scss';

const Content: React.FC = ({ children }): JSX.Element => {
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Content;
