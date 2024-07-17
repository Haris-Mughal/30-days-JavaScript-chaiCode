// Activity 1: Function Declaration
// Task 1:
function checkEvenOrOdd( number ) {
    if ( number % 2 === 0 ) {
        console.log(`${number} is Even.`);
    } else {
        console.log(`${number} is Odd.`);
    }
}

checkEvenOrOdd( 4 ); 
// output: '4 is Even.'

// Task 2:
function CalSquare( num ) {
    return num * num;
}

console.log( CalSquare( 6 ) );
// output: 36

// Activity 2: Function Expression
// Task 3:
function maxNumber( num1, num2 ) {
    const max = num1 > num2 ? num1 : num2;

    console.log(`The maximun from ${num1} and ${num2} is '${max}'.`);
}

maxNumber( 3, 7 );
// output: The maximun from 3 and 7 is '7'.

// Task 4:
function concatenateString( str1, str2 ) {
    return str1 + str2;

}

console.log( concatenateString("Haris ", "Mughal") );
// output: Haris Mughal


// Activity 3: Arrow Functions
// Task 5:
const calculateSum = ( numb1, numb2 ) => numb1 + numb2

console.log(calculateSum(4, 6));
// output: 10

// Task 6:
const checkCharInStr = ( str, char ) => {
    str.includes( char )
}

console.log( checkCharInStr( "Haris Mughal", "m" ) );
// output: false


// Activity 4: Function Parameter and Default Values
// Task 7:
function calcProduct(val1, val2 = 2) {
    return val1 * val2;
}

console.log(calcProduct(4, 3));
// output: 12

// Task 8:
function calcProduct( name, age = 19 ) {
    console.log(`Assalamualikum, My name is ${name} nd my age is ${age}.`);
}

calcProduct( "Haris Mughal", 19 )
// output: Assalamualikum, My name is Haris Mughal nd my age is 19.


// Activity 5: Higher-Order Functions
// Task 9:
function runManyTimesFunc ( ftn, times ) {
    for ( let i = 0; i < times; i++ ) {
        
        ftn();        
    }
}

const runFtn = () => console.log('Qabool hai');

runManyTimesFunc( runFtn, 3 );
// output:
// Qabool hai
// Qabool hai
// Qabool hai 
// :))

// Task 10:
function functionApply( func1, func2, val ) {
    return func2( func1( val ) );
}

const sum = ( num ) => num + num;

const mul = ( num ) => num * num;

console.log( functionApply( sum, mul, 2 ) );
// output: 16
