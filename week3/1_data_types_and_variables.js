// ==========================================
// JAVASCRIPT DATA TYPES AND VARIABLES GUIDE
// ==========================================

// ---- VARIABLE DECLARATION ----
// There are three ways to declare variables in JavaScript:

// 1. var - function scoped (older way, less used now)
var oldSchoolVariable = "I'm function scoped";

// 2. let - block scoped, can be reassigned
let modernVariable = "I can be changed later";
modernVariable = "See? I changed";

// 3. const - block scoped, cannot be reassigned
const constantVariable = 'I cannot be changed';
// constantVariable = "This would cause an error";

// ---- PRIMITIVE DATA TYPES ----

// 1. String - text data
const name = "JavaScript";
const singleQuotes = 'These work too';
const backticks = `Template literals allow ${name} expressions`;

// 2. Number - all numbers in JS are floating point
const integer = 42;
const floatingPoint = 3.14;
const scientific = 2.998e8;  // 2.998 * 10^8
const infinity = Infinity;
const notANumber = NaN;  // Result of invalid operations

// 3. Boolean - true or false
const isCoding = true;
const isHard = false;
const comparison = 10 > 5;  // evaluates to true

// 4. Undefined - automatic value when variable is declared but not assigned
let notYetDefined;
console.log(notYetDefined);  // undefined

// 5. Null - represents intentional absence of any value
const emptyValue = null;

// 6. Symbol - unique and immutable primitive
const uniqueSymbol = Symbol('description');
const anotherSymbol = Symbol('description');  // Different from uniqueSymbol

// 7. BigInt - for integers larger than Number can handle
const hugeNumber = 9007199254740991n;  // Note the 'n' at the end

// ---- REFERENCE DATA TYPES ----

// 1. Object - collection of key-value pairs
const person = {
  firstName: "Grace",
  lastName: "Hopper",
  age: 85,
  isComputerScientist: true
};

// Accessing object properties
console.log(person.firstName);  // Dot notation
console.log(person["lastName"]);  // Bracket notation

// 2. Array - ordered collection of values
const colors = ["red", "green", "blue"];
console.log(colors[0]);  // Accessing by index (zero-based)
colors.push("yellow");  // Arrays are mutable even when declared with const

// 3. Function - callable object
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow function
const add = (a, b) => a + b;

// ---- TYPE CHECKING AND CONVERSION ----

// 1. Checking types with typeof
console.log(typeof "text");  // "string"
console.log(typeof 42);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof {});      // "object"
console.log(typeof []);      // "object" (arrays are objects!)
console.log(typeof null);    // "object" (historical bug in JavaScript)
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol()); // "symbol"
console.log(typeof function(){}); // "function"

// 2. Type conversion
// String to Number
const stringNumber = "42";
const convertedNumber = Number(stringNumber);  // 42
const shorthand = +"42";  // Using + operator for conversion

// Number to String
const num = 42;
const numAsString = String(num);  // "42"
const concatString = num + "";  // String concatenation also converts

// To Boolean
const truthy = Boolean("text");  // true (non-empty strings are truthy)
const falsy = Boolean(0);        // false (0 is falsy)

// ---- VARIABLE SCOPE ----

// Global scope
const globalVar = "I'm available everywhere";

function scopeDemo() {
  // Function scope
  var functionScopedVar = "I'm only available in this function";
  
  if (true) {
    // Block scope
    let blockScopedVar = "I'm only available in this block";
    const alsoBlockScoped = "Me too!";
    var notActuallyBlockScoped = "I'm accessible throughout the function!";
  }
  
  console.log(notActuallyBlockScoped);  // Works!
  // console.log(blockScopedVar);  // This would error
}

// ---- HOISTING ----
// Variables declared with var are "hoisted" to the top of their scope
console.log(hoistedVar);  // undefined, not an error!
var hoistedVar = "I'm hoisted";

// let and const are hoisted but not initialized (Temporal Dead Zone)
// console.log(hoistedLet);  // This would error: Cannot access before initialization
let hoistedLet = "I'm not accessible before declaration";

// ---- NAMING CONVENTIONS ----
// camelCase for variables and functions (most common)
const userName = "dev123";

// PascalCase for classes and constructors
class UserProfile {}

// UPPER_SNAKE_CASE for constants (that are truly constant)
const MAX_USERS = 100;

// ---- BEST PRACTICES ----
// 1. Use const by default, let when needed, avoid var
// 2. Declare variables at the top of their scope
// 3. Use descriptive names
// 4. Be consistent with your conventions