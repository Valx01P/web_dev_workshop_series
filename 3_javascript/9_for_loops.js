// ==========================================
// JAVASCRIPT FOR LOOPS
// ==========================================

// For loops are one of the most common ways to iterate in JavaScript
// They provide a concise way to repeat code a specific number of times

// ---- BASIC FOR LOOP ----

// 1. Standard for loop syntax:
// for (initialization; condition; iteration) { code block }

// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}
// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5

// 2. Breaking down the three parts of a for loop:
// - Initialization: Runs once before the loop starts (let i = 0)
// - Condition: Checked before each iteration; loop continues if true (i < 5)
// - Iteration: Runs after each iteration (i++)

// ---- LOOPING THROUGH ARRAYS ----

// 1. Iterating through array elements
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}
// Output:
// Fruit 1: Apple
// Fruit 2: Banana
// Fruit 3: Orange
// Fruit 4: Mango
// Fruit 5: Pineapple

// 2. Iterating backwards
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`Reverse order - Fruit ${i + 1}: ${fruits[i]}`);
}
// Output:
// Reverse order - Fruit 5: Pineapple
// Reverse order - Fruit 4: Mango
// Reverse order - Fruit 3: Orange
// Reverse order - Fruit 2: Banana
// Reverse order - Fruit 1: Apple

// 3. Skipping elements (every other element)
for (let i = 0; i < fruits.length; i += 2) {
  console.log(`Every other fruit: ${fruits[i]}`);
}
// Output:
// Every other fruit: Apple
// Every other fruit: Orange
// Every other fruit: Pineapple

// ---- NESTED FOR LOOPS ----

// 1. Basic nested loop (multiplication table)
console.log('Multiplication Table (1-3):');
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }
  console.log('---'); // Separator between tables
}
// Output:
// Multiplication Table (1-3):
// 1 × 1 = 1
// 1 × 2 = 2
// 1 × 3 = 3
// ---
// 2 × 1 = 2
// 2 × 2 = 4
// 2 × 3 = 6
// ---
// 3 × 1 = 3
// 3 × 2 = 6
// 3 × 3 = 9
// ---

// 2. Working with multi-dimensional arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log('Matrix values:');
for (let row = 0; row < matrix.length; row++) {
  let rowValues = '';
  for (let col = 0; col < matrix[row].length; col++) {
    rowValues += matrix[row][col] + ' ';
  }
  console.log(rowValues);
}
// Output:
// Matrix values:
// 1 2 3 
// 4 5 6 
// 7 8 9 

// ---- BREAK AND CONTINUE IN FOR LOOPS ----

// 1. Using break to exit the loop early
console.log('Finding the first even number:');
const numbers = [7, 9, 13, 4, 11, 5, 2, 8];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(`Found even number ${numbers[i]} at position ${i}`);
    break; // Stops the loop after finding the first even number
  }
  console.log(`Checked ${numbers[i]}, not even`);
}
// Output:
// Checked 7, not even
// Checked 9, not even
// Checked 13, not even
// Found even number 4 at position 3

// 2. Using continue to skip iterations
console.log('Printing only odd numbers:');
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(`Odd number: ${i}`);
}
// Output:
// Odd number: 1
// Odd number: 3
// Odd number: 5
// Odd number: 7
// Odd number: 9

// ---- LOOP WITH MULTIPLE VARIABLES ----

// 1. Initializing and updating multiple variables
for (let i = 0, j = 10; i <= 10; i++, j--) {
  console.log(`i: ${i}, j: ${j}`);
  
  // Only show first 3 iterations for brevity
  if (i >= 2) break;
}
// Output:
// i: 0, j: 10
// i: 1, j: 9
// i: 2, j: 8

// ---- FOR...OF LOOP (ES6) ----

// Iterates over iterable objects (arrays, strings, maps, sets, etc.)
// Syntax: for (variable of iterable) { code block }

// 1. Iterating over array elements
const colors = ['red', 'green', 'blue', 'yellow'];

console.log('Colors using for...of:');
for (const color of colors) {
  console.log(color);
}
// Output:
// red
// green
// blue
// yellow

// 2. Iterating over string characters
const message = 'Hello';

console.log('Characters using for...of:');
for (const char of message) {
  console.log(char);
}
// Output:
// H
// e
// l
// l
// o

// 3. Iterating with index using entries()
console.log('Colors with index using for...of:');
for (const [index, color] of colors.entries()) {
  console.log(`Color ${index + 1}: ${color}`);
}
// Output:
// Color 1: red
// Color 2: green
// Color 3: blue
// Color 4: yellow

// ---- FOR...IN LOOP ----

// Iterates over all enumerable properties of an object
// Syntax: for (variable in object) { code block }
// Note: Not recommended for arrays if order matters

// 1. Iterating over object properties
const person = {
  name: 'Alice',
  age: 30,
  job: 'Developer',
  city: 'New York'
};

console.log('Person properties using for...in:');
for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}
// Output:
// name: Alice
// age: 30
// job: Developer
// city: New York

// 2. Using for...in with arrays (not recommended, but possible)
const scores = [85, 92, 78, 90];

console.log('Scores using for...in (note: not recommended for arrays):');
for (const index in scores) {
  console.log(`Index ${index}: ${scores[index]}`);
}
// Output:
// Index 0: 85
// Index 1: 92
// Index 2: 78
// Index 3: 90

// ---- PERFORMANCE CONSIDERATIONS ----

// 1. Caching array length for better performance
const largeArray = new Array(1000).fill('item');

console.log('Efficient array iteration:');
// Less efficient: checks length each iteration
// for (let i = 0; i < largeArray.length; i++) { ... }

// More efficient: caches the length
const len = largeArray.length;
for (let i = 0; i < len; i++) {
  // Skip actual iteration to avoid console spam
  if (i < 3) {
    console.log(`Processing item ${i}`);
  } else if (i === 3) {
    console.log('... (and so on)');
    break;
  }
}
// Output:
// Processing item 0
// Processing item 1
// Processing item 2
// ... (and so on)

// ---- COMMON FOR LOOP PATTERNS ----

// 1. Building a string from array elements
const words = ['JavaScript', 'is', 'awesome'];
let sentence = '';

for (let i = 0; i < words.length; i++) {
  sentence += words[i];
  // Add space between words, but not after the last word
  if (i < words.length - 1) {
    sentence += ' ';
  }
}
console.log(`Built sentence: "${sentence}"`);
// Output: Built sentence: "JavaScript is awesome"

// 2. Filtering array elements
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (let i = 0; i < allNumbers.length; i++) {
  if (allNumbers[i] % 2 === 0) {
    evenNumbers.push(allNumbers[i]);
  }
}
console.log('Even numbers:', evenNumbers);
// Output: Even numbers: [2, 4, 6, 8, 10]

// 3. Transforming array elements (map-like operation)
const originalValues = [1, 2, 3, 4, 5];
const doubledValues = [];

for (let i = 0; i < originalValues.length; i++) {
  doubledValues.push(originalValues[i] * 2);
}
console.log('Doubled values:', doubledValues);
// Output: Doubled values: [2, 4, 6, 8, 10]

// 4. Accumulating values (reduce-like operation)
const prices = [29.99, 9.99, 4.95, 14.50];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log(`Total price: $${total.toFixed(2)}`);
// Output: Total price: $59.43

// ---- MODERN ALTERNATIVES TO FOR LOOPS ----

// 1. Array.forEach()
console.log('Using forEach:');
colors.forEach((color, index) => {
  console.log(`Color ${index + 1}: ${color}`);
});

// 2. Array.map() for transforming elements
const doubled = originalValues.map(value => value * 2);
console.log('Doubled with map():', doubled);

// 3. Array.filter() for filtering elements
const evens = allNumbers.filter(num => num % 2 === 0);
console.log('Filtered with filter():', evens);

// 4. Array.reduce() for accumulating values
const sum = prices.reduce((acc, price) => acc + price, 0);
console.log(`Sum with reduce(): $${sum.toFixed(2)}`);

// ---- LABEL STATEMENTS WITH FOR LOOPS ----

// Labels allow you to break or continue specific loops when nested
outerLoop: for (let i = 0; i < 3; i++) {
  console.log(`Outer loop: ${i}`);
  
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log('Breaking out of outer loop!');
      break outerLoop; // Exits both loops
    }
    console.log(`  Inner loop: ${j}`);
  }
}
// Output:
// Outer loop: 0
//   Inner loop: 0
//   Inner loop: 1
//   Inner loop: 2
// Outer loop: 1
//   Inner loop: 0
// Breaking out of outer loop!