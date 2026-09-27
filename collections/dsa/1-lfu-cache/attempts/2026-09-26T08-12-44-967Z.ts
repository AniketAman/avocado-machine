class Node<T> {
  key: string;
  val: T;
  freq: number;
  next?: Node<T>;
  prev?: Node<T>;
}

class DoublyLinkedList<T> {
  length: number;
  left: Node<T>;
  right: Node<T>;

  constructor() {
    this.length = 0;
    this.left = new Node();
    this.right = new Node();

    this.left.next = this.right;
    this.right.prev = this.left;
  }

  remove(node: Node<T>) {
    const prev = node.prev;
    const next = node.next;

    if (!prev || !next) return;

    prev.next = next;
    next.prev = prev;
    this.length--;
  }

  push(node: Node<T>) {
    node.next = this.right;
    node.prev = this.right.prev;

    if (this.right.prev) this.right.prev.next = node;
    this.right.prev = node;
    this.length++;
  }

  pop(): Node<T> | null {
    if (this.length === 0) return null;

    const node = this.left.next;
    if (!node) return null;

    this.left.next = node.next;
    if (node.next) node.next.prev = this.left;

    node.next = undefined;
    node.prev = undefined;

    this.length--;

    return node;
  }
}

export class LFU<T> {
  length: number;
  countMap: Map<number, DoublyLinkedList<T>>;
  nodeMap: Map<string, Node<T>>;
  leastFreq: number;

  constructor(private capacity: number) {
    this.length = 0;
    this.nodeMap = new Map();
    this.countMap = new Map();
    this.leastFreq = 1;
  }

  get(key: string): T | null {
    const node = this.nodeMap.get(key);
    if (!node) return null;

    const list = this.countMap.get(node.freq);
    if (!list) {
      console.error(
        "Could not find the list for get. There is some issue with the LFU implementation",
      );
      return null;
    }

    list.remove(node);
    if (list.length === 0 && this.leastFreq === node.freq) this.leastFreq++;

    node.freq++;
    const newList = this.countMap.get(node.freq) || new DoublyLinkedList();
    newList.push(node);
    this.countMap.set(node.freq, newList);

    return node.val;
  }

  put(key: string, val: T): void {
    const node = this.nodeMap.get(key);

    if (node) {
      const list = this.countMap.get(node.freq);
      if (!list) {
        console.error(
          "Could not find the list for update. There is some issue with the LFU implementation",
        );
        return;
      }

      list.remove(node);
      if (list.length === 0 && this.leastFreq === node.freq) this.leastFreq++;

      node.val = val;
      node.freq++;

      const newList = this.countMap.get(node.freq) || new DoublyLinkedList();
      newList.push(node);
      this.countMap.set(node.freq, newList);
      return;
    }

    const newNode: Node<T> = {
      key,
      val,
      freq: 1,
    };

    this.nodeMap.set(key, newNode);

    if (this.length >= this.capacity) {
      const list = this.countMap.get(this.leastFreq);
      if (!list) {
        console.error(
          "Could not find the list for remove. There is some issue with the LFU implementation",
        );
        return;
      }

      const n = list.pop();
      if (n) this.nodeMap.delete(n.key);

      this.length--;
    }

    this.length++;

    const newList = this.countMap.get(1) || new DoublyLinkedList();
    this.leastFreq = Math.min(1, this.leastFreq);
    newList.push(newNode);
    this.countMap.set(1, newList);
  }

  remove(head?: Node<T>, node?: Node<T>) {}
}
