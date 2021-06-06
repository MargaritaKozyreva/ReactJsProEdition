
interface statsProps {
  hp: number,
  attack: number,
  defense: number,
  'special-attack': number,
  'special-defense': number,
  speed: number,
}

export interface IPokemon {
  name_clean: string,
  abilities: Array<string>,
  stats: statsProps,
  types: Array<string>,
  img: string,
  name: string,
  base_experience: number,
  height: number,
  id: number,
  is_default: boolean,
  order: number,
  weight: number,
}

interface IPokemonsData {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: Array<IPokemon>
}

export type ITypesRequest = string[];
export default IPokemonsData


