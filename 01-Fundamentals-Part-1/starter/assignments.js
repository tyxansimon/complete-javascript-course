// Lecture: Values and Variables
const country = 'United Kingdom';
const continent = 'Europe';
let population = 665000000;

console.log(`${country}, on the continent of ${continent}, has a population of ${population}.`);

// Lecture: Data Types
const isIsland = true;
//let language;

console.log(typeof isIsland); // Boolean
console.log(typeof population); // Number
console.log(typeof country); // String
//console.log(typeof language); // Undefined

// Lecture: let, const & var
const language = 'English';
// language = 'British English'; // Error - Const is immutable!
console.log(language); // "English"

// Lecture: Basic operators
const finlandPopulation = 6000000;
const averagePopulation = 33000000;
const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
let isMorePopulated;
let isHigherThanAverage;
let halfPopulation = population / 2;
halfPopulation++;
if(population > finlandPopulation) isMorePopulated = true;
if(population > averagePopulation) isHigherThanAverage = true;
console.log(description);

// Lecture: Taking decisions: if/else statements
if(population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${averagePopulation - population} below average`);
}

// Lecture: Type Conversion and Corcion
console.log(`9` + `5`); // Prediction: 95
console.log(`19` - `13` + `17`); // Prediction: 617
console.log(`19` - `13` + 17); // Prediction: 23
console.log(`123` < 57); // Prediction: false
console.log(5 + 6 + `4` + 9 - 4 - 2); // Prediction: 1143

// Lecture: Equality Operators: == vs. ===
// = Number(prompt(`How many neighbour countries does your country have?`));
const numNeighbours = 0;
if(numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if(numNeighbours > 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`)
}

// Lecture: Logical operators
const desiredLanguage = `English`;
const desiredPopulation = 50000000;
if(language == desiredLanguage && population < desiredPopulation && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// Lecture: The switch statement
switch(language) {
  case `Chinese`:
  case `Manadarin`:
    console.log(`MOST number of native speakers`);
    break;
  case `Spanish`:
    console.log(`2nd place in number of native speakers`);
    break;
  case `English`:
    console.log(`3rd place`);
    break;
  case `Hindi`:
    console.log(`Number 4`);
    break;
  case `Arabic`:
    console.log(`5th monst spoken language`);
    break;
  default:
    console.log(`Great language too :D`)
    break;
}