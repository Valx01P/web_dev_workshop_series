// ==========================================
// JAVASCRIPT FILE INPUT AND OUTPUT
// ==========================================

// JavaScript handles files differently depending on the environment:
// - Browser: Web APIs like FileReader, Fetch API, Blob, etc.
// - Node.js: Built-in fs module and streams

// ---- BROWSER FILE INPUT ----

// 1. Reading Files with FileReader API

// HTML for file input (reference only):
// <input type="file" id="fileInput">
// <button onclick="readFile()">Read File</button>

// Basic text file reading
function readFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  
  if (!file) {
    console.log('No file selected');
    return;
  }
  
  console.log('File selected:', file.name);
  console.log('File size:', file.size, 'bytes');
  console.log('File type:', file.type);
  
  const reader = new FileReader();
  
  // Event triggered when read operation is completed
  reader.onload = function(event) {
    const content = event.target.result;
    console.log('File content:', content);
    
    // Here you can process the file content
    // document.getElementById('output').textContent = content;
  };
  
  // Event triggered if error occurs during read
  reader.onerror = function() {
    console.error('Error reading file');
  };
  
  // Start reading the file as text
  reader.readAsText(file);
}

// 2. Reading files as Data URLs (for images, etc.)
function readFileAsDataURL() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  
  if (!file) return;
  
  const reader = new FileReader();
  
  reader.onload = function(event) {
    const dataUrl = event.target.result;
    console.log('Data URL:', dataUrl.substring(0, 50) + '...');
    
    // Display image if it's an image file
    // const img = document.createElement('img');
    // img.src = dataUrl;
    // document.body.appendChild(img);
  };
  
  reader.readAsDataURL(file);
}

// 3. Reading files as array buffer (for binary data)
function readFileAsArrayBuffer() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  
  if (!file) return;
  
  const reader = new FileReader();
  
  reader.onload = function(event) {
    const arrayBuffer = event.target.result;
    
    // Process binary data
    const bytes = new Uint8Array(arrayBuffer);
    console.log('First 10 bytes:', Array.from(bytes.slice(0, 10)));
  };
  
  reader.readAsArrayBuffer(file);
}

// 4. Reading multiple files
function readMultipleFiles() {
  // HTML: <input type="file" id="multipleFiles" multiple>
  
  const fileInput = document.getElementById('multipleFiles');
  const files = fileInput.files;
  
  console.log('Number of files selected:', files.length);
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(`File ${i + 1}: ${file.name}, ${file.size} bytes`);
    
    // Process each file...
    const reader = new FileReader();
    
    reader.onload = (function(f) {
      return function(event) {
        console.log(`Content of ${f.name}:`, event.target.result.substring(0, 50) + '...');
      };
    })(file);
    
    reader.readAsText(file);
  }
}

// 5. Drag and Drop File Input
function setupDragAndDrop() {
  // HTML:
  // <div id="dropZone" style="width: 300px; height: 200px; border: 2px dashed gray;">
  //   Drop files here
  // </div>
  
  const dropZone = document.getElementById('dropZone');
  
  // Prevent default behavior to allow drop
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
  });
  
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  // Highlight drop zone when file is dragged over it
  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
  });
  
  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
  });
  
  function highlight() {
    dropZone.classList.add('highlight');
  }
  
  function unhighlight() {
    dropZone.classList.remove('highlight');
  }
  
  // Handle dropped files
  dropZone.addEventListener('drop', handleDrop, false);
  
  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    
    handleFiles(files);
  }
  
  function handleFiles(files) {
    console.log('Files dropped:', files.length);
    
    // Process each file
    [...files].forEach(file => {
      console.log('Processing:', file.name);
      // Read file content as needed...
    });
  }
}

// ---- BROWSER FILE OUTPUT ----

// 1. Creating and downloading files using Blob and URL.createObjectURL
function createAndDownloadTextFile() {
  const content = 'Hello, this is some text content created in JavaScript!';
  const fileName = 'example.txt';
  
  // Create a Blob with the content
  const blob = new Blob([content], { type: 'text/plain' });
  
  // Create an anchor element and set properties
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  
  // Append to the document, click it, and remove it
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href); // Free up memory
}

// 2. Creating and downloading a JSON file
function createAndDownloadJSONFile() {
  const data = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    interests: ['programming', 'music', 'hiking']
  };
  
  const jsonContent = JSON.stringify(data, null, 2); // Pretty-print with 2-space indent
  const fileName = 'user-data.json';
  
  const blob = new Blob([jsonContent], { type: 'application/json' });
  
  // Same download process as before
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

// 3. Creating and downloading a CSV file
function createAndDownloadCSVFile() {
  const data = [
    ['Name', 'Email', 'Age'],
    ['John Doe', 'john@example.com', 30],
    ['Jane Smith', 'jane@example.com', 25],
    ['Bob Johnson', 'bob@example.com', 45]
  ];
  
  // Convert 2D array to CSV string
  let csvContent = '';
  data.forEach(row => {
    // Handle commas and quotes in data (simple CSV escaping)
    const escapedRow = row.map(item => {
      // Convert to string and check if we need to quote it
      const str = String(item);
      return str.includes(',') || str.includes('"') || str.includes('\n') 
        ? `"${str.replace(/"/g, '""')}"` // Escape quotes by doubling them
        : str;
    });
    csvContent += escapedRow.join(',') + '\n';
  });
  
  const fileName = 'users.csv';
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
  // Download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

// 4. Saving canvas as image
function saveCanvasAsImage() {
  // HTML: <canvas id="myCanvas" width="400" height="300"></canvas>
  
  const canvas = document.getElementById('myCanvas');
  const context = canvas.getContext('2d');
  
  // Draw something on canvas (example)
  context.fillStyle = 'blue';
  context.fillRect(10, 10, 380, 280);
  context.fillStyle = 'white';
  context.font = '30px Arial';
  context.fillText('Hello, Canvas!', 120, 150);
  
  // Convert canvas to data URL and download
  try {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (e) {
    console.error('Error saving canvas as image:', e);
  }
}

// ---- FETCH API FOR FILE OPERATIONS ----

// 1. Loading file from URL
function loadFileFromURL() {
  const url = 'https://example.com/sample.txt';
  
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text(); // For text files
      // Or response.json() for JSON, response.blob() for binary, etc.
    })
    .then(content => {
      console.log('File content:', content);
      // Process file content
    })
    .catch(error => {
      console.error('Error loading file:', error);
    });
}

// 2. Uploading file to server
function uploadFileToServer() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  
  if (!file) {
    console.log('No file selected');
    return;
  }
  
  const formData = new FormData();
  formData.append('file', file);
  
  // Add any additional fields if needed
  formData.append('user', 'john');
  
  fetch('https://example.com/upload', {
    method: 'POST',
    body: formData
    // No need to set Content-Type header - it's set automatically with boundary
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Upload successful:', data);
    })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
}

// ---- NODE.JS FILE OPERATIONS ----

// Node.js has a built-in 'fs' module for file operations
// These examples would run in Node.js, not in browser

// 1. Reading a file synchronously
function nodeReadFileSync() {
  // Only works in Node.js environment
  const fs = require('fs');
  
  try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

// 2. Reading a file asynchronously
function nodeReadFileAsync() {
  // Only works in Node.js environment
  const fs = require('fs');
  
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File contents:', data);
  });
}

// 3. Reading a file with promises (modern Node.js)
async function nodeReadFilePromise() {
  // Only works in Node.js environment
  const fs = require('fs').promises;
  
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

// 4. Writing a file synchronously
function nodeWriteFileSync() {
  // Only works in Node.js environment
  const fs = require('fs');
  
  try {
    fs.writeFileSync('output.txt', 'Hello, Node.js!', 'utf8');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

// 5. Writing a file asynchronously
function nodeWriteFileAsync() {
  // Only works in Node.js environment
  const fs = require('fs');
  
  fs.writeFile('output.txt', 'Hello, Node.js!', 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File written successfully');
  });
}

// 6. Appending to a file
function nodeAppendFile() {
  // Only works in Node.js environment
  const fs = require('fs');
  
  fs.appendFile('log.txt', `Log entry: ${new Date().toISOString()}\n`, (err) => {
    if (err) {
      console.error('Error appending to file:', err);
      return;
    }
    console.log('Data appended to file');
  });
}

// 7. Working with file streams
function nodeFileStreams() {
  // Only works in Node.js environment
  const fs = require('fs');
  
  // Create read stream
  const readStream = fs.createReadStream('bigfile.txt', { encoding: 'utf8' });
  
  // Create write stream
  const writeStream = fs.createWriteStream('output.txt');
  
  // Handle read stream events
  readStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data`);
    writeStream.write(chunk);
  });
  
  readStream.on('end', () => {
    console.log('Finished reading file');
    writeStream.end();
  });
  
  readStream.on('error', (err) => {
    console.error('Error reading:', err);
  });
  
  // Handle write stream events
  writeStream.on('finish', () => {
    console.log('All data has been written');
  });
  
  writeStream.on('error', (err) => {
    console.error('Error writing:', err);
  });
  
  // Alternative: Pipe read stream directly to write stream
  // readStream.pipe(writeStream);
}

// 8. Working with directories
function nodeDirectoryOperations() {
  // Only works in Node.js environment
  const fs = require('fs');
  const path = require('path');
  
  // Create directory
  fs.mkdir('new-directory', (err) => {
    if (err) {
      console.error('Error creating directory:', err);
      return;
    }
    console.log('Directory created');
  });
  
  // Read directory contents
  fs.readdir('.', (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }
    console.log('Directory contents:', files);
    
    // Get file details
    files.forEach(file => {
      fs.stat(path.join('.', file), (err, stats) => {
        if (err) {
          console.error(`Error getting stats for ${file}:`, err);
          return;
        }
        
        console.log(`${file}: ${stats.isDirectory() ? 'Directory' : 'File'}`);
        console.log(`  Size: ${stats.size} bytes`);
        console.log(`  Created: ${stats.birthtime}`);
        console.log(`  Modified: ${stats.mtime}`);
      });
    });
  });
}

// ---- HANDLING DIFFERENT FILE TYPES ----

// 1. Parsing CSV files in browser
function parseCSVFile(file) {
  const reader = new FileReader();
  
  reader.onload = function(event) {
    const content = event.target.result;
    
    // Manual parsing (simple implementation)
    const rows = content.split('\n');
    const data = rows.map(row => {
      return parseCSVRow(row);
    });
    
    console.log('Parsed CSV data:', data);
  };
  
  reader.readAsText(file);
  
  // Helper function to parse CSV row with quoted fields
  function parseCSVRow(row) {
    const result = [];
    let startPos = 0;
    let inQuotes = false;
    
    for (let i = 0; i < row.length; i++) {
      if (row[i] === '"') {
        inQuotes = !inQuotes;
      } else if (row[i] === ',' && !inQuotes) {
        result.push(row.substring(startPos, i).replace(/(^"|"$)/g, '')); // Remove quotes
        startPos = i + 1;
      }
    }
    
    // Add the last field
    if (startPos < row.length) {
      result.push(row.substring(startPos).replace(/(^"|"$)/g, ''));
    }
    
    return result;
  }
  
  // Alternative: Use a library like Papa Parse
  // papaparse.com
}

// 2. Parsing JSON files
function parseJSONFile(file) {
  const reader = new FileReader();
  
  reader.onload = function(event) {
    try {
      const content = event.target.result;
      const data = JSON.parse(content);
      
      console.log('Parsed JSON data:', data);
      // Process JSON data...
    } catch (e) {
      console.error('Error parsing JSON:', e);
    }
  };
  
  reader.readAsText(file);
}

// 3. Processing image files
function processImageFile(file) {
  // Check if the file is an image
  if (!file.type.startsWith('image/')) {
    console.error('Not an image file');
    return;
  }
  
  const reader = new FileReader();
  
  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      console.log('Image loaded');
      console.log('Dimensions:', img.width, 'x', img.height);
      
      // Process image - example: create thumbnail
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Set thumbnail dimensions
      const maxWidth = 100;
      const maxHeight = 100;
      
      let width = img.width;
      let height = img.height;
      
      // Calculate new dimensions while maintaining aspect ratio
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round(height * maxWidth / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round(width * maxHeight / height);
          height = maxHeight;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      
      // Draw resized image on canvas
      ctx.drawImage(img, 0, 0, width, height);
      
      // Get thumbnail as data URL
      const thumbnailDataURL = canvas.toDataURL(file.type);
      console.log('Thumbnail created');
      
      // Use the thumbnail
      // document.getElementById('thumbnail').src = thumbnailDataURL;
    };
    
    img.src = event.target.result;
  };
  
  reader.readAsDataURL(file);
}

// 4. Reading Excel files (requires external library like SheetJS/xlsx)
function processExcelFile(file) {
  // Note: This requires the SheetJS library (https://sheetjs.com/)
  // <script src="https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js"></script>
  
  const reader = new FileReader();
  
  reader.onload = function(event) {
    try {
      const data = new Uint8Array(event.target.result);
      
      // Parse workbook using SheetJS
      const workbook = XLSX.read(data, { type: 'array' });
      
      // Get first worksheet
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      
      // Convert to JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      
      console.log('Excel data:', jsonData);
      // Process Excel data...
    } catch (e) {
      console.error('Error processing Excel file:', e);
    }
  };
  
  reader.readAsArrayBuffer(file);
}

// ---- ERROR HANDLING AND BEST PRACTICES ----

// 1. Comprehensive file input example with error handling
function handleFileInputWithErrorHandling() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  
  if (!file) {
    console.error('No file selected');
    return;
  }
  
  // Validate file size
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  if (file.size > MAX_SIZE) {
    console.error('File is too large. Maximum size is 5MB.');
    return;
  }
  
  // Validate file type
  const allowedTypes = ['text/plain', 'application/json', 'text/csv'];
  if (!allowedTypes.includes(file.type)) {
    console.error('Invalid file type. Allowed types: TXT, JSON, CSV');
    return;
  }
  
  const reader = new FileReader();
  
  // Setup event handlers before starting read operation
  reader.onload = function(event) {
    try {
      console.log('File loaded successfully');
      const content = event.target.result;
      processContent(content, file.type);
    } catch (e) {
      console.error('Error processing file:', e);
    }
  };
  
  reader.onerror = function(event) {
    console.error('File read error:', reader.error);
  };
  
  reader.onprogress = function(event) {
    if (event.lengthComputable) {
      const percentLoaded = Math.round((event.loaded / event.total) * 100);
      console.log(`Loading: ${percentLoaded}%`);
    }
  };
  
  reader.onabort = function() {
    console.log('File read aborted');
  };
  
  // Start reading the file
  try {
    reader.readAsText(file);
  } catch (e) {
    console.error('Error starting file read:', e);
  }
  
  function processContent(content, fileType) {
    switch (fileType) {
      case 'text/plain':
        console.log('Processing text file...');
        break;
      case 'application/json':
        console.log('Processing JSON file...');
        try {
          const data = JSON.parse(content);
          console.log('JSON data:', data);
        } catch (e) {
          throw new Error('Invalid JSON format: ' + e.message);
        }
        break;
      case 'text/csv':
        console.log('Processing CSV file...');
        // Parse CSV
        break;
      default:
        console.log('Unhandled file type');
    }
  }
}

// 2. FileReader timeout handling
function readFileWithTimeout() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  
  if (!file) return;
  
  const reader = new FileReader();
  let timeoutId;
  
  // Set timeout - cancel after 30 seconds
  const TIMEOUT_MS = 30000; // 30 seconds
  timeoutId = setTimeout(() => {
    if (reader.readyState !== FileReader.DONE) {
      reader.abort();
      console.error('File read timed out');
    }
  }, TIMEOUT_MS);
  
  reader.onload = function(event) {
    clearTimeout(timeoutId);
    console.log('File loaded successfully');
  };
  
  reader.onerror = function() {
    clearTimeout(timeoutId);
    console.error('Error reading file');
  };
  
  reader.onabort = function() {
    clearTimeout(timeoutId);
    console.log('File read was aborted');
  };
  
  reader.readAsText(file);
}

// ---- MODERN ASYNC/AWAIT APPROACH ----

// Using async/await with FileReader via Promise wrapper
function createFileReaderPromise(file, readAs = 'text') {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    
    reader.onerror = () => {
      reject(new Error('Error reading file'));
    };
    
    switch (readAs.toLowerCase()) {
      case 'text':
        reader.readAsText(file);
        break;
      case 'arraybuffer':
        reader.readAsArrayBuffer(file);
        break;
      case 'dataurl':
        reader.readAsDataURL(file);
        break;
      case 'binarystring':
        reader.readAsBinaryString(file);
        break;
      default:
        reader.readAsText(file);
    }
  });
}

// Using the Promise wrapper with async/await
async function processFileAsync() {
  try {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
      throw new Error('No file selected');
    }
    
    console.log(`Reading file: ${file.name}`);
    
    const content = await createFileReaderPromise(file, 'text');
    console.log('File content:', content.substring(0, 100) + '...');
    
    // Process content as needed
    if (file.name.endsWith('.json')) {
      const jsonData = JSON.parse(content);
      console.log('Parsed JSON:', jsonData);
    }
    
    return content; // Return for further processing
  } catch (error) {
    console.error('Error processing file:', error);
    // Handle error appropriately
    // Maybe show user a message
    return null;
  }
}