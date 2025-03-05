// ==========================================
// JAVASCRIPT SETS
// ==========================================

// Set is a collection of unique values - each value can only occur once
// Sets can store any type of value, including primitive values and object references

// ---- CREATING SETS ----

// 1. Creating an empty Set
const emptySet = new Set();
console.log(emptySet); // Set(0) {}

// 2. Creating a Set with initial values
const colorSet = new Set(['red', 'green', 'blue', 'red']);
console.log(colorSet); // Set(3) {'red', 'green', 'blue'}
// Note: Duplicate 'red' is automatically removed

// 3. Creating a Set from a string
const charSet = new Set('hello');
console.log(charSet); // Set(4) {'h', 'e', 'l', 'o'}
// Note: Duplicate 'l' is only stored once

// ---- BASIC SET OPERATIONS ----

// 1. Adding elements with add()
const fruitSet = new Set();
fruitSet.add('apple');
fruitSet.add('banana');
fruitSet.add('orange');

console.log(fruitSet); // Set(3) {'apple', 'banana', 'orange'}

// Method chaining with add()
fruitSet
  .add('grape')
  .add('kiwi')
  .add('mango');

console.log(fruitSet); // Set(6) {'apple', 'banana', 'orange', 'grape', 'kiwi', 'mango'}

// Adding duplicates has no effect
fruitSet.add('apple');
console.log(fruitSet); // Set(6) {'apple', 'banana', 'orange', 'grape', 'kiwi', 'mango'}
console.log(fruitSet.size); // 6 (size remains unchanged)

// 2. Checking if an element exists with has()
console.log(fruitSet.has('apple')); // true
console.log(fruitSet.has('watermelon')); // false

// 3. Getting the size of a Set
console.log(fruitSet.size); // 6

// 4. Deleting elements with delete()
fruitSet.delete('mango');
console.log(fruitSet); // Set(5) {'apple', 'banana', 'orange', 'grape', 'kiwi'}
console.log(fruitSet.delete('watermelon')); // false (element doesn't exist)

// 5. Clearing a Set with clear()
const tempSet = new Set([1, 2, 3]);
console.log(tempSet); // Set(3) {1, 2, 3}
tempSet.clear();
console.log(tempSet); // Set(0) {}

// ---- ITERATING SETS ----

// 1. Using for...of to iterate over values
console.log('Iterating with for...of:');
for (const fruit of fruitSet) {
  console.log(fruit);
}
// apple
// banana
// orange
// grape
// kiwi

// 2. Using forEach method
console.log('Iterating with forEach:');
fruitSet.forEach((value) => {
  console.log(value);
});
// apple
// banana
// orange
// grape
// kiwi

// 3. Iterating over entries
// Note: In a Set, the key and value are the same
console.log('Set entries:');
for (const entry of fruitSet.entries()) {
  console.log(entry); // [value, value] pairs
}
// ['apple', 'apple']
// ['banana', 'banana']
// ['orange', 'orange']
// ['grape', 'grape']
// ['kiwi', 'kiwi']

// 4. Iterating over values explicitly
console.log('Set values:');
for (const value of fruitSet.values()) {
  console.log(value);
}
// apple
// banana
// orange
// grape
// kiwi

// 5. Iterating over keys (same as values in a Set)
console.log('Set keys (same as values):');
for (const key of fruitSet.keys()) {
  console.log(key);
}
// apple
// banana
// orange
// grape
// kiwi

// ---- SET METHODS AND OPERATIONS ----

// 1. Converting a Set to an Array
const fruitArray = Array.from(fruitSet);
// Alternatively: const fruitArray = [...fruitSet];
console.log('Set as array:', fruitArray);
// ['apple', 'banana', 'orange', 'grape', 'kiwi']

// 2. Set operations (implemented as functions)

// Union: Combine two sets
function union(setA, setB) {
  const result = new Set(setA);
  for (const elem of setB) {
    result.add(elem);
  }
  return result;
}

// Intersection: Elements in both sets
function intersection(setA, setB) {
  const result = new Set();
  for (const elem of setA) {
    if (setB.has(elem)) {
      result.add(elem);
    }
  }
  return result;
}

// Difference: Elements in setA but not in setB
function difference(setA, setB) {
  const result = new Set(setA);
  for (const elem of setB) {
    result.delete(elem);
  }
  return result;
}

// Symmetric Difference: Elements in either set but not in both
function symmetricDifference(setA, setB) {
  const result = new Set(setA);
  for (const elem of setB) {
    if (result.has(elem)) {
      result.delete(elem);
    } else {
      result.add(elem);
    }
  }
  return result;
}

// Is Subset: Check if all elements in setA are in setB
function isSubset(setA, setB) {
  for (const elem of setA) {
    if (!setB.has(elem)) {
      return false;
    }
  }
  return true;
}

// Using the set operations
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

console.log('Set A:', setA);
console.log('Set B:', setB);
console.log('Union:', union(setA, setB));
console.log('Intersection:', intersection(setA, setB));
console.log('Difference (A-B):', difference(setA, setB));
console.log('Symmetric Difference:', symmetricDifference(setA, setB));
console.log('Is A subset of B:', isSubset(setA, setB));

const setC = new Set([3, 4]);
console.log('Is C subset of B:', isSubset(setC, setB)); // true

// ---- SETS VS ARRAYS ----

// 1. Uniqueness: Sets automatically remove duplicates
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const setFromArray = new Set(arrayWithDuplicates);
console.log('Original array:', arrayWithDuplicates); // [1, 2, 2, 3, 4, 4, 5]
console.log('Set from array:', setFromArray); // Set(5) {1, 2, 3, 4, 5}

// Removing duplicates from an array using Set
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log('Array with duplicates removed:', uniqueArray); // [1, 2, 3, 4, 5]

// 2. Checking for element existence
const numbers = [1, 2, 3, 4, 5];
const numbersSet = new Set(numbers);

console.time('Array includes');
numbers.includes(5);
console.timeEnd('Array includes');

console.time('Set has');
numbersSet.has(5);
console.timeEnd('Set has');

// For large collections, Set.has() is generally much faster than Array.includes()

// 3. Order is preserved in both Arrays and Sets
const orderedSet = new Set();
orderedSet.add('z');
orderedSet.add('a');
orderedSet.add(1);
orderedSet.add('b');

console.log('Set preserves insertion order:');
for (const value of orderedSet) {
  console.log(value);
}
// z
// a
// 1
// b

// ---- WEAKSET ----

// WeakSet is a special kind of Set where:
// 1. Values must be objects
// 2. References to values are held "weakly" (can be garbage collected if no other references exist)
// 3. WeakSet is not iterable and has no size property

// Creating a WeakSet
const weakSet = new WeakSet();

// Using WeakSet
let obj1 = { id: 1, name: 'Object 1' };
let obj2 = { id: 2, name: 'Object 2' };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

// Cannot add primitive values
// weakSet.add(1); // TypeError: Invalid value used in weak set
// weakSet.add('string'); // TypeError: Invalid value used in weak set

// No iteration methods or size property
// weakSet.forEach(); // Error: weakSet.forEach is not a function
// console.log(weakSet.size); // undefined

// When reference is removed, entry becomes eligible for garbage collection
obj1 = null; // WeakSet entry with obj1 can be garbage collected

// ---- PRACTICAL EXAMPLES ----

// 1. Removing duplicates from an array
function removeDuplicates(array) {
  return [...new Set(array)];
}

const numbers2 = [1, 2, 2, 3, 4, 4, 5, 5, 5];
console.log('Array with duplicates:', numbers2);
console.log('Array with duplicates removed:', removeDuplicates(numbers2));
// [1, 2, 3, 4, 5]

// 2. Counting unique values
function countUniqueValues(array) {
  return new Set(array).size;
}

const data = [1, 2, 2, 3, 4, 4, 5, 5, 5];
console.log('Number of unique values:', countUniqueValues(data)); // 5

// 3. Finding unique characters in a string
function getUniqueChars(str) {
  return [...new Set(str)].join('');
}

console.log('Unique characters in "hello world":', getUniqueChars('hello world'));
// "helo wrd"

// 4. Checking for all unique values
function allUnique(array) {
  return array.length === new Set(array).size;
}

console.log('All values unique in [1, 2, 3, 4]:', allUnique([1, 2, 3, 4])); // true
console.log('All values unique in [1, 2, 2, 3]:', allUnique([1, 2, 2, 3])); // false

// 5. Using WeakSet to track objects
// For example, to track DOM elements that have been processed
const processedElements = new WeakSet();

function processElement(element) {
  if (processedElements.has(element)) {
    console.log('Element already processed, skipping');
    return;
  }
  
  // Process the element
  console.log('Processing element', element);
  
  // Mark as processed
  processedElements.add(element);
}

// Simulating DOM elements
const element1 = { tagName: 'DIV', id: 'main' };
const element2 = { tagName: 'SPAN', id: 'title' };

processElement(element1); // Processing element { tagName: 'DIV', id: 'main' }
processElement(element1); // Element already processed, skipping
processElement(element2); // Processing element { tagName: 'SPAN', id: 'title' }

// 6. Using Set for filtering unique items
function getUniqueProducts(products) {
  const uniqueProducts = new Set();
  
  return products.filter(product => {
    const isDuplicate = uniqueProducts.has(product.id);
    if (!isDuplicate) {
      uniqueProducts.add(product.id);
      return true;
    }
    return false;
  });
}

const products = [
  { id: 'p1', name: 'Product 1', price: 10 },
  { id: 'p2', name: 'Product 2', price: 20 },
  { id: 'p1', name: 'Product 1 (duplicate)', price: 15 },
  { id: 'p3', name: 'Product 3', price: 30 }
];

console.log('Original products:', products);
console.log('Unique products by ID:', getUniqueProducts(products));
// Filtered to only include first occurrence of each product ID