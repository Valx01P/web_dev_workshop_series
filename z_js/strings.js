// 1. Creation & literals
const s1 = 'hello';           // string literal
const s2 = String(123);       // primitive from value
const s3 = new String('hi');  // String object (rarely needed)

// 2. Length & indexing
s1.length;                    // 5 characters (UTF-16 code units)
s1[0];                        // 'h'
s1.charAt(1);                 // 'e'

// 3. Immutability & concatenation
const s4 = s1 + ' world';     // 'hello world'
s1.concat('!', '!!');         // 'hello!!!'

// 4. Extracting substrings
s1.slice(1, 4);               // 'ell'   (handles negative indices)
s1.substring(1, 4);           // 'ell'   (swaps args if start > end)
s1.substr(1, 3);              // 'ell'   (start + length; legacy)

// 5. Case conversion & trimming
s1.toUpperCase();             // 'HELLO'
' ABC '.trim();               // 'ABC'
'  hi  '.trimStart().trimEnd();// 'hi'

// 6. Searching & matching
s1.indexOf('l');              // 2 (first match)  
s1.lastIndexOf('l');          // 3 (last match)  
s1.includes('lo');            // true  
s1.startsWith('he');          // true  
s1.endsWith('lo');            // true  
s1.search(/l+/g);             // 2 (first regex match)  
s1.match(/l+/g);              // ['ll'] (all matches)  

// 7. Replace & split/join
s1.replace('l', 'L');         // 'heLlo'    (first only)  
s1.replaceAll('l', 'L');      // 'heLLo'    (every match)  
'hi-there'.split('-');        // ['hi','there']  
['a','b','c'].join('|');      // 'a|b|c'  

// 8. Padding & repeat
'5'.padStart(3, '0');         // '005'  
'5'.padEnd(3, '0');           // '500'  
'ha'.repeat(3);               // 'hahaha'  

// 9. Template literals & raw
const name = 'Alice';
`Hello, ${name}!`;             // 'Hello, Alice!'  
`${1+2}`;                      // '3'  
`Line1\nLine2`;                // includes real newline  
String.raw`Line1\nLine2`;      // 'Line1\\nLine2'

// 10. Unicode & code points
'smile 😊'.codePointAt(6);     // 128522  
String.fromCodePoint(0x1F600); // '😀'  
'a'.localeCompare('b');        // -1 (lexicographic)  
'áb'.normalize('NFD');         // decomposed form  

// 11. Static helpers
String.fromCharCode(65,66);    // 'AB'  
