// Activity 1: Basic Error Handling with Try-Catch
// Task 1:
function throwError() {
  try {
    throw new Error("This is an entertainment error.");
  } catch (err) {
    console.log("Caught an error:", err.message);
  }
}

throwError();

// Task 2:
function divNumber(a, b) {
  try {
    if (b === 0) {
      throw new Error("Denominator cannot be zero.");
    }
    return a / b;
  } catch (err) {
    console.log("Error: ", err.message);
  }
}

console.log(divNumber(5, 0));

// Activity 2: Finally Block
// Task 3:
function finallyBlockExample() {
  try {
    console.log("In try block");
    throw new Error("An error occurred");
  } catch (error) {
    console.error("Caught an error:", error.message);
  } finally {
    console.log("Finally block executed");
  }
}

finallyBlockExample();

// Activity 3: Custom Error Objects
// Task 4:
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  try {
    throw new CustomError("This is a custom error.");
  } catch (error) {
    if (error instanceof CustomError) {
      console.error("Caught a custom error:", error.message);
    } else {
      console.error("Caught an error:", error.message);
    }
  }
}

throwCustomError();

// Task 5:
function validateInput(input) {
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  try {
    if (typeof input !== "string" || input.trim() === "") {
      throw new ValidationError("Input must be a non-empty string.");
    }
    console.log("Input is valid:", input);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation error:", error.message);
    } else {
      console.error("Error:", error.message);
    }
  }
}

validateInput("");
validateInput("Valid input");

// Activity 4: Error Handling in Promises
// Task 6:
function createRandomPromise() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
}

createRandomPromise()
  .then((message) => console.log(message))
  .catch((error) => console.error("Caught an error:", error));

// Task 7:
async function handlePromiseWithAsync() {
  try {
    const message = await createRandomPromise();
    console.log(message);
  } catch (error) {
    console.error("Caught an error:", error);
  }
}

handlePromiseWithAsync();

// Activity 5: Graceful Error Handling in Fetch
// Task 8:
fetch("https://invalid.url")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
  });

// Task 9:
async function fetchWithErrorHandling() {
  try {
    const response = await fetch("https://invalid.url");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

fetchWithErrorHandling();
