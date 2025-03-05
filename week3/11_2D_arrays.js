// ==========================================
// JAVASCRIPT 2D ARRAYS
// ==========================================

// A 2D array is an array of arrays, creating a matrix-like structure
// with rows and columns that can store and organize data

// ---- CREATING 2D ARRAYS ----

// 1. Creating a 2D array using array literals
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Basic 2D array (matrix):");
console.log(matrix);
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// 2. Creating an empty 2D array and populating it
const grid = [];

// Add 3 rows
for (let i = 0; i < 3; i++) {
  grid[i] = []; // Create an empty row
  
  // Add 4 columns to each row
  for (let j = 0; j < 4; j++) {
    grid[i][j] = i * 4 + j + 1; // Populate with values 1-12
  }
}

console.log("Dynamically created 2D array:");
console.log(grid);
// Output: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

// 3. Creating a 2D array with Array constructor
// Create a 3x3 array filled with zeros
const zeros = Array(3).fill().map(() => Array(3).fill(0));

console.log("3x3 array filled with zeros:");
console.log(zeros);
// Output: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

// 4. Creating a 2D array with specific dimensions and initial value
function create2DArray(rows, cols, initialValue) {
  return Array(rows).fill().map(() => Array(cols).fill(initialValue));
}

const table = create2DArray(2, 3, null);
console.log("2x3 array filled with null:");
console.log(table);
// Output: [[null, null, null], [null, null, null]]

// ---- ACCESSING 2D ARRAY ELEMENTS ----

// 1. Access specific element using row and column indices
const value = matrix[1][2]; // Row 1, Column 2
console.log(`Value at matrix[1][2]: ${value}`);
// Output: Value at matrix[1][2]: 6

// 2. Accessing an entire row
const secondRow = matrix[1];
console.log("Second row:", secondRow);
// Output: Second row: [4, 5, 6]

// 3. Getting array dimensions
const numRows = matrix.length;
const numCols = matrix[0].length; // Assumes all rows have same length
console.log(`Matrix dimensions: ${numRows}x${numCols}`);
// Output: Matrix dimensions: 3x3

// ---- MODIFYING 2D ARRAYS ----

// 1. Changing a specific element
matrix[0][1] = 20;
console.log("After changing element [0][1] to 20:");
console.log(matrix);
// Output: [[1, 20, 3], [4, 5, 6], [7, 8, 9]]

// 2. Adding a new row
matrix.push([10, 11, 12]);
console.log("After adding a new row:");
console.log(matrix);
// Output: [[1, 20, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]

// 3. Adding a new column (have to add to each row)
for (let i = 0; i < matrix.length; i++) {
  matrix[i].push(i * 10);
}
console.log("After adding a new column:");
console.log(matrix);
// Output: 
// [
//   [1, 20, 3, 0],
//   [4, 5, 6, 10],
//   [7, 8, 9, 20],
//   [10, 11, 12, 30]
// ]

// 4. Removing a row
matrix.pop(); // Remove last row
console.log("After removing the last row:");
console.log(matrix);
// Output: [[1, 20, 3, 0], [4, 5, 6, 10], [7, 8, 9, 20]]

// 5. Removing a column (have to modify each row)
for (let i = 0; i < matrix.length; i++) {
  matrix[i].pop(); // Remove last element from each row
}
console.log("After removing the last column:");
console.log(matrix);
// Output: [[1, 20, 3], [4, 5, 6], [7, 8, 9]]

// ---- ITERATING THROUGH 2D ARRAYS ----

// 1. Using nested for loops (most common approach)
console.log("Iterating with nested for loops:");
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    console.log(`grid[${i}][${j}] = ${grid[i][j]}`);
  }
}

// 2. Using forEach (for both outer and inner arrays)
console.log("Iterating with forEach:");
grid.forEach((row, rowIndex) => {
  row.forEach((value, colIndex) => {
    console.log(`grid[${rowIndex}][${colIndex}] = ${value}`);
  });
});

// 3. Using for...of loops
console.log("Iterating with for...of:");
let rowNum = 0;
for (const row of grid) {
  let colNum = 0;
  for (const value of row) {
    console.log(`grid[${rowNum}][${colNum}] = ${value}`);
    colNum++;
  }
  rowNum++;
}

// 4. Using map to transform values
const doubledValues = grid.map(row => {
  return row.map(value => value * 2);
});

console.log("Doubled values using map:");
console.log(doubledValues);
// Output: [[2, 4, 6, 8], [10, 12, 14, 16], [18, 20, 22, 24]]

// ---- COMMON 2D ARRAY OPERATIONS ----

// 1. Finding the sum of all elements
function sumMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

console.log(`Sum of all elements in the matrix: ${sumMatrix(matrix)}`);
// Output will vary based on previous modifications

// Modern approach using flat and reduce
const sumModern = matrix.flat().reduce((sum, value) => sum + value, 0);
console.log(`Sum using modern methods: ${sumModern}`);

// 2. Finding max value in a 2D array
function findMax(matrix) {
  let max = matrix[0][0]; // Start with first element
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
  }
  
  return max;
}

console.log(`Maximum value in the matrix: ${findMax(matrix)}`);
// Output will vary based on previous modifications

// Modern approach using flat and Math.max
const maxModern = Math.max(...matrix.flat());
console.log(`Max using modern methods: ${maxModern}`);

// 3. Transposing a matrix (rows become columns and vice versa)
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array(cols).fill().map(() => Array(rows).fill(0));
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  
  return result;
}

const transposed = transposeMatrix(matrix);
console.log("Transposed matrix:");
console.log(transposed);
// Output will vary based on previous modifications

// ---- JAGGED ARRAYS (UNEVEN ROWS) ----

// 2D arrays where rows have different lengths
const jaggedArray = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

console.log("Jagged array (uneven rows):");
console.log(jaggedArray);
// Output: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]

// When working with jagged arrays, always check row length
for (let i = 0; i < jaggedArray.length; i++) {
  console.log(`Row ${i} has ${jaggedArray[i].length} elements`);
}
// Output:
// Row 0 has 3 elements
// Row 1 has 2 elements
// Row 2 has 4 elements

// ---- PRACTICAL EXAMPLES ----

// 1. Tic-tac-toe game board
const gameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['O', 'X', 'X']
];

console.log("Tic-tac-toe board:");
for (const row of gameBoard) {
  console.log(row.join(' | '));
  if (row !== gameBoard[gameBoard.length - 1]) {
    console.log('---------');
  }
}
// Output:
// X | O | X
// ---------
// O | X | O
// ---------
// O | X | X

// 2. Spreadsheet-like data
const spreadsheet = [
  ['Name', 'Age', 'City'],
  ['Alice', 28, 'New York'],
  ['Bob', 32, 'Chicago'],
  ['Charlie', 24, 'San Francisco']
];

console.log("\nSpreadsheet data:");
for (const row of spreadsheet) {
  console.log(row.join('\t'));
}
// Output:
// Name    Age    City
// Alice   28     New York
// Bob     32     Chicago
// Charlie 24     San Francisco

// 3. Image processing with pixel values (simplified)
const pixelValues = [
  [255, 0, 0], // Red
  [0, 255, 0], // Green
  [0, 0, 255]  // Blue
];

// Grayscale conversion (simplified)
const grayscale = pixelValues.map(pixel => {
  // Average the RGB values for grayscale
  const avg = Math.round((pixel[0] + pixel[1] + pixel[2]) / 3);
  return [avg, avg, avg];
});

console.log("Original pixels:", pixelValues);
console.log("Grayscale pixels:", grayscale);
// Output:
// Original pixels: [[255, 0, 0], [0, 255, 0], [0, 0, 255]]
// Grayscale pixels: [[85, 85, 85], [85, 85, 85], [85, 85, 85]]

// ---- PERFORMANCE CONSIDERATIONS ----

// 1. Pre-allocating arrays is more efficient than dynamically resizing
console.time('Dynamic Sizing');
const dynamicArray = [];
for (let i = 0; i < 1000; i++) {
  dynamicArray[i] = [];
  for (let j = 0; j < 1000; j++) {
    dynamicArray[i][j] = 0;
  }
}
console.timeEnd('Dynamic Sizing');

console.time('Pre-allocation');
const preAllocated = Array(1000).fill().map(() => Array(1000).fill(0));
console.timeEnd('Pre-allocation');

// 2. Row-major vs column-major iteration
// JavaScript arrays are row-major, meaning elements in the same row
// are stored consecutively in memory. Iterating by rows is faster.

// Efficient (Row-major order)
console.time('Row-major iteration');
for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) {
    preAllocated[i][j] = i + j;
  }
}
console.timeEnd('Row-major iteration');

// Less efficient (Column-major order)
console.time('Column-major iteration');
for (let j = 0; j < 1000; j++) {
  for (let i = 0; i < 1000; i++) {
    preAllocated[i][j] = i + j;
  }
}
console.timeEnd('Column-major iteration');