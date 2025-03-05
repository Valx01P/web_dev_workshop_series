// ==========================================
// JAVASCRIPT OBJECTS
// ==========================================

// Objects are collections of key-value pairs where values can be any data type
// They are one of JavaScript's fundamental data types and are highly versatile

// ---- CREATING OBJECTS ----

// 1. Object literal notation (most common)
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  isEmployed: true
};

console.log(person);

// 2. Using the Object constructor
const emptyObject = new Object();
console.log(emptyObject); // {}

// 3. Object.create() method
const prototype = {
  greet: function() {
    return `Hello, my name is ${this.firstName}`;
  }
};

const employee = Object.create(prototype);
employee.firstName = 'Jane';
employee.lastName = 'Smith';
employee.jobTitle = 'Developer';

console.log(employee.greet()); // "Hello, my name is Jane"

// ---- ACCESSING OBJECT PROPERTIES ----

// 1. Dot notation
console.log(person.firstName); // "John"
console.log(person.age); // 30

// 2. Bracket notation (useful when property name is dynamic or contains special characters)
console.log(person['lastName']); // "Doe"

const propertyName = 'age';
console.log(person[propertyName]); // 30

// Properties with special characters require bracket notation
const product = {
  name: 'Laptop',
  'product-id': 'LT-123',
  'price in USD': 999
};

// console.log(product.product-id); // Error: Invalid syntax
console.log(product['product-id']); // "LT-123"
console.log(product['price in USD']); // 999

// ---- MODIFYING OBJECTS ----

// 1. Adding new properties
person.email = 'john.doe@example.com';
person['phone'] = '123-456-7890';

console.log(person);
// {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   isEmployed: true,
//   email: 'john.doe@example.com',
//   phone: '123-456-7890'
// }

// 2. Updating properties
person.age = 31;
person['isEmployed'] = false;

console.log(person.age); // 31
console.log(person.isEmployed); // false

// 3. Deleting properties
delete person.email;
console.log(person.email); // undefined

// ---- METHODS IN OBJECTS ----

// 1. Adding methods to objects
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  // Shorthand method syntax (ES6)
  multiply(a, b) {
    return a * b;
  },
  // Arrow function (behaves differently with 'this')
  divide: (a, b) => a / b
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(2, 3)); // 6
console.log(calculator.divide(10, 2)); // 5

// 2. Methods with 'this' keyword
const user = {
  firstName: 'Alice',
  lastName: 'Johnson',
  
  // Regular function as method (has access to 'this')
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Arrow function as method ('this' refers to outer scope, not the object)
  getArrowFullName: () => {
    // 'this' here doesn't refer to user object
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Shorthand method (has access to 'this')
  greet() {
    return `Hello, I'm ${this.getFullName()}`;
  }
};

console.log(user.getFullName()); // "Alice Johnson"
console.log(user.greet()); // "Hello, I'm Alice Johnson"
// console.log(user.getArrowFullName()); // Likely "undefined undefined" (depends on context)

// ---- OBJECT DESTRUCTURING (ES6) ----

// 1. Basic destructuring
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age); // "John Doe 31"

// 2. Destructuring with new variable names
const { firstName: fName, lastName: lName } = person;
console.log(fName, lName); // "John Doe"

// 3. Destructuring with default values
const { email = 'not provided', age: userAge = 'unknown' } = person;
console.log(email, userAge); // "not provided 31"

// 4. Nested destructuring
const company = {
  name: 'Acme Corp',
  location: {
    city: 'New York',
    country: 'USA',
    address: {
      street: '123 Main St',
      zipCode: '10001'
    }
  }
};

const { location: { city, country, address: { street } } } = company;
console.log(city, country, street); // "New York USA 123 Main St"

// ---- OBJECT SPREAD OPERATOR (ES6) ----

// 1. Copying objects
const personCopy = { ...person };
console.log(personCopy);

// 2. Merging objects
const defaults = { theme: 'light', fontSize: 'medium', notifications: true };
const userPreferences = { theme: 'dark', fontSize: 'large' };

const settings = { ...defaults, ...userPreferences };
console.log(settings);
// { theme: 'dark', fontSize: 'large', notifications: true }

// 3. Creating new objects with modified properties
const updatedPerson = { ...person, age: 32, profession: 'Developer' };
console.log(updatedPerson);
// Original person object remains unchanged

// ---- OBJECT.KEYS, VALUES, ENTRIES ----

// 1. Object.keys() - Returns an array of property names
const personKeys = Object.keys(person);
console.log(personKeys); // ['firstName', 'lastName', 'age', 'isEmployed', 'phone']

// 2. Object.values() - Returns an array of property values
const personValues = Object.values(person);
console.log(personValues); // ['John', 'Doe', 31, false, '123-456-7890']

// 3. Object.entries() - Returns an array of [key, value] pairs
const personEntries = Object.entries(person);
console.log(personEntries);
// [
//   ['firstName', 'John'],
//   ['lastName', 'Doe'],
//   ['age', 31],
//   ['isEmployed', false],
//   ['phone', '123-456-7890']
// ]

// 4. Using entries for iteration
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// ---- COMPUTED PROPERTY NAMES (ES6) ----

const propName = 'dynamicProperty';
const propValue = 'This is a dynamic value';

// Creating object with computed property name
const dynamicObject = {
  [propName]: propValue,
  ['computed' + 'Name']: 'Another Value'
};

console.log(dynamicObject.dynamicProperty); // "This is a dynamic value"
console.log(dynamicObject.computedName); // "Another Value"

// ---- PROPERTY SHORTHAND (ES6) ----

const firstName2 = 'Sarah';
const lastName2 = 'Connor';
const age2 = 35;

// Old way
const oldWay = {
  firstName2: firstName2,
  lastName2: lastName2,
  age2: age2
};

// ES6 shorthand when variable name matches property name
const user2 = {
  firstName2, // Same as firstName2: firstName2
  lastName2,
  age2
};

console.log(user2); // { firstName2: 'Sarah', lastName2: 'Connor', age2: 35 }

// ---- OBJECT METHODS ----

// 1. Object.assign() - Copy properties from one object to another
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source);

console.log(target); // { a: 1, b: 3, c: 4 } (target is modified)
console.log(result === target); // true (returns the target object)

// 2. Object.freeze() - Prevents properties from being modified
const frozen = { prop: 'Value' };
Object.freeze(frozen);
frozen.prop = 'New Value'; // Silently ignored in non-strict mode
frozen.newProp = 'Another Value'; // Also ignored

console.log(frozen); // { prop: 'Value' }

// 3. Object.seal() - Prevents adding or deleting properties
const sealed = { prop: 'Value' };
Object.seal(sealed);
sealed.prop = 'New Value'; // This works
sealed.newProp = 'Another Value'; // Ignored

console.log(sealed); // { prop: 'New Value' }

// 4. Object.defineProperty() - Define new property with fine-grained control
const configurable = {};

Object.defineProperty(configurable, 'readOnly', {
  value: 'This cannot be changed',
  writable: false,
  enumerable: true,
  configurable: false
});

configurable.readOnly = 'Try to change me';
console.log(configurable.readOnly); // "This cannot be changed"

// ---- CHECKING PROPERTIES ----

// 1. Using hasOwnProperty() method
console.log(person.hasOwnProperty('firstName')); // true
console.log(person.hasOwnProperty('toString')); // false (inherited from prototype)

// 2. in operator (checks own and inherited properties)
console.log('firstName' in person); // true
console.log('toString' in person); // true (inherited)

// 3. Optional chaining (?.) - ES2020
const deepObject = {
  level1: {
    level2: {
      level3: {
        value: 'Deep value'
      }
    }
  }
};

// Without optional chaining
// const deepValue = deepObject.level1.level2.level3.value; // Error if any level is undefined

// With optional chaining
const deepValue = deepObject?.level1?.level2?.level3?.value;
console.log(deepValue); // "Deep value"

const nonExistentValue = deepObject?.level1?.missing?.value;
console.log(nonExistentValue); // undefined (no error)

// ---- OBJECT PROTOTYPES AND INHERITANCE ----

// 1. Prototype chain
const animal = {
  makeSound() {
    return 'Some generic sound';
  }
};

const dog = Object.create(animal);
dog.makeSound = function() {
  return 'Woof woof!';
};

const cat = Object.create(animal);
cat.makeSound = function() {
  return 'Meow!';
};

console.log(dog.makeSound()); // "Woof woof!"
console.log(cat.makeSound()); // "Meow!"

// 2. Constructor functions (pre-ES6 way of creating "classes")
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

const johnDoe = new Person('John', 'Doe', 25);
console.log(johnDoe.getFullName()); // "John Doe"

// 3. Classes (ES6) - syntactic sugar over prototypes
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    return `${this.name} barks!`;
  }
}

const rex = new Dog('Rex', 'German Shepherd');
console.log(rex.speak()); // "Rex barks!"

// ---- OBJECTS AS ARGUMENTS ----

// Objects as function parameters (destructuring)
function printUserInfo({ firstName, lastName, age = 'N/A' }) {
  console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}

printUserInfo(person); // "Name: John Doe, Age: 31"

// Accepting option objects
function createWidget(options = {}) {
  const defaults = {
    width: 100,
    height: 100,
    color: 'blue',
    enabled: true
  };
  
  // Merge defaults with provided options
  const config = { ...defaults, ...options };
  
  return `Widget: ${config.width}x${config.height}, ${config.color}`;
}

console.log(createWidget()); // "Widget: 100x100, blue"
console.log(createWidget({ width: 200, color: 'red' })); // "Widget: 200x100, red"

// ---- ADVANCED OBJECT PATTERNS ----

// 1. Factory functions
function createUser(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
}

const user3 = createUser('Alice', 'Williams', 28);
console.log(user3.getFullName()); // "Alice Williams"

// 2. Namespace pattern
const MyApp = {
  data: {
    users: []
  },
  utils: {
    formatDate(date) {
      return date.toISOString();
    }
  },
  init() {
    console.log('App initialized');
  }
};

MyApp.init(); // "App initialized"
console.log(MyApp.utils.formatDate(new Date()));

// 3. Module pattern (IIFE + Closure)
const Counter = (function() {
  let count = 0; // Private variable
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
})();

console.log(Counter.getCount()); // 0
Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // 2
// console.log(Counter.count); // undefined (private)

// 4. Singleton pattern
const Database = (function() {
  let instance;
  
  function createInstance() {
    return {
      data: [],
      add(item) {
        this.data.push(item);
      },
      getAll() {
        return this.data;
      }
    };
  }
  
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const db1 = Database.getInstance();
const db2 = Database.getInstance();

db1.add('item 1');
console.log(db2.getAll()); // ["item 1"] (same instance)
console.log(db1 === db2); // true