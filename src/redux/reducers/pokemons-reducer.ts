import { LoadableEntity } from '../../interface';
import { ActionTypes, PokemonsActionTypes } from "../actions/pokemons/actionTypes";

type initialStateType = {
  types: LoadableEntity<string>
}

const initialState: initialStateType = {
  types: {
    data: null,
    isLoading: false,
    error: null
  }
};

const pokemonsReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null
        }
      }
    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null
        }
      }

    case PokemonsActionTypes.FETCH_TYPES_REJEST:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        }
      }

    default:
      return state;
  }
};



export default pokemonsReducer;
