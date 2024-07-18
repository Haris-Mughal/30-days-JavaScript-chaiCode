// Activity 1: Array Creation and Access
// Task 1:
const digits = [ 1, 2, 3, 4, 5 ];

console.log( digits );
// output: [ 1, 2, 3, 4, 5 ]

// Task 2:
const names = [ "Toseef", "Haris", "Huzaifa" ];

console.log( names[0] , names[2] );
// output: Toseef Huzaifa


// Activity 2: Array Methods (Basic)
// Task 3:
const pushToArray = [ 2 , 4, 0 ];
pushToArray.push( 3 );

console.log( pushToArray );
// output: [ 2, 4, 0, 3 ]

// Task 4:
const popFromArray = [ "My", "Age", "is", "19", "years" ];
popFromArray.pop();

console.log( popFromArray );
// output: [ 'My ', 'Age ', 'is ', '19' ]

// Task 5:
const shiftFromArray = [ "Hey", "I'm", "MERN stack", "Developer" ];
shiftFromArray.shift();

console.log( shiftFromArray );
// output: [ "I'm", 'MERN stack', 'Developer' ]

// Task 6:
const unshiftFromArray = [ 1, 2, 3, 4, 5 ];
unshiftFromArray.unshift( 0 );

console.log( unshiftFromArray );
// output: [ 'Muhammad ', 'Haris ', 'Ahsan' ]


// Activity 3: Array Methods (Intermediate)
// Task 7:
const mapNumbers = [ 1, 2, 3, 4, 5, 6 ];
const doubled = mapNumbers.map(( num )=>{
    return num * 2;
})

console.log(`Doubled Numbers: ${doubled}`);
// output: Doubled Numbers: 2,4,6,8,10,12

// Task 8:
const filterNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const even = filterNumbers.filter(( num )=>{
    return num % 2 === 0;
})

console.log(`Even Numbers: ${even}`);
// output: Even Numbers: 2,4,6,8,10

// Task 9:
const reduceNumbers = [ 1, 2, 3, 4, 5 ];
const sum = reduceNumbers.reduce(( preVal, nextVal )=>{
    return preVal + nextVal;
}, 0) //initial value

console.log(`Sum Numbers: ${sum}`);
// output: Sum Numbers: 15


// Activity 4: Array iteration
// Task 10:
const loopOnArray = [ 2, 4, 0, 3 ];

for ( let i = 0; i < loopOnArray.length; i++ ) {
    const element = loopOnArray[i];
    
    console.log( element );
};
// output: 
// 2
// 4
// 0
// 3

// Task 11:
const forEachMethodOnArray = [ 5, 5, 9, 1, 1 ];

forEachMethodOnArray.forEach(element => {
    console.log( element );
});
// output: 
// 5
// 5
// 9
// 1
// 1


// Activity 5: Multi-dimentional Arrays
// Task 12:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(`Matrix: ${matrix}`);
// output:
// Matrix: 1,2,3,4,5,6,7,8,9

// Task 10:
// Using the above Matrix...
const specificElement = matrix[1][0] // row[1] , col[0]

console.log(`${specificElement}`);
// output: 4
