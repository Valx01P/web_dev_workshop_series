// ==========================================
// JAVASCRIPT CONSOLE INPUT AND OUTPUT
// ==========================================

// ---- CONSOLE OUTPUT ----

// 1. Basic logging with console.log()
console.log("Hello, world!");  // Prints: Hello, world!

// 2. Logging multiple values (comma-separated)
const name = "JavaScript";
const year = 1995;
console.log("Language:", name, "Created in:", year);  // Prints: Language: JavaScript Created in: 1995

// 3. String interpolation with template literals
console.log(`${name} was created in ${year}`);  // Prints: JavaScript was created in 1995

// 4. Logging objects
const user = {
  id: 1,
  username: "coder123",
  isActive: true
};
console.log(user);  // Prints the entire object: { id: 1, username: "coder123", isActive: true }

// 5. Logging arrays
const colors = ["red", "green", "blue"];
console.log(colors);  // Prints the array: ["red", "green", "blue"]

// 6. Different console methods
console.info("This is information");    // Informational message (usually same as log)
console.warn("This is a warning");      // Warning message (usually yellow)
console.error("This is an error");      // Error message (usually red)
console.debug("This is a debug message"); // Debug message (may be hidden by default)

// 7. Styled console output
console.log("%cStyled Text", "color: blue; font-size: 20px;"); // Blue, larger text
console.log("%cDanger!", "color: red; font-weight: bold;");    // Bold red text

// 8. Tables for structured data
const users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" },
  { id: 3, name: "Charlie", role: "User" }
];
console.table(users);  // Displays data in a table format

// 9. Grouping logs
console.group("User Details");
console.log("Name: Alice");
console.log("Role: Admin");
console.log("Status: Active");
console.groupEnd();

// 10. Time measurement
console.time("Operation");
// Some operation here
for (let i = 0; i < 1000000; i++) {
  // Simulate work
}
console.timeEnd("Operation");  // Prints: Operation: [time in ms]

// 11. Count occurrences
for (let i = 0; i < 3; i++) {
  console.count("Loop iteration");  // Counts how many times this line executes
}
console.countReset("Loop iteration");  // Resets the counter

// 12. Assertion (only logs if the condition is false)
console.assert(1 === 1, "This won't print");
console.assert(1 === 2, "This will print because the assertion failed");

// ---- CONSOLE INPUT ----

// 1. Using window.prompt() (browser-only)
// Returns user input as a string, or null if cancelled
const userInput = prompt("Please enter your name:");
console.log(`Hello, ${userInput || "anonymous"}!`);

// 2. Using window.confirm() (browser-only)
// Returns true (OK) or false (Cancel)
const isConfirmed = confirm("Are you sure you want to continue?");
console.log(`User ${isConfirmed ? "confirmed" : "cancelled"} the action`);

// 3. Reading input in Node.js using process.stdin
// Note: This only works in Node.js, not in browsers
/*
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  console.log(`You typed: ${input}`);
  process.exit();
});
console.log("Type something and press Enter:");
*/

// 4. Using readline module in Node.js
// Note: This only works in Node.js, not in browsers
/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  readline.close();
});
*/

// 5. Using the more modern prompt-sync package in Node.js
// Note: Requires installation with npm install prompt-sync
/*
const prompt = require('prompt-sync')();
const name = prompt('What is your name? ');
console.log(`Hello, ${name}!`);
*/

// ---- DEBUGGING WITH CONSOLE ----

// 1. Tracing execution
function calculateArea(width, height) {
  console.trace("calculateArea() called");  // Shows the call stack
  return width * height;
}
calculateArea(5, 10);

// 2. Viewing object properties in detail
const complexObject = {
  name: "Project",
  details: {
    id: 123,
    created: new Date(),
    owner: {
      id: 1,
      username: "admin"
    }
  },
  tasks: ["Design", "Develop", "Test"]
};
console.dir(complexObject, { depth: null });  // Shows all nested properties

// 3. Console as a debugging breakpoint
function debugMe() {
  let x = 10;
  let y = 20;
  // Add this line when debugging
  // debugger;  // This will pause execution in browser dev tools if they're open
  return x + y;
}
debugMe();

// ---- PRACTICAL EXAMPLES ----

// 1. Simple calculator with prompt
function calculator() {
  const num1 = parseFloat(prompt("Enter first number:"));
  const operator = prompt("Enter operator (+, -, *, /):");
  const num2 = parseFloat(prompt("Enter second number:"));
  
  let result;
  switch(operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num1 / num2; break;
    default: result = "Invalid operator";
  }
  
  console.log(`${num1} ${operator} ${num2} = ${result}`);
}
// Uncomment to run: calculator();

// 2. Logging different data types for clarity
function logExamples() {
  const number = 42;
  const text = "Hello";
  const isActive = true;
  const person = { name: "Alex", age: 30 };
  
  console.log("Number:", number);
  console.log("String:", text);
  console.log("Boolean:", isActive);
  console.log("Object:", person);
}
logExamples();

// 3. Error handling with console
try {
  // Intentionally cause an error
  const result = undefinedVariable + 10;
} catch (error) {
  console.error("An error occurred:", error.message);
  // Log full error for debugging
  console.error(error);
}