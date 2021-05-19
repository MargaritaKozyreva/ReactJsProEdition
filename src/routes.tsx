import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';
import PokedexPage from './pages/Pokedex';

export interface IGeneralMenu {
  title: string;
  link: AEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum AEnum {
  HOME = '/home',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export const GENERAL_MENU: Array<IGeneralMenu> = [
  {
    title: 'Home',
    link: AEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokedex',
    link: AEnum.POKEDEX,
    component: () => <PokedexPage/>,
  },
  {
    title: 'Legendaries',
    link: AEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: AEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
