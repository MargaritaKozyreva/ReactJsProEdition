import React, { ChangeEvent, useEffect, useState } from 'react';
import PokemonList from '../PokemonList';
import Heading from '../../../components/Heading';
import Content from '../../../components/Content';
import s from './PokemonContainer.module.scss';
import useData from '../../../hook/getData/getData';
import Input from '../../../components/Input';
import IPokemonsData from '../../../interface/pokemons';
import useDebounce from '../../../hook/useDebounce/useDebounce';

interface IQuery {
  name?: string;
}

const PokemonContainer: React.FC = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 500);

  const { isLoading, isError, data } = useData<IPokemonsData>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
    setQuery((state: IQuery) => {
      return {
        ...state,
        name: event.target.value,
      };
    });
  };

  if (isError) {
    return <div>Error!!</div>;
  }

  return (
    <Content>
      <div className={s.textBox}>
        <Heading type="h3">
          {!isLoading && data && data.total || 'Loading...'} <b>Pokemons</b> for your to choose your favorite
        </Heading>
        <Input searchValue={searchValue} handleOnChange={handleSearchChange} autoFocus />
      </div>
      {!isLoading && data && <PokemonList pokemons={data.pokemons} /> || 'Loading...'}
    </Content>
  );
};

export default PokemonContainer;
