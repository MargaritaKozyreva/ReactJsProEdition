import React from 'react';
import { A , usePath } from 'hookrouter';
import s from './Header.module.scss';
import { ReactComponent as Logo } from './assets/Logo.svg';
import { GENERAL_MENU } from '../../routes';


const Header = () => {

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <Logo />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A key={title } href={link} className={s.menuLink}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
