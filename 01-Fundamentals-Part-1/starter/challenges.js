
/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
- Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
- Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀 */

// Test data 1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

// Test data 2
// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;

// Calculate each person's BMI
let markBMI = markWeight / (markHeight ** 2),
    johnBMI = johnWeight / (johnHeight ** 2);

// Check if Mark's BMI is higher than John's
let markHigherBMI = markBMI > johnBMI;

// Print results
console.log(markBMI, johnBMI, markHigherBMI);

/*
  Coding Challenge #2
  Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
  Your tasks:
    1. Print a nice output to the console, saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    2. Use a template literal to include the BMI values in the outputs. Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
  Hint: Use an if/else statement 😉 GOOD LUCK 😀 */

// Print results
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀 */

// Test data
const dolphinsScoreAvg = (96 + 108 + 89) / 3;
const koalasScoreAvg = (88 + 91 + 110) / 3;
// Bonus 1
// const dolphinsScoreAvg = (97 + 112 + 101) / 3;
// const koalasScoreAvg = (109 + 95 + 123) / 3;
// Bonus 2
// const dolphinsScoreAvg = (97 + 112 + 101) / 3;
// const koalasScoreAvg = (109 + 95 + 106) / 3;
console.log(dolphinsScoreAvg, koalasScoreAvg);

let winner, points;
// Determine winner by average score, which must be equal to, or above 100
if(dolphinsScoreAvg > koalasScoreAvg && dolphinsScoreAvg >= 100) {
  winner = `Dolphins`;
  points = dolphinsScoreAvg;
} else if(dolphinsScoreAvg < koalasScoreAvg && koalasScoreAvg >= 100) {
  winner = `Koalas`;
  points = koalasScoreAvg;
} else if(dolphinsScoreAvg === koalasScoreAvg && dolphinsScoreAvg >= 100) {
  winner = `Both`;
  points = dolphinsScoreAvg;
} else {
  winner = `Neither`;
}
// Determine the winner
if(winner !== `Neither`) {
  console.log(`${winner} win, with ${points} points!`);
} else {
  console.log(`Neither teams win, as score must be at least 100`);
}

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
Your tasks:
1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430 Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉
GOOD LUCK 😀
*/

const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);