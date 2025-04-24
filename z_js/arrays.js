// 1. Creation
const a = [1, 2, 3];     // literal
const b = Array(3).fill(0); // [0,0,0]
const c = Array.from('hey'); // ['h','e','y']

// 2. Access & length
a[0];                    // 1
a[a.length - 1];         // 3
a.length;                // 3

// 3. Add / Remove / Replace (CRUD)
a.push(4);               // add to end → [1,2,3,4]
a.pop();                 // remove last → 4, a=[1,2,3]
a.unshift(0);            // add to front → [0,1,2,3]
a.shift();               // remove first → 0, a=[1,2,3]
a.splice(1, 1, 9, 9);    // at idx 1 remove 1, insert 9,9 → [1,9,9,3]
a.slice(1, 3);           // copy idx 1–2 → [9,9] (non-mutating)

// 4. Iteration
a.forEach(x => console.log(x));      // run Fn for each item
for (const x of a) console.log(x);   // same, but works with any iterable
for (const [i, x] of a.entries()) {   // index+value pairs
  console.log(i, x);
}

// 5. Searching
a.indexOf(9);            // 1 (first match) or -1
a.lastIndexOf(9);        // 2 (last match)
a.includes(2);           // true/false
a.find(x => x > 2);      // first x>2 → 9
a.findIndex(x => x > 2); // index of first x>2 → 1

// 6. Transformations
a.map(x => x * 2);                // [2,18,18,6]
a.filter(x => x % 2 === 1);       // [1,9,9,3]
a.reduce((sum, x) => sum + x, 0); // 22 (accumulator)
a.concat([5,6]);                  // [1,9,9,3,5,6]

// 7. Flattening & Flat-Map
const nested = [1, [2,3], [4,[5]]];
nested.flat();                    // [1,2,3,4,[5]]
nested.flat(2);                   // [1,2,3,4,5]
nested.flatMap(x => [x, x]);      // [1,1, 2,3,2,3, 4,[5],4,[5]]

// 8. Spread & Destructuring
const copy = [...a];              // shallow copy
const joined = [...a, ...[7,8]];  // [1,9,9,3,7,8]
const [first, ...rest] = a;       // first=1, rest=[9,9,3]

// 9. Atomic Examples
[...new Set([1,2,2,3])];          // [1,2,3]  (dedupe)
Array.from({length:5}, (_,i)=>i); // [0,1,2,3,4]
'abc'.split('');                  // ['a','b','c']
Array(3).keys();                  // iterator of [0,1,2]
