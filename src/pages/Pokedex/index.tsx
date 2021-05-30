import React from 'react';
import style from './Pokedex.module.scss';
import PokemonContainer from './PokemonContainer';

type PokedexProps = HTMLAttributeProps;

interface HTMLAttributeProps {
  [key: string]: any;
}

const PokedexPage: React.FC<PokedexProps> = (): JSX.Element => {
  return (
    <div className={style.root}>
      <div>
        <PokemonContainer />
      </div>
    </div>
  );
};

export default PokedexPage;
