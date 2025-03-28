// # React Hooks: A Comprehensive Tutorial
//
// ## Table of Contents
// 1. Introduction to React Hooks
// 2. useState Hook
// 3. useEffect Hook
// 4. useContext Hook
// 5. useRef Hook
// 6. useMemo and useCallback Hooks
// 7. Custom Hooks
// 8. Rules of Hooks
// 9. Practical Examples
// 10. Best Practices

// ## 1. Introduction to React Hooks

/**
 * What are React Hooks?
 * 
 * React Hooks are functions that let you "hook into" React state and lifecycle features
 * from function components. They were introduced in React 16.8 as a way to use state
 * and other React features without writing a class component.
 * 
 * Why Hooks?
 * - Simplify component logic and make it reusable
 * - Avoid the complexities of 'this' in class components
 * - Better organization of stateful logic
 * - Sharing stateful logic between components without render props or HOCs
 */

// ------------------------------------------------------------------------------------------
// ## 2. useState Hook
// ------------------------------------------------------------------------------------------

/**
 * useState Hook allows you to add state to functional components.
 * 
 * Syntax: const [state, setState] = useState(initialState);
 * 
 * - state: The current state value
 * - setState: Function to update the state
 * - initialState: The initial value of the state
 */

import React, { useState } from 'react';

function CounterExample() {
  // Declare a state variable named 'count' with initial value of 0
  // useState returns an array with 2 elements: current state and setter function
  const [count, setCount] = useState(0);
  
  return (
    <div>
      {/* Display the current count value */}
      <p>You clicked {count} times</p>
      
      {/* Button to increment count by 1 when clicked */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      
      {/* Button to reset count to 0 */}
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

// Multiple state variables example
function UserForm() {
  // You can call useState multiple times for different state values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, age });
    // Submit to API, etc.
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value) || 0)}
        placeholder="Age"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Complex state with objects
function ComplexStateExample() {
  // State can also be an object containing multiple values
  const [user, setUser] = useState({
    name: '',
    email: '',
    preferences: {
      darkMode: false,
      notifications: true
    }
  });
  
  // When updating complex state, you must preserve the parts you're not changing
  const updateDarkMode = (enabled) => {
    setUser({
      ...user,                   // Copy all existing user properties
      preferences: {
        ...user.preferences,     // Copy all existing preferences
        darkMode: enabled        // Update just the darkMode property
      }
    });
  };
  
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={user.preferences.darkMode}
          onChange={(e) => updateDarkMode(e.target.checked)}
        />
        Dark Mode
      </label>
      {/* Other form elements */}
    </div>
  );
}

/**
 * Functional updates with useState
 * When new state depends on previous state, use functional form
 */
function CounterWithFunctionalUpdate() {
  const [count, setCount] = useState(0);
  
  // This is safer for multiple updates and avoids race conditions
  const increment = () => {
    // Pass a function to setState to get the previous state as an argument
    setCount(prevCount => prevCount + 1);
  };
  
  // Example of delayed update that could cause issues without functional updates
  const incrementThreeTimes = () => {
    // These all reference the same 'count' value from this render
    // setCount(count + 1); // If count is 0, it becomes 1
    // setCount(count + 1); // If count is 0, it becomes 1 again
    // setCount(count + 1); // If count is 0, it becomes 1 again
    
    // Correct way using functional updates:
    setCount(prevCount => prevCount + 1); // 0 -> 1
    setCount(prevCount => prevCount + 1); // 1 -> 2
    setCount(prevCount => prevCount + 1); // 2 -> 3
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementThreeTimes}>+3</button>
    </div>
  );
}

// ------------------------------------------------------------------------------------------
// ## 3. useEffect Hook
// ------------------------------------------------------------------------------------------

/**
 * useEffect Hook lets you perform side effects in function components.
 * Side effects include: data fetching, subscriptions, manual DOM manipulations, etc.
 * 
 * Syntax: useEffect(effectFunction, dependencyArray);
 * 
 * - effectFunction: Function containing side-effect code
 * - dependencyArray: Array of dependencies that trigger the effect when changed
 */

import { useEffect } from 'react';

// Basic useEffect example
function DataFetchingExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // This effect runs after the component mounts
  useEffect(() => {
    // Define async function inside effect
    const fetchData = async () => {
      try {
        setLoading(true);
        // Example API call
        const response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    // Call the async function
    fetchData();
    
    // Cleanup function (optional) - runs before component unmounts or before next effect
    return () => {
      // Cancel any pending requests, subscriptions, timers, etc.
      console.log('Cleanup: component unmounted or dependencies changed');
    };
  }, []); // Empty dependency array means this effect runs once after initial render
  
  // Render based on the state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      {/* Render the data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// useEffect with dependencies
function DependentEffectExample({ userId }) {
  const [user, setUser] = useState(null);
  
  // This effect runs whenever userId changes
  useEffect(() => {
    console.log(`Fetching data for user ${userId}`);
    
    // Fetch user data based on userId
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));
      
    // Cleanup previous user data fetch if userId changes before completion
    return () => {
      console.log(`Cleanup for user ${userId}`);
      // Cancel or cleanup previous request
    };
  }, [userId]); // Effect runs when userId changes
  
  return <div>{user ? user.name : 'Loading user...'}</div>;
}

// Multiple effects for separation of concerns
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  
  // Effect for user data
  useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);
  
  // Separate effect for posts data
  useEffect(() => {
    // Only fetch posts if we have a user
    if (user) {
      fetch(`https://api.example.com/posts?userId=${userId}`)
        .then(res => res.json())
        .then(data => setPosts(data));
    }
  }, [userId, user]); // Depends on both userId and user
  
  return (
    <div>
      {/* Render user profile and posts */}
    </div>
  );
}

// Common useEffect patterns:

// 1. Run once on mount (componentDidMount equivalent)
useEffect(() => {
  console.log('Component mounted');
  // Perform initial setup
  
  return () => {
    console.log('Component will unmount');
    // Cleanup on unmount
  };
}, []); // Empty dependency array

// 2. Run on every render (no dependency array)
useEffect(() => {
  console.log('Component rendered');
  // This runs after every render
});

// 3. Run when specific props or state change
useEffect(() => {
  console.log('count changed:', count);
  // This runs whenever count changes
}, [count]);

// 4. Implement a subscription
function SubscriptionExample() {
  useEffect(() => {
    // Set up subscription
    const subscription = someExternalAPI.subscribe();
    
    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []); // Empty array means setup and cleanup only runs once
  
  return <div>Subscribed Component</div>;
}

// ------------------------------------------------------------------------------------------
// ## 4. useContext Hook
// ------------------------------------------------------------------------------------------

/**
 * useContext Hook provides a way to pass data through the component tree
 * without having to pass props down manually at every level.
 * 
 * Syntax: const value = useContext(MyContext);
 * 
 * - MyContext: The context object created with React.createContext
 * - value: The current context value, determined by the nearest Provider
 */

import { createContext, useContext } from 'react';

// Create a context with a default value
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

// Provider component that wraps parts of your app
function ThemeProvider({ children }) {
  // State to hold the current theme
  const [theme, setTheme] = useState('light');
  
  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  // The value object contains both the state and the function to update it
  const value = {
    theme,
    toggleTheme
  };
  
  return (
    // Provide the context value to all descendants
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Component that consumes the context
function ThemedButton() {
  // Access the context value with useContext
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  // Apply different styles based on the theme
  const buttonStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '10px 15px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  };
  
  return (
    <button
      style={buttonStyle}
      onClick={toggleTheme}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
}

// Usage in your app
function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>My App with Themes</h1>
        <ThemedButton />
        {/* Other components that can access the theme context */}
      </div>
    </ThemeProvider>
  );
}

// Example with multiple contexts
const UserContext = createContext({ user: null });

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  // Login function
  const login = (username) => {
    setUser({ username, loggedInAt: new Date() });
  };
  
  // Logout function
  const logout = () => {
    setUser(null);
  };
  
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Component using multiple contexts
function ProfilePage() {
  const { theme } = useContext(ThemeContext);
  const { user, logout } = useContext(UserContext);
  
  if (!user) {
    return <p>Please log in</p>;
  }
  
  return (
    <div style={{ background: theme === 'light' ? '#f0f0f0' : '#333' }}>
      <h2>Welcome, {user.username}!</h2>
      <p>You logged in at: {user.loggedInAt.toString()}</p>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

// Complete app with multiple contexts
function CompleteApp() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="app">
          <ProfilePage />
          <ThemedButton />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

// ------------------------------------------------------------------------------------------
// ## 5. useRef Hook
// ------------------------------------------------------------------------------------------

/**
 * useRef Hook creates a mutable object that persists for the lifetime of the component.
 * Common uses:
 * 1. Accessing DOM elements directly
 * 2. Storing mutable values that don't trigger re-renders
 * 3. Keeping previous values between renders
 * 
 * Syntax: const refContainer = useRef(initialValue);
 * 
 * - initialValue: The initial value of the ref object's .current property
 */

import { useRef } from 'react';

// DOM access with useRef
function TextInputWithFocusButton() {
  // Create a ref to store the input DOM element
  const inputRef = useRef(null);
  
  // Function to focus the input
  const focusInput = () => {
    // Access the DOM element directly via .current
    inputRef.current.focus();
  };
  
  return (
    <div>
      {/* Attach the ref to the input element */}
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Storing values that don't trigger re-renders
function StopwatchExample() {
  const [time, setTime] = useState(0);
  // Store interval ID in a ref - changing this doesn't cause re-render
  const intervalRef = useRef(null);
  
  // Start the stopwatch
  const start = () => {
    if (intervalRef.current !== null) return;
    
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };
  
  // Stop the stopwatch
  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  
  // Reset the stopwatch
  const reset = () => {
    stop();
    setTime(0);
  };
  
  // Clean up the interval when component unmounts
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  
  return (
    <div>
      <p>Time: {time} seconds</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Tracking previous values with useRef
function CounterWithPrevious() {
  const [count, setCount] = useState(0);
  // Store the previous count in a ref
  const prevCountRef = useRef();
  
  // Update the ref after render with the current count
  useEffect(() => {
    prevCountRef.current = count;
  });
  
  // prevCountRef.current will be undefined on the first render
  const prevCount = prevCountRef.current;
  
  return (
    <div>
      <p>Current: {count}, Previous: {prevCount !== undefined ? prevCount : 'None'}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Using useRef to avoid infinite loops in useEffect
function SearchComponent() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  
  // Store the search term in a ref to avoid effect loops
  const searchRef = useRef(search);
  
  // Update the ref when search changes
  useEffect(() => {
    searchRef.current = search;
  }, [search]);
  
  // Simulated API call
  useEffect(() => {
    const fetchResults = async () => {
      if (!search) return;
      
      console.log(`Searching for: ${search}`);
      
      try {
        // Simulate API call
        const data = await new Promise(resolve => {
          setTimeout(() => {
            resolve([`Result for ${search} 1`, `Result for ${search} 2`]);
          }, 500);
        });
        
        // Only update if the search term hasn't changed during the fetch
        if (searchRef.current === search) {
          setResults(data);
        }
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };
    
    fetchResults();
  }, [search]);
  
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

// ------------------------------------------------------------------------------------------
// ## 6. useMemo and useCallback Hooks
// ------------------------------------------------------------------------------------------

/**
 * useMemo: Memoizes a computed value, recalculating only when dependencies change.
 * Syntax: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
 * 
 * useCallback: Memoizes a callback function, recreating only when dependencies change.
 * Syntax: const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
 * 
 * Both hooks help optimize performance by avoiding unnecessary recalculations.
 */

import { useMemo, useCallback } from 'react';

// useMemo for expensive calculations
function ExpensiveCalculationExample({ numbers }) {
  // Prevent recalculating on every render
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((acc, val) => acc + val, 0);
  }, [numbers]); // Only recalculate if numbers array changes
  
  return <div>Sum: {sum}</div>;
}

// useMemo for referential equality (preventing unnecessary re-renders)
function UserListWithFilter({ users }) {
  const [nameFilter, setNameFilter] = useState('');
  
  // Memoize the filtered list to prevent recreating on every render
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter(user => 
      user.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }, [users, nameFilter]); // Only recompute when users or nameFilter changes
  
  return (
    <div>
      <input
        type="text"
        value={nameFilter}
        onChange={e => setNameFilter(e.target.value)}
        placeholder="Filter by name..."
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// useCallback for stable event handlers
function ProductList({ products, onProductSelect }) {
  // Without useCallback, this function would be recreated on every render,
  // potentially causing child components to re-render unnecessarily
  const handleSelectProduct = useCallback((productId) => {
    console.log(`Selected product: ${productId}`);
    onProductSelect(productId);
  }, [onProductSelect]); // Recreate only if onProductSelect changes
  
  return (
    <ul>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onSelect={handleSelectProduct}
        />
      ))}
    </ul>
  );
}

// Child component that uses React.memo to prevent unnecessary re-renders
const ProductItem = React.memo(({ product, onSelect }) => {
  console.log(`Rendering product: ${product.name}`);
  
  return (
    <li onClick={() => onSelect(product.id)}>
      {product.name} - ${product.price}
    </li>
  );
});

// Combining useMemo and useCallback
function ShoppingCartExample({ products }) {
  const [cart, setCart] = useState([]);
  
  // Memoized callback for adding to cart
  const addToCart = useCallback((productId) => {
    setCart(prevCart => [...prevCart, productId]);
  }, []);
  
  // Memoized value for total price calculation
  const totalPrice = useMemo(() => {
    console.log('Calculating total price...');
    return cart.reduce((total, productId) => {
      const product = products.find(p => p.id === productId);
      return total + (product ? product.price : 0);
    }, 0);
  }, [cart, products]);
  
  // Memoized derived state
  const cartItemCount = useMemo(() => cart.length, [cart]);
  
  return (
    <div>
      <h2>Shopping Cart ({cartItemCount} items)</h2>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <ProductList products={products} onProductSelect={addToCart} />
    </div>
  );
}

// ------------------------------------------------------------------------------------------
// ## 7. Custom Hooks
// ------------------------------------------------------------------------------------------

/**
 * Custom Hooks allow you to extract component logic into reusable functions.
 * They always start with "use" and can call other hooks.
 * 
 * Benefits:
 * - Reuse stateful logic between components
 * - Simplify complex components
 * - Encapsulate related logic
 */

// Custom hook for form handling
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  
  // Reset form to initial values
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };
  
  // Set form values programmatically
  const setFormValues = (newValues) => {
    setValues(prevValues => ({
      ...prevValues,
      ...newValues
    }));
  };
  
  return {
    values,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    resetForm,
    setFormValues,
    setErrors
  };
}

// Example using the custom form hook
function SignupForm() {
  const { 
    values, 
    errors, 
    isSubmitting, 
    handleChange, 
    resetForm, 
    setErrors, 
    setIsSubmitting 
  } = useForm({
    username: '',
    email: '',
    password: ''
  });
  
  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    if (!values.username) newErrors.username = 'Username is required';
    if (!values.email) newErrors.email = 'Email is required';
    if (!values.password) newErrors.password = 'Password is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Signup successful!');
      resetForm();
    } catch (error) {
      setErrors({ form: 'Signup failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      
      {errors.form && <p className="error">{errors.form}</p>}
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  );
}

// Custom hook for API data fetching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Create an AbortController for cleanup
    const controller = new AbortController();
    const signal = controller.signal;
    
    const fetchData = async () => {
      setLoading(true);
      
      try {
        const response = await fetch(url, { signal });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        // Don't update state if the fetch was aborted
        if (err.name === 'AbortError') return;
        
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    
    // Cleanup function to abort fetch if component unmounts or url changes
    return () => {
      controller.abort();
    };
  }, [url]);
  
  return { data, loading, error };
}

// Component using the useFetch hook
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(`https://api.example.com/users/${userId}`);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

// Custom hook for localStorage
function useLocalStorage(key, initialValue) {
  // State to store the value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  // Function to update stored value and localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function for same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      
      // Save state
      setStoredValue(valueToStore);
      
      // Save to localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}

// Component using the useLocalStorage hook
function PreferencesComponent() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 'medium');
  
  return (
    <div>
      <h2>User Preferences</h2>
      <div>
        <label>Theme:</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
      
      <div>
        <label>Font Size:</label>
        <select
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------------------------------
// ## 8. Rules of Hooks
// ------------------------------------------------------------------------------------------

/**
 * Rules of Hooks:
 * 1. Only call hooks at the top level of your components or custom hooks
 * 2. Only call hooks from React function components or custom hooks
 * 3. Name custom hooks starting with "use"
 *
 * These rules ensure hooks work correctly with React's rendering system.
 * Hooks rely on the order of calls to maintain state across renders.
 */

// Bad: Hooks inside conditions, loops, or nested functions
function BadHookUsage() {
  const [count, setCount] = useState(0);
  
  // ❌ Don't do this! Breaks the rules of hooks
  if (count > 0) {
    const [data, setData] = useState(null);
    // ...
  }
  
  // ❌ Don't do this! Hooks must be called at the top level
  for (let i = 0; i < count; i++) {
    useEffect(() => {
      console.log(i);
    });
  }
  
  // ❌ Don't do this! Hooks in nested functions
  function nestedFunction() {
    const [state, setState] = useState(false);
  }
  
  return <div>{count}</div>;
}

// Good: Hooks at top level, conditions inside hooks
function GoodHookUsage() {
  // ✅ All hooks called at the top level
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  
  // ✅ Condition inside the effect, not wrapping the hook
  useEffect(() => {
    if (count > 0) {
      fetchData();
    }
  }, [count]);
  
  // Function to fetch data
  const fetchData = () => {
    // Fetch logic here
  };
  
  return <div>{count}</div>;
}

// ------------------------------------------------------------------------------------------
// ## 9. Practical Examples
// ------------------------------------------------------------------------------------------

/**
 * This section demonstrates practical, real-world examples using multiple hooks together
 */

// Example 1: Dynamic Form Fields
function DynamicForm() {
  // State for form fields
  const [fields, setFields] = useState([{ id: 1, value: '' }]);
  
  // Add a new field
  const addField = () => {
    const newId = fields.length > 0 
      ? Math.max(...fields.map(field => field.id)) + 1 
      : 1;
    
    setFields([...fields, { id: newId, value: '' }]);
  };
  
  // Remove a field by id
  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };
  
  // Update field value
  const updateField = (id, value) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, value } : field
    ));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', fields);
    // Process form data...
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <div key={field.id} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={field.value}
            onChange={(e) => updateField(field.id, e.target.value)}
            placeholder={`Field ${field.id}`}
          />
          {fields.length > 1 && (
            <button 
              type="button" 
              onClick={() => removeField(field.id)}
              style={{ marginLeft: '10px' }}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <div>
        <button type="button" onClick={addField}>
          Add Field
        </button>
        <button type="submit" style={{ marginLeft: '10px' }}>
          Submit
        </button>
      </div>
    </form>
  );
}

// Example 2: Infinite Scroll with API Data
function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  
  // Ref for intersection observer
  const observerRef = useRef(null);
  // Ref for the last item element
  const lastItemRef = useRef(null);
  
  // Fetch data when page changes
  useEffect(() => {
    const fetchItems = async () => {
      if (!hasMore || loading) return;
      
      setLoading(true);
      try {
        // Example API call with pagination
        const response = await fetch(`https://api.example.com/items?page=${page}&limit=10`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const newItems = await response.json();
        
        // If no more items, stop infinite scroll
        if (newItems.length === 0) {
          setHasMore(false);
        } else {
          setItems(prevItems => [...prevItems, ...newItems]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchItems();
  }, [page, hasMore, loading]);
  
  // Set up intersection observer
  useEffect(() => {
    // Disconnect previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Create callback for intersection observer
    const callback = (entries) => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        setPage(prevPage => prevPage + 1);
      }
    };
    
    // Create new observer
    observerRef.current = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    
    // Observe the last item
    if (lastItemRef.current) {
      observerRef.current.observe(lastItemRef.current);
    }
    
    // Cleanup observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, loading, items]);
  
  // Handle errors
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>
      <h2>Infinite Scroll Example</h2>
      <ul>
        {items.map((item, index) => {
          // Attach ref to last item
          const isLastItem = index === items.length - 1;
          
          return (
            <li 
              key={item.id} 
              ref={isLastItem ? lastItemRef : null}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      {loading && <div>Loading more items...</div>}
      {!hasMore && <div>No more items to load</div>}
    </div>
  );
}

// Example 3: Debounced Search Input
function DebouncedSearchInput({ onSearch }) {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Store the onSearch callback in a ref to prevent it from
  // triggering the useEffect on every render
  const onSearchRef = useRef(onSearch);
  useEffect(() => {
    onSearchRef.current = onSearch;
  }, [onSearch]);
  
  // Update input value immediately for responsive UI
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  // Debounce the input value
  useEffect(() => {
    // Set a timer to update the debounced value after 500ms
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);
    
    // Clear the timer if inputValue changes before the delay
    return () => clearTimeout(timer);
  }, [inputValue]);
  
  // Perform the search when debounced value changes
  useEffect(() => {
    const performSearch = async () => {
      if (!debouncedValue) return;
      
      setLoading(true);
      
      try {
        // Call the passed onSearch function with debounced value
        await onSearchRef.current(debouncedValue);
      } finally {
        setLoading(false);
      }
    };
    
    performSearch();
  }, [debouncedValue]);
  
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
      />
      {loading && <span>Searching...</span>}
    </div>
  );
}

// Usage example of the debounced search
function SearchableList() {
  const [results, setResults] = useState([]);
  
  const handleSearch = async (term) => {
    console.log(`Searching for: ${term}`);
    
    // Simulate API search
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredResults = ['Apple', 'Banana', 'Orange', 'Mango']
          .filter(item => item.toLowerCase().includes(term.toLowerCase()));
        
        setResults(filteredResults);
        resolve(filteredResults);
      }, 300);
    });
  };
  
  return (
    <div>
      <h2>Search Example</h2>
      <DebouncedSearchInput onSearch={handleSearch} />
      
      <div>
        <h3>Results:</h3>
        {results.length === 0 ? (
          <p>No results found</p>
        ) : (
          <ul>
            {results.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------------------------------
// ## 10. Best Practices
// ------------------------------------------------------------------------------------------

/**
 * Best Practices for React Hooks:
 * 
 * 1. Keep hooks at the top level
 *    - Always call hooks at the top level of your component
 *    - Never call hooks inside loops, conditions, or nested functions
 * 
 * 2. Only call hooks from React functions
 *    - Call hooks from React function components or custom hooks
 *    - Don't call hooks from regular JavaScript functions
 * 
 * 3. Name custom hooks starting with "use"
 *    - This convention makes hooks recognizable
 *    - Enables linting tools to find hook-related bugs
 * 
 * 4. Split complex logic into multiple hooks
 *    - Create focused custom hooks for different concerns
 *    - Improves readability and maintainability
 * 
 * 5. Use dependency arrays properly
 *    - Include all values from component scope used inside effects
 *    - Use dependency linting with eslint-plugin-react-hooks
 * 
 * 6. Keep state minimal and focused
 *    - Store the minimum amount of state needed
 *    - Derive other values from existing state
 *    - Use multiple useState calls for unrelated state
 * 
 * 7. Use functional updates for state that depends on previous state
 *    - setCount(prevCount => prevCount + 1)
 * 
 * 8. Clean up side effects
 *    - Return a cleanup function from useEffect when needed
 *    - Prevents memory leaks and unexpected behavior
 * 
 * 9. Memoize expensive calculations and callbacks
 *    - Use useMemo for expensive calculations
 *    - Use useCallback for functions passed to child components
 * 
 * 10. Avoid deeply nested state
 *     - Consider using useReducer for complex state logic
 *     - Split complex state into multiple hooks or components
 */

// Example of converting from class to hooks
// Class component with lifecycle methods
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      windowWidth: window.innerWidth
    };
    this.incrementCount = this.incrementCount.bind(this);
  }
  
  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
    window.addEventListener('resize', this.handleResize);
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Count: ${this.state.count}`;
    }
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  
  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  }
  
  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <p>Window width: {this.state.windowWidth}px</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

// Equivalent function component with hooks
function HookCounter() {
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Effect for document title - runs on every count change
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  
  // Effect for window resize event - cleanup on unmount
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means run once on mount
  
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Window width: {windowWidth}px</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

// Example of useReducer for complex state management
import { useReducer } from 'react';

// Action types as constants to avoid typos
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
  SET_VALUE: 'set_value'
};

// Reducer function - pure function that determines new state
function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    case ACTIONS.SET_VALUE:
      return { count: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function ReducerCounter() {
  // useReducer takes a reducer function and initial state
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        Increment
      </button>
      
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        Decrement
      </button>
      
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>
        Reset
      </button>
      
      <button onClick={() => dispatch({ 
        type: ACTIONS.SET_VALUE, 
        payload: 10 
      })}>
        Set to 10
      </button>
    </div>
  );
}

/**
 * Conclusion:
 * 
 * React Hooks provide a powerful and flexible way to use state and other React features
 * in functional components. By understanding the core hooks (useState, useEffect, useContext,
 * useRef, useMemo, useCallback) and how to create custom hooks, you can write more
 * maintainable and reusable React code.
 * 
 * Remember to follow the rules of hooks and best practices to ensure your components
 * work correctly and perform optimally.
 */

// Advanced Topics to Explore:
// - useTransition and useDeferredValue for concurrent rendering
// - useImperativeHandle for customizing exposed refs
// - useLayoutEffect for synchronous effects
// - useDebugValue for custom hooks debugging
// - Advanced patterns with useReducer and context
// - React Query, SWR, and other data fetching libraries