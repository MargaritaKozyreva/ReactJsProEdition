import React, { useEffect, useState } from 'react';
import PokemonList from '../PokemonList';
import Heading from '../../../components/Heading';
import Content from '../../../components/Content';
import s from './PokemonContainer.module.scss';
import req from '../../../utils/request';

const usePokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const res = await req('getPokemons');
        setData(res);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return { isLoading, isError, data };
};

const PokemonContainer: React.FC = (): JSX.Element => {
  const { isLoading, isError, data } = usePokemons();
  if (isError) {
    return <div>Error!!</div>;
  }
  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  return (
    <Content>
      <div className={s.textBox}>
        <Heading type="h3">
          {data.total} <b>Pokemons</b> for your to choose your favorite
        </Heading>
      </div>
      <PokemonList pokemons={data.pokemons} />
    </Content>
  );
};

export default PokemonContainer;
