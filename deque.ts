class Deque<T> {
  length: number = 0;
  private __begin__: number = 0;
  private __end__: number = 0;
  private readonly __array__: T[];

  constructor(iterable: Iterable<T> | number, defaultValue?: T) {
    if (typeof iterable === "number") {
      this.__array__ = Array<T>(iterable).fill(defaultValue);
    } else {
      this.__array__ = Array<T>();
      this.__array__.push(...iterable);
      this.length = this.__array__.length;
      this.__end__ = this.__begin__ + this.length;
    }
  }

  at(index: number): T {
    return this.__array__[index + this.__begin__];
  }

  push(item: T): void {
    this.__array__[this.__end__] = item;
    this.__end__ += 1;
    this.length += 1;
  }

  append(item: T): void {
    this.push(item);
  }

  pop(): T {
    const item = this.__array__[this.__end__ - 1];
    delete this.__array__[this.__end__ - 1];
    this.__end__ -= 1;
    this.length -= 1;
    return item;
  }

  shift(): T {
    const item = this.__array__[this.__begin__];
    delete this.__array__[this.__begin__];
    this.__begin__ += 1;
    this.length -= 1;
    return item;
  }

  unshift(item: T): void {
    this.__array__[this.__begin__ - 1] = item;
    this.__begin__ -= 1;
    this.length += 1;
  }

  prepend(item: T): void {
    this.unshift(item);
  }

  *[Symbol.iterator]() {
    for (let index = 0; index < this.length; index += 1) yield this.at(index);
  }
}
