// ==========================================
// JAVASCRIPT MAPS
// ==========================================

// Map is a collection of keyed data items, similar to an Object
// But Maps allow keys of any type and maintain insertion order

// ---- CREATING MAPS ----

// 1. Creating an empty Map
const emptyMap = new Map();
console.log(emptyMap); // Map(0) {}

// 2. Creating a Map with initial values
const userRoles = new Map([
  ['john', 'admin'],
  ['sarah', 'editor'],
  ['mike', 'user']
]);

console.log(userRoles); // Map(3) {'john' => 'admin', 'sarah' => 'editor', 'mike' => 'user'}

// 3. Creating a Map from an Object
const userObject = {
  john: 'admin',
  sarah: 'editor',
  mike: 'user'
};

const userMap = new Map(Object.entries(userObject));
console.log(userMap); // Map(3) {'john' => 'admin', 'sarah' => 'editor', 'mike' => 'user'}

// ---- BASIC MAP OPERATIONS ----

// 1. Adding elements with set()
const fruitMap = new Map();
fruitMap.set('apple', 5);
fruitMap.set('banana', 3);
fruitMap.set('orange', 2);

console.log(fruitMap); // Map(3) {'apple' => 5, 'banana' => 3, 'orange' => 2}

// Method chaining with set()
fruitMap
  .set('grape', 4)
  .set('kiwi', 7)
  .set('mango', 1);

console.log(fruitMap); // Map(6) {'apple' => 5, 'banana' => 3, 'orange' => 2, 'grape' => 4, 'kiwi' => 7, 'mango' => 1}

// 2. Getting elements with get()
console.log(fruitMap.get('apple')); // 5
console.log(fruitMap.get('banana')); // 3
console.log(fruitMap.get('watermelon')); // undefined (key doesn't exist)

// 3. Checking if a key exists with has()
console.log(fruitMap.has('orange')); // true
console.log(fruitMap.has('watermelon')); // false

// 4. Getting the size of a Map
console.log(fruitMap.size); // 6

// 5. Deleting elements with delete()
fruitMap.delete('mango');
console.log(fruitMap); // Map(5) {'apple' => 5, 'banana' => 3, 'orange' => 2, 'grape' => 4, 'kiwi' => 7}
console.log(fruitMap.delete('watermelon')); // false (key doesn't exist)

// 6. Clearing a Map with clear()
const tempMap = new Map([['a', 1], ['b', 2]]);
console.log(tempMap); // Map(2) {'a' => 1, 'b' => 2}
tempMap.clear();
console.log(tempMap); // Map(0) {}

// ---- ITERATING MAPS ----

// 1. Using for...of to iterate over [key, value] pairs
console.log('Iterating with for...of:');
for (const [key, value] of fruitMap) {
  console.log(`${key}: ${value}`);
}
// apple: 5
// banana: 3
// orange: 2
// grape: 4
// kiwi: 7

// 2. Using forEach method
console.log('Iterating with forEach:');
fruitMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// apple: 5
// banana: 3
// orange: 2
// grape: 4
// kiwi: 7

// 3. Iterating over keys only
console.log('Map keys:');
for (const key of fruitMap.keys()) {
  console.log(key);
}
// apple
// banana
// orange
// grape
// kiwi

// 4. Iterating over values only
console.log('Map values:');
for (const value of fruitMap.values()) {
  console.log(value);
}
// 5
// 3
// 2
// 4
// 7

// 5. Iterating over entries
console.log('Map entries:');
for (const entry of fruitMap.entries()) {
  console.log(entry); // [key, value] arrays
}
// ['apple', 5]
// ['banana', 3]
// ['orange', 2]
// ['grape', 4]
// ['kiwi', 7]

// ---- MAP METHODS ----

// 1. Converting a Map to an Array

// Array of [key, value] pairs
const entriesArray = Array.from(fruitMap);
console.log('Map as entries array:', entriesArray);
// [['apple', 5], ['banana', 3], ['orange', 2], ['grape', 4], ['kiwi', 7]]

// Array of keys
const keysArray = Array.from(fruitMap.keys());
console.log('Map keys array:', keysArray);
// ['apple', 'banana', 'orange', 'grape', 'kiwi']

// Array of values
const valuesArray = Array.from(fruitMap.values());
console.log('Map values array:', valuesArray);
// [5, 3, 2, 4, 7]

// 2. Converting a Map to an Object
// Note: This only works well if all keys are strings
function mapToObject(map) {
  const obj = {};
  for (const [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}

const fruitObject = mapToObject(fruitMap);
console.log('Map as object:', fruitObject);
// {apple: 5, banana: 3, orange: 2, grape: 4, kiwi: 7}

// 3. Merging Maps
function mergeMaps(map1, map2) {
  const mergedMap = new Map(map1);
  for (const [key, value] of map2) {
    mergedMap.set(key, value);
  }
  return mergedMap;
}

const priceMap1 = new Map([
  ['apple', 1.2],
  ['banana', 0.5]
]);

const priceMap2 = new Map([
  ['orange', 0.8],
  ['apple', 1.5] // Will override apple in priceMap1
]);

const mergedPriceMap = mergeMaps(priceMap1, priceMap2);
console.log('Merged map:', mergedPriceMap);
// Map(3) {'apple' => 1.5, 'banana' => 0.5, 'orange' => 0.8}

// ---- MAPS VS OBJECTS ----

// Maps have several advantages over objects:

// 1. Keys can be any data type, not just strings and symbols
const complexMap = new Map();

// Using numbers as keys
complexMap.set(1, 'Number One');

// Using objects as keys
const objKey1 = { id: 1 };
const objKey2 = { id: 2 };
complexMap.set(objKey1, 'Object One');
complexMap.set(objKey2, 'Object Two');

// Using arrays as keys
complexMap.set([1, 2, 3], 'Array Key');

// Using functions as keys
const funcKey = function() { return 'key'; };
complexMap.set(funcKey, 'Function Key');

console.log(complexMap.get(1)); // 'Number One'
console.log(complexMap.get(objKey1)); // 'Object One'
console.log(complexMap.size); // 4

// Note that objects as keys work by reference
const similarObj = { id: 1 };
console.log(complexMap.get(similarObj)); // undefined (different reference)

// 2. Maps preserve insertion order
const orderedMap = new Map();
orderedMap.set('z', 1);
orderedMap.set('a', 2);
orderedMap.set(1, 3);
orderedMap.set('b', 4);

console.log('Map keys in insertion order:');
for (const key of orderedMap.keys()) {
  console.log(key);
}
// z
// a
// 1
// b

// 3. Size property instead of manual counting
console.log('Map size:', orderedMap.size); // 4

// 4. Maps are optimized for frequent additions/removals
// Performance is typically better than Objects for this use case

// ---- WEAKMAP ----

// WeakMap is a special kind of Map where:
// 1. Keys must be objects
// 2. Keys are held "weakly" (can be garbage collected if no other references exist)
// 3. WeakMap is not iterable and has no size property

// Creating a WeakMap
const weakMap = new WeakMap();

// Using WeakMap
let keyObj1 = { id: 1 };
let keyObj2 = { id: 2 };

weakMap.set(keyObj1, 'Value for keyObj1');
weakMap.set(keyObj2, 'Value for keyObj2');

console.log(weakMap.get(keyObj1)); // 'Value for keyObj1'
console.log(weakMap.has(keyObj2)); // true

// Cannot use primitive values as keys
// weakMap.set('string', 'value'); // TypeError: Invalid value used as weak map key

// No iteration methods available
// weakMap.keys();     // Error: weakMap.keys is not a function
// weakMap.values();   // Error: weakMap.values is not a function
// weakMap.entries();  // Error: weakMap.entries is not a function
// weakMap.forEach();  // Error: weakMap.forEach is not a function

// No size property
// console.log(weakMap.size); // undefined

// When reference is removed, entry becomes eligible for garbage collection
keyObj1 = null; // Weakmap entry with keyObj1 can be garbage collected

// ---- PRACTICAL EXAMPLES ----

// 1. Using Map for a cache with object keys
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log('Cache hit!');
      return cache.get(key);
    }
    
    console.log('Cache miss!');
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const expensiveOperation = (a, b) => {
  console.log('Performing expensive calculation...');
  return a * b;
};

const memoizedOperation = memoize(expensiveOperation);

console.log(memoizedOperation(4, 5)); // Cache miss, calculates
console.log(memoizedOperation(4, 5)); // Cache hit, returns from cache
console.log(memoizedOperation(3, 7)); // Cache miss, calculates

// 2. Using Map for a simple event system
class EventBus {
  constructor() {
    this.subscribers = new Map();
  }
  
  subscribe(event, callback) {
    if (!this.subscribers.has(event)) {
      this.subscribers.set(event, []);
    }
    
    this.subscribers.get(event).push(callback);
    
    // Return unsubscribe function
    return () => {
      const callbacks = this.subscribers.get(event);
      const index = callbacks.indexOf(callback);
      if (index !== -1) {
        callbacks.splice(index, 1);
      }
    };
  }
  
  publish(event, data) {
    if (!this.subscribers.has(event)) {
      return;
    }
    
    for (const callback of this.subscribers.get(event)) {
      callback(data);
    }
  }
}

const bus = new EventBus();

const unsubscribe = bus.subscribe('userLoggedIn', (user) => {
  console.log(`User logged in: ${user.name}`);
});

bus.publish('userLoggedIn', { name: 'John', id: 123 });
// Logs: User logged in: John

unsubscribe(); // Remove the subscription
bus.publish('userLoggedIn', { name: 'Sarah', id: 456 });
// No output - subscriber was removed

// 3. Using Map as a frequency counter
function countCharacters(str) {
  const charCount = new Map();
  
  for (const char of str) {
    const count = charCount.get(char) || 0;
    charCount.set(char, count + 1);
  }
  
  return charCount;
}

const characterCounts = countCharacters('mississippi');
console.log('Character frequency:');
for (const [char, count] of characterCounts) {
  console.log(`${char}: ${count}`);
}
// m: 1
// i: 4
// s: 4
// p: 2

// 4. Using WeakMap for private data in classes
const privateData = new WeakMap();

class User {
  constructor(name, age) {
    privateData.set(this, {
      name,
      age,
      createdAt: new Date()
    });
  }
  
  getName() {
    return privateData.get(this).name;
  }
  
  getAge() {
    return privateData.get(this).age;
  }
  
  getCreatedAt() {
    return privateData.get(this).createdAt;
  }
  
  setName(name) {
    const data = privateData.get(this);
    data.name = name;
  }
}

const user = new User('Alice', 30);
console.log(user.getName()); // 'Alice'
console.log(user.getAge()); // 30

user.setName('Alicia');
console.log(user.getName()); // 'Alicia'

// Can't access private data directly
console.log(user.name); // undefined
console.log(user.createdAt); // undefined