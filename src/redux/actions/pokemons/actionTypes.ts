export enum PokemonsActionTypes {
  FETCH_TYPES = "FETCH_TYPES",
  FETCH_TYPES_RESOLVE = "FETCH_TYPES_RESOLVE",
  FETCH_TYPES_REJEST = "FETCH_TYPES_REJEST"
}

export interface Action {
  type: PokemonsActionTypes;
  payload?: [];
}

export type ActionTypes = Action;

export interface IPokemonsInitialState {
  types: {
    isLoading: boolean,
    data: null | Array<string>,
    error: null | Error
  }
}