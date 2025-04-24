// 1. Create a Map
const m1 = new Map([                     // initialize with iterable of [key,value] pairs
  ['a', 1],
  ['b', 2],
]);
const m2 = new Map();                     // empty Map

// 2. Set / Get / Has / Delete / Clear (CRUD)
m1.set('c', 3);                           // add or update key 'c'
m1.get('a');      // ➞ 1                   // retrieve value for 'a'
m1.has('b');      // ➞ true                // check if 'b' exists
m1.delete('b');   // ➞ true                // remove 'b'
m1.clear();                             // ➞ undefined, empties all entries

// 3. Size
m1.set('x',10).set('y',20);
console.log(m1.size); // ➞ 2             // number of entries

// 4. Iteration
for (const [k, v] of m1) {
  console.log(k, v);   // logs 'x' 10, then 'y' 20
}
m1.forEach((v, k) => console.log(k, v)); // same, but callback order is (value, key)

// 5. keys() / values() / entries()
[...m1.keys()];    // ➞ ['x','y']
[...m1.values()];  // ➞ [10,20]
[...m1.entries()]; // ➞ [['x',10], ['y',20]]

// 6. Conversion between Array ↔ Map
const arr = [...m1];              // Map → Array: [['x',10], ['y',20]]
const m3 = new Map(arr);          // Array → Map
const obj = Object.fromEntries(m1);// Map → Object: { x:10, y:20 }
const m4 = new Map(Object.entries({foo: 1, bar: 2})); // Object → Map

// 7. Common patterns / atomic examples
// 7a. Count occurrences
const text = 'aabbc';
const freq = new Map();
for (const ch of text) {
  freq.set(ch, (freq.get(ch) || 0) + 1);
} // freq = Map { 'a'→2, 'b'→2, 'c'→1 }

// 7b. Swap keys/values
const swapped = new Map([...m1].map(([k,v]) => [v, k]));
// 7c. Default value lookup
const defaults = new Map([['x', 100]]);
const val = defaults.get('z') ?? 'not found'; // 'not found'
