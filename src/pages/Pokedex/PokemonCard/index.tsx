import React from 'react';
import { IPokemons } from '../../../mocks/pokemons';
import Heading from '../../../components/Heading';
import s from './PokemonCard.module.scss';

type PokemonCardProps = IPokemons & Props & HTMLAttributeProps;
interface Props {
  children?: React.ReactNode;
}
interface HTMLAttributeProps {
  onClick?: React.MouseEventHandler<HTMLDivElement> ;
}

const PokemonCard: React.FC<PokemonCardProps> = (props): JSX.Element => {
  const { id, name_clean, stats, types, img, onClick } = props;

  return (
    <div className={s.root} onClick={onClick}>
      <div className={s.infoWrap}>
        <Heading type="h5" className={s.titleName}>
          {name_clean}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type, i) => (
            <span key={`${name_clean}${id}${i}`} className={s.label}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name_clean} />
      </div>
    </div>
  );
};

PokemonCard.defaultProps = {};

export default PokemonCard;
