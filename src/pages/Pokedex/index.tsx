import React from 'react';
import style from './Pokedex.module.scss';
import Header from '../../components/Header';
import PokemonContainer from './PokemonContainer';

type PokedexProps = HTMLAttributeProps;

interface HTMLAttributeProps {
  [key: string]: any;
}

const PokedexPage: React.FC<PokedexProps> = (): JSX.Element => {


  return (
    <div className={style.root}>
      <div>
        <Header />
        <PokemonContainer />
      </div>
    </div>
  );
};

export default PokedexPage
