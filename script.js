// Zadanie 1

const firstWord = 'hello';
const secondWord = 'world';
var allWords = (`${firstWord}, ${secondWord}`);

console.log(allWords);

// Zadanie 2

const multiply = (a = 1, b = 1) => a * b;

console.log(multiply());
console.log(multiply(2,4));

// Zadanie 3 

const average = (...args) => args.reduce((a, b) => a + b / args.length);

console.log(average(2, 4, 7));

// Zadanie 4 

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const averageGrades = (average(...grades));

console.log(averageGrades);

// Zadanie 5 

const strangeArray = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , secondName] = strangeArray;

console.log(`${firstName} ${secondName}`);