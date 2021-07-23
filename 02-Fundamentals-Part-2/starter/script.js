'use strict';

function log(text) {
  console.log(text);
}

/*

/**
  * ==========================
  * FUNCTIONS
  * ==========================
  *

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :)`);

// Potential future reserved words
const interface = `Audio`; // Uncaught SyntaxError: Unexpected strict mode reserved word
const private = true; // Uncaught SyntaxError: Unexpected strict mode reserved word
const if = false; // Uncaught SyntaxError: Unexpected token 'if'

function nameLogger(name) {
  console.log(`My name is ${name}`);
}

// Calling / Running / Invoking the function
nameLogger(`Simon`);
nameLogger(`Simon`);
nameLogger(`Simon`);

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number ('23'); // Built-in function

/**
  * ==========================
  * DIFFERENT TYPES OF FUNCTIONS
  * ==========================
  *

// Function declaraction
const age1 = calcAge1(1991); // Can call before declaraction!
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

log([age1, age2]);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
log(calcAge3(1991));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
}

log(yearsUntilRetirement(1991, `Simon`));
log(yearsUntilRetirement(1980, `Bob`));

function cutFruitPieces(fruit, pieces) {
  return fruit * pieces;
}

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${cutFruitPieces(apples, 4)} apple pieces and ${cutFruitPieces(oranges, 3)} orange pieces.`;
  return juice;
}

const fruiteJuice = fruitProcessor(2, 3);
log(fruiteJuice);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  
  if(retirement > 0) {
    return retirement;
    log(`${firstName} retires in ${retirement} years`); // Won't log, because return immediately exits the function
  } else {
    log(`${firstName} has already retired!`); // Will log.. because it's before return
    return -1;
  }
}

log(yearsUntilRetirement(1991, `Simon`));
log(yearsUntilRetirement(1970, `Bob`));

const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

/**
  * ==========================
  * ARRAYS
  * ==========================
  *

const friends = [`Michael`, `Steven`, `Peter`];
log(friends);

const y = new Array(1991, 1984, 2008, 2020);
log(y);

log(friends[0]);
log(friends[2]);

log(friends.length);
log(friends[friends.length-1]); // Get last array value

friends[2] = `Jay`;
log(friends);
//friends = [`Bob`, `Alice`]; // Uncaught TypeError: Assignment to constant variable.

const firstName = `Simon`;
const simon = [firstName, `Taylor`, 2037 - 1991, `Developer`, friends];
log(simon);

// Exercise
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);
log([age1, age2, age3]);

const ages = [age1, age2, age3];
log(ages);

const friends = [`Michael`, `Steven`, `Peter`];

/**
  * ==========================
  * ARRAY METHODS
  * ==========================
  *

// Add elements
const newFriendsLength = friends.push(`Jay`); // Add Jay to end of array
log(friends);
log(newFriendsLength); // .push() returns the new array length

friends.unshift(`John`); // Add John to beginning of array
log(friends);

// Remove elements
friends.pop(); // Removes the last element of array
const popped = friends.pop(); // .pop() returns the removed array value
log(friends);
log(popped);

friends.shift(); // Removes the first element of array
log(friends);

log(friends.indexOf(`Steven`));
log(friends.indexOf(`Bob`)); // -1 (Doesn't exist)

friends.push(23);
log(friends.includes(`Steven`));
log(friends.includes(`Bob`));
log(friends.includes(23));

if(friends.includes(`Steven`)) {
  log(`You have a friend called Steven`);
}

/**
  * ==========================
  * OBJECTS
  * ==========================
  *

const simon = {
  firstName: `Simon`,
  lastName: `Taylor`,
  age: 2037 - 1991,
  job: `Developer`,
  friends: [`Michael`, `Peter`, `Steven`]
}

const simon = {
  firstName: `Simon`,
  lastName: `Taylor`,
  age: 2037 - 1991,
  job: `Developer`,
  friends: [`Michael`, `Peter`, `Steven`]
}
log(simon);

log(simon.lastName);
log(simon['lastName']);

const nameKey = `Name`;
log(simon[`first${nameKey}`] + ` ` + simon[`last${nameKey}`]);

const interestedIn = prompt(`What do you want to know about Simon? Choose between firstName, lastName, age, job, and friends`);
log(interestedIn);

log(simon[interestedIn] ? simon[interestedIn] : `That property doesn't exist`);

simon.location = `England`;
simon['company'] = `Tyxan`;

// Challenge
log(`${simon.firstName} has ${simon.friends.length} friends, and his best friend is ${simon.friends[0]}`);

/**
  * ==========================
  * OBJECT METHODS
  * ==========================
  *

const simon = {
  firstName: `Simon`,
  lastName: `Taylor`,
  birthYear: 1991,
  job: `Developer`,
  friends: [`Michael`, `Peter`, `Steven`],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  //   
  // }

  // calcAge: function() {
  //   // log(this); // We have access to 'this', which refers to the parent obj!
  //   return 2037 - this.birthYear;
  // }

  calcAge: function() {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function() {
    this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${(this.hasDriversLicense) ? `a` : `no`} driver's license.`;
    return this.summary;
  }

}

log(simon.calcAge()); // Call the function itself
log(simon.age); // Or just call the property created in the function itself - but can ONLY be used AFTER calcAge() is called

// Challenge
log(simon.getSummary());

/**
  * ==========================
  * FOR LOOPS
  * ==========================
  *

log(`Lifting weights repitition 1`);
log(`Lifting weights repitition 2`);
log(`Lifting weights repitition 3`);
log(`Lifting weights repitition 4`);

// For needs 3 params: counter (var), limiter (number), iterator (expression)
for (let rep = 1; rep <= 4; rep++) {
  log(`Lifting weights repitition ${rep}`);
}

/**
  * ==========================
  * LOOPING ARRAYS
  * ==========================
  *

const simonArray = [
  `Simon`,
  `Taylor`,
  2037 - 1991,
  `Developer`,
  [`Michael`, `Peter`, `Steven`],
  true
];

const types = [];

for(let i = 0; i < simonArray.length; i++) {
  // Reading from simon array
  log([simonArray[i], typeof simonArray[i]]);

  // Filling types array
  //types[i] = typeof simonArray[i];
  types.push(typeof simonArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

log(ages);

/**
  * ==========================
  * LOOP BREAK & CONTINUE
  * ==========================
  *

log(`ONLY STRINGS:`);
for(let i = 0; i < simonArray.length; i++) {
  if(typeof simonArray[i] !==   `string`) continue;
  
  log([simonArray[i], typeof simonArray[i]]);
}

log(`BREAK WITH NUMBER:`);
for(let i = 0; i < simonArray.length; i++) {
  if(typeof simonArray[i] ===  `number`) {
    log([simonArray[i], typeof simonArray[i]]);
    break;
  }
}

/**
  * ==========================
  * LOOPING BACKWARDS & LOOPS IN LOOPS
  * ==========================
  *

const simonArray = [
  `Simon`,
  `Taylor`,
  2037 - 1991,
  `Developer`,
  [`Michael`, `Peter`, `Steven`],
  true
];

// 0, 1 -> 4
// 4, 3 -> 0 <-- We want this

for (let i = (simonArray.length - 1); i >= 0; i--) {
  log([simonArray[i], i]);
}

// Nested loop
// Exercise sets
for (let set = 1; set < 4; set++) {
  log(`----------- Starting set ${set}`);
  // Repetitions
  for (let rep = 1; rep <= 5; rep++) {
    log(`Set ${set}: Lifting weights repetition ${rep}`);
  }
}

/**
  * ==========================
  * WHILE LOOP
  * ==========================
  *

// For loop example
// for (let rep = 1; rep <= 4; rep++) {
//   log(`Lifting weights repitition ${rep}`);
// }

// While loop version
let rep = 1;
while(rep <= 4) {
  log(`Lifting weights repitition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
  log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) log(`You rolled a 6`);
}
*/