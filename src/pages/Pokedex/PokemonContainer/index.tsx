import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../PokemonList';
import Heading from '../../../components/Heading';
import Content from '../../../components/Content';
import s from './PokemonContainer.module.scss';
import useData from '../../../hook/getData/getData';
import Input from '../../../components/Input';
import IPokemonsData from '../../../interface/pokemons';
import useDebounce from '../../../hook/useDebounce/useDebounce';
import { getTypesAction } from '../../../redux/actions/pokemons/actions';
import { getPokemonsTypes, getPokemonsTypesLoading } from '../../../redux/pokemons';

interface IQuery {
  name?: string;
}

const PokemonContainer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const types = useSelector(getPokemonsTypes);
  const isTypesLoading = useSelector(getPokemonsTypesLoading);

  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 500);

  const { isLoading, isError, data } = useData<IPokemonsData>('getPokemons', query, [debouncedValue]);

  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

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
          {(!isLoading && data && data.total) || 'Loading...'} <b>Pokemons</b> for your to choose your favorite
        </Heading>
        <Input searchValue={searchValue} handleOnChange={handleSearchChange} autoFocus />
        <div>{isTypesLoading ? <div>Loading...</div> : types?.map((type) => <div>{type}</div>)}</div>
      </div>
      {(!isLoading && data && <PokemonList pokemons={data.pokemons} />) || 'Loading...'}
    </Content>
  );
};

export default PokemonContainer;
