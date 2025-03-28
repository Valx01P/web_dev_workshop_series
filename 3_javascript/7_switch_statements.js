// ==========================================
// JAVASCRIPT SWITCH STATEMENTS
// ==========================================

// The switch statement evaluates an expression and executes code blocks
// based on matching the expression's value to different cases

// ---- BASIC SWITCH STATEMENT ----

// 1. Simple switch with string values
const day = 'Wednesday';

switch (day) {
  case 'Monday':
    console.log('Start of the work week');
    break;
  case 'Wednesday':
    console.log('Middle of the work week');
    break;
  case 'Friday':
    console.log('End of the work week');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend!');
    break;
  default:
    console.log('It\'s some other day');
    break;
}
// Output: Middle of the work week

// 2. Switch with numeric values
const month = 3; // March

switch (month) {
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  case 3:
    console.log('March');
    break;
  case 4:
    console.log('April');
    break;
  default:
    console.log('Some other month');
    break;
}
// Output: March

// ---- THE IMPORTANCE OF BREAK STATEMENTS ----

// Without 'break', execution "falls through" to the next case
const status = 'error';

switch (status) {
  case 'info':
    console.log('Information message');
    // No break here - execution would continue to the next case
  case 'warning':
    console.log('Warning message');
    // No break here - execution would continue to the next case
  case 'error':
    console.log('Error message');
    // No break here - execution would continue to the next case
  case 'fatal':
    console.log('Fatal error message');
    break;
  default:
    console.log('Unknown status');
    break;
}
// Output (because execution falls through):
// Error message
// Fatal error message

// ---- INTENTIONAL FALL-THROUGH ----

// Sometimes, the fall-through behavior is used intentionally
// when multiple cases should execute the same code

const dayOfWeek = 2; // Tuesday (0 = Sunday, 1 = Monday, etc.)

switch (dayOfWeek) {
  case 0:
    console.log('It\'s the weekend!');
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('It\'s a weekday!');
    break;
  case 6:
    console.log('It\'s the weekend!');
    break;
  default:
    console.log('Invalid day');
    break;
}
// Output: It's a weekday!

// ---- THE DEFAULT CASE ----

// The default case is executed when no other case matches
// It's optional but recommended for handling unexpected values

const fruit = 'kiwi';

switch (fruit) {
  case 'apple':
    console.log('Apples are $1.29 per pound');
    break;
  case 'banana':
    console.log('Bananas are $0.59 per pound');
    break;
  case 'orange':
    console.log('Oranges are $0.89 per pound');
    break;
  default:
    // Handles any value that doesn't match a case
    console.log(`Sorry, we don't have information for ${fruit}`);
    break;
}
// Output: Sorry, we don't have information for kiwi

// The default case doesn't need to be the last case,
// but it's commonly placed last for readability

// ---- USING EXPRESSIONS IN CASE VALUES ----

// Case values must be constant expressions, evaluated at compile time
// You cannot use variables or function calls directly in case values

const score = 85;

switch (true) { // Trick to evaluate expressions in case statements
  case score >= 90:
    console.log('Grade: A');
    break;
  case score >= 80:
    console.log('Grade: B');
    break;
  case score >= 70:
    console.log('Grade: C');
    break;
  case score >= 60:
    console.log('Grade: D');
    break;
  default:
    console.log('Grade: F');
    break;
}
// Output: Grade: B

// ---- SWITCH STATEMENTS WITH MULTIPLE EXPRESSIONS PER CASE ----

// Each case can contain multiple statements
const role = 'admin';

switch (role) {
  case 'admin':
    console.log('Welcome, Administrator');
    console.log('You have full access to the system');
    setAdminPrivileges(); // Function call
    break;
  case 'editor':
    console.log('Welcome, Editor');
    console.log('You can create and edit content');
    setEditorPrivileges(); // Function call
    break;
  case 'viewer':
    console.log('Welcome, Viewer');
    console.log('You have read-only access');
    setViewerPrivileges(); // Function call
    break;
  default:
    console.log('Welcome, Guest');
    console.log('Please log in to access the system');
    break;
}

// Helper functions for the above example
function setAdminPrivileges() {
  console.log('Admin privileges activated');
}

function setEditorPrivileges() {
  console.log('Editor privileges activated');
}

function setViewerPrivileges() {
  console.log('Viewer privileges activated');
}
// Output:
// Welcome, Administrator
// You have full access to the system
// Admin privileges activated

// ---- USING RETURN IN SWITCH STATEMENTS ----

// When a switch statement is inside a function, you can use 'return'
// instead of 'break' to exit the function immediately

function getMonthName(monthNum) {
  switch (monthNum) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    // ... other months
    case 12:
      return 'December';
    default:
      return 'Invalid month';
  }
  // This line will never execute
  console.log('This will never run');
}

const monthName = getMonthName(3);
console.log(monthName); // Output: March

// ---- SWITCH vs. IF-ELSE ----

// Example using if-else statements
const status1 = 'warning';
let statusMessage1 = '';

if (status1 === 'info') {
  statusMessage1 = 'Information message';
} else if (status1 === 'warning') {
  statusMessage1 = 'Warning message';
} else if (status1 === 'error') {
  statusMessage1 = 'Error message';
} else {
  statusMessage1 = 'Unknown status';
}

console.log('Using if-else:', statusMessage1);

// Equivalent using switch statement
const status2 = 'warning';
let statusMessage2 = '';

switch (status2) {
  case 'info':
    statusMessage2 = 'Information message';
    break;
  case 'warning':
    statusMessage2 = 'Warning message';
    break;
  case 'error':
    statusMessage2 = 'Error message';
    break;
  default:
    statusMessage2 = 'Unknown status';
    break;
}

console.log('Using switch:', statusMessage2);

// ---- STRICT COMPARISON IN SWITCH ----

// Switch uses strict comparison (===) between the expression and cases
const value = '10';

switch (value) {
  case 10: // This won't match because '10' !== 10
    console.log('It\'s the number 10');
    break;
  case '10': // This will match because '10' === '10'
    console.log('It\'s the string "10"');
    break;
  default:
    console.log('It\'s something else');
    break;
}
// Output: It's the string "10"

// ---- USING OBJECTS AS ALTERNATIVE TO SWITCH ----

// For simple value mapping, object lookup can be cleaner than switch
const fruitPrices = {
  'apple': 'Apples are $1.29 per pound',
  'banana': 'Bananas are $0.59 per pound',
  'orange': 'Oranges are $0.89 per pound'
};

const selectedFruit = 'banana';
console.log(fruitPrices[selectedFruit] || 'Sorry, we don\'t have information for that fruit');
// Output: Bananas are $0.59 per pound

// ---- COMMON PATTERNS AND BEST PRACTICES ----

// 1. Grouping cases with the same code
const browser = 'Chrome';
let engineMessage = '';

switch (browser) {
  case 'Chrome':
  case 'Edge':
  case 'Opera':
    engineMessage = 'This browser uses the Blink engine';
    break;
  case 'Firefox':
    engineMessage = 'This browser uses the Gecko engine';
    break;
  case 'Safari':
    engineMessage = 'This browser uses the WebKit engine';
    break;
  default:
    engineMessage = 'Unknown browser engine';
    break;
}

console.log(engineMessage); // Output: This browser uses the Blink engine

// 2. Don't forget the default case
// Always include a default case to handle unexpected values

// 3. Always use 'break' statements
// Unless you specifically want fall-through behavior

// 4. Block scope in case clauses
// Each case creates its own lexical scope with let/const
const userType = 'something';

switch (userType) {
  case 'basic': {
    // Using block to limit scope
    const message = 'Basic features only';
    console.log(message);
    break;
  }
  case 'premium': {
    // Variables declared here don't conflict with other cases
    const message = 'All features available';
    console.log(message);
    break;
  }
  default: {
    const message = 'Unknown user type';
    console.log(message);
    break;
  }
}
// Output: All features available