let array = [1, 'a', 2, 'b', 3, 'c'];
let numbers = [1, 2, 3, 4, 5];
let letters = ['a', 'b', 'c', 'd', 'e'];
let empty = ['', '', ''];

const filter = array.filter(item => typeof(item) == 'number');
console.log(filter); // [1, 2, 3]

const indexOf = (array.indexOf('b'));
console.log(indexOf); // 3

const length = array.length
console.log(length); // 6

const maped = numbers.map(n => n+1);
console.log(maped); // [2, 3, 4, 5, 6]

const finded = letters.find(item => item == 'd');
console.log(finded); // d

const findedIndex = numbers.findIndex(n => n > 2);
console.log(findedIndex); // 2

const filled = empty.fill('A');
console.log(filled); // ['A', 'A', 'A']

const every = numbers.every(n => n < 6);
console.log(every); // true

const some = letters.some(item => typeof(item) == 'number');
console.log(some) // false

const sorted = numbers.sort((a, b) => b-a);
console.log(sorted); // [5, 4, 3, 2, 1]





