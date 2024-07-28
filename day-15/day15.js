// Activity 1: Understanding Closures
// Task 1
function outerFunction() {
  let outerVar = "I'm outside!";

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}

outerFunction();
inner(); // Output: "I'm outside!"

// Task 2
function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getValue()); // Output: 1

// Activity 2: Practical Closures
// Task 3
function createUniqueIdGenerator() {
  let lastId = 0;

  return function () {
    lastId++;
    return lastId;
  };
}

const generateId = createUniqueIdGenerator();
console.log(generateId()); // Output: 1

// Task 4
function createGreeting(name) {
  return function () {
    console.log(`Assalamualikum, ${name}!`);
  };
}

const greetHaris = createGreeting("Haris Mughal");
greetHaris(); // Output: "Assalamualikum, Haris Mughal!"

// Activity 3: Closures in Loops
// Task 5
function createFunctionsArray() {
  let functions = [];

  for (let i = 0; i < 5; i++) {
    functions.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i)
    );
  }

  return functions;
}

const functionsArray = createFunctionsArray();
functionsArray[2](); // Output: 2

// Activity 4: Module Pattern
// Task 6
const itemManager = (function () {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      items = items.filter((i) => i !== item);
    },
    listItems: function () {
      return items;
    },
  };
})();

itemManager.addItem("Apple");
itemManager.addItem("Banana");
console.log(itemManager.listItems()); // Output: ["Apple", "Banana"]
itemManager.removeItem("Apple");
console.log(itemManager.listItems()); // Output: ["Banana"]

// Activity 5: Memoization
// Task 7
function memoize(fn) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    } else {
      let result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function slowFunction(num) {
  for (let i = 0; i < 1e6; i++) {}

  return num * 2;
}

const memoizedFunction = memoize(slowFunction);
console.log(memoizedFunction(5)); // Output: 10 (slow calculation)
console.log(memoizedFunction(5)); // Output: 10 (fast retrieval from cache)

// Task 8
function memoizeFactorial() {
  let cache = {};

  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    if (cache[n]) {
      return cache[n];
    } else {
      let result = n * factorial(n - 1);
      cache[n] = result;
      return result;
    }
  }

  return factorial;
}

const memoizedFactorial = memoizeFactorial();
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(6)); // Output: 720 (uses cached result for factorial(5))
