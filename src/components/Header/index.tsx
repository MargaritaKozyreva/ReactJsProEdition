import React from 'react';
import s from './Header.module.scss';
import { ReactComponent as Logo } from './assets/Logo.svg';

interface IMenu {
  id: number;
  title: string;
  link: string;
}

const MENU: Array<IMenu> = [
  {
    id: 1,
    title: 'Home',
    link: '#',
  },
  {
    id: 2,
    title: 'Pokedex',
    link: '#',
  },
  {
    id: 3,
    title: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    title: 'Documentation',
    link: '#',
  },
];

const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <Logo />
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({ id, title, link }, index) => (
            <a key={id} href={link} className={s.menuLink}>
              {title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
