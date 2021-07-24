// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/**
 * ==========================
 * DEBUGGING
 * ==========================
 */
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => {
  //debugger; // Stops console at this point to inspect operation and further operations
  return [2037 - birthYear, 'another var', 'one more var'];
};

console.log(calcAge(1991)); // Regular log
console.warn(calcAge(1991)); // Log as warning (orange)
console.error(calcAge(1991)); // Log as error (red)
console.table(calcAge(1991)); // Log as table
