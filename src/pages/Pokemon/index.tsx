import React from 'react';

export interface PokemonPropTypes {
  id: string | number;
}
const Pokemon: React.FC<PokemonPropTypes> = ({ id }) => {
  return <div>This is Pokemon id {id}</div>;
};

export default Pokemon;
