import getUrlWithParamsConfig from "./getUrlWithParamsConfig"

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать 2 аргумента - getPokemons и пустой объект, на выходе получить объект с полями protocol, host, pathname, query ( пустое )', () => {

    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({

      protocol: "http",
      host: "zar.hosthot.ru",
      pathname: "/api/v1/pokemons",
      query: {}

    })

  })
  test('Должна принимать 2 аргумента - getPokemons и {name: "Pikachu"}, на выходе получить объект с полями protocol, host, pathname, query ( поля - name равное Pikachu )', () => {

    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({

      protocol: "http",
      host: "zar.hosthot.ru",
      pathname: "/api/v1/pokemons",
      query: { name: 'Pikachu' }

    })

  })
  test('Должна принимать 2 аргумента - getPokemons и {id: 1}, на выходе получить объект с полями protocol, host, pathname, query ( пустое )', () => {

    const url = getUrlWithParamsConfig('getPokemon', { id: 1 });

    expect(url).toEqual({

      protocol: "http",
      host: "zar.hosthot.ru",
      pathname: "/api/v1/pokemon/1",
      query: {}

    })

  })

  // CREATE 

  test('Должна принимать 2 аргумента - createPokemon и {name: "MyPokemon"}, на выходе получить объект с полями method, uri, body', () => {

    const url = getUrlWithParamsConfig('createPokemon', { name: "MyPokemon" });

    expect(url).toEqual({
      method: "POST",
      uri: {
        protocol: "http",
        host: "zar.hosthot.ru",
        pathname: "/api/v1/pokemon/1",
        query: {}
      },
      body: {
        name: "MyPokemon"
      }

    })

  })

  // UPDATE 

  test('Должна принимать 2 аргумента - updatePokemon и {id: 1}, на выходе получить объект с полями method, uri, body', () => {

    const url = getUrlWithParamsConfig('updatePokemon', { id: 1 });

    expect(url).toEqual({
      method: "POST",
      uri: {
        protocol: "http",
        host: "zar.hosthot.ru",
        pathname: "/api/v1/pokemon/1",
        query: {}
      },
      body: {
        id: 1
      }

    })

  })

  // DELETE 

  test('Должна принимать 2 аргумента - deletePokemon и {id: 1}, на выходе получить объект с полями method, uri, body', () => {

    const url = getUrlWithParamsConfig('deletePokemon', { id: 1 });

    expect(url).toEqual({
      method: "POST",
      uri: {
        protocol: "http",
        host: "zar.hosthot.ru",
        pathname: "/api/v1/pokemon/1",
        query: {}
      },
      body: {
        id: 1
      }

    })

  })
})