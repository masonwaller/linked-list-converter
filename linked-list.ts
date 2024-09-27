class NodeObject {
  value: any;
  next: NodeObject | null;
  constructor(x: any) {
    this.value = x;
    this.next = null;
  }
}

// converions
function createHead(value: any) {
  return new NodeObject(value);
}

function createFromArray(array: any[]) {
  if (array.length === 0) {
    return null;
  }
  let head = new NodeObject(array[0]);
  let current = head;
  for (let i = 1; i < array.length; i++) {
    current.next = new NodeObject(array[i]);
    current = current.next;
  }
  return head;
}

function createCircularFromArray(array: any[]) {
  if (array.length === 0) {
    return null;
  }
  let head = new NodeObject(array[0]);
  let current = head;
  for (let i = 1; i < array.length; i++) {
    current.next = new NodeObject(array[i]);
    current = current.next;
  }
  current.next = head;
  return head;
}

function convertToArray(head: NodeObject) {
  let current: NodeObject | null = head;
  let array: any[] = [];
  let headHit = false;
  while (current && (!headHit || current !== head)) {
    array.push(current.value);
    current = current.next;
    if (current === head) {
      headHit = true;
    }
  }
  return array;
}

function convertToObject(head: NodeObject) {
  let current: NodeObject | null = head;
  let object: any = {};
  let i = 0;
  let headHit = false;
  while (current && (!headHit || current !== head)) {
    object[i] = current.value;
    current = current.next;
    i++;
    if (current === head) {
      headHit = true;
    }
  }
  return object;
}

function clone(head: NodeObject) {
  let dummy = new NodeObject(0);
  let dummyHead = dummy;
  let headHit = false;

  let curr: NodeObject | null = head;
  while (curr && (!headHit || curr !== head)) {
    dummy.next = new NodeObject(
      typeof curr.value === "object" ? { ...curr.value } : curr.value
    );
    dummy = dummy.next;
    curr = curr.next;
    if (curr === head) {
      headHit = true;
    }
  }
  return dummyHead.next;
}

// search
function search(
  head: NodeObject,
  value: any,
  searchFunction: (value: any) => boolean = (a) => a
) {
  //TODO: add a compare function for dynamic search
  let current: NodeObject | null = head;
  let headHit = false;
  while (current && (!headHit || current !== head)) {
    if (searchFunction(current.value) === value) {
      return true;
    }
    current = current.next;
    if (current === head) {
      headHit = true;
    }
  }
  return false;
}

function find(
  head: NodeObject,
  value: any,
  searchFunction: (value: any) => boolean = (a) => a
) {
  //TODO: add a compare function for dynamic search
  let current: NodeObject | null = head;
  let headHit = false;
  while (current && (!headHit || current !== head)) {
    if (searchFunction(current.value) === value) {
      return current;
    }
    current = current.next;
    if (current === head) {
      headHit = true;
    }
  }
  return null;
}

function findLength(head: NodeObject) {
  let current: NodeObject | null = head;
  let length = 0;
  let headHit = false;
  while (current && (!headHit || current !== head)) {
    length++;
    current = current.next;
    if (current === head) {
      headHit = true;
    }
  }
  return length;
}

function findNthNode(head: NodeObject, n: number) {
  let current: NodeObject | null = head;
  for (let i = 0; i < n; i++) {
    current = current?.next || null;
  }
  return current;
}

function findMiddle(head: NodeObject) {
  if (!head || detectCycle(head)) return null;
  let slow: NodeObject | null = head;
  let fast: NodeObject | null = head;
  while (fast && fast.next) {
    slow = slow?.next || null;
    fast = fast.next.next;
  }
  return slow;
}

function findNthNodeFromEnd(head: NodeObject, n: number) {
  if (!head || detectCycle(head)) return null;
  let slow: NodeObject | null = head;
  let fast: NodeObject | null = head;
  for (let i = 0; i < n; i++) {
    fast = fast?.next || null;
  }
  while (fast) {
    slow = slow?.next || null;
    fast = fast.next;
  }
  return slow;
}

// operations
function add(head: NodeObject, value: any) {
  if (!head) return new NodeObject(value);
  if (detectCycle(head)) return head;
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = new NodeObject(value);
  return head;
}

function replace(head: NodeObject, index: number, value: any) {
  if (!head || detectCycle(head)) return head;
  let current: NodeObject | null = head;
  for (let i = 0; i < index; i++) {
    current = current?.next || null;
  }
  if (!current) {
    return head;
  }
  current.value = value;
  return head;
}

function replaceNode(head: NodeObject, node: NodeObject, newNode: NodeObject) {
  let current: NodeObject | null = head;
  let prev: NodeObject | null = null;
  let hitHead = false;
  while (current && (!hitHead || current !== head)) {
    if (current === node) {
      if (prev) {
        prev.next = newNode;
      } else {
        head = newNode;
      }
      return head;
    }
    prev = current;
    current = current.next;
    if (current === head) {
      hitHead = true;
    }
  }
  return head;
}

function insert(head: NodeObject, index: number, value: any) {
  if (!head || detectCycle(head)) return head;
  if (index === 0) {
    let newNode = new NodeObject(value);
    newNode.next = head;
    return newNode;
  }
  let current: NodeObject | null = head;
  for (let i = 0; i < index - 1; i++) {
    current = current?.next || null;
  }
  if (!current) {
    return head;
  }
  let newNode = new NodeObject(value);
  newNode.next = current.next;
  current.next = newNode;
  return head;
}

function removeIndex(head: NodeObject, index: number) {
  if (!head || detectCycle(head)) return head;
  if (index === 0) {
    return head.next;
  }
  let current: NodeObject | null = head;
  for (let i = 0; i < index - 1; i++) {
    current = current?.next || null;
  }
  if (!current || !current.next) {
    return head;
  }
  current.next = current.next?.next || null;
  return head;
}

function removeNodeCircular(head: NodeObject, node: NodeObject) {
  let current: NodeObject | null = head;
  let prev: NodeObject = head;
  let headHit = false;
  // this loop is entirely here just to get the previous node in the case of the head node is the one to be removed
  while (current && (!headHit || current !== head)) {
    prev = current;
    current = current.next;
    if (current === head) {
      headHit = true;
    }
  }
  headHit = false;
  let currentHead: NodeObject | null = head;
  while (current && (!headHit || current !== head)) {
    if (current === node) {
      prev.next = current.next;
      if (current === currentHead) {
        currentHead = current.next;
      }
      return currentHead;
    }
    if (current === currentHead) {
      headHit = true;
    }
    prev = current;
    current = current.next;
  }
  return currentHead;
}

function removeNode(head: NodeObject, node: NodeObject) {
  if (detectCycle(head)) return head;
  let currentHead: NodeObject | null = head;
  let current: NodeObject | null = head;
  let prev: NodeObject | null = null;
  while (current) {
    if (current === node) {
      if (prev) {
        prev.next = current.next;
      } else {
        currentHead = current.next;
      }
      return currentHead;
    }
    prev = current;
    current = current.next;
  }
  return currentHead;
}

function removeAfterIndex(head: NodeObject, index: number) {
  let current: NodeObject | null = head;
  for (let i = 0; i < index; i++) {
    current = current?.next || null;
  }
  if (!current || !current.next) {
    return head;
  }
  current.next = null;
  return head;
}

function removeValue(
  head: NodeObject,
  value: any,
  searchFunction: (a: any) => boolean = (a) => a
) {
  //TODO: add a compare function for dynamic search
  let dummy = { value: 0, next: head };
  let current: NodeObject = dummy;
  while (current.next) {
    if (searchFunction(current.next.value) === value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
}

function reverse(head: NodeObject) {
  let current: NodeObject | null = head;
  let prev: NodeObject | null = null;
  let hitHead = false;
  while (current && (!hitHead || current !== head)) {
    let next: NodeObject | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
    if (current === head) {
      hitHead = true;
    }
  }
  return prev;
}

// Function to split the singly linked list into two halves
function split(head: NodeObject): NodeObject {
  let fast: NodeObject | null = head;
  let slow: NodeObject = head;

  // Move fast pointer two steps and slow pointer
  // one step until fast reaches the end
  while (fast && fast.next) {
    fast = fast.next.next;
    if (fast) {
      // @ts-ignore: to stop ts from complaining about slow possibly being null, if fast is not null, slow will not be null
      slow = slow.next;
    }
  }

  // Split the list into two halves
  let second = slow.next;
  slow.next = null;
  // @ts-ignore: to stop ts from complaining about slow possibly being null, if fast is not null, slow will not be null
  return second;
}

// Function to merge two sorted singly linked lists
function mergeLists(first: NodeObject, second: NodeObject) {
  // If either list is empty, return the other list
  if (!first) return second;
  if (!second) return first;

  // Pick the smaller value between first and second nodes
  if (first.value < second.value) {
    first.next = merge(first.next, second);
    return first;
  } else {
    second.next = merge(first, second.next); //TODO: this function is incorrect I think, references my own merge function
    return second;
  }
}

// Function to perform merge sort on a singly linked list
function mergeSort(head: NodeObject) {
  //TODO: add a compare function for dynamic sorting
  // Base case: if the list is empty or has only one node,
  // it's already sorted
  if (!head || !head.next) return head;

  // Split the list into two halves
  let second: NodeObject = split(head);

  // Recursively sort each half
  head = mergeSort(head);
  second = mergeSort(second);

  // Merge the two sorted halves
  return mergeLists(head, second);
}

function combine(head1: NodeObject, head2: NodeObject) {
  if (detectCycle(head1)) return null;
  if (detectCycle(head2)) return null;
  let current = head1;
  while (current.next) {
    current = current.next;
  }
  current.next = head2;
  return head1;
}

function detectCycle(head: NodeObject) {
  let slow: NodeObject | null = head;
  let fast: NodeObject | null = head;
  while (fast && fast.next) {
    slow = slow?.next || null;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

function findCycle(head: NodeObject) {
  let slow: NodeObject | null = head;
  let fast: NodeObject | null = head;
  while (fast && fast.next) {
    slow = slow?.next || null;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  if (!fast || !fast.next) {
    return null;
  }
  slow = head;
  while (slow !== fast) {
    slow = slow?.next || null;
    fast = fast?.next || null;
  }
  return slow;
}

function removeCycle(head: NodeObject) {
  let cycleNode: NodeObject | null = findCycle(head);
  if (!cycleNode) {
    return head;
  }
  let current: NodeObject | null = head;
  while (current?.next !== cycleNode) {
    current = current?.next || null;
  }
  cycleNode.next = null;
  return head;
}

function mergeTwoSorted(
  head1: NodeObject | null,
  head2: NodeObject | null,
  compare: (a: any, b: any) => boolean = (a, b) => a < b
) {
  // TODO: can make dynamic by having user pass in a compare function
  if (!head1 || detectCycle(head1)) return null;
  if (!head2 || detectCycle(head2)) return null;
  let dummy = new NodeObject(0);
  let current = dummy;
  while (head1 && head2) {
    if (compare(head1.value, head2.value)) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }
  current.next = head1 || head2;
  return dummy.next;
}

function merge(head1: NodeObject | null, head2: NodeObject | null) {
  if (!head1) {
    return head2;
  }
  if (!head2) {
    return head1;
  }
  if (detectCycle(head1) || detectCycle(head2)) return null;
  let dummy = new NodeObject(0);
  let current = dummy;
  let currentHead = 1;
  while (head1 && head2) {
    if (currentHead === 1) {
      current.next = head1;
      head1 = head1.next;
      currentHead = 2;
    } else {
      current.next = head2;
      head2 = head2.next;
      currentHead = 1;
    }
    current = current.next;
  }
  current.next = head1 || head2;
  return dummy.next;
}

function rotate(head: NodeObject, k: number) {
  // k is the number end nodes to move to the front
  if (!head || detectCycle(head)) return null;
  let currentHead: NodeObject | null = head;
  let current: NodeObject | null = head;
  let length = 1;
  while (current.next) {
    current = current.next;
    length++;
  }
  current.next = currentHead;
  k = k % length;
  for (let i = 0; i < length - k; i++) {
    current = current?.next || null;
  }
  currentHead = current?.next || null;
  if (current) {
    current.next = null;
  }
  return currentHead;
}

export const LinkedList = {
  createHead,
  createFromArray,
  createCircularFromArray,
  convertToArray,
  convertToObject,
  clone,
  search,
  find,
  findLength,
  findNthNode,
  findMiddle,
  findNthNodeFromEnd,
  add,
  insert,
  replace,
  removeIndex,
  removeAfterIndex,
  reverse,
  detectCycle,
  findCycle,
  removeCycle,
  mergeTwoSorted,
  merge,
  rotate,
  combine,
  removeValue,
  replaceNode,
  removeNodeCircular,
  removeNode,
  mergeSort,
};
// module.exports = LinkedListOperations;
