you're a javascript expert and will act as a search engine for any javascript queries, for example if a user asks about javascript array functions or the length, you will generate quality example code showing those features


```js
function multiply(one, two) {
    return one * two
}

function add(one, two) {
    return one + two
}

function math(one, two, operation) {
    return operation(one, two)
}

console.log(math(4, 2, add))
```




```js
const myNumbers = [4, 1, -20, -7, 5, 9, -6]

function remove(numbers, callback) {
  const myArray = []
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x)
    }
  }
  return myArray
}

console.log(remove(myNumbers, (x) => x >= 5))
```



```js
function blackjack(num) {
    if (num === 21) {
        console.log('Blackjack!')
    } else if (num > 21) {
        console.log('Bust')
    } else if (17 < num && num < 21) {
        console.log('Good Hand')
    } else {
        console.log('Hit me')
    }
}


blackjack(12)
blackjack(18)
blackjack(21)
blackjack(32)
```


```js
let a = [1, 3, 5]
let y = [2, 4, 6]

let x = []

for (let i = 0; i < Math.max(a.length, y.length); i++) {
    x.push(a[i])
    x.push(y[i])
}

console.log(x)
```


![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)

```js
let a = [1, 3, 5]
let y = [2, 4, 6]

let x = []

for (let i = 0; i < Math.max(a.length, y.length); i++) {
    x.push(a[i])
    x.push(y[i])
}

console.log(x)


const obj = { name: "Pablo", age: 22 }
const jsonStr = JSON.stringify(obj)
console.log(jsonStr) // 👉 '{"name":"Pablo","age":22}'

const parsed = JSON.parse(jsonStr)
console.log(parsed)
console.log(parsed.name)
```



```js
const squares = (nums) => {
    return nums.map((x) => x * x)
}

console.log(squares([1, 2, 3, 4]))

bro = [7, 8, 9]
bro.unshift(6)
console.log(bro)
bro.shift()
console.log(bro)


const bruh = Infinity
console.log(Math.max(bruh, 2))
```



```js
function max_diff(nums) {
    let max = -Infinity, min = Infinity
    
    for (let num of nums) {
        if (num > max) {
            max = num
        }
        if (num < min) {
            min = num
        }
    }
    return max - min
}

console.log(max_diff([1, 2, 3, 4, 5, 6, 7, -7]))
```



```js
function createDict(keys, values) {
  return Object.fromEntries(
    keys.map((key, i) => [key, values[i]])
  )
}

// function createDict(keys, values) {
//   obj = {}
//   for (let i = 0; i < keys.length; i++) {
//       obj[keys[i]] = values[i]
//   }
//   return obj
// }

let keys = ["peanut", "dragon", "star", "pop", "space"]
let values = ["butter", "fly", "fish", "corn", "ship", "shit"]

console.log(createDict(keys, values))


console.log()
```


```js
function print_pair(obj, target) {
    console.log(`Key: ${target}`)
    console.log(`Value: ${obj[target]}`)
}

print_pair({
    spongebob: "squarepants",
    patrick: "star",
    squidward: "tentacles"
}, "patrick")

```

```js
function print_sums(obj) {
    let key_sum = 0, value_sum = 0
    for (let [key, value] of Object.entries(obj)) {
        key_sum += Number(key)
        value_sum += Number(value)
    }
    return [key_sum, value_sum]
}

one = {
    1:2,
    3:4,
    5:6
}

let [bruh, yo] = print_sums(one)

console.log(bruh)
console.log(yo)

console.log(print_sums(one))
```


```js
function restockInventory(currentInventory, restockList) {
    for (const [item, quantity] of Object.entries(restockList)) {
        if (item in currentInventory) {
            currentInventory[item] += quantity;
        } else {
            currentInventory[item] = quantity;
        }
    }
    return currentInventory;
}

// Example usage:
let current_inventory = {
    apples: 30,
    bananas: 15,
    oranges: 10
};

let restock_list = {
    oranges: 20,
    apples: 10,
    pears: 5
};

let updated_inventory = restockInventory(current_inventory, restock_list);
console.log(updated_inventory);

```