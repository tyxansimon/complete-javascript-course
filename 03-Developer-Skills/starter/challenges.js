/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data2:[12,5,-5,0,4]
GOOD LUCK 😀
*/

// const maximumTemparatures = [17, 21, 23];
const maximumTemparatures = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  // Loop through each temparature
  let temparatures = '';
  for (i = 0; i < arr.length; i++) {
    // Append celcius symbol to the number
    // Add "in x days" (Can use for loop i + 1 for this)
    // Print to the console for each given temparature
    temparatures += `... ${arr[i]}\u00B0C in ${i + 1} days`;
  }
  temparatures += `...`;
  console.log(temparatures);
};
// Fire!
printForecast(maximumTemparatures);
