// ==========================================
// JAVASCRIPT LOGICAL OPERATORS
// ==========================================

// Logical operators perform logical operations and return a result
// They are commonly used in conditional statements to make decisions

// ---- BASIC LOGICAL OPERATORS ----

// 1. Logical AND (&&)
// Returns true only if both operands are true
console.log("true && true:", true && true);   // true
console.log("true && false:", true && false); // false
console.log("false && true:", false && true); // false
console.log("false && false:", false && false); // false

// With variables
let isLoggedIn = true;
let hasPermission = true;
console.log("Can access dashboard:", isLoggedIn && hasPermission); // true

// 2. Logical OR (||)
// Returns true if at least one operand is true
console.log("true || true:", true || true);   // true
console.log("true || false:", true || false); // true
console.log("false || true:", false || true); // true
console.log("false || false:", false || false); // false

// With variables
let hasCredentials = false;
let isAdminOverride = true;
console.log("Can access system:", hasCredentials || isAdminOverride); // true

// 3. Logical NOT (!)
// Returns the opposite boolean value
console.log("!true:", !true);   // false
console.log("!false:", !false); // true

// With variables
let isBlocked = false;
console.log("Can send message:", !isBlocked); // true

// Double negation (!!) converts a value to its boolean equivalent
console.log("!!0:", !!0);         // false
console.log("!!1:", !!1);         // true
console.log("!!'':", !!'');       // false
console.log("!!'text':", !!'text'); // true

// ---- SHORT-CIRCUIT EVALUATION ----

// 1. Short-circuit with AND (&&)
// If the first operand is false, the second one isn't evaluated
let x = 10;
false && (x = 20); // x won't change
console.log("x after false &&:", x); // 10

true && (x = 30);  // x will change
console.log("x after true &&:", x);  // 30

// 2. Short-circuit with OR (||)
// If the first operand is true, the second one isn't evaluated
let y = 10;
true || (y = 20);  // y won't change
console.log("y after true ||:", y);  // 10

false || (y = 30); // y will change
console.log("y after false ||:", y); // 30

// ---- LOGICAL OPERATORS WITH NON-BOOLEAN VALUES ----

// Logical operators don't always return boolean values in JavaScript
// They return one of the operands based on their truthiness or falsiness

// Truthy values: non-empty strings, non-zero numbers, objects, arrays, true
// Falsy values: empty strings (''), 0, null, undefined, NaN, false

// 1. AND (&&) with non-boolean values
// Returns the first falsy value, or the last value if all are truthy
console.log("'Hello' && 'World':", 'Hello' && 'World');   // 'World'
console.log("'Hello' && '':", 'Hello' && '');             // '' (empty string is falsy)
console.log("'' && 'Hello':", '' && 'Hello');             // '' (short-circuits at first falsy)
console.log("42 && 0:", 42 && 0);                         // 0 (0 is falsy)
console.log("42 && 'Hello':", 42 && 'Hello');             // 'Hello'
console.log("null && 'anything':", null && 'anything');   // null (short-circuits)

// 2. OR (||) with non-boolean values
// Returns the first truthy value, or the last value if all are falsy
console.log("'Hello' || 'World':", 'Hello' || 'World');   // 'Hello' (first truthy)
console.log("'' || 'Hello':", '' || 'Hello');             // 'Hello' (first truthy)
console.log("'' || 0 || null:", '' || 0 || null);         // null (all falsy, returns last)
console.log("undefined || 42:", undefined || 42);         // 42 (first truthy)

// 3. NOT (!) with non-boolean values
// Converts the value to boolean first, then negates it
console.log("!'Hello':", !'Hello');     // false (string is truthy, so negated is false)
console.log("!'':", !'');               // true (empty string is falsy, so negated is true)
console.log("!0:", !0);                 // true (0 is falsy)
console.log("!42:", !42);               // false (non-zero number is truthy)
console.log("!null:", !null);           // true (null is falsy)
console.log("!{}:", !{});               // false (empty object is truthy)

// ---- NULLISH COALESCING OPERATOR (??) ----
// Added in ES2020, specifically for null and undefined (not for other falsy values)
// Returns the right-hand operand when the left is null or undefined

let username = null;
let defaultUsername = "Guest";
console.log("username ?? defaultUsername:", username ?? defaultUsername); // "Guest"

// Compared to OR (||):
console.log("0 || 'Default':", 0 || 'Default');           // "Default" (0 is falsy)
console.log("0 ?? 'Default':", 0 ?? 'Default');           // 0 (0 is not null or undefined)

console.log("'' || 'Default':", '' || 'Default');         // "Default" (empty string is falsy)
console.log("'' ?? 'Default':", '' ?? 'Default');         // "" (empty string is not null or undefined)

console.log("null ?? 'Default':", null ?? 'Default');     // "Default"
console.log("undefined ?? 'Default':", undefined ?? 'Default'); // "Default"

// ---- LOGICAL ASSIGNMENT OPERATORS (ES2021) ----

// 1. Logical AND assignment (&&=)
// Assigns only if the left operand is truthy
let a = 10;
a &&= 20; // equivalent to: a = a && 20
console.log("a after &&=:", a); // 20

let b = 0;
b &&= 30; // won't assign because b is falsy
console.log("b after &&=:", b); // still 0

// 2. Logical OR assignment (||=)
// Assigns only if the left operand is falsy
let c = 0;
c ||= 40; // equivalent to: c = c || 40
console.log("c after ||=:", c); // 40

let d = 50;
d ||= 60; // won't assign because d is truthy
console.log("d after ||=:", d); // still 50

// 3. Nullish coalescing assignment (??=)
// Assigns only if the left operand is null or undefined
let e = null;
e ??= 70; // equivalent to: e = e ?? 70
console.log("e after ??=:", e); // 70

let f = 0;
f ??= 80; // won't assign because f is not null or undefined
console.log("f after ??=:", f); // still 0

// ---- PRACTICAL EXAMPLES ----

// 1. Default values (traditional way with ||)
function greet(name) {
  name = name || "Guest";
  return `Hello, ${name}!`;
}
console.log(greet("John"));    // "Hello, John!"
console.log(greet(""));        // "Hello, Guest!" (but empty name treated as falsy)
console.log(greet());          // "Hello, Guest!"

// 2. Better default values with nullish coalescing
function betterGreet(name) {
  name = name ?? "Guest";
  return `Hello, ${name}!`;
}
console.log(betterGreet("John"));    // "Hello, John!"
console.log(betterGreet(""));        // "Hello, !" (empty name preserved)
console.log(betterGreet());          // "Hello, Guest!"

// 3. Guarding against null/undefined (avoiding errors)
const user = {
  profile: {
    // address property is missing
  }
};

// Without guarding - would throw an error
// console.log(user.profile.address.city); // Error: Cannot read property 'city' of undefined

// With guarding using &&
console.log(user.profile && user.profile.address && user.profile.address.city); // undefined (no error)

// With optional chaining (modern way, ES2020)
console.log(user.profile?.address?.city); // undefined (no error)

// 4. Conditional execution
function processOrder(order) {
  // Only process if order has items and is not already processed
  order.isValid && !order.processed && processOrderItems(order);
  return order;
}

function processOrderItems(order) {
  console.log("Processing order items...");
  order.processed = true;
}

const order = { isValid: true, processed: false };
processOrder(order);
console.log("Order after processing:", order); // { isValid: true, processed: true }

// 5. Complex conditionals
const age = 25;
const hasParentalConsent = true;
const isSubscribed = false;

// Check if user can access content
const canAccessContent = (age >= 18 || hasParentalConsent) && isSubscribed;
console.log("Can access content:", canAccessContent); // false (not subscribed)

// ---- LOGICAL OPERATORS PRECEDENCE ----
// ! has highest precedence, followed by &&, then ||

// Example:
const result = true || false && false; // Evaluates to true
console.log("true || false && false:", result);
// Equivalent to: true || (false && false)
// Because && has higher precedence than ||

// Using parentheses to control the order:
const resultWithParens = (true || false) && false; // Evaluates to false
console.log("(true || false) && false:", resultWithParens);