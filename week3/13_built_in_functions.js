// ==========================================
// JAVASCRIPT BUILT-IN FUNCTIONS
// ==========================================

// JavaScript provides many built-in functions and methods 
// that help with common programming tasks

// ---- CONSOLE FUNCTIONS ----

// 1. console.log() - Output regular messages to the console
console.log('Basic logging message');

// Multiple arguments
console.log('Name:', 'John', 'Age:', 25);

// With objects
console.log('User object:', { name: 'Alice', role: 'Admin' });

// 2. console.warn() - Output warning messages
console.warn('This is a warning message');

// 3. console.error() - Output error messages
console.error('This is an error message');

// 4. console.table() - Display tabular data
const users = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'User' },
  { id: 3, name: 'Charlie', role: 'User' }
];
console.table(users);

// 5. console.time() and console.timeEnd() - Measure execution time
console.time('Timer');
// Some operations
for (let i = 0; i < 1000000; i++) {
  // Simulating work
}
console.timeEnd('Timer');

// ---- TYPE CONVERSION FUNCTIONS ----

// 1. Number() - Convert to number
console.log('Number("42"):', Number('42'));         // 42
console.log('Number("42px"):', Number('42px'));     // NaN
console.log('Number(true):', Number(true));         // 1
console.log('Number(false):', Number(false));       // 0
console.log('Number(null):', Number(null));         // 0
console.log('Number(undefined):', Number(undefined)); // NaN

// 2. String() - Convert to string
console.log('String(42):', String(42));             // "42"
console.log('String(true):', String(true));         // "true"
console.log('String(null):', String(null));         // "null"
console.log('String([1,2]):', String([1, 2]));      // "1,2"
console.log('String({}):', String({}));             // "[object Object]"

// 3. Boolean() - Convert to boolean
console.log('Boolean(42):', Boolean(42));           // true
console.log('Boolean(0):', Boolean(0));             // false
console.log('Boolean(""):', Boolean(''));           // false
console.log('Boolean("hello"):', Boolean('hello')); // true
console.log('Boolean(null):', Boolean(null));       // false

// 4. parseInt() - Parse string to integer
console.log('parseInt("42"):', parseInt('42'));           // 42
console.log('parseInt("42.5"):', parseInt('42.5'));       // 42 (ignores decimal)
console.log('parseInt("42px"):', parseInt('42px'));       // 42 (ignores non-numeric suffix)
console.log('parseInt("px42"):', parseInt('px42'));       // NaN (starts with non-numeric)

// With radix (base) parameter
console.log('parseInt("1010", 2):', parseInt('1010', 2)); // 10 (binary to decimal)
console.log('parseInt("FF", 16):', parseInt('FF', 16));   // 255 (hex to decimal)

// 5. parseFloat() - Parse string to floating-point number
console.log('parseFloat("42.5"):', parseFloat('42.5'));   // 42.5
console.log('parseFloat("42"):', parseFloat('42'));       // 42
console.log('parseFloat("42.5px"):', parseFloat('42.5px')); // 42.5
console.log('parseFloat("px42.5"):', parseFloat('px42.5')); // NaN

// ---- GLOBAL UTILITY FUNCTIONS ----

// 1. isNaN() - Check if value is NaN
console.log('isNaN(NaN):', isNaN(NaN));             // true
console.log('isNaN("hello"):', isNaN('hello'));     // true (converts to NaN)
console.log('isNaN(42):', isNaN(42));               // false
console.log('isNaN("42"):', isNaN('42'));           // false (converts to 42)

// Number.isNaN() is more strict (no automatic conversion)
console.log('Number.isNaN("hello"):', Number.isNaN('hello')); // false (doesn't convert)

// 2. isFinite() - Check if value is a finite number
console.log('isFinite(42):', isFinite(42));               // true
console.log('isFinite(Infinity):', isFinite(Infinity));   // false
console.log('isFinite(NaN):', isFinite(NaN));             // false
console.log('isFinite("42"):', isFinite('42'));           // true (converts to 42)

// Number.isFinite() is more strict (no automatic conversion)
console.log('Number.isFinite("42"):', Number.isFinite('42')); // false (doesn't convert)

// 3. encodeURIComponent() - Encode URI component
const param = 'name=John Doe&age=30';
console.log('encodeURIComponent():', encodeURIComponent(param));
// "name%3DJohn%20Doe%26age%3D30"

// 4. decodeURIComponent() - Decode URI component
const encoded = 'name%3DJohn%20Doe%26age%3D30';
console.log('decodeURIComponent():', decodeURIComponent(encoded));
// "name=John Doe&age=30"

// 5. encodeURI() / decodeURI() - For full URIs
const url = 'https://example.com/search?q=JavaScript & Web';
console.log('encodeURI():', encodeURI(url));
// "https://example.com/search?q=JavaScript%20&%20Web"

// 6. eval() - Evaluate JavaScript code (use with caution!)
// Security risk: Never use with user-provided input
console.log('eval("2 + 2"):', eval('2 + 2')); // 4

// ---- MATH OBJECT FUNCTIONS ----

// 1. Math.round() - Round to nearest integer
console.log('Math.round(4.3):', Math.round(4.3)); // 4
console.log('Math.round(4.7):', Math.round(4.7)); // 5
console.log('Math.round(4.5):', Math.round(4.5)); // 5

// 2. Math.floor() - Round down to nearest integer
console.log('Math.floor(4.9):', Math.floor(4.9)); // 4

// 3. Math.ceil() - Round up to nearest integer
console.log('Math.ceil(4.1):', Math.ceil(4.1)); // 5

// 4. Math.abs() - Absolute value
console.log('Math.abs(-5):', Math.abs(-5)); // 5

// 5. Math.max() - Find largest value
console.log('Math.max(5, 10, 2):', Math.max(5, 10, 2)); // 10

// With arrays using spread operator
console.log('Math.max(...[5, 10, 2]):', Math.max(...[5, 10, 2])); // 10

// 6. Math.min() - Find smallest value
console.log('Math.min(5, 10, 2):', Math.min(5, 10, 2)); // 2

// 7. Math.pow() - Power function
console.log('Math.pow(2, 3):', Math.pow(2, 3)); // 8

// 8. Math.sqrt() - Square root
console.log('Math.sqrt(16):', Math.sqrt(16)); // 4

// 9. Math.random() - Random number between 0 (inclusive) and 1 (exclusive)
console.log('Math.random():', Math.random());

// Random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('Random number between 1-10:', getRandomInt(1, 10));

// 10. Other Math functions
console.log('Math.sin(0):', Math.sin(0)); // 0
console.log('Math.cos(0):', Math.cos(0)); // 1
console.log('Math.PI:', Math.PI);         // 3.141592653589793

// ---- DATE OBJECT FUNCTIONS ----

// 1. Creating dates
const now = new Date();
console.log('Current date and time:', now);

// Specific date (year, month (0-11), day, hour, minute, second)
const specificDate = new Date(2023, 0, 15, 14, 30, 0); // Jan 15, 2023, 14:30:00
console.log('Specific date:', specificDate);

// From timestamp (milliseconds since Jan 1, 1970)
const fromTimestamp = new Date(1673803800000);
console.log('From timestamp:', fromTimestamp);

// From date string
const fromString = new Date('2023-01-15T14:30:00');
console.log('From string:', fromString);

// 2. Getting date components
const date = new Date();
console.log('getFullYear():', date.getFullYear());   // e.g., 2023
console.log('getMonth():', date.getMonth());         // 0-11 (Jan is 0)
console.log('getDate():', date.getDate());           // 1-31
console.log('getDay():', date.getDay());             // 0-6 (Sun is 0)
console.log('getHours():', date.getHours());         // 0-23
console.log('getMinutes():', date.getMinutes());     // 0-59
console.log('getSeconds():', date.getSeconds());     // 0-59
console.log('getMilliseconds():', date.getMilliseconds()); // 0-999
console.log('getTime():', date.getTime());           // milliseconds since epoch

// 3. Setting date components
const birthday = new Date();
birthday.setFullYear(1990);
birthday.setMonth(4);  // May
birthday.setDate(15);
console.log('Modified date:', birthday);

// 4. Date formatting
console.log('toString():', date.toString());           // Full date and time
console.log('toDateString():', date.toDateString());   // Date only
console.log('toTimeString():', date.toTimeString());   // Time only
console.log('toISOString():', date.toISOString());     // ISO format
console.log('toLocaleString():', date.toLocaleString()); // Locale-specific format

// With options
console.log('toLocaleString() with options:', 
  date.toLocaleString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
);

// ---- ARRAY FUNCTIONS ----

// 1. Array.isArray() - Check if value is an array
console.log('Array.isArray([1, 2, 3]):', Array.isArray([1, 2, 3])); // true
console.log('Array.isArray("hello"):', Array.isArray('hello')); // false

// 2. Array.from() - Create array from array-like objects
console.log('Array.from("hello"):', Array.from('hello')); // ['h', 'e', 'l', 'l', 'o']
console.log('Array.from({length: 3}, (_, i) => i):', 
  Array.from({length: 3}, (_, i) => i)
); // [0, 1, 2]

// 3. Array.of() - Create array from arguments
console.log('Array.of(1, 2, 3):', Array.of(1, 2, 3)); // [1, 2, 3]

// ---- OBJECT FUNCTIONS ----

// 1. Object.keys() - Get array of object's keys
const person = { name: 'John', age: 30, job: 'Developer' };
console.log('Object.keys():', Object.keys(person)); // ['name', 'age', 'job']

// 2. Object.values() - Get array of object's values
console.log('Object.values():', Object.values(person)); // ['John', 30, 'Developer']

// 3. Object.entries() - Get array of [key, value] pairs
console.log('Object.entries():', Object.entries(person)); 
// [['name', 'John'], ['age', 30], ['job', 'Developer']]

// 4. Object.assign() - Copy properties from one object to another
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
console.log('Object.assign():', Object.assign(target, source)); // { a: 1, b: 3, c: 4 }
console.log('Original target after assign:', target); // { a: 1, b: 3, c: 4 } (modified)

// 5. Object.freeze() - Prevent object modification
const frozen = { prop: 42 };
Object.freeze(frozen);
frozen.prop = 100; // Will be ignored
console.log('Frozen object:', frozen); // { prop: 42 }

// 6. Object.seal() - Prevent adding/removing properties
const sealed = { prop: 42 };
Object.seal(sealed);
sealed.prop = 100; // Can modify existing properties
sealed.newProp = 200; // Will be ignored
console.log('Sealed object:', sealed); // { prop: 100 }

// ---- JSON FUNCTIONS ----

// 1. JSON.stringify() - Convert object to JSON string
const user = { name: 'Alice', age: 25, hobbies: ['reading', 'gaming'] };
const jsonString = JSON.stringify(user);
console.log('JSON.stringify():', jsonString);
// '{"name":"Alice","age":25,"hobbies":["reading","gaming"]}'

// With formatting
console.log('JSON.stringify() with formatting:');
console.log(JSON.stringify(user, null, 2));

// 2. JSON.parse() - Convert JSON string to object
const parsedUser = JSON.parse(jsonString);
console.log('JSON.parse():', parsedUser);
// { name: 'Alice', age: 25, hobbies: ['reading', 'gaming'] }

// ---- TIMING FUNCTIONS ----

// 1. setTimeout() - Execute code after delay
function delayedMessage() {
  console.log('This message appears after 2 seconds');
}
// Uncomment to test (commented to avoid delay in output)
// const timeoutId = setTimeout(delayedMessage, 2000); // 2000 milliseconds

// Clear timeout if needed
// clearTimeout(timeoutId);

// 2. setInterval() - Execute code repeatedly with delay
function repeatedMessage() {
  console.log('This message repeats every 2 seconds');
}
// Uncomment to test (commented to avoid continuous output)
// const intervalId = setInterval(repeatedMessage, 2000);

// Clear interval when done
// clearInterval(intervalId);

// ---- GLOBAL OBJECTS ----

// 1. window - The global object in browsers (Node.js uses 'global')
// console.log(window); // Available in browser environment

// 2. document - Represents the DOM in browsers
// console.log(document); // Available in browser environment

// 3. navigator - Browser information
// console.log(navigator.userAgent); // Available in browser environment

// 4. location - Current URL information
// console.log(location.href); // Available in browser environment

// ---- FUNCTION FUNCTIONS ----

// 1. Function constructor - Create a function from a string
const addFunc = new Function('a', 'b', 'return a + b');
console.log('Function constructor:', addFunc(5, 3)); // 8

// 2. Call, Apply, Bind

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const user1 = { name: 'Alice' };
const user2 = { name: 'Bob' };

// call() - Call a function with a given 'this' value and arguments
console.log('call():', greet.call(user1, 'Hello', '!')); // "Hello, Alice!"

// apply() - Similar to call() but arguments are passed as an array
console.log('apply():', greet.apply(user2, ['Hi', '?'])); // "Hi, Bob?"

// bind() - Create a new function with fixed 'this' value
const greetAlice = greet.bind(user1);
console.log('bind():', greetAlice('Hey', '.')); // "Hey, Alice."

// ---- ERROR HANDLING FUNCTIONS ----

// 1. try-catch-finally
try {
  // Code that might throw an error
  // throw new Error('Something went wrong');
  console.log('Try block executed');
} catch (error) {
  // Handle the error
  console.error('Caught an error:', error.message);
} finally {
  // Always executes, regardless of error
  console.log('Finally block executed');
}

// 2. Creating custom errors
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

try {
  throw new CustomError('A custom error occurred');
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

// ---- TYPE CHECKING FUNCTIONS ----

// 1. typeof - Get type as string
console.log('typeof 42:', typeof 42);               // "number"
console.log('typeof "hello":', typeof 'hello');     // "string"
console.log('typeof true:', typeof true);           // "boolean"
console.log('typeof undefined:', typeof undefined); // "undefined"
console.log('typeof null:', typeof null);           // "object" (historical bug)
console.log('typeof {}:', typeof {});               // "object"
console.log('typeof []:', typeof []);               // "object"
console.log('typeof function(){}:', typeof function(){}); // "function"

// 2. instanceof - Check if object is instance of a class
console.log('[] instanceof Array:', [] instanceof Array);              // true
console.log('"hello" instanceof String:', 'hello' instanceof String);  // false
console.log('new String() instanceof String:', new String() instanceof String); // true

// ---- PROMISE FUNCTIONS ----

// 1. Promise.resolve() - Create a resolved promise
Promise.resolve('Success')
  .then(value => console.log('Promise.resolve():', value));

// 2. Promise.reject() - Create a rejected promise
Promise.reject(new Error('Failed'))
  .catch(error => console.log('Promise.reject():', error.message));

// 3. Promise.all() - Wait for all promises to resolve
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
])
  .then(values => console.log('Promise.all():', values));

// 4. Promise.race() - Resolves/rejects when first promise resolves/rejects
Promise.race([
  new Promise(resolve => setTimeout(() => resolve('First'), 200)),
  new Promise(resolve => setTimeout(() => resolve('Second'), 100))
])
  .then(value => console.log('Promise.race():', value)); // "Second"

// 5. Promise.allSettled() - Wait for all promises to settle
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error')
])
  .then(results => console.log('Promise.allSettled():', 
    results.map(r => r.status))); // ["fulfilled", "rejected"]