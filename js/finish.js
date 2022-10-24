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

/** Завдання 5 - Коментар */

// 1. Single Line Comments

let a = 2; // Single line comment

let b = 3; // Inline comment 

let c = a * b; // Declare c, give it the value of a * b

// 2. Multi-line Comments 1
/* This is 
multiline 
comment */
const myInfo = 'My name is ' + myName + ' ' + mySurname + ' and I am ' + myProfession;

// Multi-line Comments 2
/**
 * This is
 * multiline
 * comments
 */
 const personInfo = `My name is ${myName} ${mySurname} and I am ${myProfession}`;

 /** Завдання 6 - Data types */

const myString = "Max";
const myNumber = 73;
const myBoolean = true;
const myNull = null;
let myUndefined;
const myObject = {};
const myArray = []; 

console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myBoolean)
console.log(typeof myNull)
console.log(typeof myUndefined)
console.log(typeof myObject)
console.log(typeof myArray)

/** Зaвдання 7 - Regular function */

function printMyName() {
    const myName = 'Max';
    console.log(myName);
}
printMyName();

/** Task 8 - Assigning a function to a variable */

const hello = function (name) {
    return 'hello, ' + name;
}
 console.log(hello('Max'));

 console.log(hello('Ilona'));

 function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    // console.log(c)
    return c
 }

 console.log(myFn(10, 3)); // 14

function myFn() {}
myFn(); // undefined

/** Task 9 - arrow function */

// Explicitly returning a result

// const helloWorld = () => {
//    return 'Hello, World!'
// }

// console.log(helloWorld());

// Implicit returning a result
const helloWorld = () => 'Hello, World!'

console.log(helloWorld());

/*Task 10 - jsdoc */

/**
 * Returns the difference of two numbers
 * @param {number} a 
 * @param {number} b 
 * @returns {number} difference of numbers
 */
 function diff(a, b) {
    return a - b;
  }
  
  const result = diff(10, 5);
  console.log(result);

/**Task 11 - Callback function */

  function printMyName() {
    console.log('Max');
  }

  console.log('Start');

  setTimeout(printMyName, 2000);

setTimeout(() => console.log('Hello World'), 5000);

/**Task 12 - Create object */

const person = {
  name:'Maksym',
  surname:'Avilov', 
  favoriteNumber:4
};

const personInfo = `My name is ${person.name} ${person.surname} and my favorite number is ${person.favoriteNumber}`;

console.log(personInfo);

/**Task 13-string-length */

const myFavoriteSport = 'Boxing!';

const stringLength = myFavoriteSport.length;

console.log(stringLength);

/**Task 14-uppercase-string */

const myFavoriteSeason = 'spring';

console.log(myFavoriteSeason instanceof String);

console.log(typeof myFavoriteSeason);

const seasonToUpperCase = myFavoriteSeason.toUpperCase();

console.log(seasonToUpperCase);

// // Creating an instance String
// const myString = new String('Maxsym');
// console.log(myString instanceof String);
// console.log(typeof myString);
// console.log(myString.toUpperCase());

// Task 15-replace-part-string

const greeting = 'Good Morning';

const updatedGreeting = greeting.replace('Morning', 'Evening');

console.log(updatedGreeting);

// Task 16-create-array

const myArray = [4, false, 'Maxim'];

console.log(myArray[0]);

console.log(myArray.length);

// Task 17-replace-element-array

const myArray = ['box', null, 123, true];

console.log(myArray);

myArray[1] = 4;

console.log(myArray);

// Task 18-iterate-over-array

// const myArray = [74, 'abc', null, true, undefined, 730];
// myArray.forEach((element) => console.log(element));

// // Creating an instance String
const myArray = [1, 2, 3, 4, 10];

const res = myArray.forEach(el => console.log(el * 2));

console.log(res);
console.log(myArray);

// Task 19-push-to-array

const myNumbers = [1, 4, 10, 77];

console.log(myNumbers);

myNumbers.push(7, 54);

console.log(myNumbers);

myNumbers.push(847);

console.log(myNumbers);

console.log(myNumbers.length);

// Task 20-date

const currentDate = new Date();

console.log(currentDate);

const currentDateInMs = currentDate.getTime();

console.log(currentDateInMs);

// Task 21-map-to-array

const myArray = [1, 2, 3];
console.log(myArray);

// const newArray =myArray.map(el => el * 3);
// console.log(newArray);

const newArray = myArray.map( function (el) {
  return el * 3;
}); 

console.log(newArray);





