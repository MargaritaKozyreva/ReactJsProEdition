import { IPokemonsInitialState } from './actions/pokemons/actionTypes';

export interface IInitialState {
  pokemons: IPokemonsInitialState
}

export const getPokemonsTypes = (state: IInitialState) => state.pokemons.types.data
export const getPokemonsTypesLoading = (state: IInitialState) => state.pokemons.types.isLoading