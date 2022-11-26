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

// Task 17-replace-key-array

const myArray = ['box', null, 123, true];

console.log(myArray);

myArray[1] = 4;

console.log(myArray);

// Task 18-iterate-over-array

// const myArray = [74, 'abc', null, true, undefined, 730];
// myArray.forEach((key) => console.log(key));

// // Creating an instance forEach array
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

// Task 22-comparison-variables

let myVariable1 = 10;
let myVariable2 = '5';

console.log(parseInt(myVariable1) <= parseInt(myVariable2));

myVariable1 = '20';
myVariable2 = 100;

console.log(parseInt(myVariable1) <= parseInt(myVariable2));

// Task 23-division-remainder

const myNumber1 = 10 // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3

console.log(myNumber1 % myNumber2);

/**
 * Приоритетность оператора % - 13 (выше чем у операторов + и -)
 * Ассоциативность оператора % - left-to-right
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 */

console.log(((100 % 23) % 5) % 3);

// Task 24-or-and-operators

console.log(3 || (true && null) || false);

console.log(true && null && 10);

console.log(3 || null || false);

// Task 25-alternative-binary-operators

let a = 10;

// a = a + 1
a += 1;
console.log(a); // 11

// a = a * 2
a *= 2;
console.log(a); // 22

// a = a - 5
a -= 5;
console.log(a); // 17

// a = a / 2
a /= 2;
console.log(a); 

// Task 26-expression-or-statement

/** Определите тип каждой конструкции JavaScript:
*  - выражение (expression)
*  - инструкция (statement)
*  - выражение-инструкция (expression statement)
*/

// expression statement
15;

// statement
const myObject = { // Object literal is expression
 x: 10,
 y: true,
};

// expression statement
myObject.z = 'abc'; // <-- expression

// expression statement
delete myObject.x;

// statement
let newVariable;

// expression statement
newVariable = 30 + 5; // <-- expression

// expression statement
console.log(newVariable);
/**             ^
*          expression
*/

// statement
if (newVariable > 10) {
 /**       ^
  *    expression
  */

 // expression statement
 console.log(`${newVariable} more 10`); // <-- newVariable is expression
 /**         _________________________
  *                      ^
  *                 expression
  */
}

// Task 27-what-will-be-logged

function fn() {
  console.log('Hello from the function fn');

  return function (a) {
    console.log(a);
  };
}

fn()(true);

// Task 28-const

const arr = [1, 2]; // <-- Объявление переменной используя const

arr.push(3);

console.log(arr);
// [1, 2, 3]

arr.push(4);

console.log(arr);
// [1, 2, 3, 4]

// let arr = [1, 2]; 

// arr.push(3);

// console.log(arr);

// arr = [1, 2, 3, 4];

// console.log(arr);

// 29-let

let myFavoriteAnimal = 'Monkey';

console.log(myFavoriteAnimal);
// 'Monkey

myFavoriteAnimal = 'Dog';

console.log(myFavoriteAnimal);
// 'Dog'

// 30-strict-mode

'use strict'

function myFunction() {
  const a = 2;
  return a;
}

myFunction();

// 31-callback-function

setTimeout(function () {
  console.log('Hello from the function myFn');
}, 2000);

// 32-intervals-timeout 

let i = 1;

const messageIntervalId = setInterval(() => {
  console.log('Message number ' + i);
  // i = i + 1

  i += 1;
}, 2000);

setTimeout(() => clearInterval(messageIntervalId), 11000);

// Task 33-add-start-of-the-array

const myArray = [true, null];

myArray.unshift('Hello');

console.log(myArray.unshift(100));

console.log(myArray);

// 34-add-at-index-array

const myArray = [1, 2];

myArray[10] = 'abc';

console.log(myArray);

console.log(myArray.length);

// Task 35-array-of-objects

const cars = [
  {
    carBrand: 'BMW',
    price: 12000,
    isAvailableForSale: true, 
  },
  {
    carBrand: 'Honda',
    price: 10000,
    isAvailableForSale: false,
  },
  {
    carBrand: 'Toyota',
    price: 8000,
    isAvailableForSale: true,
  },
];

const newCar = {
  carBrand: 'Tesla',
  price: 20000,
  isAvailableForSale: false,  
};

cars.push(newCar);

console.log(cars);

console.log(cars[1].carBrand);

// Task 36-object-iteration

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
};

// const result = Object.keys(myObject);
// console.log(result);

const objectKeys = Object.keys(myObject);
objectKeys.forEach((key) => {
  if (key === 'key1' || key === 'key3') {
    console.log(myObject[key]);
  }
});

// Task 37-Random Number Generator

const MIN = 1000;
const MAX = 9999;
// const MIN = 1;
// const MAX = 10;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];
// const myNumbers = [1, 3, 5, 7, 9, 10];

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const addRandomNumberToArray = (arr, min, max) => {
  let newRandomNumber; 
  const updatedArr = [ ...arr];

  do {
    newRandomNumber = randomNumber(min, max);
    // console.log(newRandomNumber);
  } while (updatedArr.includes(newRandomNumber));

  updatedArr.push(newRandomNumber);

  return updatedArr;
};

const updatedArray = addRandomNumberToArray(myNumbers, MIN, MAX);

console.log('UPDATED ARRAY', updatedArray);
console.log('ORIGINAL ARRAY', myNumbers);

// console.log(myNumbers.includes(2357));

// Task 38-for-in-loop

const myObject = {
  name: 'Mike',
  age: 30,
  city: 'London',
};

Object.prototype.country = 'England';

for (let key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(myObject[key]);
  }
}

// 39-ternary-operator

// 0 - without else
function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return 'The array is not empty';
  }

  return 'The array is empty';
}

console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));

// 1 - ternary operator
function isArrayEmpty(inputArray) {
  return inputArray.length > 0 ? 'The array is not empty' : 'The array is empty';
}

console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));

// 2 - explicitly returning the result
const isArrayEmpty = (inputArray) => {
  return inputArray.length > 0 ? 'The array is not empty' : 'The array is empty';
}

console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));

// 3 - implicit return of the result
const isArrayEmpty = (inputArray) =>
  inputArray.length > 0 ? 'The array is not empty' : 'The array is empty';

console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));

// 40-foreach-with-index

const myCities = ['London', 'New York', 'Singapore'];

const cityInfo = (index, city) => 
`${city} is at the index ${index} in the myCities array`;

myCities.forEach((city, index) => console.log(cityInfo(index, city)));

// 41-loop-for

// 1.Iterate 0 to 10 using for loop.

for(let i = 0; i <= 10; i++){
  console.log(i);
}

// 2.Iterate 10 to 0 using for loop.

for(let i = 10; i >= 0; i--){
  console.log(i);
}

// 3.Iterate 0 to n using for loop.

let n = 10;
for (let i=0; i<= n; i++){
  console.log(i);
}

// 42-map-json-to-object

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
];

// OPTION 1
// const postsJS = postsJSON.map((post) => JSON.parse(post));

// OPTION 2
const postsJS = postsJSON.map(JSON.parse);

console.log(postsJS);

console.log(postsJS[1].postId);

console.log(postsJS[postsJS.length - 1].commentsQuantity);

// 43-find-single-post

function findPostById(postId, posts) {
  return posts.find((post) => post.postId === postId)
};

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
];

console.log(findPostById(6134, posts)); // { postId: 6134, commentsQuantity: 2 }

console.log(findPostById(4511, posts)); // undefined

// 44-is-array-sorted-or-not

const arraySortInfo = (inputArray) => {
  if (inputArray.some((element) => typeof element !== 'number')) {
    return 'Some elements are not numbers';

  }
  if (
    inputArray.every((element, index) =>
      index > 0 ? element >= inputArray[index - 1] : true
    )
  ) {
    return 'Sort array in ascending order';
  }

  if (
    inputArray.every((element, index) =>
      index > 0 ? element <= inputArray[index - 1] : true
    )
  ) {
    return 'Sort array in descending order';
  }

  return 'Array is not sorted';
};

const a = [5, 'abc', 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

console.log(arraySortInfo(a)); // Some elements are not numbers
console.log(arraySortInfo(b)); // Sort array in ascending order
console.log(arraySortInfo(c)); // Sort array in descending order
console.log(arraySortInfo(d)); // Array is not sorted

// 45-compare-two-arrays

const areArraysEqual = (firstArray, secondArray) => {
  if (
    firstArray.length === secondArray.length &&
    firstArray.every((element, index) => element === secondArray[index]) 
  ) {
    return true; 
  }

  return false;
};

const a = [1, 2, 3];
const b = [1, 2, 3]; 

console.log(a === b); // false 

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log(areArraysEqual(a, b)); // true
console.log(areArraysEqual(a, c)); // false
console.log(areArraysEqual(a, d)); // false

// 46-element-is-in-array

function isElementInArray(inputArray, searchElement) {
  return inputArray.includes(searchElement);
}

const transports = ['Bus', 'Car', 'Bicycle', 'Airplane'];

console.log(isElementInArray(transports, 'Bus')); // true
console.log(isElementInArray(transports, 'Phone')); // false
console.log(isElementInArray(transports, 'Airplane')); // true

// 47-includes-object-or-array

function isElementInArray(searchElement, inputArray) {
  if (typeof searchElement !== 'object'){
    return inputArray.includes(searchElement);
  }
  
  const converterArray = inputArray.map((element) => JSON.stringify(element));
  return converterArray.includes(JSON.stringify(searchElement));
  // return inputArray
  //   .map((element) => JSON.stringify(element))
  //   .includes(JSON.stringify(searchElement))    
}

const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser'],
]

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 },
]

const primitiveTypesArray = [25, 'x', true, undefined, null];

console.log(isElementInArray(['css', 'flexbox'], tags)); // true

console.log(isElementInArray(['flexbox', 'css'], tags)); // false

console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)); // true

console.log(isElementInArray({ title: 'Banana' }, fruits)); // false

console.log(isElementInArray(25, primitiveTypesArray)); // true

// 48-push-to-array-if-not-exists

const pushIfUnique = (inputArray, newElement) => {
  if (inputArray.includes(newElement)) {
    return console.log(`${newElement} already in the array`);
  }

  inputArray.push(newElement);
}

const myNumbers = [123, 50, 27];

pushIfUnique(myNumbers, 50); // "50 already in the array"
console.log(myNumbers) // [123, 50, 27]

pushIfUnique(myNumbers, 80);
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80); // "80 already in the array"
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77);
console.log(myNumbers); // [123, 50, 27, 80, 77]

// 49-reduce-array-of-objects

function popularPostsIds(posts, minimalComentsQty) {
  return posts.reduce(
    (postsIds, post) => 
      post.comments >= minimalComentsQty
        ? postsIds.concat([post.postId])
        : postsIds, 
    []
  );
}

const inputPosts = [
  {
    title: 'Как быстро выучить JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Где используется JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Какая разница между React и Angular?',
    postId: 8135,
    comments: 12,
  },
]

console.log(popularPostsIds(inputPosts, 10)); // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)); // [3421]

console.log(popularPostsIds(inputPosts, 50)); // []

// 50-reduce-to-object

function quantitiesByCategories (products) {
  return products.reduce((qtysByCategories, product) => {
    const { category, quantity } = product;

    qtysByCategories[category] = (qtysByCategories[category] || 0) + quantity;

    return qtysByCategories;
  }, {}); 
}

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]

console.log(quantitiesByCategories(inputProducts));
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */

// 51-sort-array-of-objects

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
];


const sortProductsByPrice = (products) =>
  [...products].sort((a, b) => a.price - b.price)

const sortedProducts = sortProductsByPrice(inputProducts);

console.log(sortedProducts); // Массив отсортированных товаров

console.log(inputProducts); // Оригинальный массив не должен измениться

// const myArray = [50, 23, 10, 29, 108];
// console.log(myArray.sort((a, b) => b - a));

// 52-template-literals

const templateLiteral = (num) => {
  return `Число ${num}.
Это число меньше ${num < 10 ? 'меньше' : 'больше или равно'} 10.
Квадратный корень этого числа - ${Math.sqrt(num)}.`
};

// ТЕСТ 1
const myNumber = 9
console.log(templateLiteral(myNumber));
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25
console.log(templateLiteral(myAnotherNumber));
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/