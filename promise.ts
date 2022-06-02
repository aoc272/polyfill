namespace aoc272 {
  interface Thenable<T> {}

  class Promise<T> {
    constructor(
      executor: (
        resolve: (value?: T | Thenable<T>) => void,
        reject?: (reason?: any) => void
      ) => void
    ) {}

    static all<T>(values: Iterable<T | Thenable<T>>): Promise<T> | void {}

    static race<T>(values: Iterable<T | Thenable<T>>): Promise<T> | void {}

    static any<T>(values: Iterable<T | Thenable<T>>): Promise<T> | void {}

    static allSettled<T>(
      values: Iterable<T | Thenable<T>>
    ): Promise<T> | void {}

    static resolve<T>(): void;

    static resolve<T>(value: T | Thenable<T>): Promise<T>;

    static resolve<T>(value?: T | Thenable<T>): Promise<T> | void {}

    static reject<T>(): Promise<T> | void {}

    then(
      onFulfilled?: (value: T) => T | Thenable<T>,
      onRejected?: (reason: any) => Thenable<never>
    ): Promise<T> | void {}

    catch<U>(
      onRejected?: (reason: any) => U | Thenable<U>
    ): Promise<T | U> | void {}

    finally(onFinally?: () => void): Promise<T> | void {}
  }
}
