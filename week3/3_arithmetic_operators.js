// ==========================================
// JAVASCRIPT ARITHMETIC OPERATORS
// ==========================================

// Arithmetic operators perform mathematical operations on numeric values

// ---- BASIC ARITHMETIC OPERATORS ----

// 1. Addition (+)
let sum = 5 + 3;
console.log("Addition:", sum);  // 8

// Addition with variables
let a = 10;
let b = 20;
let total = a + b;
console.log("Sum of variables:", total);  // 30

// 2. Subtraction (-)
let difference = 10 - 4;
console.log("Subtraction:", difference);  // 6

// Negative numbers
let negative = -5;
console.log("Negative value:", negative);  // -5

// 3. Multiplication (*)
let product = 6 * 7;
console.log("Multiplication:", product);  // 42

// 4. Division (/)
let quotient = 20 / 4;
console.log("Division:", quotient);  // 5

// Division with decimal result
let decimalResult = 10 / 3;
console.log("Division with decimal:", decimalResult);  // 3.3333...

// 5. Remainder/Modulus (%)
let remainder = 10 % 3;
console.log("Remainder (10 % 3):", remainder);  // 1

// Checking if a number is even or odd
console.log("Is 4 even?", 4 % 2 === 0);  // true
console.log("Is 7 even?", 7 % 2 === 0);  // false

// 6. Exponentiation (**)
let power = 2 ** 3;  // 2 raised to the power of 3
console.log("Exponentiation (2^3):", power);  // 8

// ---- INCREMENT AND DECREMENT OPERATORS ----

// 1. Increment (++)
let count = 5;
count++;  // Post-increment: use the current value, then increment
count += 1;
count = 1 + count;
console.log("After post-increment:", count);  // 6

// Pre-increment
let preCount = 5;
let preResult = ++preCount;  // Increment first, then use the value
console.log("Pre-increment value:", preResult);  // 6
console.log("Variable after pre-increment:", preCount);  // 6

// Post-increment
let postCount = 5;
let postResult = postCount++;  // Use the value first, then increment
console.log("Post-increment value:", postResult);  // 5
console.log("Variable after post-increment:", postCount);  // 6

// 2. Decrement (--)
let stock = 10;
stock--;  // Post-decrement
console.log("After post-decrement:", stock);  // 9

// Pre-decrement
let preStock = 10;
let preDecResult = --preStock;  // Decrement first, then use the value
console.log("Pre-decrement value:", preDecResult);  // 9
console.log("Variable after pre-decrement:", preStock);  // 9

// Post-decrement
let postStock = 10;
let postDecResult = postStock--;  // Use the value first, then decrement
console.log("Post-decrement value:", postDecResult);  // 10
console.log("Variable after post-decrement:", postStock);  // 9

// ---- COMPOUND ASSIGNMENT OPERATORS ----

// 1. Addition Assignment (+=)
let score = 50;
score += 10;  // Equivalent to: score = score + 10
console.log("After addition assignment:", score);  // 60

// 2. Subtraction Assignment (-=)
let temperature = 72;
temperature -= 5;  // Equivalent to: temperature = temperature - 5
console.log("After subtraction assignment:", temperature);  // 67

// 3. Multiplication Assignment (*=)
let factor = 4;
factor *= 2;  // Equivalent to: factor = factor * 2
console.log("After multiplication assignment:", factor);  // 8

// 4. Division Assignment (/=)
let dividend = 100;
dividend /= 5;  // Equivalent to: dividend = dividend / 5
console.log("After division assignment:", dividend);  // 20

// 5. Remainder Assignment (%=)
let modValue = 17;
modValue %= 5;  // Equivalent to: modValue = modValue % 5
console.log("After remainder assignment:", modValue);  // 2

// 6. Exponentiation Assignment (**=)
let base = 2;
base **= 4;  // Equivalent to: base = base ** 4
console.log("After exponentiation assignment:", base);  // 16

// ---- SPECIAL ARITHMETIC CASES ----

// 1. Division by zero
let zeroDivision = 10 / 0;
console.log("Division by zero:", zeroDivision);  // Infinity

// 2. Infinity
console.log("Infinity example:", Infinity);  // Infinity
console.log("Infinity + 1:", Infinity + 1);  // Still Infinity
console.log("Infinity - Infinity:", Infinity - Infinity);  // NaN (Not a Number)

// 3. NaN (Not a Number)
let invalidMath = 0 / 0;
console.log("Invalid math operation:", invalidMath);  // NaN
console.log("Is NaN a number?", typeof NaN);  // "number" (confusingly!)
console.log("Is it NaN?", isNaN(invalidMath));  // true

// 4. String conversions
let numString = "42";
let numValue = 10;
console.log("String + Number:", numString + numValue);  // "4210" (concatenation)
console.log("Number - String:", numValue - numString);  // -32 (converts string to number)
console.log("Number * String:", numValue * numString);  // 420 (converts string to number)
console.log("Number / String:", numValue / numString);  // 0.2381... (converts string to number)

// ---- PRACTICAL EXAMPLES ----

// 1. Calculating area of a rectangle
function calculateArea(width, height) {
  return width * height;
}
console.log("Area calculation:", calculateArea(5, 10));  // 50

// 2. Temperature conversion (Fahrenheit to Celsius)
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
console.log("98.6°F in Celsius:", fahrenheitToCelsius(98.6).toFixed(1));  // 37.0

// 3. Calculating total cost with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}
console.log("Total with tax:", calculateTotal(100, 0.07).toFixed(2));  // 107.00

// 4. Finding the average of numbers
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
console.log("Average:", calculateAverage([10, 20, 30, 40, 50]));  // 30

// 5. Calculating the remainder to check if a year is a leap year
function isLeapYear(year) {
  // Leap years are divisible by 4, 
  // except for century years which must be divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is 2024 a leap year?", isLeapYear(2024));  // true
console.log("Is 2100 a leap year?", isLeapYear(2100));  // false

// 6. Incrementing/decrementing in a loop
function countdownLoop() {
  let result = [];
  for (let i = 5; i > 0; i--) {
    result.push(i);
  }
  return result;
}
console.log("Countdown:", countdownLoop());  // [5, 4, 3, 2, 1]