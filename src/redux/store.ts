import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { IPokemonsInitialState } from './actions/pokemons/actionTypes';
import appReducer from './reducers/app-reducer';
import pokemonsReducer from './reducers/pokemons-reducer';

export interface StoreState {
  app: any
  pokemons: IPokemonsInitialState
}

const reducers = combineReducers<StoreState>({
  app: appReducer,
  pokemons: pokemonsReducer,
});

function configureStore(preloadedState = {}) {
  const store = createStore(reducers, preloadedState, applyMiddleware(thunk))
  return store
}

export default configureStore