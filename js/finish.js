/** Завдання 1 - Оголошення змінної */

const myCountry = "Ukraine";

console.log(myCountry);

/** Завдання 2 - Привласнення нового значення змінної */

let isStudent;

isStudent = true;

console.log(isStudent);

isStudent = false;

console.log(isStudent);

/** Завдання 3 - Множення двох чисел */

let a = 2;
let b = 3;

let c = a * b;

console.log(c); // example A


const myNum1 = 4;
const myNum2 = 7;

const myNum3 = myNum1 * myNum2;

console.log(myNum3); // example B

/** Завдання 4 - Об'єднання рядків */

const str1 = 'Maksym';
const str2 = 'Avilov';
const str3 = 'programmer';

const str4 = str1 + ' ' + str2 + ' ' + str3;

console.log(str4); // option 1

const myName = 'Maksym';
const mySurname = 'Avilov';
const myProfession = 'programmer';

const myInfo = 'My name is ' + myName + ' ' + mySurname + ' and I am ' + myProfession;

console.log(myInfo); // option 2

const personInfo = `My name is ${myName} ${mySurname} and I am ${myProfession}`;

console.log(personInfo); // option 3