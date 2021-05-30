import React, { ChangeEvent } from 'react';

import s from './Input.module.scss';

interface PropsTypes {
  [key: string]: any;
  searchValue: string;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<PropsTypes> = (props) => {
  const { searchValue, handleOnChange } = props;
  return (
    <div className={s.root}>
      <input type="text" value={searchValue} onChange={handleOnChange} />
    </div>
  );
};

export default Input;
