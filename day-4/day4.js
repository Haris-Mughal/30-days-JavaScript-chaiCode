// Activity 1: For Loop
// Task 1:
let forwardCount = 1;

for ( forwardCount; forwardCount <= 10; forwardCount++ ) {
    console.log(`\n${forwardCount}`)
}

// Task 2:
let number = 1;

for ( number; number <= 10; number++ ) {
    table = number * 5;

    console.log(`\n${table}`)
}


// Activity 2: While Loop
// Task 3:
let sum = 0;
let count = 1;

while ( count <= 10 ) {
    sum += count;
    count++
}

console.log(`\nThe sum of numbers from 1 to 10 is: ${sum}`)

// Task 4:
let reverseCount = 10;

while ( reverseCount >= 1 ) {
    console.log(`\n${reverseCount}`)

    reverseCount--
}


// Activity 3: Do... While Loop
// Task 5:
let numb = 1;

do {
    console.log(`\n${numb}`);
    
    numb++

} while ( numb <= 5 );

// Task 6:
let factorial = 5;
let result = 1;
let value = factorial;

do {
    result *= factorial;
    factorial--;

} while ( factorial > 0 );

console.log(`\nFactorial of ${value} is ${result}`);


// Activity 4: Nested Loop 
// Task 7:
let rows = 5;
let num = 1

for ( num; num <= 5; num++ ) {
    let star = '';
    let row = 1;

    for ( row; row <= num; row++ ) {
        star += '* '
    }

    console.log(`\n${star}`);
}


// Activity 5: Loop Control Statements
// Task 8:
let skipNumber = 1;

for ( skipNumber; skipNumber <= 10; skipNumber++ ) {
    if ( skipNumber === 5 ) {
        continue;
    }
    
    console.log(`${skipNumber}`);
}

// Task 8:
let stopNumber = 1;

for ( stopNumber; stopNumber <= 10; stopNumber++ ) {
    if ( stopNumber === 7 ) {
        break;
    }
    
    console.log(`${stopNumber}`);
}



