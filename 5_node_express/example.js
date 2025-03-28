// # Node.js and Express: A Comprehensive Guide
//
// ## Table of Contents
// 1. Introduction to Node.js
// 2. Setting Up a Node.js Project
// 3. Understanding Node.js Core Modules
// 4. Introduction to Express.js
// 5. Routing in Express
// 6. Middleware
// 7. Request and Response Objects
// 8. Working with Templates
// 9. Handling Form Data
// 10. RESTful API Development
// 11. Error Handling
// 12. Database Integration
// 13. Authentication and Authorization
// 14. Best Practices and Performance Optimization
// 15. Deployment Strategies

// ------------------------------------------------------------------------------------------
// ## 1. Introduction to Node.js
// ------------------------------------------------------------------------------------------

/**
 * What is Node.js?
 * 
 * Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
 * It allows you to run JavaScript on the server-side, outside of a browser.
 * 
 * Key features of Node.js:
 * - Event-driven, non-blocking I/O model
 * - Single-threaded but highly scalable
 * - JavaScript on the server
 * - Large ecosystem of packages via npm (Node Package Manager)
 * - Cross-platform (runs on Windows, macOS, Linux)
 */

/**
 * Why use Node.js?
 * 
 * - Fast execution due to V8 engine
 * - Same language (JavaScript) on both client and server
 * - Excellent for real-time applications (chat, games, collaboration tools)
 * - Great for I/O intensive applications (APIs, streaming, data-intensive apps)
 * - Large and active community
 * - Rich ecosystem with npm
 */

/**
 * The Event Loop: Heart of Node.js
 * 
 * Node.js operates on a single thread using non-blocking I/O calls.
 * The event loop allows Node.js to perform non-blocking I/O operations by:
 * - Offloading operations to the system kernel when possible
 * - Registering callbacks to be executed when operations complete
 * - Continuing to execute other code without waiting
 */

// Visual representation of the event loop:
// ┌───────────────────────────┐
// │           timers          │ setTimeout(), setInterval()
// └─────────────┬─────────────┘
//               │
// ┌─────────────┴─────────────┐
// │     pending callbacks     │ Deferred operations callbacks
// └─────────────┬─────────────┘
//               │
// ┌─────────────┴─────────────┐
// │         poll phase        │ Retrieve new I/O events
// └─────────────┬─────────────┘
//               │
// ┌─────────────┴─────────────┐
// │        check phase        │ setImmediate() callbacks
// └─────────────┬─────────────┘
//               │
// ┌─────────────┴─────────────┐
// │    close callbacks        │ close events
// └───────────────────────────┘

// Basic "Hello World" in Node.js
// Save this as hello.js and run with: node hello.js
console.log('Hello, Node.js!');

// A simple HTTP server with Node.js core modules
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send the response body
  res.end('Hello, Node.js Server!\n');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// ------------------------------------------------------------------------------------------
// ## 2. Setting Up a Node.js Project
// ------------------------------------------------------------------------------------------

/**
 * Installing Node.js and npm
 * 
 * 1. Download installer from https://nodejs.org/
 * 2. Run installer and follow the installation wizard
 * 3. Verify installation: 
 *    - node --version
 *    - npm --version
 */

/**
 * Initializing a Node.js Project
 */

/**
 * 1. Create a project directory
 * mkdir my-node-project
 * cd my-node-project
 *
 * 2. Initialize a new Node.js project
 * npm init
 * 
 * This creates a package.json file that contains:
 * - Project metadata
 * - Dependencies
 * - Scripts
 */

// package.json example:
/*
{
  "name": "my-node-project",
  "version": "1.0.0",
  "description": "A sample Node.js project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
*/

/**
 * Managing Dependencies
 * 
 * 1. Installing packages
 * - npm install <package-name>      # Installs as a dependency
 * - npm install <package-name> --save-dev  # Installs as a dev dependency
 * - npm install <package-name> -g   # Installs globally
 * 
 * 2. Updating packages
 * - npm update
 * - npm update <package-name>
 * 
 * 3. Removing packages
 * - npm uninstall <package-name>
 */

/**
 * Project Structure
 * 
 * A typical Node.js/Express application follows this structure:
 * 
 * my-node-project/
 * ├── node_modules/          # Installed packages
 * ├── public/                # Static files (CSS, images, etc.)
 * │   ├── css/
 * │   ├── js/
 * │   └── images/
 * ├── routes/                # Route handlers
 * │   ├── index.js
 * │   └── users.js
 * ├── views/                 # View templates
 * │   ├── layouts/
 * │   └── partials/
 * ├── controllers/           # Controller logic
 * ├── models/                # Data models
 * ├── middleware/            # Custom middleware
 * ├── config/                # Configuration files
 * ├── utils/                 # Utility functions
 * ├── tests/                 # Test files
 * ├── .gitignore             # Git ignore file
 * ├── app.js                 # Application entry point
 * └── package.json           # Project metadata and dependencies
 */

/**
 * Development Tools
 * 
 * 1. nodemon - automatically restarts the server when files change
 * npm install nodemon --save-dev
 * 
 * Add to package.json scripts:
 * "scripts": {
 *   "dev": "nodemon app.js"
 * }
 * 
 * 2. dotenv - loads environment variables from .env file
 * npm install dotenv
 * 
 * Create a .env file:
 * PORT=3000
 * DATABASE_URL=mongodb://localhost:27017/myapp
 * 
 * In your app:
 * require('dotenv').config();
 * const port = process.env.PORT;
 */

// ------------------------------------------------------------------------------------------
// ## 3. Understanding Node.js Core Modules
// ------------------------------------------------------------------------------------------

/**
 * Node.js comes with several built-in modules that provide essential functionality
 * without requiring additional installations. Here are some key modules:
 */

// fs - File System
const fs = require('fs');

// Reading a file (asynchronous)
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// Reading a file (synchronous)
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File content (sync):', data);
} catch (err) {
  console.error('Error reading file:', err);
}

// Writing to a file
fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File has been saved!');
});

// Creating a directory
fs.mkdir('new-directory', { recursive: true }, (err) => {
  if (err) {
    console.error('Error creating directory:', err);
    return;
  }
  console.log('Directory created!');
});

// path - Path utilities
const path = require('path');

// Working with file paths
const filePath = '/users/documents/example.txt';

console.log('Basename:', path.basename(filePath)); // example.txt
console.log('Directory name:', path.dirname(filePath)); // /users/documents
console.log('Extension:', path.extname(filePath)); // .txt

// Joining paths (platform-independent)
const fullPath = path.join(__dirname, 'files', 'example.txt');
console.log('Joined path:', fullPath);

// Resolving paths (absolute paths)
const resolvedPath = path.resolve('files', 'example.txt');
console.log('Resolved path:', resolvedPath);

// os - Operating System
const os = require('os');

// Get system information
console.log('OS Platform:', os.platform());
console.log('OS Architecture:', os.arch());
console.log('CPU Info:', os.cpus());
console.log('Total Memory:', os.totalmem() / 1024 / 1024 / 1024, 'GB');
console.log('Free Memory:', os.freemem() / 1024 / 1024 / 1024, 'GB');
console.log('Home Directory:', os.homedir());
console.log('Uptime:', os.uptime() / 60 / 60, 'hours');

// events - Event Emitter
const EventEmitter = require('events');

// Create a custom event emitter
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Register event listeners
myEmitter.on('event', (a, b) => {
  console.log('Event occurred with arguments:', a, b);
});

// Emit event
myEmitter.emit('event', 'arg1', 'arg2');

// url - URL parsing
const url = require('url');

// Parse a URL
const myUrl = new URL('https://example.com/path?query=string#hash');

console.log('Protocol:', myUrl.protocol); // https:
console.log('Host:', myUrl.host); // example.com
console.log('Pathname:', myUrl.pathname); // /path
console.log('Search:', myUrl.search); // ?query=string
console.log('Hash:', myUrl.hash); // #hash

// http/https - HTTP/HTTPS servers and clients
// See the earlier HTTP server example

// util - Utility functions
const util = require('util');

// Promisify a callback-based function
const readFilePromise = util.promisify(fs.readFile);

async function readFileAsync() {
  try {
    const data = await readFilePromise('example.txt', 'utf8');
    console.log('File content (async/await):', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileAsync();

// crypto - Cryptographic functions
const crypto = require('crypto');

// Generate a hash
const hash = crypto.createHash('sha256').update('password123').digest('hex');
console.log('SHA-256 Hash:', hash);

// Generate a random token
const token = crypto.randomBytes(16).toString('hex');
console.log('Random Token:', token);

// ------------------------------------------------------------------------------------------
// ## 4. Introduction to Express.js
// ------------------------------------------------------------------------------------------

/**
 * What is Express.js?
 * 
 * Express is a minimal and flexible Node.js web application framework that provides
 * a robust set of features for web and mobile applications. It simplifies the
 * process of building web servers and APIs.
 * 
 * Key features:
 * - Minimalist and unopinionated
 * - Fast and simple
 * - Robust routing
 * - HTTP utility methods
 * - Middleware support
 * - Template engine support
 * - Error handling
 */

/**
 * Installing Express
 * 
 * npm install express
 */

// Basic Express Application
const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});

/**
 * Express vs. Plain Node.js HTTP
 * 
 * Plain Node.js HTTP:
 * - Verbose and manual routing
 * - Manual parsing of request body
 * - Manual handling of headers
 * - More boilerplate code
 * 
 * Express:
 * - Simple and intuitive routing
 * - Built-in middleware for common tasks
 * - Easy handling of request and response objects
 * - Supports template engines
 * - Better error handling
 * - Extensible with middleware
 */

// Comparison: HTTP server in plain Node.js vs. Express

// Node.js HTTP server with basic routing
const httpServer = http.createServer((req, res) => {
  // Parse URL
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  
  // Set response headers
  res.setHeader('Content-Type', 'application/json');
  
  // Define routes
  if (trimmedPath === '' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to the API' }));
  } else if (trimmedPath === 'users' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

// Same server with Express
const expressApp = express();

expressApp.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

expressApp.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]);
});

expressApp.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// ------------------------------------------------------------------------------------------
// ## 5. Routing in Express
// ------------------------------------------------------------------------------------------

/**
 * Routing refers to determining how an application responds to a client request
 * to a particular endpoint, which is a URI (or path) and a specific HTTP request
 * method (GET, POST, etc.).
 */

// Basic Route Definitions
const routingApp = express();

// HTTP methods
routingApp.get('/users', (req, res) => {
  res.send('GET request to /users');
});

routingApp.post('/users', (req, res) => {
  res.send('POST request to /users');
});

routingApp.put('/users/:id', (req, res) => {
  res.send(`PUT request to /users/${req.params.id}`);
});

routingApp.delete('/users/:id', (req, res) => {
  res.send(`DELETE request to /users/${req.params.id}`);
});

// Route Parameters
routingApp.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(`User ID: ${req.params.userId}, Book ID: ${req.params.bookId}`);
});

// Route Handlers (multiple callback functions)
routingApp.get('/example',
  (req, res, next) => {
    console.log('First handler');
    next(); // Pass control to the next handler
  },
  (req, res) => {
    console.log('Second handler');
    res.send('Response from multiple handlers');
  }
);

// Route Chaining
routingApp.route('/books')
  .get((req, res) => {
    res.send('Get all books');
  })
  .post((req, res) => {
    res.send('Add a book');
  })
  .put((req, res) => {
    res.send('Update all books');
  });

// Route Query Parameters
routingApp.get('/search', (req, res) => {
  // Access query parameters, e.g., /search?q=javascript&limit=10
  const query = req.query.q;
  const limit = req.query.limit;
  
  res.send(`Search for: ${query}, Limit: ${limit}`);
});

// Express Router: Organizing Routes in Separate Files
// In routes/users.js:
const userRouter = express.Router();

// Define routes on the router
userRouter.get('/', (req, res) => {
  res.send('Get all users');
});

userRouter.get('/:id', (req, res) => {
  res.send(`Get user with ID: ${req.params.id}`);
});

userRouter.post('/', (req, res) => {
  res.send('Create a new user');
});

// In your main app.js:
// Mount the router at a specific path
routingApp.use('/api/users', userRouter);

// Similarly for other routes in routes/products.js:
const productRouter = express.Router();

productRouter.get('/', (req, res) => {
  res.send('Get all products');
});

// Mount the product router
routingApp.use('/api/products', productRouter);

// ------------------------------------------------------------------------------------------
// ## 6. Middleware
// ------------------------------------------------------------------------------------------

/**
 * Middleware functions are functions that have access to the request object (req),
 * the response object (res), and the next middleware function in the application's
 * request-response cycle. Middleware can:
 * 
 * - Execute any code
 * - Make changes to the request and response objects
 * - End the request-response cycle
 * - Call the next middleware in the stack
 */

// Application-level middleware
const middlewareApp = express();

// Middleware without a mount path (runs for every request)
middlewareApp.use((req, res, next) => {
  console.log('Time:', Date.now());
  next(); // Call next to pass control to the next middleware
});

// Middleware with a mount path (runs only for specific paths)
middlewareApp.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});

// Error-handling middleware (has 4 arguments)
middlewareApp.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Built-in middleware

// 1. express.static - Serves static files
middlewareApp.use(express.static('public'));

// 2. express.json - Parses JSON request bodies
middlewareApp.use(express.json());

// 3. express.urlencoded - Parses URL-encoded request bodies
middlewareApp.use(express.urlencoded({ extended: true }));

// Third-party middleware examples (requires installing packages)

// 1. morgan - HTTP request logger
const morgan = require('morgan');
middlewareApp.use(morgan('dev'));

// 2. cors - Enable CORS (Cross-Origin Resource Sharing)
const cors = require('cors');
middlewareApp.use(cors());

// 3. helmet - Secure HTTP headers
const helmet = require('helmet');
middlewareApp.use(helmet());

// Custom middleware function
const validateUser = (req, res, next) => {
  // Check for user auth token
  const authToken = req.headers.authorization;
  
  if (!authToken) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  
  // Validate token logic here...
  const isValidToken = authToken.startsWith('Bearer ');
  
  if (!isValidToken) {
    return res.status(403).json({ message: 'Invalid token' });
  }
  
  // If valid, attach user to request object
  req.user = { id: 123, name: 'John' };
  
  // Continue to next middleware
  next();
};

// Using the custom middleware for specific routes
middlewareApp.get('/profile', validateUser, (req, res) => {
  res.json({ profile: req.user });
});

// Chaining middleware
const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: 'Access denied' });
    }
  };
};

middlewareApp.get('/admin', validateUser, checkRole('admin'), (req, res) => {
  res.send('Admin dashboard');
});

// ------------------------------------------------------------------------------------------
// ## 7. Request and Response Objects
// ------------------------------------------------------------------------------------------

/**
 * The req (request) and res (response) objects are the parameters of the callback
 * function that is called when a request is made to an Express route.
 */

const reqResApp = express();
reqResApp.use(express.json());

// Request Object (req) Properties and Methods
reqResApp.get('/request-example', (req, res) => {
  // 1. req.params - Route parameters
  // Example: /user/123 with route /user/:id
  // req.params.id would be '123'
  
  // 2. req.query - Query string parameters
  // Example: /search?q=express&limit=10
  console.log('Query params:', req.query);
  // { q: 'express', limit: '10' }
  
  // 3. req.body - Parsed request body (requires middleware)
  // For POST/PUT requests with JSON body
  console.log('Request body:', req.body);
  
  // 4. req.headers - HTTP headers
  console.log('User agent:', req.headers['user-agent']);
  
  // 5. req.cookies - Cookies (requires cookie-parser middleware)
  // console.log('Cookies:', req.cookies);
  
  // 6. req.path - Path part of URL
  console.log('Path:', req.path);
  
  // 7. req.method - HTTP method
  console.log('Method:', req.method);
  
  // 8. req.protocol - Protocol (http/https)
  console.log('Protocol:', req.protocol);
  
  // 9. req.secure - True if protocol is https
  console.log('Secure:', req.secure);
  
  // 10. req.ip - Client IP address
  console.log('IP:', req.ip);
  
  // 11. req.originalUrl - Original request URL
  console.log('Original URL:', req.originalUrl);
  
  // Send a response to avoid timeout
  res.send('Request object examples');
});

// Response Object (res) Properties and Methods
reqResApp.get('/response-example', (req, res) => {
  // 1. res.send() - Send a response
  // res.send('Hello World!');
  
  // 2. res.json() - Send a JSON response
  // res.json({ message: 'Hello World!' });
  
  // 3. res.status() - Set status code
  // res.status(200).send('OK');
  
  // 4. res.sendStatus() - Set status code and send its string representation
  // res.sendStatus(200); // Equivalent to res.status(200).send('OK')
  
  // 5. res.sendFile() - Send a file
  // res.sendFile(path.join(__dirname, 'public', 'index.html'));
  
  // 6. res.download() - Prompt a file download
  // res.download(path.join(__dirname, 'files', 'report.pdf'));
  
  // 7. res.redirect() - Redirect to another URL
  // res.redirect('/new-page');
  // res.redirect(301, '/permanent-redirect');
  
  // 8. res.render() - Render a view template
  // res.render('index', { title: 'Home Page' });
  
  // 9. res.set() - Set a response header
  // res.set('Content-Type', 'text/plain');
  
  // 10. res.cookie() - Set a cookie
  // res.cookie('name', 'value', { maxAge: 900000, httpOnly: true });
  
  // 11. res.clearCookie() - Clear a cookie
  // res.clearCookie('name');
  
  // 12. res.format() - Respond differently based on Accept header
  res.format({
    'text/plain': () => {
      res.send('Plain text response');
    },
    'text/html': () => {
      res.send('<p>HTML response</p>');
    },
    'application/json': () => {
      res.json({ message: 'JSON response' });
    },
    default: () => {
      res.status(406).send('Not Acceptable');
    }
  });
  
  // Chaining methods
  // return res.status(200).json({ success: true, data: items });
});

// ------------------------------------------------------------------------------------------
// ## 8. Working with Templates
// ------------------------------------------------------------------------------------------

/**
 * Express supports various template engines that allow you to generate HTML
 * dynamically. Popular options include:
 * - EJS (Embedded JavaScript)
 * - Pug (formerly Jade)
 * - Handlebars
 * - Nunjucks
 */

// Setting up a template engine (EJS example)
const templateApp = express();

// Set the view engine
templateApp.set('view engine', 'ejs');

// Set the views directory
templateApp.set('views', path.join(__dirname, 'views'));

// Route that renders a template
templateApp.get('/', (req, res) => {
  // Render the index.ejs template with data
  res.render('index', {
    title: 'Express with EJS',
    message: 'Welcome to Express!',
    users: [
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'Bob', age: 35 }
    ]
  });
});

/**
 * Example index.ejs template:
 * 
 * <!DOCTYPE html>
 * <html>
 * <head>
 *   <title><%= title %></title>
 * </head>
 * <body>
 *   <h1><%= message %></h1>
 *   <ul>
 *     <% users.forEach(function(user) { %>
 *       <li><%= user.name %>, <%= user.age %> years old</li>
 *     <% }); %>
 *   </ul>
 * </body>
 * </html>
 */

// Using partials/layouts (EJS example)
// Create a layout.ejs file in views/layouts folder
// Create a header.ejs and footer.ejs in views/partials folder

/**
 * layout.ejs:
 * 
 * <!DOCTYPE html>
 * <html>
 * <head>
 *   <title><%= title %></title>
 *   <link rel="stylesheet" href="/css/style.css">
 * </head>
 * <body>
 *   <%- include('../partials/header') %>
 *   <main>
 *     <%- body %>
 *   </main>
 *   <%- include('../partials/footer') %>
 * </body>
 * </html>
 */

/**
 * header.ejs:
 * 
 * <header>
 *   <h1>My Express App</h1>
 *   <nav>
 *     <a href="/">Home</a>
 *     <a href="/about">About</a>
 *     <a href="/contact">Contact</a>
 *   </nav>
 * </header>
 */

/**
 * footer.ejs:
 * 
 * <footer>
 *   <p>&copy; <%= new Date().getFullYear() %> My Express App</p>
 * </footer>
 */

// For EJS layouts, you'll need express-ejs-layouts package
const expressLayouts = require('express-ejs-layouts');

// Use the layouts middleware
templateApp.use(expressLayouts);
templateApp.set('layout', 'layouts/layout');

// Passing data to all views (using middleware)
templateApp.use((req, res, next) => {
  res.locals.siteTitle = 'My Express App';
  res.locals.currentUser = req.user; // If you have user authentication
  next();
});

// Alternative Template Engines

// 1. Pug (formerly Jade)
// npm install pug
// app.set('view engine', 'pug');

/**
 * Example pug template:
 * 
 * doctype html
 * html
 *   head
 *     title= title
 *   body
 *     h1= message
 *     ul
 *       each user in users
 *         li #{user.name}, #{user.age} years old
 */

// 2. Handlebars (with express-handlebars)
// npm install express-handlebars
// const exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

/**
 * Example handlebars template:
 * 
 * <!DOCTYPE html>
 * <html>
 * <head>
 *   <title>{{title}}</title>
 * </head>
 * <body>
 *   <h1>{{message}}</h1>
 *   <ul>
 *     {{#each users}}
 *       <li>{{this.name}}, {{this.age}} years old</li>
 *     {{/each}}
 *   </ul>
 * </body>
 * </html>
 */

// ------------------------------------------------------------------------------------------
// ## 9. Handling Form Data
// ------------------------------------------------------------------------------------------

/**
 * In Express, you can handle form submissions in different ways:
 * - URL-encoded forms (traditional HTML forms)
 * - Multipart forms (file uploads)
 * - AJAX/Fetch submissions with JSON
 */

const formApp = express();

// Middleware for parsing form data
formApp.use(express.urlencoded({ extended: true })); // For URL-encoded forms
formApp.use(express.json()); // For JSON payloads

// Handling a basic form submission
formApp.get('/form', (req, res) => {
  // Render a form
  res.send(`
    <form action="/form" method="post">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Process form submission
formApp.post('/form', (req, res) => {
  // Access form data from req.body
  const { name, email, message } = req.body;
  
  console.log('Form submission:', { name, email, message });
  
  // Process the data (e.g., save to database, send email)
  
  // Send a response
  res.send(`
    <h1>Thank you for your submission!</h1>
    <p>We received the following information:</p>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Message:</strong> ${message}</li>
    </ul>
    <a href="/form">Back to form</a>
  `);
});

// File uploads with multer middleware
const multer = require('multer');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    // Create unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter function
const fileFilter = (req, file, cb) => {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

// Initialize upload middleware
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
  fileFilter: fileFilter
});

// File upload form
formApp.get('/upload', (req, res) => {
  res.send(`
    <h1>File Upload</h1>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <div>
        <label for="profile">Select image:</label>
        <input type="file" id="profile" name="profile" accept="image/*" required>
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <button type="submit">Upload</button>
    </form>
  `);
});

// Handle file upload
formApp.post('/upload', upload.single('profile'), (req, res) => {
  try {
    // req.file contains details of the uploaded file
    // req.body contains text fields
    
    const file = req.file;
    const name = req.body.name;
    
    if (!file) {
      return res.status(400).send('Please upload a file.');
    }
    
    res.send(`
      <h1>File Uploaded Successfully!</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Filename:</strong> ${file.filename}</p>
      <p><strong>Size:</strong> ${file.size} bytes</p>
      <p><strong>MIME type:</strong> ${file.mimetype}</p>
      <a href="/upload">Upload another file</a>
    `);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

// Handling multiple file uploads
const multipleUpload = upload.array('photos', 5); // 'photos' field, max 5 files

formApp.get('/multiple-upload', (req, res) => {
  res.send(`
    <h1>Multiple Files Upload</h1>
    <form action="/multiple-upload" method="post" enctype="multipart/form-data">
      <div>
        <label for="photos">Select images (max 5):</label>
        <input type="file" id="photos" name="photos" accept="image/*" multiple required>
      </div>
      <div>
        <label for="title">Album Title:</label>
        <input type="text" id="title" name="title" required>
      </div>
      <button type="submit">Upload</button>
    </form>
  `);
});

formApp.post('/multiple-upload', (req, res) => {
  multipleUpload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading
      return res.status(400).send(`Multer error: ${err.message}`);
    } else if (err) {
      // An unknown error occurred
      return res.status(500).send(`Error: ${err.message}`);
    }
    
    // Everything went fine
    const files = req.files;
    const title = req.body.title;
    
    if (!files || files.length === 0) {
      return res.status(400).send('Please upload at least one file.');
    }
    
    const fileDetails = files.map(file => {
      return `
        <li>
          <strong>Filename:</strong> ${file.filename}<br>
          <strong>Size:</strong> ${file.size} bytes<br>
          <strong>MIME type:</strong> ${file.mimetype}
        </li>
      `;
    }).join('');
    
    res.send(`
      <h1>Files Uploaded Successfully!</h1>
      <p><strong>Album Title:</strong> ${title}</p>
      <p><strong>Uploaded files:</strong></p>
      <ul>${fileDetails}</ul>
      <a href="/multiple-upload">Upload more files</a>
    `);
  });
});

// Handling AJAX form submissions
formApp.get('/ajax-form', (req, res) => {
  res.send(`
    <h1>AJAX Form Example</h1>
    <form id="ajaxForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    
    <div id="response"></div>
    
    <script>
      document.getElementById('ajaxForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value
        };
        
        fetch('/ajax-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          document.getElementById('response').innerHTML = 
            '<h2>' + data.message + '</h2>' +
            '<p>Name: ' + data.data.name + '</p>' +
            '<p>Email: ' + data.data.email + '</p>';
        })
        .catch(error => {
          document.getElementById('response').innerHTML = 
            '<p>Error: ' + error.message + '</p>';
        });
      });
    </script>
  `);
});

formApp.post('/ajax-form', (req, res) => {
  // Handle AJAX form submission
  const data = req.body;
  
  console.log('AJAX form submission:', data);
  
  // Process the data
  
  // Send JSON response
  res.json({
    success: true,
    message: 'Thank you for your submission!',
    data: data
  });
});

// Form validation
// Server-side validation example
formApp.post('/validate-form', (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const errors = [];
  
  // Validate name
  if (!name || name.trim().length === 0) {
    errors.push('Name is required');
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Valid email is required');
  }
  
  // Validate password
  if (!password || password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  
  // Validate password confirmation
  if (password !== confirmPassword) {
    errors.push('Passwords do not match');
  }
  
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors: errors
    });
  }
  
  // If validation passes, process the form
  res.json({
    success: true,
    message: 'Form validation passed',
    data: { name, email }
  });
});

// ------------------------------------------------------------------------------------------
// ## 10. RESTful API Development
// ------------------------------------------------------------------------------------------

/**
 * REST (Representational State Transfer) is an architectural style for designing
 * networked applications. RESTful APIs use HTTP requests to perform CRUD operations.
 * 
 * CRUD Operations:
 * - Create: POST
 * - Read: GET
 * - Update: PUT/PATCH
 * - Delete: DELETE
 */

const apiApp = express();
apiApp.use(express.json());

// Sample data (in a real app, this would be a database)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// RESTful endpoints for users resource

// GET all users
apiApp.get('/api/users', (req, res) => {
  res.json(users);
});

// GET a single user by ID
apiApp.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  res.json(user);
});

// POST create a new user
apiApp.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  
  // Validate input
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }
  
  // Generate a new ID (in a real app, the database would handle this)
  const id = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  
  const newUser = {
    id,
    name,
    email
  };
  
  users.push(newUser);
  
  res.status(201).json(newUser);
});

// PUT update a user
apiApp.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  
  // Validate input
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }
  
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // Update user
  const updatedUser = {
    id,
    name,
    email
  };
  
  users[userIndex] = updatedUser;
  
  res.json(updatedUser);
});

// PATCH partially update a user
apiApp.patch('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updates = req.body;
  
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // Update only the provided fields
  users[userIndex] = { ...users[userIndex], ...updates };
  
  res.json(users[userIndex]);
});

// DELETE a user
apiApp.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // Remove user
  const deletedUser = users[userIndex];
  users = users.filter(user => user.id !== id);
  
  res.json({ message: 'User deleted', user: deletedUser });
});

// API versioning
apiApp.get('/v1/users', (req, res) => {
  // Version 1 implementation
  res.json({ version: 'v1', users });
});

apiApp.get('/v2/users', (req, res) => {
  // Version 2 implementation with more fields
  const enhancedUsers = users.map(user => ({
    ...user,
    createdAt: new Date(),
    role: 'user'
  }));
  
  res.json({ version: 'v2', users: enhancedUsers });
});

// Using route prefixing for cleaner versioning
const v1Router = express.Router();
const v2Router = express.Router();

apiApp.use('/api/v1', v1Router);
apiApp.use('/api/v2', v2Router);

v1Router.get('/products', (req, res) => {
  // v1 implementation
  res.json([{ id: 1, name: 'Product 1' }]);
});

v2Router.get('/products', (req, res) => {
  // v2 implementation
  res.json([{ id: 1, name: 'Product 1', description: 'Detailed description' }]);
});

// API documentation with Swagger/OpenAPI
// Typically, you would use a library like swagger-jsdoc and swagger-ui-express
// npm install swagger-jsdoc swagger-ui-express

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Returns a list of all users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */
// This is a comment for Swagger documentation using JSDoc format

// Rate limiting (using express-rate-limit)
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

// Apply to all API routes
apiApp.use('/api/', apiLimiter);

// ------------------------------------------------------------------------------------------
// ## 11. Error Handling
// ------------------------------------------------------------------------------------------

/**
 * Proper error handling is crucial for building robust applications. Express
 * provides several ways to handle errors.
 */

const errorApp = express();

// Synchronous error handling
errorApp.get('/sync-error', (req, res) => {
  // This error will be caught by Express's built-in error handler
  throw new Error('Synchronous error example');
});

// Asynchronous error handling with next()
errorApp.get('/async-error', (req, res, next) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    try {
      // Simulate an error
      throw new Error('Asynchronous error example');
    } catch (err) {
      // Pass the error to the error-handling middleware
      next(err);
    }
  }, 100);
});

// Error handling with Promises
errorApp.get('/promise-error', (req, res, next) => {
  // Simulate a failed Promise
  Promise.reject(new Error('Promise error example'))
    .catch(next); // Pass error to Express error handler
});

// Error handling with async/await
errorApp.get('/async-await-error', async (req, res, next) => {
  try {
    // Simulate an async operation that fails
    await new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Async/await error example')), 100);
    });
  } catch (err) {
    next(err); // Pass error to Express error handler
  }
});

// Custom error class
class ApplicationError extends Error {
  constructor(message, statusCode, errorCode = 'GENERIC_ERROR') {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Route-specific error with custom error class
errorApp.get('/not-found', (req, res, next) => {
  next(new ApplicationError('Resource not found', 404, 'RESOURCE_NOT_FOUND'));
});

// Route that requires authentication
errorApp.get('/protected', (req, res, next) => {
  // Check if user is authenticated (simplified example)
  const isAuthenticated = false; // Assume not authenticated
  
  if (!isAuthenticated) {
    return next(new ApplicationError('Authentication required', 401, 'UNAUTHORIZED'));
  }
  
  res.send('Protected content');
});

// Route with a 404 error handler
errorApp.get('/user/:id', (req, res, next) => {
  const userId = parseInt(req.params.id);
  
  // Try to find user (simplified example)
  const user = null; // Assume user not found
  
  if (!user) {
    return next(new ApplicationError('User not found', 404, 'USER_NOT_FOUND'));
  }
  
  res.json(user);
});

// Custom 404 handler for undefined routes
errorApp.use((req, res, next) => {
  res.status(404).json({
    error: {
      message: 'Not Found',
      description: `Route ${req.method} ${req.url} not found`
    }
  });
});

// Global error handling middleware (must be the last middleware defined)
errorApp.use((err, req, res, next) => {
  console.error('Error:', err);
  
  // Check if it's a custom application error
  if (err instanceof ApplicationError) {
    return res.status(err.statusCode).json({
      error: {
        message: err.message,
        code: err.errorCode,
        status: err.statusCode
      }
    });
  }
  
  // Handle other errors
  const statusCode = err.statusCode || 500;
  
  res.status(statusCode).json({
    error: {
      message: statusCode === 500 ? 'Internal Server Error' : err.message,
      status: statusCode
    }
  });
});

// Error logging with external service (simplified example)
const logError = (err, req) => {
  // In a real app, you might log to a file, database, or external service
  console.error('ERROR LOG:', {
    timestamp: new Date().toISOString(),
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    ip: req.ip,
    user: req.user?.id || 'anonymous'
  });
};

// Enhanced error handler with logging
errorApp.use((err, req, res, next) => {
  // Log the error
  logError(err, req);
  
  // Rest of error handling logic...
  const statusCode = err.statusCode || 500;
  
  res.status(statusCode).json({
    error: {
      message: statusCode === 500 ? 'Internal Server Error' : err.message,
      status: statusCode
    }
  });
});

// ------------------------------------------------------------------------------------------
// ## 12. Database Integration
// ------------------------------------------------------------------------------------------

/**
 * Express can be integrated with various databases:
 * - SQL: MySQL, PostgreSQL, SQLite
 * - NoSQL: MongoDB, CouchDB, Firebase
 * - In-memory: Redis
 */

// Example with MongoDB using Mongoose (ODM for MongoDB)
// npm install mongoose

const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    // Exit process with failure
    process.exit(1);
  }
};

// Define a schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email format']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model
const User = mongoose.model('User', userSchema);

// Create a new user
const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (err) {
    throw err;
  }
};

// Find all users
const findAllUsers = async () => {
  try {
    return await User.find();
  } catch (err) {
    throw err;
  }
};

// Find a user by ID
const findUserById = async (id) => {
  try {
    return await User.findById(id);
  } catch (err) {
    throw err;
  }
};

// Update a user
const updateUser = async (id, userData) => {
  try {
    return await User.findByIdAndUpdate(
      id,
      userData,
      { new: true, runValidators: true }
    );
  } catch (err) {
    throw err;
  }
};

// Delete a user
const deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
};

// Express routes for MongoDB users
const mongoApp = express();
mongoApp.use(express.json());

// Get all users
mongoApp.get('/api/users', async (req, res, next) => {
  try {
    const users = await findAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// Get a user by ID
mongoApp.get('/api/users/:id', async (req, res, next) => {
  try {
    const user = await findUserById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// Create a user
mongoApp.post('/api/users', async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

// Update a user
mongoApp.put('/api/users/:id', async (req, res, next) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// Delete a user
mongoApp.delete('/api/users/:id', async (req, res, next) => {
  try {
    const user = await deleteUser(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    next(err);
  }
});

// Example with SQL using Sequelize (ORM for SQL databases)
// npm install sequelize mysql2

const { Sequelize, DataTypes } = require('sequelize');

// Connect to MySQL database
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Test the connection
const testSequelizeConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to MySQL has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Define a model
const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

// Sync the model with the database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database & tables synced!');
  } catch (err) {
    console.error('Error syncing database:', err);
  }
};

// Express routes for SQL products
const sqlApp = express();
sqlApp.use(express.json());

// Get all products
sqlApp.get('/api/products', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// Get a product by ID
sqlApp.get('/api/products/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// Create a product
sqlApp.post('/api/products', async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});

// Update a product
sqlApp.put('/api/products/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    await product.update(req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// Delete a product
sqlApp.delete('/api/products/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    next(err);
  }
});

// ------------------------------------------------------------------------------------------
// ## 13. Authentication and Authorization
// ------------------------------------------------------------------------------------------

/**
 * Authentication verifies who a user is, while authorization determines
 * what they can access. Common approaches include:
 * - Session-based auth
 * - Token-based auth (JWT)
 * - OAuth
 * - API keys
 */

// Example with JWT (JSON Web Tokens)
// npm install jsonwebtoken bcrypt

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Secret key for JWT (in production, store in environment variables)
const JWT_SECRET = 'your-secret-key';

// User database (simplified example, use a real database in production)
const authUsers = [
  {
    id: 1,
    username: 'johndoe',
    email: 'john@example.com',
    // Hashed password for 'password123'
    password: '$2b$10$YourHashedPasswordHere',
    role: 'user'
  },
  {
    id: 2,
    username: 'janedoe',
    email: 'jane@example.com',
    // Hashed password for 'password456'
    password: '$2b$10$AnotherHashedPasswordHere',
    role: 'admin'
}
];

// Authentication app
const authApp = express();
authApp.use(express.json());

// Register a new user
authApp.post('/api/register', async (req, res, next) => {
try {
  const { username, email, password } = req.body;
  
  // Check if user already exists
  if (authUsers.find(user => user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  // Create new user (in a real app, save to database)
  const newUser = {
    id: authUsers.length + 1,
    username,
    email,
    password: hashedPassword,
    role: 'user'
  };
  
  authUsers.push(newUser);
  
  // Create JWT token
  const token = jwt.sign(
    { id: newUser.id, role: newUser.role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
  
  // Send response (exclude password)
  const { password: _, ...userWithoutPassword } = newUser;
  
  res.status(201).json({
    message: 'User registered successfully',
    user: userWithoutPassword,
    token
  });
} catch (err) {
  next(err);
}
});

// Login
authApp.post('/api/login', async (req, res, next) => {
try {
  const { email, password } = req.body;
  
  // Find user by email
  const user = authUsers.find(user => user.email === email);
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // Create JWT token
  const token = jwt.sign(
    { id: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
  
  // Send response (exclude password)
  const { password: _, ...userWithoutPassword } = user;
  
  res.json({
    message: 'Login successful',
    user: userWithoutPassword,
    token
  });
} catch (err) {
  next(err);
}
});

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
// Get token from Authorization header
const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"

if (!token) {
  return res.status(401).json({ message: 'Authentication token required' });
}

try {
  // Verify token
  const decoded = jwt.verify(token, JWT_SECRET);
  
  // Attach user to request object
  req.user = decoded;
  
  next();
} catch (err) {
  return res.status(403).json({ message: 'Invalid or expired token' });
}
};

// Middleware to check role
const authorizeRole = (roles) => {
return (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Access denied' });
  }
  
  next();
};
};

// Protected route (requires authentication)
authApp.get('/api/profile', authenticateToken, (req, res) => {
// Find user by ID (in a real app, get from database)
const user = authUsers.find(user => user.id === req.user.id);

if (!user) {
  return res.status(404).json({ message: 'User not found' });
}

// Exclude password from response
const { password, ...userWithoutPassword } = user;

res.json(userWithoutPassword);
});

// Admin-only route (requires authentication and admin role)
authApp.get(
'/api/admin/dashboard',
authenticateToken,
authorizeRole(['admin']),
(req, res) => {
  res.json({
    message: 'Admin dashboard',
    users: authUsers.map(({ password, ...user }) => user)
  });
}
);

// Refresh token
authApp.post('/api/refresh-token', (req, res, next) => {
try {
  const { token } = req.body;
  
  if (!token) {
    return res.status(400).json({ message: 'Refresh token required' });
  }
  
  // Verify token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    
    // Generate new token
    const newToken = jwt.sign(
      { id: decoded.id, role: decoded.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.json({ token: newToken });
  });
} catch (err) {
  next(err);
}
});

// Logout (client-side)
// Note: JWT is stateless, so true "logout" happens on the client by removing the token
authApp.post('/api/logout', (req, res) => {
res.json({ message: 'Logout successful' });
// In a stateful auth system (cookies/sessions), you'd destroy the session here
});

// Password reset (simplified example)
authApp.post('/api/forgot-password', (req, res) => {
const { email } = req.body;

// Find user by email
const user = authUsers.find(user => user.email === email);

if (!user) {
  // For security, don't reveal if email exists or not
  return res.json({ message: 'If your email is registered, you will receive a reset link' });
}

// Generate reset token
const resetToken = jwt.sign(
  { id: user.id },
  JWT_SECRET,
  { expiresIn: '15m' }
);

// In a real app, send email with reset link
console.log(`Reset Token for ${email}: ${resetToken}`);

res.json({ message: 'If your email is registered, you will receive a reset link' });
});

// Reset password using token
authApp.post('/api/reset-password/:token', async (req, res, next) => {
try {
  const { token } = req.params;
  const { password } = req.body;
  
  // Verify token
  jwt.verify(token, JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    
    // Find user by ID
    const userIndex = authUsers.findIndex(user => user.id === decoded.id);
    
    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Update user's password
    authUsers[userIndex].password = hashedPassword;
    
    res.json({ message: 'Password reset successful' });
  });
} catch (err) {
  next(err);
}
});

// OAuth Example (simplified, using Passport.js)
// npm install passport passport-google-oauth20

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// OAuth configuration
passport.use(new GoogleStrategy({
  clientID: 'your-google-client-id',
  clientSecret: 'your-google-client-secret',
  callbackURL: 'http://localhost:3000/auth/google/callback'
},
function(accessToken, refreshToken, profile, done) {
  // In a real app, find or create user in database
  // For this example, we'll use a simplified approach
  const user = {
    id: profile.id,
    name: profile.displayName,
    email: profile.emails[0].value,
    role: 'user'
  };
  
  return done(null, user);
}
));

// Serialize and deserialize user (simplified)
passport.serializeUser((user, done) => {
done(null, user.id);
});

passport.deserializeUser((id, done) => {
// In a real app, find user in database by ID
const user = { id, name: 'User Name' };
done(null, user);
});

// OAuth routes
const oauthApp = express();
oauthApp.use(require('express-session')({ secret: 'session-secret', resave: false, saveUninitialized: false }));
oauthApp.use(passport.initialize());
oauthApp.use(passport.session());

// Start OAuth flow
oauthApp.get('/auth/google',
passport.authenticate('google', { scope: ['profile', 'email'] })
);

// OAuth callback
oauthApp.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/login' }),
(req, res) => {
  // Successful authentication
  res.redirect('/profile');
}
);

// Profile route (requires authentication)
oauthApp.get('/profile', (req, res) => {
if (!req.isAuthenticated()) {
  return res.redirect('/login');
}

res.json({
  message: 'Profile page',
  user: req.user
});
});

// Logout route
oauthApp.get('/logout', (req, res) => {
req.logout();
res.redirect('/');
});

// ------------------------------------------------------------------------------------------
// ## 14. Best Practices and Performance Optimization
// ------------------------------------------------------------------------------------------

/**
* Following best practices ensures your application is secure, maintainable,
* and performs well.
*/

// Security Best Practices

// 1. Use HTTPS
// In production, always use HTTPS to encrypt data in transit
// Set up SSL/TLS certificates (Let's Encrypt provides free certificates)

// 2. Set security headers
// npm install helmet
const secureApp = express();
const helmet = require('helmet');

// Use helmet to set various security headers
secureApp.use(helmet());

// 3. Implement rate limiting
// See previous example with express-rate-limit

// 4. Validate and sanitize input
// npm install express-validator
const { body, validationResult } = require('express-validator');

secureApp.post(
'/api/users',
[
  // Validate and sanitize input
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
],
(req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  // Process valid input
  res.json({ message: 'User created successfully' });
}
);

// 5. Prevent SQL injection
// Use parameterized queries or an ORM like Sequelize

// Instead of:
// const query = `SELECT * FROM users WHERE email = '${email}'`;

// Do this with parameterized queries:
// const query = 'SELECT * FROM users WHERE email = ?';
// db.query(query, [email], (err, results) => { ... });

// 6. Protect against NoSQL injection
// Validate and sanitize input, use proper querying with MongoDB

// 7. Implement proper error handling
// See earlier section on error handling

// 8. Use environment variables for sensitive data
// npm install dotenv
// require('dotenv').config();
// const dbPassword = process.env.DB_PASSWORD;

// Performance Optimization

// 1. Enable compression
// npm install compression
const compression = require('compression');
secureApp.use(compression());

// 2. Implement caching
// HTTP caching with Cache-Control headers
secureApp.get('/api/products', (req, res) => {
// Set Cache-Control header
res.set('Cache-Control', 'public, max-age=300'); // 5 minutes

// Send response
res.json([{ id: 1, name: 'Product 1' }]);
});

// 3. Use memory caching with Redis (simplified example)
// npm install redis
const redis = require('redis');
const redisClient = redis.createClient();

// Middleware for caching responses
const cacheMiddleware = (duration) => {
return (req, res, next) => {
  const key = `__express__${req.originalUrl || req.url}`;
  
  redisClient.get(key, (err, data) => {
    if (err) {
      console.error(err);
      return next();
    }
    
    if (data !== null) {
      // Cache hit
      const cachedResponse = JSON.parse(data);
      return res.json(cachedResponse);
    }
    
    // Cache miss - store original res.json method
    const originalJson = res.json;
    
    // Override res.json method to cache the response
    res.json = function(body) {
      redisClient.setex(key, duration, JSON.stringify(body));
      return originalJson.call(this, body);
    };
    
    next();
  });
};
};

// Use the caching middleware
secureApp.get('/api/cached-data', cacheMiddleware(60), (req, res) => {
// Expensive operation (e.g., database query)
setTimeout(() => {
  res.json({ data: 'This response is cached for 60 seconds' });
}, 500);
});

// 4. Use asynchronous operations
// Use async/await instead of nested callbacks

// 5. Implement pagination for large data sets
secureApp.get('/api/items', (req, res) => {
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
const skip = (page - 1) * limit;

// In a real app, query database with pagination
// Example: Item.find().skip(skip).limit(limit)

const items = Array.from({ length: limit }, (_, i) => ({
  id: skip + i + 1,
  name: `Item ${skip + i + 1}`
}));

res.json({
  items,
  page,
  limit,
  totalItems: 100, // In a real app, get count from database
  totalPages: Math.ceil(100 / limit)
});
});

// 6. Use connection pooling for databases
// Most database clients support connection pooling out of the box

// 7. Implement a worker queue for resource-intensive tasks
// npm install bull
const Queue = require('bull');

// Create a queue
const emailQueue = new Queue('email-queue', {
redis: {
  host: 'localhost',
  port: 6379
}
});

// Add a job to the queue
secureApp.post('/api/send-newsletter', (req, res) => {
// Add job to queue instead of processing immediately
emailQueue.add({
  subject: 'Monthly Newsletter',
  recipients: ['user1@example.com', 'user2@example.com'],
  content: 'Newsletter content here'
});

res.json({ message: 'Newsletter queued for sending' });
});

// Process jobs (in a separate worker process)
emailQueue.process(async (job) => {
const { subject, recipients, content } = job.data;

// Simulate sending emails
console.log(`Sending ${subject} to ${recipients.length} recipients`);

// In a real app, use a library like nodemailer to send emails

return { success: true, sent: recipients.length };
});

// 8. Use HTTP/2 for better performance
// This requires HTTPS and a few additional settings with Node.js

// 9. Implement server-side rendering or static site generation
// For performance-critical applications, consider frameworks like Next.js

// Monitoring and Logging

// 1. Use a logger instead of console.log
// npm install winston
const winston = require('winston');

// Create a logger
const logger = winston.createLogger({
level: 'info',
format: winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
),
transports: [
  new winston.transports.File({ filename: 'error.log', level: 'error' }),
  new winston.transports.File({ filename: 'combined.log' })
]
});

// Add console transport in development
if (process.env.NODE_ENV !== 'production') {
logger.add(new winston.transports.Console({
  format: winston.format.simple()
}));
}

// Use the logger
secureApp.get('/api/log-example', (req, res) => {
logger.info('Info message', { path: req.path, query: req.query });
logger.error('Error message', { error: 'Something went wrong' });

res.send('Check the logs');
});

// 2. Implement request logging
// npm install morgan
const morgan = require('morgan');

// Use morgan for HTTP request logging
secureApp.use(morgan('combined'));

// 3. Add correlation IDs for tracking requests across services
secureApp.use((req, res, next) => {
req.id = require('crypto').randomBytes(16).toString('hex');
res.setHeader('X-Request-ID', req.id);
next();
});

// 4. Performance monitoring with APM tools
// Popular options: New Relic, Datadog, AppDynamics, Elastic APM

// Code Organization

// 1. Use the MVC pattern
// - Model: Data and business logic
// - View: Templates and presentation
// - Controller: Handles requests and responses

// 2. Organize routes with Express Router
// See previous examples

// 3. Use middleware for cross-cutting concerns
// See previous examples

// 4. Implement a service layer
// services/userService.js
const userService = {
findAll: async () => {
  // Query database
  return [{ id: 1, name: 'John' }];
},

findById: async (id) => {
  // Query database
  return { id, name: 'John' };
},

create: async (userData) => {
  // Validate data
  // Save to database
  return { id: 1, ...userData };
}
};

// controllers/userController.js
const userController = {
getUsers: async (req, res, next) => {
  try {
    const users = await userService.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
},

getUserById: async (req, res, next) => {
  try {
    const user = await userService.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    next(err);
  }
},

createUser: async (req, res, next) => {
  try {
    const user = await userService.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}
};

// ------------------------------------------------------------------------------------------
// ## 15. Deployment Strategies
// ------------------------------------------------------------------------------------------

/**
* Deploying a Node.js application involves preparing it for production use
* and making it available to users.
*/

// Preparing for Production

// 1. Set environment variables
// In production, use environment variables for configuration

// Load environment variables
// require('dotenv').config();

// Access environment variables
const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV || 'development';
const dbUrl = process.env.DATABASE_URL;

// Use environment-specific settings
if (nodeEnv === 'production') {
// Production-specific settings
app.use(express.static('dist'));
} else {
// Development-specific settings
app.use(express.static('public'));
}

// 2. Security checklist
// - Use HTTPS
// - Set security headers (helmet)
// - Implement rate limiting
// - Hide sensitive error details
// - Use proper authentication and authorization
// - Validate and sanitize all input
// - Keep dependencies updated

// 3. Performance optimizations
// - Enable compression
// - Implement caching
// - Optimize database queries
// - Minify and bundle assets
// - Use a CDN for static assets

// Deployment Options

// 1. Traditional hosting
// - VPS (DigitalOcean, Linode, AWS EC2)
// - Shared hosting with Node.js support

// 2. Platform as a Service (PaaS)
// - Heroku
// - Google App Engine
// - Azure App Service
// - AWS Elastic Beanstalk

// 3. Containerization
// - Docker
// - Kubernetes

// 4. Serverless
// - AWS Lambda
// - Google Cloud Functions
// - Azure Functions

// Containerization with Docker

// Dockerfile example
/*
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["node", "app.js"]
*/

// docker-compose.yml example
/*
version: '3'
services:
app:
  build: .
  ports:
    - "3000:3000"
  environment:
    - NODE_ENV=production
    - DATABASE_URL=mongodb://mongo:27017/myapp
  depends_on:
    - mongo
mongo:
  image: mongo
  ports:
    - "27017:27017"
  volumes:
    - mongo-data:/data/db
volumes:
mongo-data:
*/

// Process Management

// 1. Use process managers in production
// - PM2
// - Forever
// - Nodemon (development only)

// PM2 ecosystem.config.js example
/*
module.exports = {
apps: [{
  name: 'my-app',
  script: 'app.js',
  instances: 'max',
  exec_mode: 'cluster',
  autorestart: true,
  watch: false,
  max_memory_restart: '1G',
  env: {
    NODE_ENV: 'production',
    PORT: 3000
  }
}]
};
*/

// Monitoring and Logging

// 1. Application monitoring
// - New Relic
// - Datadog
// - AppDynamics
// - Sentry

// 2. Server monitoring
// - Prometheus + Grafana
// - Zabbix
// - Nagios

// 3. Centralized logging
// - ELK Stack (Elasticsearch, Logstash, Kibana)
// - Graylog
// - Loggly
// - AWS CloudWatch

// Scaling Strategies

// 1. Vertical scaling (scale up)
// - Add more resources to existing servers (CPU, RAM)

// 2. Horizontal scaling (scale out)
// - Add more server instances
// - Load balancing

// 3. Microservices architecture
// - Break down application into smaller, focused services
// - Each service can be scaled independently

// 4. Database scaling
// - Read replicas
// - Sharding
// - Caching

// Continuous Integration/Continuous Deployment (CI/CD)

// Popular CI/CD tools:
// - GitHub Actions
// - Jenkins
// - Travis CI
// - CircleCI
// - GitLab CI

// Example GitHub Actions workflow (.github/workflows/node.yml)
/*
name: Node.js CI/CD

on:
push:
  branches: [ main ]
pull_request:
  branches: [ main ]

jobs:
build:
  runs-on: ubuntu-latest

  strategy:
    matrix:
      node-version: [14.x]

  steps:
  - uses: actions/checkout@v2
  - name: Use Node.js ${{ matrix.node-version }}
    uses: actions/setup-node@v1
    with:
      node-version: ${{ matrix.node-version }}
  - run: npm ci
  - run: npm run build --if-present
  - run: npm test

deploy:
  needs: build
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main'

  steps:
  - uses: actions/checkout@v2
  - name: Deploy to production
    uses: some-deployment-action@v1
    with:
      server: ${{ secrets.PRODUCTION_SERVER }}
      username: ${{ secrets.PRODUCTION_USERNAME }}
      key: ${{ secrets.PRODUCTION_SSH_KEY }}
*/

/**
* Conclusion
* 
* Node.js and Express provide a powerful platform for building web applications
* and APIs. By following best practices and understanding the core concepts,
* you can build scalable, maintainable, and performant applications.
* 
* This tutorial has covered the fundamentals from setting up a basic server to
* advanced topics like authentication, database integration, and production deployment.
* 
* Remember that the Node.js ecosystem is constantly evolving, so keep learning
* and exploring new tools and techniques.
*/

// ------------------------------------------------------------------------------------------
// ## Appendix: Useful npm Packages
// ------------------------------------------------------------------------------------------

/**
* Here are some useful npm packages for Node.js/Express development:
* 
* Web Framework:
* - express: Web framework for Node.js
* - koa: Modern web framework by Express team
* - fastify: Fast and low overhead web framework
* 
* Middleware:
* - body-parser: Parse HTTP request bodies
* - multer: Handle multipart/form-data (file uploads)
* - helmet: Set security-related HTTP headers
* - cors: Enable CORS
* - compression: Compress HTTP responses
* - morgan: HTTP request logger
* - express-validator: Validate and sanitize input
* - express-rate-limit: Rate limiting
* 
* Authentication:
* - passport: Authentication middleware
* - jsonwebtoken: JWT implementation
* - bcrypt: Password hashing
* - express-session: Session management
* 
* Database:
* - mongoose: MongoDB ODM
* - sequelize: SQL ORM (MySQL, PostgreSQL, etc.)
* - knex: SQL query builder
* - typeorm: TypeScript ORM
* - redis: Redis client
* 
* Testing:
* - jest: Testing framework
* - mocha: Testing framework
* - chai: Assertion library
* - supertest: HTTP testing
* 
* Utilities:
* - dotenv: Load environment variables
* - winston: Logging
* - nodemon: Auto-restart server during development
* - lodash: Utility functions
* - moment: Date manipulation
* - uuid: Generate UUIDs
* 
* Process Management:
* - pm2: Process manager
* - forever: Process manager
* 
* Task Queues:
* - bull: Redis-based queue
* - agenda: MongoDB-based job scheduling
* 
* Real-time:
* - socket.io: Real-time bidirectional event-based communication
* - ws: WebSocket library
* 
* API Documentation:
* - swagger-jsdoc: Swagger documentation from JSDoc
* - swagger-ui-express: Swagger UI
* 
* Performance Monitoring:
* - newrelic: APM solution
* - prom-client: Prometheus client
*/// # Node.js and Express: A Comprehensive Guide
//
// ## Table of Contents
// 1. Introduction to Node.js
// 2. Setting Up a Node.js Project
// 3. Understanding Node.js Core Modules
// 4. Introduction to Express.js
// 5. Routing in Express
// 6. Middleware
// 7. Request and Response Objects
// 8. Working with Templates
// 9. Handling Form Data
// 10. RESTful API Development
// 11. Error Handling
// 12. Database Integration
// 13. Authentication and Authorization
// 14. Best Practices and Performance Optimization
// 15. Deployment Strategies
