// Activity 1: Object Creation and Access
// Task 1:
let book1 = {
    title: "Through his eyes",
    author: "shuk.r",
    year: 2023
}

console.log( book1 );

// Task 2:
// Using upper object
console.log( `Title: ${book1.title} - Author: ${book1.author}` );

// Activity 2: Object Methods 
// Task 3:
let book2 = {
    title: "Atomic Habits",
    author: "James Clear",
    
    getTitleAndAuthor: function () {
        return `${book2.title} by ${book2.author}`
    },
}

console.log( book2.getTitleAndAuthor() );

// Task 4:
let book3 = {
    year: 1960,

    updateYear: function ( newYear ) {
        book3.year = newYear;
    }
}

book3.updateYear(2024);
console.log(book3.year);


// Activity 3: Nested Objects
// Task 5:
let library = {
    name: "Jaun's Library",
    books: [
        {
            title: "Shayad",
            author: "Jaun Elia",
            year: 1992
        },
        {
            title: "Guman",
            author: "Jaun Elia",
            year: 2006
        },
        {
            title: "Lekin",
            author: "Jaun Elia",
            year: 2010
        },
    ]
}

console.log( library );

// Task 6:
// using upper Object
console.log( library.name );

library.books.map( book => console.log( book.title ))


// Activity 4: The 'this' Keyword
// Task 7:
let book4 = {
    title: "To Kill a Mockingbird",
    year: 1960,
    
    getTitleAndYear: function () {
        return `${this.title} published in ${this.year}`
    },
}

console.log( book4.getTitleAndYear() );


// Activity 5: Object iteration
let book5 = {
    title: "The Lessons of History",
    author: "Will Durant",
    year: 1988
}

// Task 8:
for ( let property in book5 ) {
    console.log( `${property}: ${book5[property]}` );
}

// Task 9:
console.log( Object.keys( book5 ));
console.log( Object.values( book5 ));
