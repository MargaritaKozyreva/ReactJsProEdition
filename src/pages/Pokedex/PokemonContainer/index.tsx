import { pokemons } from '../../../mocks/pokemons';
import React from 'react';
import PokemonList from '../PokemonList';
import Heading from '../../../components/Heading';
import Content from "../../../components/Content"
import s from './PokemonContainer.module.scss'

const PokemonContainer: React.FC = (): JSX.Element => {
  return (
    <Content>
      <div className={s.textBox}>
        <Heading type="h3">
          800 <b>Pokemons</b> for your to choose your favorite
        </Heading>
      </div>
      <PokemonList pokemons={pokemons} />;
    </Content>
  );
};

export default PokemonContainer;
