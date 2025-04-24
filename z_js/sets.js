// 1. Create a Set
const s = new Set([1, 2, 3]);  // initialize with iterable (array here)
const empty = new Set();       // empty set

// 2. Add / Delete / Check / Clear (CRUD)
s.add(4);         // ➞ Set {1,2,3,4}
s.delete(2);      // ➞ true, now Set {1,3,4}
s.has(3);         // ➞ true
s.has(2);         // ➞ false
s.clear();        // ➞ Set {} (empties all entries)

// 3. Size property
s.add(5).add(6);
console.log(s.size); // ➞ 2

// 4. Iteration
for (const v of s) {
  console.log(v);  // logs 5 then 6
}
s.forEach(v => console.log(v));  // similar

// 5. entries() / keys() / values()  (all return same iterator for Set)
[...s.entries()]; // ➞ [[5,5], [6,6]]
[...s.keys()];    // ➞ [5,6]
[...s.values()];  // ➞ [5,6]

// 6. Conversion between Array ↔ Set
const arr = [...s];          // Set → Array: [5,6]
const s2 = new Set(arr);     // Array → Set

// 7. Simple Union / Intersection / Difference
const a = new Set([1,2,3]);
const b = new Set([2,3,4]);
const union = new Set([...a, ...b]);                     // {1,2,3,4}
const intersection = new Set([...a].filter(x => b.has(x))); // {2,3}
const difference = new Set([...a].filter(x => !b.has(x)));  // {1}

// 8. Quick atomic examples
new Set('hello');               // {'h','e','l','o'}  (string → unique chars)
new Set([[1],[1]]).size;        // 2  (different object refs)
[...new Set([1,2,2,3])];        // [1,2,3]  (dedupe array)
