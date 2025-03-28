// ==========================================
// JAVASCRIPT WHILE LOOPS
// ==========================================

// While loops execute a block of code as long as a specified condition is true
// They're useful when you don't know how many iterations you'll need in advance

// ---- BASIC WHILE LOOP ----

// 1. Simple while loop that counts from 1 to 5
let count = 1;

while (count <= 5) {
  console.log(`Count: ${count}`);
  count++; // Don't forget to increment the counter!
}
// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5

// 2. Looping through an array
const fruits = ['apple', 'banana', 'orange', 'grape'];
let index = 0;

while (index < fruits.length) {
  console.log(`Fruit ${index + 1}: ${fruits[index]}`);
  index++;
}
// Output:
// Fruit 1: apple
// Fruit 2: banana
// Fruit 3: orange
// Fruit 4: grape

// ---- WHILE WITH COMPLEX CONDITIONS ----

// Multiple conditions in the while statement
let a = 5;
let b = 10;

while (a > 0 && b > 0) {
  console.log(`a: ${a}, b: ${b}`);
  a--;
  b -= 2;
}
// Output:
// a: 5, b: 10
// a: 4, b: 8
// a: 3, b: 6
// a: 2, b: 4
// a: 1, b: 2

// ---- INFINITE LOOPS AND PREVENTION ----

// WARNING: This would create an infinite loop if uncommented!
/*
while (true) {
  console.log("This will run forever!");
  // No exit condition!
}
*/

// How to properly create loops that may run indefinitely
// but have a way to exit:
let userInput = 'y'; // Simulating user input

// In a real application, this would likely be in a function
// with actual user input captured each loop iteration
while (userInput === 'y') {
  console.log("Processing...");
  
  // Simulating getting new user input
  // In a real app, you'd prompt the user each time
  userInput = ['y', 'n', 'n', 'y', 'n'][Math.floor(Math.random() * 5)];
  
  console.log(`Continue? User responded: ${userInput}`);
}
console.log("Loop exited!");

// ---- BREAK STATEMENT IN WHILE LOOPS ----

// 'break' immediately exits the loop
let countdown = 10;

console.log("Countdown starting...");
while (countdown > 0) {
  console.log(countdown);
  
  if (countdown === 5) {
    console.log("Countdown aborted!");
    break; // Exits the loop when countdown reaches 5
  }
  
  countdown--;
}
console.log("Countdown finished");
// Output:
// Countdown starting...
// 10
// 9
// 8
// 7
// 6
// 5
// Countdown aborted!
// Countdown finished

// ---- CONTINUE STATEMENT IN WHILE LOOPS ----

// 'continue' skips the rest of the loop body and starts the next iteration
let i = 0;

while (i < 10) {
  i++;
  
  // Skip even numbers
  if (i % 2 === 0) {
    continue; // Skip the rest of the loop body for even numbers
  }
  
  console.log(`Odd number: ${i}`);
}
// Output:
// Odd number: 1
// Odd number: 3
// Odd number: 5
// Odd number: 7
// Odd number: 9

// ---- DO...WHILE LOOPS ----

// Similar to while loops, but always executes at least once
// because the condition is checked after the loop body

// 1. Basic do...while example
let j = 1;

do {
  console.log(`j is ${j}`);
  j++;
} while (j <= 5);
// Output:
// j is 1
// j is 2
// j is 3
// j is 4
// j is 5

// 2. do...while that executes once even if condition is initially false
let num = 10;

do {
  console.log(`This will execute once even though num > 5. num = ${num}`);
  num++;
} while (num <= 5);
// Output:
// This will execute once even though num > 5. num = 10

// ---- COMMON WHILE LOOP PATTERNS ----

// 1. Processing until a condition is met
let sum = 0;
let currentNumber = 1;

while (sum < 100) {
  sum += currentNumber;
  console.log(`Added ${currentNumber}. Sum is now ${sum}`);
  currentNumber++;
}
console.log(`Final sum: ${sum}`);
// Output will show adding numbers until sum exceeds 100

// 2. Reading until sentinel value (simulated)
const dataStream = [1, 5, 7, 9, 11, -1, 8, 3]; // -1 is our sentinel
let dataIndex = 0;
let streamSum = 0;

while (dataIndex < dataStream.length) {
  const value = dataStream[dataIndex];
  
  if (value === -1) {
    console.log("Sentinel value found. Ending stream processing.");
    break;
  }
  
  streamSum += value;
  console.log(`Read value: ${value}. Running sum: ${streamSum}`);
  dataIndex++;
}
console.log(`Final stream sum: ${streamSum}`);
// Output will show summing numbers until -1 is reached

// 3. Validating input (simulated)
let validInput = false;
let attempts = 0;
const maxAttempts = 3;
let simulatedUserInputs = ['', 'invalid', 'valid']; // Simulated inputs

while (!validInput && attempts < maxAttempts) {
  const input = simulatedUserInputs[attempts]; // Simulating user input
  attempts++;
  
  console.log(`Attempt ${attempts}: User entered "${input}"`);
  
  if (input === 'valid') {
    validInput = true;
    console.log("Valid input received!");
  } else {
    console.log("Invalid input. Please try again.");
  }
}

if (!validInput) {
  console.log("Maximum attempts reached. Process terminated.");
}
// Output will show validating input over multiple attempts

// ---- NESTED WHILE LOOPS ----

// Loops within loops
let row = 1;

while (row <= 3) {
  let col = 1;
  let rowOutput = '';
  
  while (col <= 4) {
    rowOutput += `(${row},${col}) `;
    col++;
  }
  
  console.log(rowOutput);
  row++;
}
// Output:
// (1,1) (1,2) (1,3) (1,4)
// (2,1) (2,2) (2,3) (2,4)
// (3,1) (3,2) (3,3) (3,4)

// ---- WHILE VS. FOR LOOPS ----

// When to use while loops instead of for loops:

// 1. When the number of iterations is not known in advance
// Example: reading data until a specific value is found

// 2. When the loop condition depends on external factors
// Example: user input, asynchronous operations

// For loop equivalent to our first while loop example:
console.log("Using for loop instead of while:");
for (let k = 1; k <= 5; k++) {
  console.log(`Count: ${k}`);
}

// ---- BEST PRACTICES AND COMMON PITFALLS ----

// 1. Always ensure there's a way to exit the loop
// - Update the condition variable within the loop
// - Use break statements when necessary

// 2. Be careful with loops that depend on floating-point calculations
// Floating-point precision issues can cause unexpected behaviors
let floatCounter = 0.1;
let iterations = 0;

// This may not behave as expected due to floating-point precision
while (floatCounter <= 1.0) {
  console.log(`Float counter: ${floatCounter.toFixed(1)}`);
  floatCounter += 0.1; // Due to floating-point precision, this may not work as expected
  iterations++;
  
  // Safety check to prevent infinite loops during the demonstration
  if (iterations > 15) {
    console.log("Safety break triggered!");
    break;
  }
}

// 3. Consider using for...of or forEach for arrays instead of while
const colors = ['red', 'green', 'blue'];

// Instead of:
let colorIndex = 0;
while (colorIndex < colors.length) {
  console.log(`Color: ${colors[colorIndex]}`);
  colorIndex++;
}

// Modern approach:
console.log("Using for...of:");
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// ---- WHILE LOOP PERFORMANCE CONSIDERATIONS ----

// 1. Avoid expensive operations in the loop condition
// Bad practice:
let counter = 0;
const items = [1, 2, 3, 4, 5];

// This calculates items.length on every iteration
while (counter < items.length) {
  console.log(items[counter]);
  counter++;
}

// Better practice:
counter = 0;
const itemsLength = items.length; // Calculate once before the loop

while (counter < itemsLength) {
  console.log(items[counter]);
  counter++;
}

// 2. Consider using local variables inside the loop
// for better performance in some cases