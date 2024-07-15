// Activity 1: 'Arithmetic Operations'
// Task 1:
var addNum1 = 1;
var addNum2 = 1;

var add = addNum1 + addNum2;
console.log('ADDITION: ', add);

// Task 2:
var subNum1 = 10;
var SubNum2 = 6;

var sub = subNum1 - SubNum2;
console.log('SUBTRACT: ', sub);

// Task 3:
var mulNum1 = 5;
var mulNum2 = 0;

var mul = mulNum1 * mulNum2;
console.log('MULTIPLY: ', mul);

// Task 4:
var divNum1 = 6;
var divNum2 = 2;

var div = divNum1 / divNum2;
console.log('DIVIDE: ', div);

// Task 5:
var remNum1 = 10;
var remNum2 = 2;

var rem = remNum1 % remNum2;
console.log('REMAINDER: ', rem);


// Activity 2: Assignment Operators
// Task 6:
var addNum = 5;
addNum += 5;
console.log('ADDED_NUMBER: ', addNum);

// Task 7:
var subNum = 10;
subNum -= 5;
console.log('SUBTRACTED_NUMBER: ', subNum);


// Activity 3: Comparision Operators
// Task 8:
let angleNum1 = 5;
let angleNum2 = 7;

// Using >
if (angleNum1 > angleNum2)
    console.log("Using > : " + angleNum1 + " is greater than " + angleNum2);

// Using <
if (angleNum1 < angleNum2)
    console.log("Using < : " + angleNum1 + " is less than " + angleNum2);

// Task 9:
let angleEqualNum1 = 10;
let angleEqualNum2 = 20;

// Using >=
if (angleEqualNum1 >= angleEqualNum2) {
    console.log("Using >= : " + angleEqualNum1 + " is greater than or equal to " + angleEqualNum2);
} else {
    console.log("Using >= : " + angleEqualNum1 + " is less than " + angleEqualNum2);
}

// Using <=
if (angleEqualNum1 <= angleEqualNum2) {
    console.log("Using <= : " + angleEqualNum1 + " is less than or equal to " + angleEqualNum2);
} else {
    console.log("Using <= : " + angleEqualNum1 + " is greater than " + angleEqualNum2);
}

// Task 10:
let equalityNum1 = 5;
let equalityNum2 = '5';  // equalityNum2 is a string, not a number

// Using ==
if (equalityNum1 == equalityNum2) {
    console.log("Using == : The numbers are equal (" + equalityNum1 + " is equal to '" + equalityNum2 + "').");
} else {
    console.log("Using == : The numbers are not equal (" + equalityNum1 + " is not equal to '" + equalityNum2 + "').");
}

// Using ===
if (equalityNum1 === equalityNum2) {
    console.log("Using === : The numbers are equal (" + equalityNum1 + " is equal to '" + equalityNum2 + "').");
} else {
    console.log("Using === : The numbers are not equal (" + equalityNum1 + " is not equal to '" + equalityNum2 + "').");
}


// Activity 4: Logical Operators
// Task 11:
let andNum1 = 15;
let andNum2 = 30;

// Using &&
if (andNum1 > 10 && andNum2 > 20) {
    console.log("Using && : Both conditions are true.");
} else {
    console.log("Using && : One or both conditions are false.");
}

// Task 12:
let orNum1 = 5;
let orNum2 = 20;

// Using ||
if (orNum1 > 10 || orNum2 > 15) {
    console.log("Using || : Atleast one conditions is true.");
} else {
    console.log("Using || : Both conditions are false.");
}

// Task 13:
let isRaining = true;

// Using !
if (!isRaining) {
    console.log("It is not raining.");
} else {
    console.log("It is raining.");
}

// Activity 5: Ternary Operator
// Task 6:
const number = -5

const result = number >= 0 ? (
    `${number} is positive.`
) : (
    `${number} is negative.`
)

console.log(result);

