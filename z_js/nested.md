```js
let m = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9, 10, 11, 12]
]

for (let i = 2; i < m.length; i++) {
    for (let j = i; j < m.length; j++) {
        console.log(m[i][j])
    }
}
```


```js
let m = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9, 10, 11, 12]
]

for (let i = 2; i < m.length; i++) {
    for (let j = i; j < m[0].length; j++) {
        console.log(m[i][j])
    }
}
```

```js
let m = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9, 10, 11, 12]
]

for (let i = 2; i >= 0; i--) {
    for (let j = i; j > 0; j-=2) {
        console.log(m[i][j])
    }
}
```


```js
let m = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
];

// ↘ Diagonal from top-left to bottom-right
for (let i = 0; i < m.length; i++) {
  console.log(m[i][i]);
}

// ↙ Diagonal from top-right to bottom-left
for (let i = 0; i < m.length; i++) {
  console.log(m[i][m[0].length - 1 - i]);
}
```

```js
let m = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
];

// Walk backwards row-wise, skip every 2
for (let i = m.length - 1; i >= 0; i -= 2) {
  for (let j = 0; j < m[0].length; j++) {
    console.log(m[i][j]);
  }
}

// Jump diagonally with step size 2
for (let i = 0; i < m.length; i += 2) {
  for (let j = 0; j < m[0].length; j += 2) {
    console.log(m[i][j]);
  }
}
```


```js
let m = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
];

// Row index multiplies column index
for (let i = 0; i < m.length; i++) {
  for (let j = 0; j <= i * 0.5; j++) {
    console.log(m[i][j]); // 1, 5, 9, 10, 13, 14
  }
}

// Only run j if it's a power of 2
for (let i = 0; i < m.length; i++) {
  for (let j = 1; j < m[0].length; j *= 2) {
    console.log(m[i][j]); // 2, 3, 6, 7
  }
}
```



```js
let m = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
];

// Only print even-index columns in even-index rows
for (let i = 0; i < m.length; i++) {
  if (i % 2 !== 0) continue;
  for (let j = 0; j < m[0].length; j++) {
    if (j % 2 === 0) console.log(m[i][j]);
  }
}

// Reverse from bottom right to top left, printing corners only
for (let i = m.length - 1; i >= 0; i--) {
  for (let j = m[0].length - 1; j >= 0; j--) {
    if ((i === 0 || i === m.length - 1) && (j === 0 || j === m[0].length - 1)) {
      console.log(m[i][j]);
    }
  }
}
```