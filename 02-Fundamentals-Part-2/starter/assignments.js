'use strict';

// Lecture: Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}
console.log(describeCountry(`United Kingdom`, 66650000, `London`));
console.log(describeCountry(`United States`, 328200000, `Washington DC`));
console.log(describeCountry(`Poland`, 37970000, `Warsaw`));

// Lecture: Function Declarations vs. Expressions
const worldPopulation = 7900000000;

// Can use these before function is declared :)
console.log(percentageOfWorld1(7900000000));
console.log(percentageOfWorld1(66650000));
console.log(percentageOfWorld1(328200000));

function percentageOfWorld1(population) { // Function declaration
  return (population/worldPopulation) * 100;
}

const percentageOfWorld2 = function (population) { // Function expression
  return (population/worldPopulation) * 100;
}
// Must use these after function declared :/
console.log(percentageOfWorld2(7900000000));
console.log(percentageOfWorld2(66650000));
console.log(percentageOfWorld2(328200000));

// Lecture: Arrow functions
const percentageOfWorld3 = population => (population/worldPopulation) * 100;
console.log(percentageOfWorld3(7900000000));
console.log(percentageOfWorld3(66650000));
console.log(percentageOfWorld3(328200000));

// Lecture: Functions calling other functions
console.log(describePopulation(`United Kingdom`, 66650000));
console.log(describePopulation(`United States`, 328200000));
console.log(describePopulation(`Poland`, 37970000));
function describePopulation(country, population) {
  return `${country} has ${population} people, which is about ${percentageOfWorld1(population)} of the world.`;
}

// Lecture Introduction to Arrays
const populations = [7900000000, 66650000, 328200000, 37970000];
log(populations);

const percentage1 = percentageOfWorld1(populations[0]);
const percentage2 = percentageOfWorld1(populations[1]);
const percentage3 = percentageOfWorld1(populations[2]);
const percentage4 = percentageOfWorld1(populations[3]);
const percentages = [percentage1, percentage2, percentage3, percentage4];
log(percentages);

// Lecture: Basic Array Operations (Methods)
const neighbours = [`Wales`, `Scotland`, `Ireland`];
log(neighbours);
const newNeighbour = neighbours.push(`Utopia`); // Add Utopia
log(neighbours);
neighbours.pop(neighbours); // Remove Utopia
log(neighbours);
if(neighbours.indexOf(`Germany`) === -1) {
  log(`Probabaly not a European country!`)
}
neighbours[1] = `Germany`;
log(neighbours);

// Lecture: Introduction to Objects
const myCountry = {
  country: `United Kingdom`,
  capital: `London`,
  language: `English`,
  population: 66650000,
  neighbours: neighbours
}
log(myCountry);

// Lecture: Object methods
myCountry.description = function() {
  const createDescription = `${this.country} has ${this.population} people, which is about ${percentageOfWorld1(this.population)} of the world.`;
  return createDescription;
}
log(myCountry.description());
myCountry.checkIsIsland = function() {
  this.isIsland = this.neighbours.length === 0 ? true : false;
  return this.isIsland;
}
log(myCountry.checkIsIsland());

// Lecture: Iteration: The for loop
for(let voter = 1; voter <= 50; voter++) {
  log(`Voter number ${voter} is currently voting`);
}

// Lecture: Looping Arrays, Breaking and Continuing
const percentages2 = [];
for(let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
log([percentages, percentages2]);

// Lecture: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  [`Canada`, `Mexico`],
  [`Spain`],
  [`Norway`, `Sweden`, `Russia`]
];
// For list of neighbours
for (let a = 0; a < listOfNeighbours.length; a++) {
  // If property is array, break it down again
  if(typeof listOfNeighbours[a] === `object`) {
    // For each array property, print neighbour
    for (let b = 0; b < listOfNeighbours[a].length; b++) {
      log(listOfNeighbours[a][b]);
    }
  } else {
    // Print neighbour
    log(listOfNeighbours[a]);
  }
}

// Lecture: The while loop
const percentages3 = [];
let i = 0;
while(i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
log([percentages, percentages3]);
