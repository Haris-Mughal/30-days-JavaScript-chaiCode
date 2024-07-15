// Activity 1: If-Else Statements
// Task 1:
let number = 0;

if (number > 0) {
    console.log(`\n${number} is positive.`);
} else if (number < 0) {
    console.log(`\n${number} is negative.`);
} else {
    console.log(`\nGive number is ${number} (zero).`);
}

// Task 2:
var age = 10;

if (age > 18) {
    console.log(`\nDue to Age '${age}'. This person is eligible to vote.`);
} else if (age <= 18) {
    console.log(`\nDue to Age '${age}'. This person is not eligible to vote.`);
} else if (age <= 7) {
    console.log(`\nDue to Age '${age}'. This person is a baby.`);
} else if (age >= 100) {
    console.log(`\nDue to Age '${age}'. This person should dead.`);
} else {
    console.log(`\nAge can't be ${age}(zero).`);
}


// Activity 2: Nested If-Else Statements
// Task 3:
let num1 = 3;
let num2 = 5;
let num3 = 7;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(`\n${num1} is greater of all.`);
    } else {
        console.log(`\n${num3} is greater of all.`);
    }
} else {
    if (num2 > num3) {
        console.log(`\n${num2} is greater of all.`);
    } else {
        console.log(`\n${num3} is greater of all.`);
    }
}


// Activity 3: Switch Case
// Task 4:
let dayToday = 5;

switch (dayToday) {
    case 1:
        console.log('\nToday is Monday.');
        break;
    case 2:
        console.log('\nToday is Tuesday.');
        break;
    case 3:
        console.log('\nToday is Wednesday.');
        break;
    case 4:
        console.log('\nToday is Thursday.');
        break;
    case 5:
        console.log('\nToday is Friday.');
        break;
    case 6:
        console.log('\nToday is Saturday.');
        break;
    case 7:
        console.log('\nToday is Sunday.');
        break;
    default:
        console.log('\nInvalid day.');
        break;
}

// Task 5:
let score = 75;
let grade;

switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 60):
        grade = 'C';
        break;
    case (score >= 50):
        grade = 'D';
        break;
    default:
        grade = 'F';
}

console.log(`\nGrade is ${grade}.`);


// Activity 4: Conditional (Ternary) Operator
// Task 6:
let num = -5;

if (num !== 0) {
    let result = num % 2 == 0 ? (
        `\n${num} is EVEN.`
    ) : (
        `\n${num} is ODD.`
    )

    console.log(result);
} else {
    console.log(`\n${num} is zero.`);
}


// Activity 5: Combining Conditions
// Task 7:
let year = 2024;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`\n${year} is a Leap year.`);
        } else {
            console.log(`\n${year} is a not a Leap year.`);
        }    
    } else {
        console.log(`\n${year} is a Leap year.`);
    }    
} else {
    console.log(`\n${year} is a not a Leap year.`);
}
