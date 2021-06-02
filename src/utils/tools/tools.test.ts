import { toCapitalizeFirstLetter } from "./index";

describe('Tools tests', () => {
  describe('Функция toCapitalizeFirstLetter', () => {
    test('Принимает строку, где все буквы обозначены в нижнем регистре. Возвращает строку, у которой первая буква - заглавная', () => {
      const str = toCapitalizeFirstLetter('pikachu');
      expect(str).toEqual('Pikachu')
    })
  })
})