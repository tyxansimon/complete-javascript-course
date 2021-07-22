/*
let js = 'amazing';
console.log(40+8+23-10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Vabiable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'Jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

// Data types

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true); // Boolean
console.log(typeof javascriptIsFun); // Boolean
// console.log(typeof 23); // Number
// console.log(typeof 'Jonas'); // String

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); // String

let year;
console.log(year); // Undefined (variable without a value)
console.log(typeof year); // Undefined (variable without a value)

year = 1991;
console.log(typeof year); // Number

console.log(typeof null);

let age = 30;
age = 31; // Mutate variable to 31

const birthYear = 1991; // Immutable 
// birthYear = 1990; // Invalid (can't mutate)
// const job; // Invalid (can't be empty)

var job = 'Programmer';
job = 'Teacher';

lastName = 'Taylor'; // Don't do this - it will assign the var to the global scope.
console.log(lastName);


// Math operators
const now = 2037;
const ageJonas = now - 1991; // Minus operator
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // Multiply & division & exponensiation operations
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName); // Concatination operator

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 (= 25)
x *= 4; // x = x * 4 (= 100)
x++; // x = x + 1 (= 101)
x--; // x = x - 1 (= 100)
console.log(x);

// Comparison operations
console.log(ageJonas > ageSarah); // >, <, <=, >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// Operator precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y; // Can declare multiple variables with comma
x = y = 25-10-5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;
const now = 2020;

const jonas = 'I\'m ' + firstName + ', a ' + (now - birthYear) + ' year-old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${now - birthYear} year-old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
a new \n\
line');

console.log(`String with
a new
line`);

const age = 17;

if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  console.log(`Sarah can't start driving license for another ${18 - age} year(s) 🛑`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;  
} else {
  century = 21;
}
console.log(century);

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // Prints 1991 as a number, then as a string
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log(`I am ${23} years old`); // JS coerces 23 to a string
console.log(`I am 23 years old`); // So this is exactly the same
console.log(`23` - `10` - 3); // (10) JS uses the minus operator to coerce the string values to Numbers
console.log(`23` + `10` + 3); // (23103) This WON'T work.. because "+" is used to concatinate values together
console.log(`23` / `2`);
console.log(`23` > `18`); // This works too

let n = '1' + 1; // String 11
n = n - 1; // Converts 11 to a number
console.log(n); // (10)

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true (empty object)
console.log(Boolean('')); // false (empty string)

const money = 100;
if (money) {
  console.log(`Don't spend it all!`);
} else {
  console.log(`You should get a job`);
}

let height; // The value of this is undefined, which is a falsy value. Therefore the condition is false.
if (height) {
  console.log('YAY! Height is defined!');
} else {
  console.log('Height is undefined');
}

const age = 18;
if (age === 18) console.log(`You just became an adult! (strict)`);

if (age == 18) console.log(`You just became an adult! (loose)`);

const favouriteNumber = Number(prompt(`What is your favourite number?`)); // Convert promt value into a number
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber === 23) {
  console.log(`Cool! 23 is an amazing number!`);
} else if (favouriteNumber === 7) {
  console.log(`7 is also a cool number!`);
} else if (favouriteNumber === 9) {
  console.log(`9 is also a cool number!`);
} else {
  console.log(`Number is not 23, 7 or 9`);
}

if (favouriteNumber !== 23) console.log('Why not 23?');

const hasDriversLicense = true; // A
const isDrunk = false; // B
const hasGoodVision = true; // C

if(hasDriversLicense && !isDrunk && hasGoodVision) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive..`);
}

const day = `Tuesday`;
let activity;

switch (day) {
  case `Monday`:
  case `Wednesday`:
  case `Friday`:
    console.log(`${day} is Strength day`);
    break;
  case `Tuesday`:
  case `Thursday`:
    console.log(`${day} is Cardio day`);
    break;
  case `Saturday`:
  case `Sunday`:
    console.log(`${day} is rest day`);
    break;
  default:
    console.log(`Not a valid day!`);
    break;
}

if (day ===  `Monday` || day ===  `Wednesday` || day ===  `Friday`) {
  console.log(`${day} is Strength day`);
} else if (day ===  `Tuesday` || day ===  `Thursday`) {
  console.log(`${day} is Cardio day`);
} else if (day ===  `Saturday` || day ===  `Sunday`) {
  console.log(`${day} is rest day`);
} else {
  console.log(`Not a valid day!`);
}

3 + 4
1991
true && false && !false
if(23 > 10) { // Statement (declaraction)
  const str = `23 is bigger`; // `23 is bigger` is an expression
  console.log(str);
}

const age = 23;
// age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`); 

const drink = age >= 18 ? `wine` : `wanter`;
console.log(drink);

let drink2;
if(age >= 18) {
  drink2 = `wine`;
} else {
  drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);
*/