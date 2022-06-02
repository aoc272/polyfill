import DoublyLinkedList from "./doubly_linked_list";
import { ListNode } from "./doubly_linked_list";

export default class LRUCache<KT, VT> {
  private _dict: Map<KT, ListNode<KT, VT>> = new Map();
  private _list: DoublyLinkedList<KT, VT> = new DoublyLinkedList();
  private readonly capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  private _has(key: KT): boolean {
    return this._dict.has(key);
  }

  private _getNode(key: KT): ListNode<KT, VT> {
    return this._dict.get(key);
  }

  private _evict(): void {
    const nodeToBeEvicted: ListNode<KT, VT> = this._list.front();
    this._dict.delete(nodeToBeEvicted.key);
    this._list.delete(nodeToBeEvicted);
  }

  get(key: KT): VT | null {
    if (this._has(key)) {
      const node: ListNode<KT, VT> = this._getNode(key);
      const returnedValue: VT = node.data;
      this._list.delete(node);
      this._list.push(node);
      return returnedValue;
    }
    return null;
  }

  set(key: KT, value: VT): void {
    if (this._has(key)) {
      const node: ListNode<KT, VT> = this._getNode(key);
      this._list.delete(node);
      this._list.push(node);
      node.data = value;
      return;
    }

    const node: ListNode<KT, VT> = new ListNode<KT, VT>(value);
    if (this.capacity <= this._list.length) this._evict();

    this._dict.set(key, node);
    this._list.push(node);
  }
}
