/**
 * =========================================
 * JAVASCRIPT OBJECTS: A COMPREHENSIVE GUIDE
 * =========================================
 * 
 * Objects are one of the most powerful and fundamental data structures in JavaScript.
 * They allow you to store collections of related data and functionality in a single container.
 */

// =====================
// PART 1: OBJECT BASICS
// =====================

/**
 * Objects are collections of key-value pairs, where:
 * - Keys (or properties) are always strings or Symbols
 * - Values can be any JavaScript data type (including other objects)
 */

// Creating an object using object literal notation (most common way)
const person = {
  firstName: "John",      // String value
  lastName: "Doe",        // String value
  age: 30,                // Number value
  isEmployed: true,       // Boolean value
  hobbies: ["reading", "hiking", "coding"],  // Array value
  address: {              // Nested object
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345"
  }
};

// Accessing object properties using dot notation
console.log(person.firstName);              // Output: "John"
console.log(person.hobbies[1]);             // Output: "hiking"
console.log(person.address.city);           // Output: "Anytown"

// Accessing object properties using bracket notation (useful for dynamic property names)
console.log(person["lastName"]);            // Output: "Doe"

// Using a variable as a property name
const propertyName = "age";
console.log(person[propertyName]);          // Output: 30

// Adding new properties to an existing object
person.email = "john.doe@example.com";
person["phoneNumber"] = "555-123-4567";

// Updating existing properties
person.age = 31;

// Deleting properties
delete person.isEmployed;


// ===========================
// PART 2: METHODS IN OBJECTS
// ===========================

/**
 * Objects can also contain functions as values.
 * When a function is a property of an object, it's called a method.
 */

const calculator = {
  // Method definition
  add: function(a, b) {
    return a + b;
  },
  
  // Shorthand method syntax (ES6+)
  subtract(a, b) {
    return a - b;
  },
  
  multiply(a, b) {
    return a * b;
  },
  
  divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
};

// Calling object methods
console.log(calculator.add(5, 3));      // Output: 8
console.log(calculator.multiply(4, 6)); // Output: 24


// ==========================================
// PART 3: THE 'THIS' KEYWORD INSIDE OBJECTS
// ==========================================

/**
 * The 'this' keyword refers to the object that the method belongs to.
 * It allows methods to access and manipulate the object's properties.
 */

const user = {
  username: "jsmith",
  firstName: "Jane",
  lastName: "Smith",
  
  // Method using 'this' to access other properties
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Method that modifies properties using 'this'
  updateName(newFirstName, newLastName) {
    this.firstName = newFirstName;
    this.lastName = newLastName;
  }
};

console.log(user.getFullName());  // Output: "Jane Smith"

user.updateName("Janet", "Johnson");
console.log(user.getFullName());  // Output: "Janet Johnson"


// ============================================
// PART 4: OBJECT CREATION PATTERNS
// ============================================

/**
 * There are multiple ways to create objects in JavaScript
 */

// 1. Object literal (already demonstrated above)
const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008
};

// 2. Using the Object constructor
const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2022;

// 3. Using Object.create() - creates an object with the specified prototype
const animal = {
  makeSound() {
    console.log("Some generic sound");
  }
};

const dog = Object.create(animal);
dog.makeSound = function() {
  console.log("Woof!");
};

// 4. Constructor functions (old way, pre-ES6)
function Product(name, price) {
  this.name = name;
  this.price = price;
  this.getInfo = function() {
    return `${this.name} costs $${this.price}`;
  };
}

const laptop = new Product("MacBook Pro", 1999);
console.log(laptop.getInfo());  // Output: "MacBook Pro costs $1999"

// 5. ES6 Classes (modern way, but still uses prototypes behind the scenes)
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  celebrateBirthday() {
    this.age++;
    return `Happy ${this.age}th birthday!`;
  }
}

const alice = new Person("Alice", "Johnson", 28);
console.log(alice.getFullName());      // Output: "Alice Johnson"
console.log(alice.celebrateBirthday()); // Output: "Happy 29th birthday!"


// =================================
// PART 5: OBJECT PROPERTY FEATURES
// =================================

/**
 * Object properties have additional attributes that can be configured
 * using Object.defineProperty() or Object.defineProperties()
 */

const product = {
  name: "Smartphone"
};

// Define a property with additional attributes
Object.defineProperty(product, 'price', {
  value: 599,
  writable: true,       // Can be changed
  enumerable: true,     // Will appear in for...in loops
  configurable: true    // Can be deleted or modified
});

// Define a read-only property (writable: false)
Object.defineProperty(product, 'id', {
  value: "PRD-123",
  writable: false,      // Cannot be changed
  enumerable: true,
  configurable: false   // Cannot be deleted or reconfigured
});

// Define a property with getters and setters
Object.defineProperty(product, 'discount', {
  get() {
    // Calculate discount based on some logic
    return this.price * 0.1; // 10% discount
  },
  set(value) {
    if (value < 0) {
      throw new Error("Discount cannot be negative");
    }
    this._discount = value; // Usually stored in a "private" property
  },
  enumerable: true,
  configurable: true
});

console.log(product.price);    // Output: 599
console.log(product.discount); // Output: 59.9 (10% of price)

product.price = 699;           // This works because writable is true
console.log(product.discount); // Output: 69.9 (10% of updated price)

// Trying to change a read-only property has no effect in strict mode
// and silently fails in non-strict mode
product.id = "NEW-ID";
console.log(product.id);       // Still outputs: "PRD-123"


// =============================
// PART 6: OBJECT DESTRUCTURING
// =============================

/**
 * ES6 introduced object destructuring, which provides a convenient
 * way to extract values from objects and assign them to variables.
 */

const student = {
  name: "Emily",
  grade: "A",
  subjects: ["Math", "Science", "History"],
  address: {
    city: "Boston",
    state: "MA"
  }
};

// Basic destructuring
const { name, grade } = student;
console.log(name);   // Output: "Emily"
console.log(grade);  // Output: "A"

// Destructuring with new variable names
const { name: studentName, grade: studentGrade } = student;
console.log(studentName);  // Output: "Emily"

// Destructuring nested objects
const { address: { city, state } } = student;
console.log(city);   // Output: "Boston"

// Destructuring with default values
const { age = 20 } = student;
console.log(age);    // Output: 20 (default value since student.age is undefined)

// Destructuring in function parameters
function printStudentInfo({ name, grade, subjects = [] }) {
  console.log(`${name} got a ${grade} and studies ${subjects.length} subjects`);
}

printStudentInfo(student);  // Output: "Emily got an A and studies 3 subjects"


// ==============================
// PART 7: OBJECT UTILITY METHODS
// ==============================

/**
 * JavaScript provides several built-in methods to work with objects
 */

const laptop = {
  brand: "Dell",
  model: "XPS 13",
  specs: {
    ram: "16GB",
    storage: "512GB SSD",
    cpu: "Intel i7"
  }
};

// Object.keys() - returns an array of the object's own enumerable property names
const laptopKeys = Object.keys(laptop);
console.log(laptopKeys);  // Output: ["brand", "model", "specs"]

// Object.values() - returns an array of the object's own enumerable property values
const laptopValues = Object.values(laptop);
console.log(laptopValues);  // Output: ["Dell", "XPS 13", {ram: "16GB", storage: "512GB SSD", cpu: "Intel i7"}]

// Object.entries() - returns an array of [key, value] pairs
const laptopEntries = Object.entries(laptop);
console.log(laptopEntries);  
// Output: [["brand", "Dell"], ["model", "XPS 13"], ["specs", {ram: "16GB", storage: "512GB SSD", cpu: "Intel i7"}]]

// Object.freeze() - prevents modifications to the object
const frozenConfig = {
  apiKey: "abc123",
  endpoint: "https://api.example.com"
};

Object.freeze(frozenConfig);
// This will have no effect and in strict mode will throw an error
frozenConfig.apiKey = "newKey";
console.log(frozenConfig.apiKey);  // Still outputs: "abc123"

// Object.seal() - prevents adding/removing properties but allows modifying existing ones
const sealedUser = {
  id: 42,
  username: "jdoe"
};

Object.seal(sealedUser);
sealedUser.username = "janedoe";  // This works
sealedUser.email = "jane@example.com";  // This has no effect
console.log(sealedUser);  // Output: {id: 42, username: "janedoe"}

// Object.assign() - copies all enumerable properties from source objects to a target object
const defaultSettings = {
  theme: "light",
  notifications: true,
  fontSize: "medium"
};

const userSettings = {
  theme: "dark",
  fontSize: "large"
};

// Combine the objects, with userSettings taking precedence
const finalSettings = Object.assign({}, defaultSettings, userSettings);
console.log(finalSettings);
// Output: {theme: "dark", notifications: true, fontSize: "large"}

// Spread operator (ES6+) can also be used to merge objects
const mergedSettings = { ...defaultSettings, ...userSettings };
console.log(mergedSettings);
// Output: {theme: "dark", notifications: true, fontSize: "large"}


// =============================
// PART 8: PRACTICAL APPLICATIONS
// =============================

/**
 * Here are some common practical uses of objects in JavaScript applications
 */

// 1. Configuration objects
function setupApplication(config) {
  // Set defaults for any missing config options
  const defaultConfig = {
    environment: "development",
    logLevel: "info",
    theme: "light",
    maxConnections: 10
  };
  
  // Merge user config with defaults
  const finalConfig = { ...defaultConfig, ...config };
  
  // Now use the configuration
  console.log(`Starting app in ${finalConfig.environment} mode`);
  console.log(`Log level: ${finalConfig.logLevel}`);
}

setupApplication({ environment: "production", maxConnections: 25 });
// Output:
// "Starting app in production mode"
// "Log level: info"

// 2. Data transformation using Object.fromEntries() and map()
const prices = [
  ["apple", 0.99],
  ["banana", 0.59],
  ["orange", 1.29]
];

// Convert array to object
const priceObject = Object.fromEntries(prices);
console.log(priceObject);  // Output: {apple: 0.99, banana: 0.59, orange: 1.29}

// 3. Using your function from the beginning of this tutorial
function createDictionary(keys, values) {
  return Object.fromEntries(
    keys.map((key, i) => [key, values[i]])
  );
}

const fruits = ["apple", "banana", "cherry"];
const quantities = [5, 10, 15];
const fruitInventory = createDictionary(fruits, quantities);
console.log(fruitInventory);  // Output: {apple: 5, banana: 10, cherry: 15}

// 4. Dynamic property access for flexible APIs
function processUserData(userData, fields) {
  const result = {};
  
  fields.forEach(field => {
    if (userData.hasOwnProperty(field)) {
      result[field] = userData[field];
    }
  });
  
  return result;
}

const user = {
  id: 123,
  name: "Alex Turner",
  email: "alex@example.com",
  address: "123 Main St",
  phone: "555-123-4567",
  ssn: "123-45-6789"  // Sensitive information
};

// Only extract public information
const publicUserData = processUserData(user, ["id", "name", "email"]);
console.log(publicUserData);
// Output: {id: 123, name: "Alex Turner", email: "alex@example.com"}


// =============================
// PART 9: ADVANCED OBJECT CONCEPTS
// =============================

/**
 * For more advanced JavaScript programming, understanding these concepts is crucial
 */

// 1. Prototypal inheritance
const vehicle = {
  hasEngine: true,
  start() {
    return "Engine starting...";
  },
  stop() {
    return "Engine stopped";
  }
};

// Create an object that inherits from vehicle
const motorcycle = Object.create(vehicle);
motorcycle.wheels = 2;
motorcycle.handlebar = true;
motorcycle.start = function() {
  return "Motorcycle engine revving!";
};

console.log(motorcycle.wheels);      // Output: 2
console.log(motorcycle.hasEngine);   // Output: true (inherited)
console.log(motorcycle.start());     // Output: "Motorcycle engine revving!" (overridden)
console.log(motorcycle.stop());      // Output: "Engine stopped" (inherited)

// 2. Property descriptors and immutability patterns
const settings = {};

// Define a property that cannot be changed or deleted
Object.defineProperty(settings, 'API_URL', {
  value: 'https://api.example.com/v1',
  writable: false,
  configurable: false,
  enumerable: true
});

// Create a deeply frozen object (for configuration that should never change)
const deepFreeze = obj => {
  // Freeze properties
  Object.freeze(obj);
  
  // Recursively freeze all property values that are objects
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== null 
        && (typeof obj[prop] === 'object' || typeof obj[prop] === 'function') 
        && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });
  
  return obj;
};

const appConfig = deepFreeze({
  endpoints: {
    users: "/api/users",
    products: "/api/products"
  },
  timeouts: {
    short: 1000,
    long: 5000
  }
});

// 3. Using symbols for "private" properties (pre-ES2022 approach)
const privateProps = new WeakMap();

class BankAccount {
  constructor(accountNumber, initialBalance) {
    // "Private" properties stored in the WeakMap
    privateProps.set(this, {
      accountNumber,
      balance: initialBalance
    });
  }
  
  getBalance() {
    return privateProps.get(this).balance;
  }
  
  deposit(amount) {
    const props = privateProps.get(this);
    props.balance += amount;
  }
  
  withdraw(amount) {
    const props = privateProps.get(this);
    if (amount <= props.balance) {
      props.balance -= amount;
      return true;
    }
    return false;
  }
}

const account = new BankAccount("123456789", 1000);
console.log(account.getBalance());  // Output: 1000
account.deposit(500);
console.log(account.getBalance());  // Output: 1500
// There's no direct access to the balance property from outside

// 4. ES2022 Private Fields and Methods
class ModernBankAccount {
  // Private fields with # prefix
  #accountNumber;
  #balance;
  
  constructor(accountNumber, initialBalance) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
  }
  
  // Private method
  #validateAmount(amount) {
    return amount > 0 && Number.isFinite(amount);
  }
  
  getBalance() {
    return this.#balance;
  }
  
  deposit(amount) {
    if (this.#validateAmount(amount)) {
      this.#balance += amount;
      return true;
    }
    return false;
  }
  
  withdraw(amount) {
    if (this.#validateAmount(amount) && amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }
}

// =============================
// CONCLUSION
// =============================

/**
 * JavaScript objects are versatile and powerful:
 * - They organize related data and functionality
 * - They form the foundation of JavaScript's OOP capabilities
 * - Modern JS features like destructuring make working with objects easier
 * - Understanding objects deeply is key to mastering JavaScript
 * 
 * For more advanced topics, look into:
 * - Object proxies (ES6)
 * - Object observers (using Proxy)
 * - JSON manipulation
 * - TypeScript interfaces for object type-checking
 */