// ==========================================
// JAVASCRIPT ARRAYS
// ==========================================

// Arrays in JavaScript are ordered collections of items
// They can store multiple values of any type in a single variable

// ---- CREATING ARRAYS ----

// 1. Array literal (most common)
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // ['apple', 'banana', 'orange']

// 2. Using the Array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]

// CAUTION: When passing a single number to Array constructor, 
// it creates an array with that many empty slots
const emptySlots = new Array(3);
console.log(emptySlots); // [empty × 3]
console.log(emptySlots.length); // 3

// 3. Creating an array from an array-like object or iterable
const arrayFromString = Array.from('hello');
console.log(arrayFromString); // ['h', 'e', 'l', 'l', 'o']

// Array.from with map function
const squares = Array.from([1, 2, 3, 4], x => x * x);
console.log(squares); // [1, 4, 9, 16]

// 4. Array.of - creates an array from its arguments
const mixedArray = Array.of(1, 'two', true, null);
console.log(mixedArray); // [1, 'two', true, null]

// ---- ARRAY PROPERTIES AND BASIC METHODS ----

// 1. length property - returns the number of elements
console.log(fruits.length); // 3

// Modifying length can truncate the array
const colors = ['red', 'green', 'blue', 'yellow'];
colors.length = 2;
console.log(colors); // ['red', 'green']

// 2. Accessing array elements (zero-based indexing)
console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'
console.log(fruits[2]); // 'orange'

// Accessing non-existent elements returns undefined
console.log(fruits[10]); // undefined

// 3. Modifying array elements
fruits[1] = 'kiwi';
console.log(fruits); // ['apple', 'kiwi', 'orange']

// 4. Adding elements to an array
// a. push() - adds elements to the end
fruits.push('grape');
console.log(fruits); // ['apple', 'kiwi', 'orange', 'grape']

// push() returns the new length of the array
const newLength = fruits.push('mango', 'pineapple');
console.log(newLength); // 6
console.log(fruits); // ['apple', 'kiwi', 'orange', 'grape', 'mango', 'pineapple']

// b. unshift() - adds elements to the beginning
fruits.unshift('strawberry');
console.log(fruits); // ['strawberry', 'apple', 'kiwi', 'orange', 'grape', 'mango', 'pineapple']

// 5. Removing elements from an array
// a. pop() - removes the last element and returns it
const lastFruit = fruits.pop();
console.log(lastFruit); // 'pineapple'
console.log(fruits); // ['strawberry', 'apple', 'kiwi', 'orange', 'grape', 'mango']

// b. shift() - removes the first element and returns it
const firstFruit = fruits.shift();
console.log(firstFruit); // 'strawberry'
console.log(fruits); // ['apple', 'kiwi', 'orange', 'grape', 'mango']

// 6. Finding elements in an array
// a. indexOf() - returns the first index of an element, or -1 if not found
console.log(fruits.indexOf('kiwi')); // 1
console.log(fruits.indexOf('watermelon')); // -1

// b. lastIndexOf() - returns the last index of an element, or -1 if not found
const repeatedArray = [1, 2, 3, 2, 1];
console.log(repeatedArray.lastIndexOf(2)); // 3
console.log(repeatedArray.lastIndexOf(4)); // -1

// c. includes() - returns true if an element exists in the array
console.log(fruits.includes('orange')); // true
console.log(fruits.includes('watermelon')); // false

// ---- ARRAY METHODS FOR ADDING/REMOVING ELEMENTS ----

// 1. splice() - add, remove, or replace elements at any position
const letters = ['a', 'b', 'c', 'd', 'e'];

// Remove 2 elements starting at index 1
const removed = letters.splice(1, 2);
console.log(removed); // ['b', 'c']
console.log(letters); // ['a', 'd', 'e']

// Add elements at index 1
letters.splice(1, 0, 'x', 'y');
console.log(letters); // ['a', 'x', 'y', 'd', 'e']

// Replace 2 elements at index 2
letters.splice(2, 2, 'hello', 'world');
console.log(letters); // ['a', 'x', 'hello', 'world', 'e']

// 2. slice() - creates a shallow copy of a portion of an array
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// Extract from index 2 to index 4 (exclusive)
console.log(animals.slice(2, 4)); // ['camel', 'duck']

// Extract from index 2 to the end
console.log(animals.slice(2)); // ['camel', 'duck', 'elephant']

// Extract the last 2 elements
console.log(animals.slice(-2)); // ['duck', 'elephant']

// Create a copy of the entire array
const animalsCopy = animals.slice();
console.log(animalsCopy); // ['ant', 'bison', 'camel', 'duck', 'elephant']

// 3. concat() - merge arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Can concatenate multiple arrays
const array3 = [7, 8, 9];
const multiCombined = array1.concat(array2, array3, 10, 11);
console.log(multiCombined); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// ---- ARRAY METHODS FOR TRANSFORMING ARRAYS ----

// 1. map() - creates a new array with the results of a function on each element
const numbersArray = [1, 2, 3, 4, 5];
const doubled = numbersArray.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// map() with index parameter
const indexed = numbersArray.map((num, index) => `${index}: ${num}`);
console.log(indexed); // ['0: 1', '1: 2', '2: 3', '3: 4', '4: 5']

// 2. filter() - creates a new array with elements that pass a test
const evenNumbers = numbersArray.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const largeNumbers = numbersArray.filter(num => num > 3);
console.log(largeNumbers); // [4, 5]

// 3. reduce() - reduce array to a single value
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15 (1+2+3+4+5)

// reduce() with a different initial value
const sumPlusTen = numbersArray.reduce((acc, cur) => acc + cur, 10);
console.log(sumPlusTen); // 25 (10+1+2+3+4+5)

// More complex reduce example - counting occurrences
const pets = ['dog', 'cat', 'dog', 'fish', 'cat', 'dog'];
const petCounts = pets.reduce((counts, pet) => {
  counts[pet] = (counts[pet] || 0) + 1;
  return counts;
}, {});
console.log(petCounts); // { dog: 3, cat: 2, fish: 1 }

// 4. forEach() - executes a function once for each array element
console.log('forEach example:');
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// 0: apple
// 1: kiwi
// 2: orange
// 3: grape
// 4: mango

// 5. some() - tests if at least one element passes a test
const hasEvenNumber = numbersArray.some(num => num % 2 === 0);
console.log('Has even number:', hasEvenNumber); // true

const hasNegativeNumber = numbersArray.some(num => num < 0);
console.log('Has negative number:', hasNegativeNumber); // false

// 6. every() - tests if all elements pass a test
const allPositive = numbersArray.every(num => num > 0);
console.log('All positive:', allPositive); // true

const allEven = numbersArray.every(num => num % 2 === 0);
console.log('All even:', allEven); // false

// 7. find() - returns the first element that passes a test
const firstEven = numbersArray.find(num => num % 2 === 0);
console.log('First even number:', firstEven); // 2

// 8. findIndex() - returns the index of the first element that passes a test
const firstEvenIndex = numbersArray.findIndex(num => num % 2 === 0);
console.log('Index of first even number:', firstEvenIndex); // 1

// ---- ARRAY ORDERING METHODS ----

// 1. sort() - sorts the elements of an array in place
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6];
unsortedArray.sort();
console.log('Default sort:', unsortedArray); // [1, 1, 2, 3, 4, 5, 6, 9]

// CAUTION: sort() converts elements to strings by default
const mixedNumbers = [1, 5, 10, 15, 20];
mixedNumbers.sort();
console.log('String sort:', mixedNumbers); // [1, 10, 15, 20, 5] (sorted as strings)

// Custom sort with compare function
mixedNumbers.sort((a, b) => a - b); // Ascending
console.log('Numeric sort (ascending):', mixedNumbers); // [1, 5, 10, 15, 20]

mixedNumbers.sort((a, b) => b - a); // Descending
console.log('Numeric sort (descending):', mixedNumbers); // [20, 15, 10, 5, 1]

// Sorting objects
const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

// Sort by age
people.sort((a, b) => a.age - b.age);
console.log('Sorted by age:', people);
// [{name: 'Alice', age: 25}, {name: 'John', age: 30}, {name: 'Bob', age: 35}]

// Sort by name
people.sort((a, b) => a.name.localeCompare(b.name));
console.log('Sorted by name:', people);
// [{name: 'Alice', age: 25}, {name: 'Bob', age: 35}, {name: 'John', age: 30}]

// 2. reverse() - reverses the order of elements in place
const reversedFruits = ['apple', 'banana', 'cherry'];
reversedFruits.reverse();
console.log(reversedFruits); // ['cherry', 'banana', 'apple']

// ---- ARRAY SEARCHING METHODS ----

// 1. find() and findIndex() (already covered above)

// 2. indexOf() and lastIndexOf() (already covered above)

// 3. includes() (already covered above)

// ---- ARRAYS AND STRINGS ----

// 1. join() - converts array to string
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // 'Fire,Air,Water'
console.log(elements.join(' ')); // 'Fire Air Water'
console.log(elements.join('-')); // 'Fire-Air-Water'
console.log(elements.join('')); // 'FireAirWater'

// 2. split() - converts string to array
const csvString = 'apple,banana,cherry,date';
const fruitArray = csvString.split(',');
console.log(fruitArray); // ['apple', 'banana', 'cherry', 'date']

const sentence = 'Hello world! How are you?';
const words = sentence.split(' ');
console.log(words); // ['Hello', 'world!', 'How', 'are', 'you?']

const characters = sentence.split('');
console.log(characters); // ['H', 'e', 'l', 'l', 'o', ' ', 'w', ... ]

// ---- ADVANCED ARRAY CONCEPTS ----

// 1. Nested arrays (multi-dimensional arrays)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]); // 6 (row 1, column 2)

// Looping through a 2D array
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

// 2. Destructuring arrays
const [first, second, third] = [10, 20, 30];
console.log(first, second, third); // 10 20 30

// Skipping elements
const [a, , c] = [1, 2, 3];
console.log(a, c); // 1 3

// Rest pattern
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Default values
const [x = 0, y = 0, z = 0] = [1, 2];
console.log(x, y, z); // 1 2 0

// 3. Spread operator
const originalArray = [1, 2, 3];

// Copying arrays
const copy = [...originalArray];
console.log(copy); // [1, 2, 3]

// Combining arrays
const combined = [...originalArray, 4, 5, 6];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Splitting arrays
const numbers2 = [1, 2, 3, 4, 5];
const [first2, second2, ...rest] = numbers2;
console.log(first2, second2, rest); // 1 2 [3, 4, 5]

// Using spread with functions
function sum3(a, b, c) {
  return a + b + c;
}

const numberArgs = [1, 2, 3];
console.log(sum3(...numberArgs)); // 6

// 4. Array methods that return iterators
const iterableArray = ['a', 'b', 'c'];

// keys(), values(), entries()
console.log('Array keys():');
for (const key of iterableArray.keys()) {
  console.log(key); // 0, 1, 2
}

console.log('Array values():');
for (const value of iterableArray.values()) {
  console.log(value); // 'a', 'b', 'c'
}

console.log('Array entries():');
for (const [index, value] of iterableArray.entries()) {
  console.log(`${index}: ${value}`); // '0: a', '1: b', '2: c'
}

// ---- ARRAY-LIKE OBJECTS ----

// Some objects in JavaScript look like arrays but aren't true arrays
function exampleFunc() {
  console.log(arguments); // Arguments object - array-like but not a true array
  console.log(Array.isArray(arguments)); // false
  
  // Converting to a real array:
  const argsArray = Array.from(arguments);
  // or: const argsArray = [...arguments];
  
  console.log(Array.isArray(argsArray)); // true
  
  // Now we can use array methods
  console.log(argsArray.map(x => x * 2));
}

exampleFunc(1, 2, 3); // [2, 4, 6]

// ---- PERFORMANCE CONSIDERATIONS ----

// 1. Pre-allocating arrays for better performance
console.time('Dynamic growth');
const dynamicArray = [];
for (let i = 0; i < 1000000; i++) {
  dynamicArray.push(i);
}
console.timeEnd('Dynamic growth');

console.time('Pre-allocated');
const preAllocated = new Array(1000000);
for (let i = 0; i < 1000000; i++) {
  preAllocated[i] = i;
}
console.timeEnd('Pre-allocated');

// 2. Choose the right method
// - forEach() for simple iteration
// - for loop for breaking early or complex operations
// - map() when transforming all elements
// - filter() when selecting a subset
// - reduce() when aggregating to a single value

// ---- PRACTICAL ARRAY EXAMPLES ----

// 1. Flattening nested arrays
const nestedArray = [1, [2, 3], [4, [5, 6]]];

// Using flat with a depth
console.log(nestedArray.flat(1)); // [1, 2, 3, 4, [5, 6]]
console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5, 6]

// Using flat with Infinity for any depth
const deeplyNested = [1, [2, [3, [4, [5]]]]];
console.log(deeplyNested.flat(Infinity)); // [1, 2, 3, 4, 5]

// 2. Removing falsy values from an array
const mixedValues = [0, 1, false, 2, '', 3, null, undefined, NaN];
const truthyValues = mixedValues.filter(Boolean);
console.log(truthyValues); // [1, 2, 3]

// 3. Creating an array of numbers
// Creates an array [0, 1, 2, ..., 9]
const range = Array.from({ length: 10 }, (_, i) => i);
console.log(range); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 4. Finding the maximum/minimum in an array
const values = [5, 8, 2, 10, 3];
console.log('Maximum:', Math.max(...values)); // 10
console.log('Minimum:', Math.min(...values)); // 2

// 5. Grouping objects by a property
const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Carol', grade: 'A' },
  { name: 'Dave', grade: 'C' },
  { name: 'Eve', grade: 'B' }
];

const studentsByGrade = students.reduce((groups, student) => {
  const grade = student.grade;
  if (!groups[grade]) {
    groups[grade] = [];
  }
  groups[grade].push(student);
  return groups;
}, {});

console.log(studentsByGrade);
// {
//   A: [{name: 'Alice', grade: 'A'}, {name: 'Carol', grade: 'A'}],
//   B: [{name: 'Bob', grade: 'B'}, {name: 'Eve', grade: 'B'}],
//   C: [{name: 'Dave', grade: 'C'}]
// }

// 6. Shuffling an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  const shuffled = [...array]; // Create a copy
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
}

const orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Shuffled array:', shuffleArray(orderedArray));