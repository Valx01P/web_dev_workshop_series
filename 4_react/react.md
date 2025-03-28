# Complete React.js Tutorial (JavaScript)

## Table of Contents
1. [Introduction to React](#introduction-to-react)
2. [Setting Up Your Environment](#setting-up-your-environment)
3. [Core Concepts](#core-concepts)
4. [JSX Fundamentals](#jsx-fundamentals)
5. [Components: The Building Blocks](#components-the-building-blocks)
6. [Props: Passing Data](#props-passing-data)
7. [State: Managing Data](#state-managing-data)
8. [Event Handling](#event-handling)
9. [Lifecycle and Hooks](#lifecycle-and-hooks)
10. [Conditional Rendering](#conditional-rendering)
11. [Lists and Keys](#lists-and-keys)
12. [Forms in React](#forms-in-react)
13. [Context API](#context-api)
14. [Routing with React Router](#routing-with-react-router)
15. [Working with APIs](#working-with-apis)
16. [Performance Optimization](#performance-optimization)
17. [Best Practices](#best-practices)

## Introduction to React

React is a JavaScript library for building user interfaces, developed and maintained by Facebook (now Meta) and a community of individual developers and companies. Unlike full frameworks, React focuses specifically on the view layer of applications and excels at creating interactive, stateful UI components.

### Key Features of React

- **Component-Based**: React applications are built using components, reusable pieces of code that manage their own content, presentation, and behavior.
- **Declarative**: You tell React what state you want the UI to be in, and React efficiently updates and renders the right components when your data changes.
- **Virtual DOM**: React maintains a lightweight representation of the real DOM in memory (the Virtual DOM) and syncs only the necessary changes, improving performance.
- **Unidirectional Data Flow**: Data flows down from parent components to children, making applications easier to understand and debug.
- **JSX**: A syntax extension that lets you write HTML-like code in JavaScript, making UI code more intuitive.

## Setting Up Your Environment

### Creating a New React Application

The easiest way to start with React is using Create React App:

```javascript
// Install Create React App globally (if you haven't already)
npm install -g create-react-app

// Create a new React project
npx create-react-app my-react-app

// Navigate to your project
cd my-react-app

// Start the development server
npm start
```

### Project Structure

A basic Create React App project structure looks like this:

```
my-react-app/
  ├── node_modules/    // Dependencies
  ├── public/          // Static files
  │   ├── index.html   // Main HTML file
  │   └── favicon.ico  // Favicon
  ├── src/             // Source code
  │   ├── App.js       // Root component
  │   ├── index.js     // Entry point
  │   ├── App.css      // Styles
  │   └── index.css    // Global styles
  ├── package.json     // Project configuration
  └── README.md        // Documentation
```

## Core Concepts

### What Makes React Different?

React introduced several paradigm shifts in web development:

1. **Component-Based Architecture**: Breaking UI into isolated, reusable pieces
2. **Virtual DOM**: For optimized rendering
3. **Declarative Programming**: Describing what the UI should look like, not how to achieve it
4. **One-Way Data Binding**: Predictable data flow

## JSX Fundamentals

JSX (JavaScript XML) allows you to write HTML-like syntax directly in your JavaScript code.

```javascript
// Basic JSX example
function Greeting() {
  const name = "Developer"; // Regular JavaScript variable
  
  // JSX combines HTML-like syntax with JavaScript expressions (in curly braces)
  return (
    <div className="greeting-container"> {/* Note: 'class' becomes 'className' in JSX */}
      <h1>Hello, {name}!</h1> {/* JavaScript expressions go inside curly braces */}
      <p>Welcome to React</p>
    </div>
  );
}

export default Greeting;
```

### JSX Rules and Syntax

```javascript
function JSXRulesDemo() {
  const user = {
    firstName: "John",
    lastName: "Doe"
  };
  
  // JSX must return a single root element (or use fragments)
  return (
    <div>
      {/* JavaScript expressions in curly braces */}
      <h2>{user.firstName} {user.lastName}</h2>
      
      {/* Self-closing tags must end with /> */}
      <img src="avatar.png" alt="User avatar" />
      
      {/* HTML attributes become camelCase in JSX */}
      <div className="container" tabIndex="0">
        {/* Inline styles use objects with camelCase properties */}
        <p style={{ color: 'blue', marginTop: '10px' }}>
          Styled text
        </p>
        
        {/* Comments in JSX go inside curly braces with this syntax */}
      </div>
    </div>
  );
}
```

## Components: The Building Blocks

### Functional Components

```javascript
// Simple functional component
function Welcome(props) {
  // A function that returns JSX is a functional component
  return <h1>Hello, {props.name}</h1>;
}

// Arrow function syntax is also common
const Goodbye = (props) => {
  return <h1>Goodbye, {props.name}</h1>;
};

// Usage:
// <Welcome name="Alice" />
// <Goodbye name="Bob" />
```

### Class Components

```javascript
// Class component example
import React, { Component } from 'react';

class Counter extends Component {
  // Constructor for initializing state and binding methods
  constructor(props) {
    super(props); // Always call super with props in constructor
    this.state = { count: 0 }; // Initialize component state
    
    // Binding 'this' context to class methods (alternative to arrow functions)
    this.increment = this.increment.bind(this);
  }
  
  // Class method to update state
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  
  // The render method is required in class components
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

## Props: Passing Data

Props (short for properties) are how data is passed from parent to child components.

```javascript
// Parent component
function App() {
  // Data defined in the parent
  const userData = {
    name: "Alice",
    role: "Developer",
    isActive: true
  };
  
  return (
    <div>
      {/* Pass data to children via props */}
      <UserProfile 
        name={userData.name} 
        role={userData.role} 
        isActive={userData.isActive}
      />
      
      {/* You can also spread an object as props */}
      <UserProfile {...userData} />
    </div>
  );
}

// Child component receives and uses props
function UserProfile(props) {
  // Props are read-only! Never modify props directly
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p>Role: {props.role}</p>
      <p>Status: {props.isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}

// You can also destructure props in the parameter
function UserProfileDestructured({ name, role, isActive }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}
```

### Props Validation with PropTypes

```javascript
import PropTypes from 'prop-types';

function UserProfile({ name, age, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Define expected prop types and requirements
UserProfile.propTypes = {
  name: PropTypes.string.isRequired, // String and required
  age: PropTypes.number,             // Number, optional
  email: PropTypes.string            // String, optional
};

// Default values for props
UserProfile.defaultProps = {
  age: 30,
  email: 'user@example.com'
};
```

## State: Managing Data

State is a built-in object that stores property values belonging to a component. When state changes, the component re-renders.

### Class Component State

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state in the constructor
    this.state = {
      count: 0,
      lastClicked: null
    };
  }
  
  increment = () => {
    // Always use setState to update state, never modify directly!
    // setState accepts an object to merge with current state
    this.setState({
      count: this.state.count + 1,
      lastClicked: new Date().toLocaleTimeString()
    });
  }
  
  // When new state depends on previous state, use a function form
  incrementSafely = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      lastClicked: new Date().toLocaleTimeString()
    }));
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        {this.state.lastClicked && (
          <p>Last clicked: {this.state.lastClicked}</p>
        )}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.incrementSafely}>Increment Safely</button>
      </div>
    );
  }
}
```

### Functional Component State with Hooks

```javascript
import React, { useState } from 'react';

function Counter() {
  // useState returns an array with current state and update function
  // [current state value, function to update state]
  const [count, setCount] = useState(0);
  
  // You can have multiple state variables
  const [lastClicked, setLastClicked] = useState(null);
  
  // State update function
  const increment = () => {
    setCount(count + 1); // Update count
    setLastClicked(new Date().toLocaleTimeString()); // Update lastClicked
  };
  
  // When new state depends on previous state, use a function
  const incrementSafely = () => {
    setCount(prevCount => prevCount + 1);
    setLastClicked(new Date().toLocaleTimeString());
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      {lastClicked && <p>Last clicked: {lastClicked}</p>}
      <button onClick={increment}>Increment</button>
      <button onClick={incrementSafely}>Increment Safely</button>
    </div>
  );
}
```

### Complex State with Objects

```javascript
import React, { useState } from 'react';

function UserForm() {
  // Managing complex state with a single object
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ''
  });
  
  // Handler to update specific fields in the state object
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // When updating an object in state, you must spread the existing state
    // to avoid losing other properties
    setUser({
      ...user,     // Keep all existing properties
      [name]: value // Update just the changed field (using computed property name)
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted user:', user);
    // Here you would typically send data to a server or parent component
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Event Handling

React events are named using camelCase and passed as functions rather than strings.

```javascript
import React, { useState } from 'react';

function EventDemo() {
  const [message, setMessage] = useState('');
  
  // Event handler with no parameters
  const handleClick = () => {
    setMessage('Button clicked!');
  };
  
  // Event handler that uses the event object
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  
  // Event handler with custom parameter AND event object
  const handleItemClick = (itemId, event) => {
    // Prevent default behavior (e.g., navigating to a link)
    event.preventDefault();
    
    // Stop the event from bubbling up to parent elements
    event.stopPropagation();
    
    setMessage(`Item ${itemId} clicked`);
  };
  
  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
      
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type something"
        value={message}
      />
      
      <ul>
        {/* Using an arrow function to pass parameters to event handlers */}
        <li onClick={(e) => handleItemClick(1, e)}>Item 1</li>
        <li onClick={(e) => handleItemClick(2, e)}>Item 2</li>
      </ul>
      
      <p>Message: {message}</p>
    </div>
  );
}
```

## Lifecycle and Hooks

### Class Component Lifecycle

```javascript
import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1. Constructor: Component being initialized');
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps: Rarely used');
    // Return updated state or null
    return null;
  }
  
  componentDidMount() {
    console.log('4. componentDidMount: Component has been rendered to the DOM');
    // Good place for API calls, subscriptions, or DOM manipulation
    this.timer = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }, 1000);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. shouldComponentUpdate: Decide if re-rendering is needed');
    // Return boolean: true to update, false to skip update
    return nextState.count % 2 === 0; // Only update on even numbers
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('6. getSnapshotBeforeUpdate: Capture pre-update info');
    // Return value to pass to componentDidUpdate
    return { scrollPosition: 100 };
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('7. componentDidUpdate: Component was updated');
    console.log('Snapshot from before update:', snapshot);
  }
  
  componentWillUnmount() {
    console.log('8. componentWillUnmount: Component is about to be removed');
    // Clean up resources, subscriptions, timers
    clearInterval(this.timer);
  }
  
  render() {
    console.log('3. Render: Compute JSX to render');
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <p>Check console for lifecycle method logs</p>
      </div>
    );
  }
}
```

### Functional Component Hooks

```javascript
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

function HooksDemo() {
  // 1. useState: Manage state in functional components
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: '', email: '' });
  
  // 2. useRef: Persist values across renders without causing re-renders
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  
  // 3. useEffect: Perform side effects
  
  // Runs after every render
  useEffect(() => {
    console.log('Component rendered');
    
    // Update render count without causing re-render
    renderCount.current += 1;
  });
  
  // Runs only on mount (empty dependency array)
  useEffect(() => {
    console.log('Component mounted');
    
    // Focus input when component mounts
    inputRef.current.focus();
    
    // Cleanup function (runs on unmount)
    return () => {
      console.log('Component will unmount');
    };
  }, []);
  
  // Runs when count changes
  useEffect(() => {
    console.log('Count updated:', count);
    
    // Set document title based on count
    document.title = `Count: ${count}`;
    
    // Cleanup previous effect
    return () => {
      console.log('Cleaning up previous count effect');
    };
  }, [count]); // Dependency array - only run if these values change
  
  // 4. useMemo: Memoize expensive computations
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value');
    // Imagine this is an expensive calculation
    return count * count * count;
  }, [count]); // Only recompute when count changes
  
  // 5. useCallback: Memoize functions to prevent unnecessary re-renders
  const incrementCounter = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Empty array means function never changes
  
  // Function that depends on state
  const updateUser = useCallback((field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  }, []); // Empty array because we use the functional form of setState
  
  return (
    <div>
      <h2>Hooks Demo</h2>
      <p>Count: {count}</p>
      <p>Expensive calculation: {expensiveValue}</p>
      <p>Render count: {renderCount.current}</p>
      
      <button onClick={incrementCounter}>Increment</button>
      
      <input
        ref={inputRef}
        type="text"
        value={user.name}
        onChange={(e) => updateUser('name', e.target.value)}
        placeholder="Enter name"
      />
      
      <input
        type="email"
        value={user.email}
        onChange={(e) => updateUser('email', e.target.value)}
        placeholder="Enter email"
      />
    </div>
  );
}
```

### Custom Hooks

```javascript
import { useState, useEffect } from 'react';

// Custom hook for window size
function useWindowSize() {
  // Initialize state with current window dimensions
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures effect runs only on mount and unmount
  
  return windowSize;
}

// Using the custom hook
function ResponsiveComponent() {
  const windowSize = useWindowSize();
  
  return (
    <div>
      <h2>Window Size</h2>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
      
      {windowSize.width < 768 ? (
        <p>Mobile view</p>
      ) : (
        <p>Desktop view</p>
      )}
    </div>
  );
}
```

## Conditional Rendering

```javascript
import React, { useState } from 'react';

function ConditionalDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [role, setRole] = useState('user'); // 'user', 'admin', 'guest'
  
  // Toggle login status
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  return (
    <div>
      <h2>Conditional Rendering Examples</h2>
      
      {/* 1. If/Else using ternary operator */}
      {isLoggedIn ? (
        <button onClick={toggleLogin}>Log Out</button>
      ) : (
        <button onClick={toggleLogin}>Log In</button>
      )}
      
      {/* 2. Element variables */}
      {(() => {
        let message;
        if (isLoggedIn) {
          message = <p>Welcome back, User!</p>;
        } else {
          message = <p>Please log in</p>;
        }
        return message;
      })()}
      
      {/* 3. Logical && operator (shortcut when you don't need an else) */}
      {isLoggedIn && <p>You can now access your dashboard</p>}
      
      {/* 4. Preventing component from rendering (return null) */}
      {!isLoggedIn && null /* Nothing renders */}
      
      {/* 5. Toggle visibility */}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      
      {showDetails && (
        <div className="details">
          <p>These are the details you requested...</p>
          <ul>
            <li>Detail 1</li>
            <li>Detail 2</li>
          </ul>
        </div>
      )}
      
      {/* 6. Switch-case using immediately-invoked function */}
      {(() => {
        switch (role) {
          case 'admin':
            return <div>Admin Panel</div>;
          case 'user':
            return <div>User Dashboard</div>;
          case 'guest':
            return <div>Guest View</div>;
          default:
            return <div>Unknown Role</div>;
        }
      })()}
      
      {/* 7. Using objects as lookup tables */}
      {{
        admin: <div>Admin Controls</div>,
        user: <div>User Controls</div>,
        guest: <div>Limited Controls</div>
      }[role] || <div>No Controls Available</div>}
      
      {/* Buttons to change role */}
      <div>
        <button onClick={() => setRole('admin')}>Set Admin</button>
        <button onClick={() => setRole('user')}>Set User</button>
        <button onClick={() => setRole('guest')}>Set Guest</button>
      </div>
    </div>
  );
}
```

## Lists and Keys

```javascript
import React, { useState } from 'react';

function ListDemo() {
  // Sample data
  const initialItems = [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build an app', completed: false },
    { id: 3, text: 'Deploy to production', completed: false }
  ];
  
  const [items, setItems] = useState(initialItems);
  const [newItemText, setNewItemText] = useState('');
  
  // Add new item
  const addItem = () => {
    if (!newItemText.trim()) return;
    
    // Create new item with unique ID
    const newItem = {
      id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1,
      text: newItemText,
      completed: false
    };
    
    // Update items array (always create a new array, don't modify the existing one)
    setItems([...items, newItem]);
    setNewItemText('');
  };
  
  // Toggle completion status
  const toggleItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };
  
  // Delete item
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  return (
    <div>
      <h2>Todo List</h2>
      
      {/* Form to add new items */}
      <div>
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={addItem}>Add</button>
      </div>
      
      {/* Render list with keys */}
      <ul>
        {items.map(item => (
          // Key prop helps React identify which items have changed
          // Always use a unique identifier from your data when possible
          <li key={item.id} style={{ marginBottom: '8px' }}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleItem(item.id)}
            />
            <span style={{
              marginLeft: '8px',
              textDecoration: item.completed ? 'line-through' : 'none'
            }}>
              {item.text}
            </span>
            <button 
              onClick={() => deleteItem(item.id)}
              style={{ marginLeft: '8px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      {/* Conditional rendering if list is empty */}
      {items.length === 0 && (
        <p>No items in the list. Add some tasks above!</p>
      )}
      
      {/* Summary of list */}
      <div>
        <p>Total: {items.length} items</p>
        <p>Completed: {items.filter(item => item.completed).length} items</p>
      </div>
    </div>
  );
}
```

## Forms in React

```javascript
import React, { useState } from 'react';

function FormDemo() {
  // State for form values
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    acceptTerms: false,
    gender: '',
    skills: [],
    bio: ''
  });
  
  // State for form errors
  const [errors, setErrors] = useState({});
  
  // State for form submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Handler for input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle different input types
    if (type === 'checkbox') {
      // Single checkbox
      setFormData({
        ...formData,
        [name]: checked
      });
    } else if (type === 'select-multiple') {
      // Multiple select
      const values = Array.from(e.target.selectedOptions).map(option => option.value);
      setFormData({
        ...formData,
        [name]: values
      });
    } else if (name === 'skills') {
      // Handle checkbox groups for skills
      const updatedSkills = [...formData.skills];
      
      if (checked) {
        updatedSkills.push(value);
      } else {
        const index = updatedSkills.indexOf(value);
        if (index !== -1) {
          updatedSkills.splice(index, 1);
        }
      }
      
      setFormData({
        ...formData,
        skills: updatedSkills
      });
    } else {
      // Handle text inputs, selects, radios
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Terms acceptance
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };
  
  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    const isValid = validateForm();
    
    if (isValid) {
      // Process the form data (e.g., send to server)
      console.log('Form submitted successfully', formData);
      setIsSubmitted(true);
    } else {
      console.log('Form has errors', errors);
    }
  };
  
  // Reset form
  const handleReset = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'user',
      acceptTerms: false,
      gender: '',
      skills: [],
      bio: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };
  
  return (
    <div>
      <h2>React Form Demo</h2>
      
      {isSubmitted ? (
        <div>
          <h3>Form Submitted Successfully!</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          <button onClick={handleReset}>Submit Another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Text input */}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
          
          {/* Email input */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          
          {/* Password input */}
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          
          {/* Confirm password */}
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          </div>
          
          {/* Select dropdown */}
          <div>
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          {/* Radio buttons */}
          <div>
            <p>Gender:</p>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
          
          {/* Checkbox group */}
          <div>
            <p>Skills:</p>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="javascript"
                checked={formData.skills.includes('javascript')}
                onChange={handleChange}
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="react"
                checked={formData.skills.includes('react')}
                onChange={handleChange}
              />
              React
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="node"
                checked={formData.skills.includes('node')}
                onChange={handleChange}
              />
              Node.js
            </label>
          </div>
          
          {/* Textarea */}
          <div>
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="4"
            />
          </div>
          
          {/* Checkbox for terms */}
          <div>
            <label>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              I accept the terms and conditions
            </label>
            {errors.acceptTerms && <div className="error">{errors.acceptTerms}</div>}
          </div>
          
          {/* Submit and reset buttons */}
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>
      )}
    </div>
  );
}
```

## Context API

```javascript
// 1. Create a context (in ThemeContext.js)
import React, { createContext, useState, useContext } from 'react';

// Create a context with default values
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// Custom provider component
export function ThemeProvider({ children }) {
  // State to hold the current theme
  const [theme, setTheme] = useState('light');
  
  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  // The value that will be provided to consumers
  const value = {
    theme,
    toggleTheme
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Export the context for consumers who want to use the render props or HOC pattern
export default ThemeContext;

// 2. Wrap your application with the provider (in App.js)
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedApp from './ThemedApp';

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

// 3. Consume the context in components (in ThemedApp.js)
import React from 'react';
import { useTheme } from './ThemeContext';

function ThemedApp() {
  // Use our custom hook to access the theme context
  const { theme, toggleTheme } = useTheme();
  
  // Define theme styles
  const themeStyles = {
    light: {
      backgroundColor: '#ffffff',
      color: '#333333',
      padding: '20px'
    },
    dark: {
      backgroundColor: '#333333',
      color: '#ffffff',
      padding: '20px'
    }
  };
  
  return (
    <div style={themeStyles[theme]}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>This component is styled based on the current theme.</p>
      
      {/* Nested components can also access the theme */}
      <ThemedButton />
    </div>
  );
}

// Even deeply nested components can access the context
function ThemedButton() {
  const { theme } = useTheme();
  
  const buttonStyles = {
    light: {
      backgroundColor: '#f0f0f0',
      color: '#333333',
      border: '1px solid #999999',
      padding: '10px',
      borderRadius: '5px'
    },
    dark: {
      backgroundColor: '#555555',
      color: '#ffffff',
      border: '1px solid #777777',
      padding: '10px',
      borderRadius: '5px'
    }
  };
  
  return (
    <button style={buttonStyles[theme]}>
      Themed Button
    </button>
  );
}
```

## Routing with React Router

```javascript
// First install React Router:
// npm install react-router-dom

import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, Outlet, NavLink } from 'react-router-dom';

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Example</h1>
        <Navigation />
        
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />
          
          {/* About page route */}
          <Route path="/about" element={<About />} />
          
          {/* Nested routes with layout */}
          <Route path="/products" element={<ProductLayout />}>
            {/* Index route - shown when parent path matches exactly */}
            <Route index element={<ProductList />} />
            
            {/* Dynamic route with parameter */}
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          
          {/* Route with URL parameters */}
          <Route path="/categories/:categoryId" element={<Category />} />
          
          {/* Protected route with authentication */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          
          {/* 404 Not Found page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// Navigation Component
function Navigation() {
  return (
    <nav>
      <ul>
        {/* Basic Link */}
        <li>
          <Link to="/">Home</Link>
        </li>
        
        {/* NavLink automatically applies 'active' class when route matches */}
        <li>
          <NavLink 
            to="/about"
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? 'blue' : 'black'
            })}
          >
            About
          </NavLink>
        </li>
        
        <li>
          <NavLink 
            to="/products"
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            Products
          </NavLink>
        </li>
        
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

// Home Page Component
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our website!</p>
    </div>
  );
}

// About Page Component
function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>Learn about our company history.</p>
    </div>
  );
}

// Product Layout Component (Parent for nested routes)
function ProductLayout() {
  return (
    <div>
      <h2>Products</h2>
      
      {/* Secondary navigation just for products */}
      <div>
        <Link to="/products">All Products</Link>
        <Link to="/products/featured">Featured</Link>
      </div>
      
      {/* Outlet renders the matching child route */}
      <Outlet />
    </div>
  );
}

// Product List Component (Child route)
function ProductList() {
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();
  
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];
  
  return (
    <div>
      <h3>Product List</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {/* Link to dynamic route */}
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            
            {/* Button for programmatic navigation */}
            <button onClick={() => navigate(`/products/${product.id}`)}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Product Detail Component (Uses URL parameter)
function ProductDetail() {
  // useParams hook to access URL parameters
  const { productId } = useParams();
  
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();
  
  // Go back function
  const handleBack = () => {
    navigate(-1); // Navigate back one step in history
  };
  
  return (
    <div>
      <h3>Product Detail</h3>
      <p>Viewing product with ID: {productId}</p>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
}

// Category Component with URL parameter
function Category() {
  const { categoryId } = useParams();
  
  return (
    <div>
      <h2>Category: {categoryId}</h2>
      <p>Products in this category would be listed here.</p>
    </div>
  );
}

// Dashboard Component (protected)
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}

// Protected Route Component
function ProtectedRoute({ children }) {
  // Check if user is authenticated (simplified example)
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const navigate = useNavigate();
  
  // If not authenticated, redirect to login
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, navigate]);
  
  // If authenticated, render the protected component
  return isAuthenticated ? children : null;
}

// 404 Not Found Component
function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; 2025 React Router Example</p>
    </footer>
  );
}
```

## Working with APIs

```javascript
import React, { useState, useEffect } from 'react';

function ApiDemo() {
  // State to store data from API
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // State for new post form
  const [newPost, setNewPost] = useState({
    title: '',
    body: ''
  });
  
  // State for API request status
  const [postStatus, setPostStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });
  
  // 1. Fetch data using useEffect with async/await
  useEffect(() => {
    // Create async function inside useEffect
    async function fetchPosts() {
      try {
        setLoading(true);
        
        // Fetch data from API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        
        // Check if response is ok
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse JSON response
        const data = await response.json();
        
        // Update state with received data
        setPosts(data);
        setError(null);
      } catch (err) {
        // Handle errors
        setError(`Error fetching data: ${err.message}`);
        setPosts([]);
      } finally {
        // Always set loading to false when done
        setLoading(false);
      }
    }
    
    // Call the function
    fetchPosts();
    
    // No dependencies means this effect runs once on mount
  }, []);
  
  // 2. Handle input changes for the new post form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value
    });
  };
  
  // 3. Handle form submission (POST request)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!newPost.title.trim() || !newPost.body.trim()) {
      setPostStatus({
        submitting: false,
        success: false,
        error: 'Please fill out all fields'
      });
      return;
    }
    
    try {
      // Update status to submitting
      setPostStatus({
        submitting: true,
        success: false,
        error: null
      });
      
      // Send POST request
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: newPost.title,
          body: newPost.body,
          userId: 1 // Example user ID
        })
      });
      
      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Parse response
      const data = await response.json();
      
      // Add new post to posts array (in a real app, you may need to refetch)
      setPosts([data, ...posts]);
      
      // Update status to success
      setPostStatus({
        submitting: false,
        success: true,
        error: null
      });
      
      // Reset form
      setNewPost({ title: '', body: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setPostStatus(prev => ({ ...prev, success: false }));
      }, 3000);
      
    } catch (err) {
      // Handle errors
      setPostStatus({
        submitting: false,
        success: false,
        error: `Error creating post: ${err.message}`
      });
    }
  };
  
  // 4. Handle delete request
  const handleDelete = async (postId) => {
    try {
      // Send DELETE request
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
      });
      
      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Remove post from state
      setPosts(posts.filter(post => post.id !== postId));
      
    } catch (err) {
      console.error(`Error deleting post: ${err.message}`);
      // You could also update UI to show error
    }
  };
  
  return (
    <div>
      <h2>API Demo</h2>
      
      {/* Form to create new post */}
      <div className="create-post">
        <h3>Create New Post</h3>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
            />
          </div>
          
          <div>
            <label htmlFor="body">Content:</label>
            <textarea
              id="body"
              name="body"
              value={newPost.body}
              onChange={handleInputChange}
              rows="4"
            />
          </div>
          
          <button type="submit" disabled={postStatus.submitting}>
            {postStatus.submitting ? 'Submitting...' : 'Create Post'}
          </button>
        </form>
        
        {/* Success message */}
        {postStatus.success && (
          <div className="success-message">Post created successfully!</div>
        )}
        
        {/* Error message */}
        {postStatus.error && (
          <div className="error-message">{postStatus.error}</div>
        )}
      </div>
      
      <h3>Posts from API</h3>
      
      {/* Loading indicator */}
      {loading && <p>Loading posts...</p>}
      
      {/* Error message */}
      {error && <p className="error-message">{error}</p>}
      
      {/* Display posts */}
      {!loading && !error && (
        <div className="posts-container">
          {posts.length === 0 ? (
            <p>No posts found.</p>
          ) : (
            <ul>
              {posts.map(post => (
                <li key={post.id}>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                  <button onClick={() => handleDelete(post.id)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
```

## Performance Optimization

```javascript
import React, { useState, useCallback, useMemo } from 'react';

// 1. React.memo to prevent unnecessary re-renders
const ExpensiveComponent = React.memo(function ExpensiveComponent({ name, onClick }) {
  console.log(`Rendering ExpensiveComponent with name: ${name}`);
  
  // Simulate expensive calculation
  const expensiveCalculation = (input) => {
    console.log(`Performing expensive calculation for: ${input}`);
    // Simulate CPU-intensive task
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  };
  
  const result = expensiveCalculation(name);
  
  return (
    <div>
      <h3>Expensive Component</h3>
      <p>Name: {name}</p>
      <p>Result: {result}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
});

// Main component demonstrating optimization techniques
function PerformanceDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);
  
  // 2. useCallback to memoize function references
  const handleExpensiveClick = useCallback(() => {
    console.log('Expensive component clicked');
    // Function logic here
  }, []); // Empty deps array means function reference never changes
  
  // For comparison: this function will be recreated on every render
  const handleRegularClick = () => {
    console.log('Regular click');
    setCount(count + 1);
  };
  
  // useCallback with dependencies
  const addItem = useCallback(() => {
    setItems(prevItems => [
      ...prevItems,
      {
        id: prevItems.length + 1,
        name: `Item ${prevItems.length + 1}`
      }
    ]);
  }, []); // No dependencies here because we use the function form of setItems
  
  // 3. useMemo to memoize expensive calculations
  const expensiveComputation = useMemo(() => {
    console.log('Computing expensive value');
    
    // Simulate expensive computation
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    
    return result;
  }, []); // Empty array means compute once
  
  // useMemo with dependencies
  const filteredItems = useMemo(() => {
    console.log('Filtering items');
    return items.filter(item => item.name.includes('2'));
  }, [items]); // Recompute when items change
  
  // 4. Lazy loading components
  const LazyComponent = React.lazy(() => import('./LazyComponent'));
  
  return (
    <div>
      <h2>Performance Optimization Techniques</h2>
      
      <div className="counter">
        <p>Count: {count}</p>
        <button onClick={handleRegularClick}>Increment</button>
      </div>
      
      <div className="name-changer">
        <p>Name: {name}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      {/* Memoized expensive calculation */}
      <div>
        <h3>Memoized Expensive Result</h3>
        <p>Result: {expensiveComputation}</p>
      </div>
      
      {/* Using React.memo component with useCallback */}
      <ExpensiveComponent
        name={name}
        onClick={handleExpensiveClick} // Memoized callback
      />
      
      {/* Memoized filtered items */}
      <div>
        <h3>Filtered Items (Memoized)</h3>
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      
      <button onClick={addItem}>Add Item</button>
      
      {/* Lazy loaded component with Suspense */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </React.Suspense>
      
      <div className="optimization-tips">
        <h3>Performance Optimization Tips:</h3>
        <ul>
          <li>Use React.memo for pure functional components</li>
          <li>Memoize callbacks with useCallback</li>
          <li>Memoize expensive calculations with useMemo</li>
          <li>Use lazy loading for code splitting</li>
          <li>Virtualize long lists (react-window, react-virtualized)</li>
          <li>Use production builds</li>
          <li>Implement shouldComponentUpdate in class components</li>
          <li>Avoid anonymous functions in render</li>
          <li>Debounce fast-changing values</li>
          <li>Measure performance with React DevTools Profiler</li>
        </ul>
      </div>
    </div>
  );
}

// LazyComponent.js (would be in a separate file)
// export default function LazyComponent() {
//   return (
//     <div>
//       <h3>Lazy Loaded Component</h3>
//       <p>This component was loaded only when needed</p>
//     </div>
//   );
// }
```

## Best Practices

```javascript
// Best practices demonstrated in code

// 1. Component organization - one component per file
// UserProfile.js
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import UserStats from './UserStats';

// Component composition - break down into smaller components
function UserProfile({ user }) {
  // Use destructuring for props
  const { name, bio, avatar, stats } = user;
  
  return (
    <div className="user-profile">
      {/* Component composition */}
      <Avatar src={avatar} alt={name} />
      
      <div className="user-info">
        <h2>{name}</h2>
        <p>{bio}</p>
        
        {/* Pass only what the component needs */}
        <UserStats stats={stats} />
      </div>
    </div>
  );
}

// Validate props with PropTypes
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object
  }).isRequired
};

export default UserProfile;

// 2. Custom hooks for reusable logic
// useWindowSize.js
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away
    handleResize();
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
}

// 3. Performance optimization
// Button.js
import React from 'react';
import PropTypes from 'prop-types';

// Use React.memo for components that render often but with the same props
const Button = React.memo(function Button({ onClick, text, color }) {
  console.log(`Rendering Button: ${text}`);
  
  return (
    <button
      className={`btn btn-${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
});

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success'])
};

Button.defaultProps = {
  color: 'primary'
};

export default Button;

// 4. App.js - Main component demonstrating best practices
import React, { useCallback, useState } from 'react';
import UserProfile from './UserProfile';
import Button from './Button';
import useWindowSize from './hooks/useWindowSize';
import { ThemeProvider } from './context/ThemeContext';

// Constants in UPPER_CASE
const API_URL = 'https://api.example.com/users';
const MAX_ITEMS = 50;

function App() {
  const [users, setUsers] = useState([]);
  
  // Use custom hook
  const windowSize = useWindowSize();
  
  // Memoize callbacks that are passed to child components
  const handleButtonClick = useCallback(() => {
    // Logic here
    console.log('Button clicked');
  }, []);
  
  // Use async/await for data fetching
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}?limit=${MAX_ITEMS}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  // Use arrow functions for class methods (in class components)
  // Use meaningful variable and function names
  // Use context for theme, authentication, etc.
  
  return (
    <ThemeProvider>
      <div className="app">
        <header>
          <h1>React Best Practices</h1>
          <p>Window size: {windowSize.width} x {windowSize.height}</p>
        </header>
        
        <main>
          {/* Use fragments to avoid unnecessary divs */}
          <React.Fragment>
            {/* Use memoized Button with memoized callback */}
            <Button
              onClick={handleButtonClick}
              text="Click Me"
              color="primary"
            />
            
            <Button
              onClick={fetchUsers}
              text="Fetch Users"
              color="secondary"
            />
            
            {/* Conditional rendering with logical && */}
            {users.length > 0 && (
              <div className="users-list">
                {/* Keys must be unique and stable */}
                {users.map(user => (
                  <UserProfile key={user.id} user={user} />
                ))}
              </div>
            )}
          </React.Fragment>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

## Summary

React is a powerful JavaScript library for building user interfaces with a component-based architecture. Its key strengths include:

1. **Component-Based Architecture**: Breaking UI into reusable, composable pieces
2. **Virtual DOM**: For efficient rendering and updates
3. **Unidirectional Data Flow**: Making applications predictable and easier to debug
4. **Rich Ecosystem**: A vast library of packages, tools, and community support

The core concepts we covered include:

- JSX syntax for combining HTML and JavaScript
- Component types (functional and class)
- Props for passing data down
- State for managing component data
- Lifecycle methods and hooks for side effects
- Event handling
- Form management
- Lists and conditional rendering
- Context API for state management
- Routing with React Router
- API integration
- Performance optimization techniques

As you continue working with React, focus on:

1. Component composition and reusability
2. State management best practices
3. Performance optimization
4. Testing strategies
5. Staying updated with React's evolving ecosystem

Happy coding!