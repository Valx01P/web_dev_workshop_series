// ==========================================
// JAVASCRIPT COMPARISON OPERATORS
// ==========================================

// Comparison operators compare two values and return a boolean result (true or false)
// These operators are essential for conditional statements and logical operations

// ---- EQUALITY OPERATORS ----

// 1. Equal (==)
// Compares values, with type conversion (loose equality)
console.log("5 == 5:", 5 == 5);         // true
console.log("5 == '5':", 5 == '5');     // true (string '5' is converted to number 5)
console.log("0 == false:", 0 == false); // true (false is converted to 0)
console.log("'' == false:", '' == false); // true (both convert to 0)
console.log("null == undefined:", null == undefined); // true (special case)

// 2. Strict Equal (===)
// Compares values AND types (strict equality)
console.log("5 === 5:", 5 === 5);         // true
console.log("5 === '5':", 5 === '5');     // false (number vs string)
console.log("0 === false:", 0 === false); // false (number vs boolean)
console.log("'' === false:", '' === false); // false (string vs boolean)
console.log("null === undefined:", null === undefined); // false (different types)

// 3. Not Equal (!=)
// Compares inequality of values, with type conversion
console.log("5 != 8:", 5 != 8);         // true
console.log("5 != '5':", 5 != '5');     // false (they are equal after conversion)
console.log("0 != false:", 0 != false); // false (they are equal after conversion)
console.log("null != undefined:", null != undefined); // false (they are considered equal)

// 4. Strict Not Equal (!==)
// Compares inequality of values AND types
console.log("5 !== 8:", 5 !== 8);         // true
console.log("5 !== '5':", 5 !== '5');     // true (different types)
console.log("0 !== false:", 0 !== false); // true (different types)
console.log("null !== undefined:", null !== undefined); // true (different types)

// ---- RELATIONAL OPERATORS ----

// 1. Greater Than (>)
console.log("10 > 5:", 10 > 5);       // true
console.log("10 > 10:", 10 > 10);     // false
console.log("10 > '5':", 10 > '5');   // true (string '5' is converted to number 5)
console.log("'b' > 'a':", 'b' > 'a'); // true (alphabetically, 'b' comes after 'a')

// 2. Less Than (<)
console.log("5 < 10:", 5 < 10);       // true
console.log("10 < 10:", 10 < 10);     // false
console.log("'5' < 10:", '5' < 10);   // true (string '5' is converted to number 5)
console.log("'a' < 'b':", 'a' < 'b'); // true (alphabetically, 'a' comes before 'b')

// 3. Greater Than or Equal To (>=)
console.log("10 >= 5:", 10 >= 5);     // true
console.log("10 >= 10:", 10 >= 10);   // true
console.log("5 >= 10:", 5 >= 10);     // false
console.log("'10' >= 10:", '10' >= 10); // true (string '10' is converted to number 10)

// 4. Less Than or Equal To (<=)
console.log("5 <= 10:", 5 <= 10);     // true
console.log("10 <= 10:", 10 <= 10);   // true
console.log("10 <= 5:", 10 <= 5);     // false
console.log("'5' <= 5:", '5' <= 5);   // true (string '5' is converted to number 5)

// ---- SPECIAL CASES AND GOTCHAS ----

// 1. NaN comparisons
// NaN is never equal to anything, including itself
console.log("NaN == NaN:", NaN == NaN);   // false
console.log("NaN === NaN:", NaN === NaN); // false
console.log("NaN != NaN:", NaN != NaN);   // true
console.log("NaN !== NaN:", NaN !== NaN); // true

// Proper way to check for NaN
console.log("isNaN(NaN):", isNaN(NaN));   // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true (more reliable)

// 2. Comparing different types
console.log("'42' > 7:", '42' > 7);     // true (string converted to number)
console.log("'42' < '7':", '42' < '7'); // true (string comparison, '4' comes before '7')
console.log("true > 0:", true > 0);     // true (true converts to 1)
console.log("false < 1:", false < 1);   // true (false converts to 0)

// 3. Null and undefined
console.log("null > 0:", null > 0);     // false
console.log("null == 0:", null == 0);   // false
console.log("null >= 0:", null >= 0);   // true (special case!)
console.log("null <= 0:", null <= 0);   // true (special case!)

console.log("undefined == 0:", undefined == 0); // false
console.log("undefined < 1:", undefined < 1);   // false (undefined becomes NaN in comparisons)

// 4. Object comparisons
// Objects are compared by reference, not value
const obj1 = { value: 10 };
const obj2 = { value: 10 };
const obj3 = obj1;

console.log("obj1 == obj2:", obj1 == obj2);   // false (different objects)
console.log("obj1 === obj2:", obj1 === obj2); // false (different objects)
console.log("obj1 == obj3:", obj1 == obj3);   // true (same reference)
console.log("obj1 === obj3:", obj1 === obj3); // true (same reference)

// ---- PRACTICAL EXAMPLES ----

// 1. User authentication check
function checkCredentials(username, password) {
  const validUsername = "user123";
  const validPassword = "securepass";
  
  return username === validUsername && password === validPassword;
}

console.log("Valid login:", checkCredentials("user123", "securepass")); // true
console.log("Invalid login:", checkCredentials("user123", "wrongpass")); // false

// 2. Age verification for a website
function canAccessContent(age) {
  return age >= 18;
}

console.log("Can a 20-year-old access?", canAccessContent(20)); // true
console.log("Can a 16-year-old access?", canAccessContent(16)); // false

// 3. Price comparison
function isDiscounted(originalPrice, currentPrice) {
  return currentPrice < originalPrice;
}

console.log("Is $80 discounted from $100?", isDiscounted(100, 80)); // true
console.log("Is $100 discounted from $100?", isDiscounted(100, 100)); // false

// 4. Form validation
function isValidEmail(email) {
  // A simple check - real validation would be more complex
  return email !== "" && email.includes("@") && email.includes(".");
}

console.log("Is 'user@example.com' valid?", isValidEmail("user@example.com")); // true
console.log("Is 'invalid-email' valid?", isValidEmail("invalid-email")); // false

// 5. Checking for empty values
function isEmpty(value) {
  return value === "" || value === null || value === undefined;
}

console.log("Is '' empty?", isEmpty("")); // true
console.log("Is null empty?", isEmpty(null)); // true
console.log("Is 'Hello' empty?", isEmpty("Hello")); // false

// ---- BEST PRACTICES ----

// 1. Prefer strict equality (===) and strict inequality (!==)
// This avoids unexpected type conversions

// Bad practice (loose equality)
if (5 == "5") {
  console.log("These are considered equal with ==");
}

// Good practice (strict equality)
if (5 === 5) {
  console.log("Use === to ensure both value and type match");
}

// 2. Be careful with falsy values
// The following values are all falsy: false, 0, '', null, undefined, NaN

// 3. Use comparison operators in conditional statements
const age = 25;
if (age != 18) {
  console.log("Adult");
} else {
  let yearsLeft = 18 - age;
  console.log("Minor, years until adult:", yearsLeft);
  console.log("Minor");
}

// 4. Ternary operator is a shorthand for comparison-based assignment
const status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);