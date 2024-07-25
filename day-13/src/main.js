// // Activity 1: Creating and Exporting Modules
// // Task 1:
// // src/add.js
// export function add(a, b) {
//   return a + b;
// }

// // Task 2:
// // src/person.js
// export const person = {
//   name: "Haris Mughal",
//   age: 19,
//   greet() {
//     console.log(`Assalamualikum, my name is ${this.name}`);
//   },
// };

// // Activity 2: Named and default Exports
// // Task 3:
// // src/math.js
// export function add(a, b) {
//   return a + b;
// }

// export function subtract(a, b) {
//   return a - b;
// }

// // Task 4:
// // src/multiply.js
// export default function multiply(a, b) {
//   return a * b;
// }

// // Activity 3: Importing Entrie Modules
// // Task 5:
// // src/utils.js
// export const PI = 3.14;
// export function square(x) {
//   return x * x;
// }
// export function cube(x) {
//   return x * x * x;
// }

// src/main.js
import { add as addNumbers } from "./task1.js";
import { person } from "./task2.js";
import { add, subtract } from "./task3.js";
import multiply from "./task4.js";
import * as utils from "./task5.js";
import _ from "lodash";
import axios from "axios";

console.log(addNumbers(2, 3)); // Output: 5

console.log(person.name); // Output: Haris Mughal
person.greet(); // Output: Assalamualikum, my name is Haris Mughal

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2

console.log(multiply(4, 5)); // Output: 20

console.log(utils.PI); // Output: 3.14
console.log(utils.square(3)); // Output: 9
console.log(utils.cube(3)); // Output: 27

// Activity 4: Using Third-Party Modules
// Task 6:
const array = [1, 2, 3, 4];
console.log(_.reverse(array)); // Output: [4, 3, 2, 1]

// Task 7:
axios
  .get("https://api.example.com/data")
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.error("Error fetching data:", err);
  });
