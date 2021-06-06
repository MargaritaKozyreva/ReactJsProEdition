
import { Dispatch } from 'redux';
import { ITypesRequest } from '../../../interface/pokemons';
import req from '../../../utils/request';
import { PokemonsActionTypes, ActionTypes } from './actionTypes';

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
    try {
      const response = await req<ITypesRequest>('getPokemonsTypes');
      console.log('###response', response);
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: response });

    } catch (error) {
      console.log('###error', error);
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_REJEST, payload: error });
    }
  }
}
