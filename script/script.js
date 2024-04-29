//Задача 1
// Написать алгоритм мёржинга двух отсортированных массивов в отсортированный массив. Исходные массивы могут быть разного размера.
// Примеры:
// merge([2, 4, 7, 11], [1, 3, 4, 5, 8, 12]) вернёт [1, 2, 3, 4, 4, 5, 7, 8, 11, 12]
//   merge([2, 4, 7, 11], [8, 12]) вернёт [2, 4, 7, 8, 11, 12]

function mergeArrays(arr1, arr2) {
  const n1 = arr1.length;
  const n2 = arr2.length;
  const arr3 = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      arr3[k++] = arr1[i++];
    } else {
      arr3[k++] = arr2[j++];
    }
  }

  while (i < n1) {
    arr3[k++] = arr1[i++];
  }

  while (j < n2) {
    arr3[k++] = arr2[j++];
  }

  return arr3;
}

const arr1 = [2, 4, 7, 11];
const arr2 = [8, 12];
const mergedArray = mergeArrays(arr1, arr2);
console.log("Merged Array:", mergedArray);

// Задача 2
// Решить эту задачу для трёх исходных массивов.
// Пример:
//   merge([2, 4, 7, 11], [8, 12], [4, 9, 11]) вернёт [2, 4, 4, 7, 8, 9, 11, 11, 12]

function mergeThreeArrays(array1, array2, array3) {
  const m1 = array1.length;
  const m2 = array2.length;
  const m3 = array3.length;
  const result = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < m1 && j < m2 && k < m3) {
    if (array1[i] <= arr2[j] && array1[i] <= array3[k]) {
      result.push(array1[i]);
      i++;
    } else if (array2[j] <= array1[i] && array2[j] <= array3[k]) {
      result.push(array2[j]);
      j++;
    } else {
      result.push(array3[k]);
      k++;
    }
  }

  while (i < m1) {
    result.push(array1[i]);
    i++;
  }

  while (j < m2) {
    result.push(array2[j]);
    j++;
  }

  while (k < m3) {
    result.push(array3[k]);
    k++;
  }

  return result;
}

const array1 = [2, 4, 7, 11];
const array2 = [8, 12];
const array3 = [4, 9, 11];
const mergedArray1 = mergeThreeArrays(array1, array2, array3);
console.log("Merged Array:", mergedArray1);

// 3. Реализовать класс MyStack, основанный на хранении данных в массиве.

class MyStack {
  constructor(maxSize) {
    this.items = [];
    this.maxSize = maxSize || Infinity;
  }

  push(value) {
    if (this.items.length < this.maxSize) {
      this.items.push(value);
    } else {
      console.log("Stack is full. Cannot push more elements.");
    }
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    } else {
      console.log("Stack is empty. Cannot pop an element.");
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new MyStack(5);
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack after pushing elements:", stack.items);
stack.pop();
console.log("Stack after popping an element:", stack.items);
console.log("Is stack empty?", stack.isEmpty());

// 4. Задача 4
// Реализовать класс MyQueue, основанный на хранении данных в связном списке.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class MyQueue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const removedValue = this.front.value;
      this.front = this.front.next;
      return removedValue;
    } else {
      console.log("Queue is empty. Cannot dequeue an element.");
    }
  }

  isEmpty() {
    return this.front === null;
  }
}

const queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.push(3);

console.log("Dequeued element:", queue.pop());
console.log("Is queue empty?", queue.isEmpty());
