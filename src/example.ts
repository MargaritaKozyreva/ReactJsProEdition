// ***************************** 1 */
/**
 * Конкатинирует две строки
 * @param {string} str1 строка 1
 * @param {string} str2 строка 2
 * @returns {string}
 */
const concat = (str1: string, str2: string) => {
  return str1 + ' ' + str2;
};
concat('Hi', 'Tiger');

// ***************************** 2 */
type strOrNum = string | number;

interface iWithData {
  howIDoIt: string;
  simeArray: Array<strOrNum>;
}

interface iMyHometask {
  howIDoIt: string;
  simeArray: Array<strOrNum>;
  withData: Array<iWithData>;
}
const myHometask: iMyHometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// ***************************** 3 */

interface MyArray<T> {
  [N: number]: T;
  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
}

const testArray: MyArray<number> = [1, 2, 3, 4, 5];

testArray.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, 10);
