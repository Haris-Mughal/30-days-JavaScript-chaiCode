// Activity 1: Selecting and manipulating Elements
// Task 1: Change text
document.getElementById( "id" ).textContent = "yourText";

// Task 2: Change bg-color
document.querySelector( ".className" ).style.backgroundColor = 'yourColor';


// Activity 2: Creting and Appending Elements
// Task 3: Create new div and append in body
const newDiv = document.createElement( "div" );
newDiv.textContent = "I'm a new div";

document.body.appendChild( newDiv );

// Task 4: Create new li and and it in existing ul
const newListedItem = document.createElement( "li" );
newListedItem.textContent = "I'm a new Listed item";

document.querySelector( "ul" ).appendChild( newListedItem );


// Activity 3: Removing Elements
// Task 5: Remove child itself
const elementToRemove = document.getElementById( "elementId" );

elementToRemove.parentNode.removeChild( elementToRemove );

// Task 6: Remove child by parent
const parentElement = document.getElementById( "parentId" );

parentElement.removeChild( parentElement.lastElementChild );


// Activity 4: Modifying Attributes and Classes
// Task 7: change src of img
document.querySelector( "img" ).src = "./harisPic.jpg";

// Task 8: Add/ Remove classes
// <div id="textDiv" className="text-green bg-blue">Haris Mughal</div>
document.getElementById( "textDiv" ).classList.add( "underline" );
document.getElementById( "textDiv" ).classList.remove( "text-green" );


// Activity 5: Event Handling
// Task 9: OnClick effect
document.querySelector( "button" ).addEventListener( "click", function() {
    document.getElementById( "paraId" ).innerText = "I'm a new text";
} );

// Task 10: OnMouseOver effect
document.querySelector( "button" ).addEventListener( "mouseover", function() {
    this.style.borderColor = "newBorderColor";
} );
