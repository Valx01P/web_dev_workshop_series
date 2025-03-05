// ==========================================
// JAVASCRIPT FUNCTIONS
// ==========================================

// Functions are reusable blocks of code designed to perform specific tasks
// They are one of the fundamental building blocks in JavaScript

// ---- FUNCTION DECLARATION ----

// 1. Function Declaration (Traditional/Named function)
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // "Hello, Alice!"

// Function declarations are hoisted (can be used before they're defined)
console.log(hoistedFunction()); // "I can be called before definition"

function hoistedFunction() {
  return "I can be called before definition";
}

// 2. Function Expression (Anonymous function assigned to a variable)
const sayHello = function(name) {
  return `Hello, ${name}!`;
};

console.log(sayHello('Bob')); // "Hello, Bob!"

// Function expressions are NOT hoisted
// console.log(notHoisted()); // Error: notHoisted is not a function
const notHoisted = function() {
  return "I cannot be called before definition";
};

// 3. Arrow Functions (ES6)
const greetArrow = (name) => {
  return `Hello, ${name}!`;
};

console.log(greetArrow('Charlie')); // "Hello, Charlie!"

// Shorter syntax for simple functions (implicit return)
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// Single parameter doesn't need parentheses
const square = x => x * x;
console.log(square(4)); // 16

// No parameters require empty parentheses
const sayHi = () => "Hi there!";
console.log(sayHi()); // "Hi there!"

// ---- PARAMETERS AND ARGUMENTS ----

// 1. Basic Parameters
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5)); // 20

// 2. Default Parameters (ES6)
function greetUser(name = 'Guest', greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

console.log(greetUser());                  // "Hello, Guest!"
console.log(greetUser('David'));           // "Hello, David!"
console.log(greetUser('Eve', 'Welcome'));  // "Welcome, Eve!"

// 3. Rest Parameters (ES6) - Collect remaining arguments into an array
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Combining regular and rest parameters
function makeTeam(teamName, captain, ...members) {
  return {
    name: teamName,
    captain: captain,
    members: members,
    totalSize: members.length + 1 // +1 for captain
  };
}

const team = makeTeam('Avengers', 'Iron Man', 'Thor', 'Hulk', 'Black Widow');
console.log(team);
// {
//   name: 'Avengers',
//   captain: 'Iron Man',
//   members: ['Thor', 'Hulk', 'Black Widow'],
//   totalSize: 4
// }

// 4. Arguments Object (older way, not available in arrow functions)
function printArguments() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(`Argument ${i}: ${arguments[i]}`);
  }
}

printArguments('a', 'b', 'c');
// Argument 0: a
// Argument 1: b
// Argument 2: c

// ---- RETURN VALUES ----

// 1. Explicit return
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // "Cannot divide by zero"

// 2. Early return for guard clauses
function getDiscount(user) {
  // Guard clauses for invalid cases
  if (!user) return 0;
  if (!user.membership) return 0;
  
  // Main logic follows
  if (user.membership === 'premium') {
    return 0.2; // 20% discount
  } else if (user.membership === 'standard') {
    return 0.1; // 10% discount
  }
  return 0.05; // 5% default discount
}

console.log(getDiscount({ membership: 'premium' })); // 0.2
console.log(getDiscount(null)); // 0

// 3. Implicit return (no return statement)
function noReturn() {
  const x = 10;
  // No return statement
}

console.log(noReturn()); // undefined

// ---- SCOPE AND CLOSURES ----

// 1. Global Scope vs. Function Scope
let globalVar = "I'm global";

function scopeExample() {
  let localVar = "I'm local";
  console.log(globalVar); // Can access global variables
  console.log(localVar);  // Can access local variables
}

scopeExample();
// console.log(localVar); // Error: localVar is not defined

// 2. Block Scope (let and const)
function blockScopeExample() {
  if (true) {
    var scopedVar = "I'm function scoped (var)";
    let blockVar = "I'm block scoped (let)";
    const alsoBlockVar = "I'm also block scoped (const)";
    
    console.log(blockVar); // Accessible inside the block
  }
  
  console.log(scopedVar); // Accessible throughout the function
  // console.log(blockVar); // Error: blockVar is not defined
}

blockScopeExample();

// 3. Closures - Functions that remember their lexical environment
function createCounter() {
  let count = 0; // Private variable
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Another closure example: Function factory
function makeMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// ---- IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) ----

// Functions that run as soon as they are defined
(function() {
  const privateVar = "I'm private";
  console.log("IIFE executed");
})();

// With parameters
(function(name) {
  console.log(`Hello, ${name}!`);
})('IIFE');

// ---- HIGHER-ORDER FUNCTIONS ----

// Functions that take other functions as arguments or return functions

// 1. Functions as arguments
function executeOperation(x, y, operation) {
  return operation(x, y);
}

const addOp = (a, b) => a + b;
const subtractOp = (a, b) => a - b;

console.log(executeOperation(10, 5, addOp));      // 15
console.log(executeOperation(10, 5, subtractOp)); // 5

// 2. Returning functions (similar to closures)
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHola = createGreeter('Hola');
const sayBonjour = createGreeter('Bonjour');

console.log(sayHola('Alice'));    // "Hola, Alice!"
console.log(sayBonjour('Bob'));   // "Bonjour, Bob!"

// ---- RECURSION ----

// Functions that call themselves

// 1. Basic recursion example - Factorial
function factorial(n) {
  // Base case
  if (n <= 1) return 1;
  
  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)

// 2. More complex recursion - Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // 13

// ---- 'THIS' KEYWORD IN FUNCTIONS ----

// 'this' value depends on how the function is called

// 1. Regular function - 'this' refers to global object (or undefined in strict mode)
function regularFunction() {
  console.log(this);
}

regularFunction(); // global object (e.g., Window in browsers)

// 2. Method - 'this' refers to the object the method belongs to
const user = {
  name: 'Alice',
  greet: function() {
    return `Hello, I'm ${this.name}`;
  }
};

console.log(user.greet()); // "Hello, I'm Alice"

// 3. Arrow function - 'this' is lexically scoped (inherits from parent scope)
const arrowUser = {
  name: 'Bob',
  regularGreet: function() {
    return `Regular: ${this.name}`;
  },
  arrowGreet: () => {
    return `Arrow: ${this.name}`; // 'this' refers to outer scope (likely undefined or global)
  },
  mixedGreet: function() {
    const arrow = () => `Arrow inside method: ${this.name}`;
    return arrow();
  }
};

console.log(arrowUser.regularGreet()); // "Regular: Bob"
console.log(arrowUser.arrowGreet()); // "Arrow: undefined" (in most contexts)
console.log(arrowUser.mixedGreet()); // "Arrow inside method: Bob"

// 4. Binding 'this'
function introduce() {
  return `I'm ${this.name}`;
}

const person1 = { name: 'Charlie' };
const person2 = { name: 'David' };

// Using bind()
const introducePerson1 = introduce.bind(person1);
console.log(introducePerson1()); // "I'm Charlie"

// Using call() - calls the function immediately with given 'this'
console.log(introduce.call(person2)); // "I'm David"

// Using apply() - similar to call() but takes array of arguments
console.log(introduce.apply(person1)); // "I'm Charlie"

// ---- FUNCTION COMPOSITION ----

// Combining multiple functions
function addTwo(x) {
  return x + 2;
}

function multiplyByThree(x) {
  return x * 3;
}

// Manual composition
const result = multiplyByThree(addTwo(5)); // (5 + 2) * 3 = 21
console.log(result);

// Compose utility function
function compose(...functions) {
  return function(x) {
    return functions.reduceRight((value, func) => func(value), x);
  };
}

const addTwoAndMultiplyByThree = compose(multiplyByThree, addTwo);
console.log(addTwoAndMultiplyByThree(5)); // 21

// ---- FUNCTION CURRYING ----

// Transforming a function with multiple args into a sequence of functions
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

function addThreeNumbers(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(addThreeNumbers);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6

// ---- FUNCTION BEST PRACTICES ----

// 1. Descriptive names
function calculateTotalPrice(basePrice, taxRate, discount) {
  const taxAmount = basePrice * taxRate;
  const discountAmount = basePrice * discount;
  return basePrice + taxAmount - discountAmount;
}

// 2. Single responsibility principle
// Bad: function does too many things
function processPurchase(product, user) {
  // Validate user
  // Check inventory
  // Process payment
  // Send confirmation email
  // Update inventory
}

// Better: split into smaller functions
function validateUser(user) { /* ... */ }
function checkInventory(product) { /* ... */ }
function processPayment(user, amount) { /* ... */ }
// etc.

// 3. Pure functions (no side effects, same input = same output)
// Impure function
let counter2 = 0;
function incrementCounter() {
  counter2++;
  return counter2;
}

// Pure function
function add2(a, b) {
  return a + b;
}

// 4. Default parameters over conditionals
// Less elegant
function createUser(name, age, isPremium) {
  if (age === undefined) age = 18;
  if (isPremium === undefined) isPremium = false;
  // ...
}

// More elegant (ES6)
function createUser2(name, age = 18, isPremium = false) {
  // ...
}

// 5. Avoid excessive parameters
// Too many parameters
function updateUser(id, name, email, address, phone, age, gender, subscription) {
  // ...
}

// Better approach
function updateUser2(id, userProperties) {
  // userProperties is an object with fields to update
  // ...
}

updateUser2(123, { 
  name: 'Alice', 
  email: 'alice@example.com',
  subscription: 'premium'
});