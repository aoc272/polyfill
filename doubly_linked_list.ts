export class ListNode<KT, VT> {
  key: KT;
  data: VT;
  prev: ListNode<KT, VT> = null;
  next: ListNode<KT, VT> = null;

  constructor(data: VT) {
    this.data = data;
  }

  static _connect<KT, VT>(a: ListNode<KT, VT>, b: ListNode<KT, VT>): void {
    a.next = b;
    b.prev = a;
  }
}

export default class DoublyLinkedList<KT, VT> {
  private head: ListNode<KT, VT>;
  private tail: ListNode<KT, VT>;

  length: number = 0;
  size: number = 0;

  constructor() {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  front(): ListNode<KT, VT> {
    return this.head.next;
  }

  push(node: ListNode<KT, VT>): void {
    ListNode._connect(this.tail.prev, node);
    ListNode._connect(node, this.tail);
    this.length += 1;
    this.size += 1;
  }

  push_back(node: ListNode<KT, VT>): void {
    this.push(node);
  }

  pop(): ListNode<KT, VT> {
    const node = this.tail.prev;
    ListNode._connect(node.prev, this.tail);
    this.length -= 1;
    this.size -= 1;
    return node;
  }

  pop_back(): ListNode<KT, VT> {
    return this.pop();
  }

  unshift(node: ListNode<KT, VT>): void {
    ListNode._connect(node, this.head.next);
    ListNode._connect(this.head, node);
    this.length += 1;
    this.size += 1;
  }

  push_front(node: ListNode<KT, VT>): void {
    this.unshift(node);
  }

  shift(): ListNode<KT, VT> {
    const node = this.head.next;
    ListNode._connect(this.head, node.next);
    this.length -= 1;
    this.size -= 1;
    return node;
  }

  pop_front(): ListNode<KT, VT> {
    return this.shift();
  }

  delete(node: ListNode<KT, VT>): void {
    ListNode._connect(node.prev, node.next);
    delete node.prev;
    delete node.next;
    delete node.data;
    this.length -= 1;
    this.size -= 1;
  }
}
