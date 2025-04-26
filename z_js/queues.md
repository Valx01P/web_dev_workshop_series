```js
class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
  }

  enqueue(item) {
    this.data.push(item);
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const item = this.data[this.head++];
    
    // Auto-clean: if head is large, reset the array
    if (this.head > 50 && this.head > this.data.length / 2) {
      this.data = this.data.slice(this.head);
      this.head = 0;
    }
    
    return item;
  }

  isEmpty() {
    return this.head >= this.data.length;
  }
}
```

```js
class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
  }

  enqueue(item) {
    this.data.push(item);
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const item = this.data[this.head++];
    
    // Auto-clean: if head is large, reset the array
    if (this.head > 50 && this.head > this.data.length / 2) {
      this.data = this.data.slice(this.head);
      this.head = 0;
    }
    
    return item;
  }

  isEmpty() {
    return this.head >= this.data.length;
  }
}
```