import React from 'react';
import { IPokemons } from '../../../mocks/pokemons';
import PokemonCard from '../PokemonCard';
import style from './PokemonList.module.scss';

interface PokemonListTypes {
  [key: string]: any;
  children?: React.ReactNode;
  pokemons: Array<IPokemons>;
}

const PokemonList: React.FC<PokemonListTypes> = (props): JSX.Element => {
  const { pokemons } = props;

  return (
    <div>
      <div className={style.root}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </div>
  );
};

PokemonList.defaultProps = {};

export default PokemonList;
