import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import s from './Pokemon.module.scss';
import useData from '../../hook/getData/getData';
import Heading from '../../components/Heading';
import { IPokemon } from '../../interface/pokemons';

export interface PokemonPropTypes {
  id: string | number;
}

const Pokemon: React.FC<PokemonPropTypes> = ({ id }) => {
  const { data, isLoading } = useData<IPokemon>('getPokemon', { id });

  if (isLoading) {
    return <div>is loading...</div>;
  }

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <div className={s.imgCard}>
          <img src={data?.img} alt={data?.name} />
        </div>
        <div className={s.infoPart}>
          <Heading type="h3">Charizard </Heading>
          <div className={cn(s.infoBlock, s.abilitiesBlock)}>infoBlock</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
