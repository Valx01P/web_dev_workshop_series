// ==========================================
// JAVASCRIPT IF STATEMENTS
// ==========================================

// If statements allow you to execute code conditionally based on whether 
// a specified condition evaluates to true or false

// ---- BASIC IF STATEMENT ----

// 1. Simple if statement
const temperature = 75;

if (temperature > 70) {
  console.log("It's a warm day!");
}
// Output: It's a warm day!

// 2. Code block with multiple statements
if (temperature > 70) {
  const message = "It's a warm day!";
  console.log(message);
  console.log("Great weather for outdoor activities.");
}

// 3. Single-line if statement (without curly braces)
// Note: This is generally not recommended for readability
if (temperature > 70) console.log("It's warm!");

// ---- IF...ELSE STATEMENT ----

// 1. Basic if...else
const hour = 20; // 24-hour format

if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good day!");
}
// Output: Good day!

// 2. Using if...else for alternate paths
const isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in to continue.");
}
// Output: Please log in to continue.

// ---- IF...ELSE IF...ELSE STATEMENT ----

// 1. Multiple conditions with else if
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// Output: Grade: B

// 2. Time of day example
const currentHour = 14;

if (currentHour < 12) {
  console.log("Good morning!");
} else if (currentHour < 18) {
  console.log("Good afternoon!");
} else if (currentHour < 22) {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}
// Output: Good afternoon!

// ---- NESTED IF STATEMENTS ----

// 1. Basic nested if
const age = 25;
const hasLicense = true;

if (age >= 18) {
  console.log("You are an adult.");
  
  if (hasLicense) {
    console.log("You can drive a car.");
  } else {
    console.log("You need a license to drive.");
  }
} else {
  console.log("You are a minor.");
}
// Output: 
// You are an adult.
// You can drive a car.

// 2. Alternative to deeply nested if statements (flattening)
// Instead of:
/*
if (condition1) {
  if (condition2) {
    if (condition3) {
      // Code here
    }
  }
}
*/

// Better approach:
/*
if (condition1 && condition2 && condition3) {
  // Code here
}
*/

// ---- CONDITIONAL (TERNARY) OPERATOR ----

// Shorthand for simple if...else statements
// syntax: condition ? expressionIfTrue : expressionIfFalse

// 1. Basic usage
const userRole = "admin";
const message = userRole === "admin" ? "Welcome, Admin!" : "Welcome, User!";
console.log(message); // Output: Welcome, Admin!

// 2. Assigning values conditionally
const isWeekend = false;
const activity = isWeekend ? "Relax" : "Work";
console.log("Today's activity:", activity); // Output: Today's activity: Work

// 3. Multiple operations with ternary (use with caution - can reduce readability)
const userStatus = "premium";
userStatus === "premium" 
  ? (console.log("Premium user"), console.log("Access granted to all features")) 
  : console.log("Basic user");
// Output:
// Premium user
// Access granted to all features

// 4. Nested ternary operators (use sparingly for readability)
const userType = "member";
const memberLevel = 2;

const accessLevel = userType === "admin" 
  ? "Full Access" 
  : userType === "member" 
    ? (memberLevel > 1 ? "Premium Access" : "Basic Access") 
    : "No Access";

console.log("Access Level:", accessLevel); // Output: Access Level: Premium Access

// ---- TRUTHY AND FALSY VALUES ----

// In JavaScript, conditions in if statements don't need to be strictly boolean
// Values are automatically converted to boolean for the condition

// Falsy values in JavaScript:
// - false
// - 0, -0, 0n (BigInt zero)
// - "" (empty string)
// - null
// - undefined
// - NaN

// Everything else is truthy

// 1. Examples of truthy values in conditions
if ("hello") {
  console.log("String is truthy"); // Will execute
}

if (42) {
  console.log("Number is truthy"); // Will execute
}

if ([]) {
  console.log("Empty array is truthy"); // Will execute
}

if ({}) {
  console.log("Empty object is truthy"); // Will execute
}

// 2. Examples of falsy values in conditions
if (0) {
  console.log("This will not run");
}

if ("") {
  console.log("This will not run");
}

if (null) {
  console.log("This will not run");
}

if (undefined) {
  console.log("This will not run");
}

// 3. Checking for existence
const username = "";
if (username) {
  console.log("Username exists and is not empty");
} else {
  console.log("Username is empty"); // This will execute
}

// Better approach for checking existence (not emptiness)
const userEmail = "";
if (userEmail !== undefined && userEmail !== null) {
  console.log("Email exists (but might be empty)"); // This will execute
}

// Using nullish coalescing for defaults
const userNickname = null;
const displayName = userNickname ?? "Anonymous";
console.log("Display name:", displayName); // Output: Display name: Anonymous

// ---- COMMON PATTERNS AND BEST PRACTICES ----

// 1. Early return pattern
function processUser(user) {
  // Check for invalid conditions first
  if (!user) {
    console.log("No user provided");
    return;
  }
  
  if (!user.name) {
    console.log("User has no name");
    return;
  }
  
  // Main logic only runs if all checks pass
  console.log("Processing user:", user.name);
}

processUser(null); // Output: No user provided
processUser({}); // Output: User has no name
processUser({ name: "John" }); // Output: Processing user: John

// 2. Using strict equality (===) for comparisons
const value = "42";

// Bad - loose equality
if (value == 42) {
  console.log("Using ==: Value is 42"); // This will execute despite types being different
}

// Good - strict equality
if (value === 42) {
  console.log("This will not run");
} else {
  console.log("Using ===: Value is not number 42"); // This will execute
}

// 3. Checking for property existence
const user = { name: "Alice", roles: ["user"] };

// Bad way (might cause errors if user is null/undefined)
if (user.permissions.admin) {
  // This would cause an error since permissions doesn't exist
}

// Good way - check each level
if (user && user.permissions && user.permissions.admin) {
  console.log("User has admin permissions");
}

// Modern way - optional chaining (ES2020)
if (user?.permissions?.admin) {
  console.log("User has admin permissions");
}

// 4. Switch statement alternative for many conditions
const fruit = "apple";

// Multiple if-else approach
if (fruit === "apple") {
  console.log("Selected fruit is apple");
} else if (fruit === "banana") {
  console.log("Selected fruit is banana");
} else if (fruit === "orange") {
  console.log("Selected fruit is orange");
} else {
  console.log("Unknown fruit");
}

// Using object lookup instead (often cleaner)
const fruitMessages = {
  apple: "Selected fruit is apple",
  banana: "Selected fruit is banana",
  orange: "Selected fruit is orange"
};

console.log(fruitMessages[fruit] || "Unknown fruit");
// Output: Selected fruit is apple