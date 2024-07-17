// Activity 1: For Loop
// Task 1:
console.log(`\ntask 1:`);

let forwardCount = 1;

for ( forwardCount; forwardCount <= 10; forwardCount++ ) {
    console.log(`\n${forwardCount}`)
}

console.log(`\n\n`);
console.log(`task 2:`);

// Task 2:
let number = 1;

for ( number; number <= 10; number++ ) {
    table = number * 5;

    console.log(`\n${table}`)
}

console.log(`\n\n`);
console.log(`task 3:`);

// Activity 2: While Loop
// Task 3:
let sum = 0;
let count = 1;

while ( count <= 10 ) {
    sum += count;
    count++
}

console.log(`\nThe sum of numbers from 1 to 10 is: ${sum}`)
console.log(`\n\n`);
console.log(`task 4:`);

// Task 4:
let reverseCount = 10;

while ( reverseCount >= 1 ) {
    console.log(`\n${reverseCount}`)

    reverseCount--
}

console.log(`\n\n`);
console.log(`task 5:`);

// Activity 3: Do... While Loop
// Task 5:
let numb = 1;

do {
    console.log(`\n${numb}`);
    
    numb++

} while ( numb <= 5 );
console.log(`\n\n`);
console.log(`task 6:`);

// Task 6:
let factorial = 5;
let result = 1;
let value = factorial;

do {
    result *= factorial;
    factorial--;

} while ( factorial > 0 );

console.log(`\nFactorial of ${value} is ${result}`);
console.log(`\n\n`);
console.log(`task 7:`);


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
console.log(`\n\n`);
console.log(`task 8:`);


// Activity 5: Loop Control Statements
// Task 8:
let skipNumber = 1;

for ( skipNumber; skipNumber <= 10; skipNumber++ ) {
    if ( skipNumber === 5 ) {
        continue;
    }
    
    console.log(`${skipNumber}`);
}
console.log(`\n\n`);
console.log(`task 9:`);

// Task 9:
let stopNumber = 1;

for ( stopNumber; stopNumber <= 10; stopNumber++ ) {
    if ( stopNumber === 7 ) {
        break;
    }
    
    console.log(`${stopNumber}`);
}



