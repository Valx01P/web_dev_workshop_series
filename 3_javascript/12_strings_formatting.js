// ==========================================
// JAVASCRIPT STRINGS AND FORMATTING
// ==========================================

// Strings are sequences of characters used to represent text
// JavaScript provides various ways to create, manipulate, and format strings

// ---- STRING CREATION ----

// 1. String literals with single quotes
const singleQuotes = 'Hello, world!';
console.log('Single quotes:', singleQuotes);

// 2. String literals with double quotes
const doubleQuotes = "Hello, world!";
console.log('Double quotes:', doubleQuotes);

// 3. Template literals (ES6) with backticks
const templateLiteral = `Hello, world!`;
console.log('Template literal:', templateLiteral);

// 4. String constructor (not recommended for typical use)
const constructorString = new String('Hello, world!');
console.log('String constructor:', constructorString);
console.log('Constructor type:', typeof constructorString); // 'object', not 'string'!

// ---- STRING PROPERTIES ----

// 1. length - number of characters in a string
const message = 'JavaScript is fun!';
console.log('String length:', message.length); // 18

// ---- STRING METHODS FOR MANIPULATION ----

// 1. Accessing characters in a string
const language = 'JavaScript';

// Using bracket notation (zero-based index)
console.log('First character:', language[0]); // 'J'

// Using charAt() method
console.log('Last character:', language.charAt(language.length - 1)); // 't'

// 2. Finding substrings
const sentence = 'The quick brown fox jumps over the lazy dog.';

// indexOf() - returns position of first occurrence or -1 if not found
console.log("Position of 'fox':", sentence.indexOf('fox')); // 16
console.log("Position of 'cat':", sentence.indexOf('cat')); // -1

// lastIndexOf() - returns position of last occurrence
console.log("Last occurrence of 'the':", sentence.lastIndexOf('the')); // 31

// includes() - returns boolean (ES6)
console.log("Contains 'jumps':", sentence.includes('jumps')); // true

// startsWith() and endsWith() (ES6)
console.log("Starts with 'The':", sentence.startsWith('The')); // true
console.log("Ends with 'dog.':", sentence.endsWith('dog.')); // true

// 3. Extracting substrings
const text = 'JavaScript is awesome';

// substring(start, end) - extracts characters between indexes
console.log('substring(0, 10):', text.substring(0, 10)); // 'JavaScript'

// substr(start, length) - extracts specified number of characters (deprecated)
console.log('substr(11, 2):', text.substr(11, 2)); // 'is'

// slice(start, end) - like substring but supports negative indexes
console.log('slice(0, 10):', text.slice(0, 10)); // 'JavaScript'
console.log('slice(-7):', text.slice(-7)); // 'awesome' (last 7 characters)

// 4. Modifying strings

// replace() - replaces first occurrence of a pattern
console.log('Replace first "a":', text.replace('a', 'A')); // 'JAvaScript is awesome'

// replaceAll() - replaces all occurrences (ES2021)
console.log('Replace all "a":', text.replaceAll('a', 'A')); // 'JAvAScript is Awesome'

// toLowerCase() and toUpperCase()
console.log('Lowercase:', text.toLowerCase()); // 'javascript is awesome'
console.log('Uppercase:', text.toUpperCase()); // 'JAVASCRIPT IS AWESOME'

// trim(), trimStart(), trimEnd() - remove whitespace
const paddedText = '   Hello, World!   ';
console.log('Trimmed:', paddedText.trim()); // 'Hello, World!'
console.log('Trim start:', paddedText.trimStart()); // 'Hello, World!   '
console.log('Trim end:', paddedText.trimEnd()); // '   Hello, World!'

// repeat() - repeats a string (ES6)
console.log('Repeat "Ha" 3 times:', 'Ha'.repeat(3)); // 'HaHaHa'

// 5. Splitting and joining strings

// split() - splits string into array of substrings
const csvData = 'John,Doe,30,New York';
const dataArray = csvData.split(',');
console.log('Split CSV:', dataArray); // ['John', 'Doe', '30', 'New York']

// join() - joins array elements into a string
console.log('Join with dashes:', dataArray.join('-')); // 'John-Doe-30-New York'

// 6. Padding strings (ES2017)
const num = '42';
console.log('padStart(5, "0"):', num.padStart(5, '0')); // '00042'
console.log('padEnd(5, "*"):', num.padEnd(5, '*')); // '42***'

// ---- STRING FORMATTING TECHNIQUES ----

// 1. Concatenation with + operator
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
console.log('Concatenation with +:', fullName); // 'John Doe'

// 2. Concatenation with += operator
let greeting = 'Hello';
greeting += ', ';
greeting += firstName;
console.log('Concatenation with +=:', greeting); // 'Hello, John'

// 3. Template literals (ES6) - string interpolation
const age = 30;
const introduction = `${firstName} ${lastName} is ${age} years old.`;
console.log('Template literal interpolation:', introduction); // 'John Doe is 30 years old.'

// 4. Multi-line strings with template literals
const multiLine = `This is a multi-line
string using template
literals in JavaScript.`;
console.log('Multi-line string:');
console.log(multiLine);

// 5. Expression evaluation in template literals
console.log(`5 + 5 = ${5 + 5}`); // '5 + 5 = 10'
console.log(`${firstName} in uppercase: ${firstName.toUpperCase()}`); // 'John in uppercase: JOHN'

// 6. Traditional approach with .concat()
const traditionalConcat = firstName.concat(' ', lastName, ' is ', String(age), ' years old.');
console.log('Using concat():', traditionalConcat); // 'John Doe is 30 years old.'

// ---- ADVANCED STRING FORMATTING ----

// 1. Number formatting
const price = 1234.567;

// toFixed() - format to specific number of decimal places
console.log('Price with 2 decimals:', price.toFixed(2)); // '1234.57'

// Using Intl.NumberFormat for locale-specific formatting
const usdFormatter = new Intl.NumberFormat('en-US', { 
  style: 'currency', 
  currency: 'USD' 
});
console.log('Formatted as USD:', usdFormatter.format(price)); // '$1,234.57'

const euroFormatter = new Intl.NumberFormat('de-DE', { 
  style: 'currency', 
  currency: 'EUR' 
});
console.log('Formatted as EUR:', euroFormatter.format(price)); // '1.234,57 €'

// 2. Date formatting
const today = new Date();

// Basic date methods
console.log('Basic date string:', today.toString());
console.log('Date only:', today.toDateString());
console.log('Time only:', today.toTimeString());
console.log('ISO format:', today.toISOString());

// Using Intl.DateTimeFormat
const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
console.log('Formatted date:', dateFormatter.format(today));

// 3. Custom string formatting functions
function formatPhoneNumber(phoneNumber) {
  // Clean input and ensure it's 10 digits
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phoneNumber; // Return original if format doesn't match
}

console.log('Formatted phone:', formatPhoneNumber(1234567890)); // '(123) 456-7890'

// ---- STRING ESCAPE SEQUENCES ----

// 1. Common escape sequences
const escapeExample = 'This string contains a newline:\nAnd a tab:\tcharacter.';
console.log('Escape sequences:');
console.log(escapeExample);

// 2. Other escape sequences
console.log('Single quote: \'');
console.log('Double quote: \"');
console.log('Backslash: \\');
console.log('Unicode: \u00A9'); // Copyright symbol ©
console.log('Hex: \x7A'); // 'z'

// ---- COMMON STRING OPERATIONS ----

// 1. Reversing a string
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log('Reversed "JavaScript":', reverseString('JavaScript')); // 'tpircSavaJ'

// 2. Checking for palindromes
function isPalindrome(str) {
  // Remove non-alphanumeric chars and convert to lowercase
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === reverseString(cleaned);
}
console.log('Is "radar" a palindrome?', isPalindrome('radar')); // true
console.log('Is "A man, a plan, a canal: Panama" a palindrome?', 
           isPalindrome('A man, a plan, a canal: Panama')); // true

// 3. Counting occurrences of a character
function countChar(str, char) {
  return str.split(char).length - 1;
}
console.log('Count of "s" in "Mississippi":', countChar('Mississippi', 's')); // 4

// 4. Title case conversion
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log('Title case:', toTitleCase('the quick brown fox')); // 'The Quick Brown Fox'

// 5. Truncating text with ellipsis
function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + '...';
}
console.log('Truncated text:', truncate('Long text that should be truncated', 15)); // 'Long text th...'

// ---- REGULAR EXPRESSIONS WITH STRINGS ----

// 1. Basic pattern matching
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
console.log('Is "user@example.com" valid email?', emailPattern.test('user@example.com')); // true
console.log('Is "invalid-email" valid email?', emailPattern.test('invalid-email')); // false

// 2. Extracting matches
const text2 = 'Contact us at support@example.com or sales@example.com';
const emails = text2.match(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g);
console.log('Extracted emails:', emails); // ['support@example.com', 'sales@example.com']

// 3. Search and replace with regex
const htmlText = '<p>This is <b>bold</b> and <i>italic</i> text.</p>';
const plainText = htmlText.replace(/<[^>]+>/g, '');
console.log('HTML with tags removed:', plainText); // 'This is bold and italic text.'

// ---- PERFORMANCE CONSIDERATIONS ----

// 1. String concatenation in loops
console.time('Plus operator');
let result1 = '';
for (let i = 0; i < 10000; i++) {
  result1 += 'a';
}
console.timeEnd('Plus operator');

console.time('Array join');
const parts = [];
for (let i = 0; i < 10000; i++) {
  parts.push('a');
}
const result2 = parts.join('');
console.timeEnd('Array join');

// For large numbers of concatenations, Array.join() is usually faster