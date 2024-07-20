// Activity 1: Template Literals
// Task 1:
let name = "Haris Mughal";
let age = 19;

let greet = `Assalamualikum! My Name is ${name} & My Age is ${age}.` 

console.log( greet );
// output: Assalamualikum! My Name is Haris Mughal & My Age is 19.

// Task 2:
let multiLinesString = `I am a boy.
I am good boy.
I am muslim boy. :))`;

console.log( multiLinesString );


// Activity 2: Destructuring
// Task 3:
let numbers = [ 2, 5, 9, 1, 1 ];
let [ n1, n2 ] = numbers;

console.log( n1, n2 );
// output: 2  5

// Task 4:
let object = {
    title: "Shayad",
    author: "Jaun Elia",
    citizen: "Pakistan",
    month: "January",
    year: 2007,
};

let { title, author } = object;

console.log( `${title} - ${author}` );
// output: Shayad - Jaun Elia


// Activity 3: Spread and Rest Operators
// Task 5:
let SpreadOprtrArray = [ "Abu-bakkar", "Umar", "Usman" ];
let spreadedArray = [...SpreadOprtrArray, "Ali"];

console.log(spreadedArray);
// outpupt: [ 'Abu-bakkar', 'Umar', 'Usman', 'Ali' ]

// Task 6:
function sum(...numbers) {
    return numbers.reduce((preVal, nxtVal) => {
        return preVal + nxtVal;
    }, 0)
};

console.log(sum(1, 2, 3, 4));
// output: 10


// Activity 4: Default Parameters
// Task 7:
function multiply(num1, num2 = 1) {
    return num1 * num2;
};

console.log(multiply(5, 2)); // output: 10
console.log(multiply(7)); // output: 7


// Activity 5: Enhanced Object Literals
// Task 8:
let celebrate = "wish";

let birthday = {
    month: "March",
    date: 24,
    year: 2004,

    [celebrate](){
        console.log(`My Birthday is on ${this.date} ${this.month}, ${this.year}.`);
    }
};

birthday.wish();
// output: My Birthday is on 24 March, 2004.

// Task 9:
let day = "Saturday";

let workout = {
    [day]: "Today is Legs day 😂."
};

console.log(workout);
// output: { Saturday: 'Today is Legs day 😂.' }
