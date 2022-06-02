type Arithmetic = any | bigint | number;

class PriorityQueue<T> {
  constructor(comparator: Function = (a: Arithmetic, b: Arithmetic) => a - b) {}

  peek(): T | void {}

  push(item: T): void {}

  pop(): void {}
}
