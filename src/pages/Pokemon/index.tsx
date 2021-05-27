import React, { useCallback } from 'react';
import cn from 'classnames';
import s from './Pokemon.module.scss';
import useData from '../../hook/getData/getData';
import Heading from '../../components/Heading';

export interface PokemonPropTypes {
  id: string | number;
}
const Pokemon: React.FC<PokemonPropTypes> = ({ id }) => {
  const _useData = useCallback(() => useData('getPokemon', { id }, [id]));
  const { data, isLoading } = _useData();
  console.log(data);

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
          <Heading type="h3">
            Charizard{' '}
          </Heading>
          <div className={cn(s.infoBlock, s.abilitiesBlock)}>infoBlock</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
