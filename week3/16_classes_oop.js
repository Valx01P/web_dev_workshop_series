// ==========================================
// JAVASCRIPT CLASSES AND OOP
// ==========================================

// JavaScript Classes (introduced in ES6) provide a cleaner syntax for 
// implementing object-oriented programming (OOP) patterns

// ---- CLASS DECLARATION ----

// 1. Basic class syntax
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  // Method
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  // Method
  greet() {
    return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
  }
}

// Creating an instance of a class using the 'new' keyword
const john = new Person('John', 'Doe', 30);
console.log(john.getFullName()); // "John Doe"
console.log(john.greet()); // "Hello, my name is John Doe and I am 30 years old."

// 2. Class Expression (anonymous)
const Animal = class {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a noise.`;
  }
};

// 3. Class Expression (named)
const Vehicle = class VehicleClass {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  // Inside the class, you can use the name VehicleClass
  getMakeModel() {
    return `${this.make} ${this.model}`;
  }
};

// Outside the class, you use the variable name Vehicle
const car = new Vehicle('Toyota', 'Corolla');
console.log(car.getMakeModel()); // "Toyota Corolla"

// ---- CONSTRUCTOR METHOD ----

// The constructor method is called automatically when creating a new instance
class Book {
  constructor(title, author, year) {
    // Initialize object properties
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = 0; // Default value
  }
}

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(book1); // Book {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, pages: 0}

// ---- CLASS METHODS ----

// 1. Instance Methods - operate on instances of the class
class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(value) {
    this.result += value;
    return this; // For method chaining
  }
  
  subtract(value) {
    this.result -= value;
    return this; // For method chaining
  }
  
  multiply(value) {
    this.result *= value;
    return this; // For method chaining
  }
  
  divide(value) {
    if (value === 0) {
      throw new Error('Cannot divide by zero');
    }
    this.result /= value;
    return this; // For method chaining
  }
  
  getResult() {
    return this.result;
  }
  
  clear() {
    this.result = 0;
    return this;
  }
}

// Using the Calculator class with method chaining
const calc = new Calculator();
console.log(calc.add(5).multiply(2).subtract(3).divide(2).getResult()); // 3.5

// 2. Static Methods - called on the class itself, not on instances
class MathUtils {
  static square(x) {
    return x * x;
  }
  
  static cube(x) {
    return x * x * x;
  }
  
  static sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
}

console.log(MathUtils.square(4)); // 16
console.log(MathUtils.cube(3)); // 27
console.log(MathUtils.sum(1, 2, 3, 4, 5)); // 15

// You cannot call static methods on instances
const mathUtils = new MathUtils();
// mathUtils.square(4); // TypeError: mathUtils.square is not a function

// ---- GETTERS AND SETTERS ----

class Temperature {
  constructor(celsius) {
    this._celsius = celsius; // Convention: underscore for "private" properties
  }
  
  // Getter for celsius
  get celsius() {
    return this._celsius;
  }
  
  // Setter for celsius
  set celsius(value) {
    if (value < -273.15) {
      throw new Error('Temperature below absolute zero is not possible');
    }
    this._celsius = value;
  }
  
  // Getter for fahrenheit
  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  }
  
  // Setter for fahrenheit
  set fahrenheit(value) {
    this.celsius = (value - 32) * 5/9; // Reuse celsius setter validation
  }
}

const temp = new Temperature(25);
console.log(temp.celsius); // 25
console.log(temp.fahrenheit); // 77

temp.celsius = 30;
console.log(temp.celsius); // 30
console.log(temp.fahrenheit); // 86

temp.fahrenheit = 68;
console.log(temp.celsius); // 20
console.log(temp.fahrenheit); // 68

// ---- CLASS FIELDS (MODERN JAVASCRIPT) ----

// Class fields define properties directly without using constructor
class User {
  // Public fields
  name = 'Anonymous';
  role = 'User';
  
  // Private fields (prefixed with #)
  #password = 'default123';
  
  constructor(name, role, password) {
    if (name) this.name = name;
    if (role) this.role = role;
    if (password) this.#password = password;
  }
  
  // Method to access private field
  verifyPassword(input) {
    return input === this.#password;
  }
  
  // Private method (prefixed with #)
  #generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  
  // Public method that uses private method
  register() {
    const id = this.#generateId();
    return `User ${this.name} registered with ID: ${id}`;
  }
}

const admin = new User('Alice', 'Admin', 'securepass123');
console.log(admin.name); // "Alice"
console.log(admin.role); // "Admin"
// console.log(admin.#password); // SyntaxError: Private field '#password' not accessible
console.log(admin.verifyPassword('securepass123')); // true
console.log(admin.verifyPassword('wrongpass')); // false
console.log(admin.register()); // "User Alice registered with ID: [random string]"

// ---- INHERITANCE (EXTENDS) ----

// Parent class (superclass)
class Shape {
  constructor(color) {
    this.color = color;
  }
  
  getColor() {
    return this.color;
  }
  
  getArea() {
    // To be implemented by subclasses
    return 0;
  }
}

// Child class (subclass)
class Circle extends Shape {
  constructor(color, radius) {
    // Call parent constructor
    super(color);
    this.radius = radius;
  }
  
  // Override parent method
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  
  // Add new method
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

// Another child class
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
  
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle('red', 5);
console.log(circle.getColor()); // "red" (Inherited from Shape)
console.log(circle.getArea()); // 78.54 (Overridden)
console.log(circle.getCircumference()); // 31.42 (Added in Circle)

const rectangle = new Rectangle('blue', 4, 6);
console.log(rectangle.getColor()); // "blue" (Inherited from Shape)
console.log(rectangle.getArea()); // 24 (Overridden)
console.log(rectangle.getPerimeter()); // 20 (Added in Rectangle)

// ---- POLYMORPHISM ----

// Polymorphism allows objects of different classes to be treated as objects of a common superclass
class Animal2 {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal2 {
  speak() {
    return `${this.name} barks`;
  }
}

class Cat extends Animal2 {
  speak() {
    return `${this.name} meows`;
  }
}

class Duck extends Animal2 {
  speak() {
    return `${this.name} quacks`;
  }
}

// Polymorphic function that works with any Animal subclass
function makeAnimalSpeak(animal) {
  console.log(animal.speak());
}

const animals = [
  new Animal2("Generic Animal"),
  new Dog("Rex"),
  new Cat("Whiskers"),
  new Duck("Donald")
];

// Each animal speaks in its own way
animals.forEach(animal => makeAnimalSpeak(animal));
// "Generic Animal makes a sound"
// "Rex barks"
// "Whiskers meows"
// "Donald quacks"

// ---- ENCAPSULATION WITH CLOSURES ----

// Using closures to create private variables (alternative to private fields)
function createCounter() {
  // Private variable
  let count = 0;
  
  // Return an object with methods that can access the private variable
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
    },
    reset() {
      count = 0;
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0

// ---- MIXINS ----

// Mixins are a way to add functionality to classes without inheritance
// Define a mixin as an object with methods
const timestampMixin = {
  getCreatedAt() {
    return this.createdAt;
  },
  
  setCreatedAt() {
    this.createdAt = new Date();
    return this;
  }
};

const loggableMixin = {
  log(message) {
    console.log(`[${new Date().toISOString()}] ${this.constructor.name}: ${message}`);
    return this;
  }
};

// Helper function to apply mixins to a class
function applyMixins(targetClass, ...mixins) {
  mixins.forEach(mixin => {
    Object.getOwnPropertyNames(mixin).forEach(name => {
      targetClass.prototype[name] = mixin[name];
    });
  });
}

// Using mixins with a class
class Task {
  constructor(title) {
    this.title = title;
    this.completed = false;
    this.setCreatedAt(); // Using method from mixin
  }
  
  complete() {
    this.completed = true;
    this.log(`Completed task: ${this.title}`); // Using method from mixin
    return this;
  }
}

// Apply mixins to the Task class
applyMixins(Task, timestampMixin, loggableMixin);

const task = new Task("Learn JavaScript Mixins");
console.log(task.getCreatedAt()); // Date object
task.complete(); // Logs: "[ISO date] Task: Completed task: Learn JavaScript Mixins"

// ---- OOP DESIGN PATTERNS ----

// 1. Factory Pattern - Create objects without exposing instantiation logic
class UserFactory {
  static createAdmin(name) {
    return new User(name, 'Admin', 'admin123');
  }
  
  static createRegularUser(name) {
    return new User(name, 'User', 'user123');
  }
  
  static createGuest() {
    return new User('Guest', 'Guest', 'guest123');
  }
}

const adminUser = UserFactory.createAdmin('Jane');
console.log(adminUser.role); // "Admin"

// 2. Singleton Pattern - Ensure a class has only one instance
class Database {
  static instance;
  
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    
    this.data = [];
    Database.instance = this;
  }
  
  insert(item) {
    this.data.push(item);
    return this;
  }
  
  findAll() {
    return [...this.data];
  }
}

// Both variables reference the same instance
const db1 = new Database();
const db2 = new Database();

db1.insert({ id: 1, name: 'Item 1' });
console.log(db2.findAll()); // [{ id: 1, name: 'Item 1' }]
console.log(db1 === db2); // true

// 3. Observer Pattern - Create subscription model for event handling
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
  }
  
  emit(event, ...args) {
    if (!this.events[event]) {
      return false;
    }
    this.events[event].forEach(listener => listener(...args));
    return true;
  }
  
  removeListener(event, listener) {
    if (!this.events[event]) {
      return this;
    }
    this.events[event] = this.events[event].filter(l => l !== listener);
    return this;
  }
}

// Using the Observer pattern
const emitter = new EventEmitter();

function userLoggedIn(username) {
  console.log(`User logged in: ${username}`);
}

function sendWelcomeEmail(username) {
  console.log(`Welcome email sent to ${username}`);
}

emitter.on('login', userLoggedIn);
emitter.on('login', sendWelcomeEmail);

emitter.emit('login', 'john_doe'); 
// Logs: 
// "User logged in: john_doe"
// "Welcome email sent to john_doe"

// ---- ABSTRACTION AND INTERFACES ----

// JavaScript doesn't have built-in support for abstract classes or interfaces
// but we can simulate them:

// 1. Simulating Abstract Classes
class AbstractVehicle {
  constructor() {
    if (this.constructor === AbstractVehicle) {
      throw new Error("Cannot instantiate abstract class");
    }
  }
  
  // Abstract methods
  start() {
    throw new Error("Method 'start()' must be implemented");
  }
  
  stop() {
    throw new Error("Method 'stop()' must be implemented");
  }
  
  // Concrete method
  honk() {
    return "Beep!";
  }
}

class Car2 extends AbstractVehicle {
  start() {
    return "Car engine started";
  }
  
  stop() {
    return "Car engine stopped";
  }
}

// const abstract = new AbstractVehicle(); // Error: Cannot instantiate abstract class
const myCar = new Car2();
console.log(myCar.start()); // "Car engine started"
console.log(myCar.honk()); // "Beep!"

// 2. Simulating Interfaces
// Using TypeScript or JSDoc for interfaces is better in real projects
function implementsInterface(object, interfaceMethods) {
  const unimplemented = [];
  
  for (const method of interfaceMethods) {
    if (typeof object[method] !== 'function') {
      unimplemented.push(method);
    }
  }
  
  if (unimplemented.length > 0) {
    throw new Error(`Object does not implement: ${unimplemented.join(', ')}`);
  }
  
  return true;
}

// Example usage of interface simulation
const flyableInterface = ['fly', 'land'];
const swimmableInterface = ['swim', 'dive'];

class Bird {
  fly() {
    return "Bird is flying";
  }
  
  land() {
    return "Bird has landed";
  }
}

class Fish {
  swim() {
    return "Fish is swimming";
  }
  
  dive() {
    return "Fish is diving";
  }
}

const bird = new Bird();
const fish = new Fish();

console.log(implementsInterface(bird, flyableInterface)); // true
console.log(implementsInterface(fish, swimmableInterface)); // true
// implementsInterface(bird, swimmableInterface); // Error: Object does not implement: swim, dive