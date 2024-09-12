class Node {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

// converions
function createHead(value) {
  return new Node(value);
}

function createFromArray(array) {
  if (array.length === 0) {
    return null;
  }
  let head = new Node(array[0]);
  let current = head;
  for (let i = 1; i < array.length; i++) {
    current.next = new Node(array[i]);
    current = current.next;
  }
  return head;
}

function createCircularFromArray(array) {
  if (array.length === 0) {
    return null;
  }
  let head = new Node(array[0]);
  let current = head;
  for (let i = 1; i < array.length; i++) {
    current.next = new Node(array[i]);
    current = current.next;
  }
  current.next = head;
  return head;
}

function convertToArray(head) {
  let current = head;
  let array = [];
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

function convertToObject(head) {
  let current = head;
  let object = {};
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

function clone(head) {
  let dummy = new Node(0);
  let dummyHead = dummy;
  let headHit = false;

  let curr = head;
  while (curr && (!headHit || curr !== head)) {
    dummy.next = new Node(curr.value);
    dummy = dummy.next;
    curr = curr.next;
    if (curr === head) {
      headHit = true;
    }
  }
  return dummyHead.next;
}

// search
function search(head, value) {
  let current = head;
  let headHit = false;
  while (current && (!headHit || current !== head)) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
    if (current === head) {
      headHit = true;
    }
  }
  return false;
}

function find(head, value) {
  let current = head;
  let headHit = false;
  while (current && (!headHit || current !== head)) {
    if (current.value === value) {
      return current;
    }
    current = current.next;
    if (current === head) {
      headHit = true;
    }
  }
  return null;
}

function findLength(head) {
  let current = head;
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

function findNthNode(head, n) {
  let current = head;
  for (let i = 0; i < n; i++) {
    current = current.next;
  }
  return current;
}

function findMiddle(head) {
  if (!head || detectCycle(head)) return null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function findNthNodeFromEnd(head, n) {
  if (!head || detectCycle(head)) return null;
  let slow = head;
  let fast = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

// operations
function add(head, value) {
  if (!head) return new Node(value);
  if (detectCycle(head)) return head;
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = new Node(value);
  return head;
}

function replace(head, index, value) {
  if (!head || detectCycle(head)) return head;
  let current = head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  current.value = value;
  return head;
}

function replaceNode(head, node, newNode) {
  let current = head;
  let prev = null;
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

function insert(head, index, value) {
  if (!head || detectCycle(head)) return head;
  if (index === 0) {
    let newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }
  let current = head;
  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }
  let newNode = new Node(value);
  newNode.next = current.next;
  current.next = newNode;
  return head;
}

function removeIndex(head, index) {
  if (!head || detectCycle(head)) return head;
  if (index === 0) {
    return head.next;
  }
  let current = head;
  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }
  current.next = current.next.next;
  return head;
}

function removeNode(head, node) {
  let current = head;
  let prev = null;
  let hitHead = false;
  while (current && (!hitHead || current !== head)) {
    if (current === node) {
      if (prev) {
        prev.next = current.next;
      } else {
        head = current.next;
      }
      return head;
    }
    if (current === head) {
      hitHead = true;
    }
    prev = current;
    current = current.next;
  }
  return head;
}

function removeAfterIndex(head, index) {
  let current = head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  current.next = null;
  return head;
}

function removeValue(head, value) {
  let dummy = { next: head };
  let current = dummy;
  while (current.next) {
    if (current.next.value === value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
}

function reverse(head) {
  let current = head;
  let prev = null;
  let hitHead = false;
  while (current && (!hitHead || current !== head)) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    if (current === head) {
      hitHead = true;
    }
  }
  return prev;
}

function combine(head1, head2) {
  if (!head1 || detectCycle(head1)) return null;
  if (!head2 || detectCycle(head2)) return null;
  let current = head1;
  while (current.next) {
    current = current.next;
  }
  current.next = head2;
  return head1;
}

function detectCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

function findCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
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
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

function removeCycle(head) {
  let cycleNode = findCycleInLinkedList(head);
  if (!cycleNode) {
    return head;
  }
  let current = head;
  while (current.next !== cycleNode.next) {
    current = current.next;
    cycleNode = cycleNode.next;
  }
  cycleNode.next = null;
  return head;
}

function mergeTwoSorted(head1, head2) {
  if (!head1 || detectCycle(head1)) return null;
  if (!head2 || detectCycle(head2)) return null;
  let dummy = new Node(0);
  let current = dummy;
  while (head1 && head2) {
    if (head1.value < head2.value) {
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

function merge(head1, head2) {
  if (!head1) {
    return head2;
  }
  if (!head2) {
    return head1;
  }
  if (detectCycle(head1) || detectCycle(head2)) return null;
  let dummy = new Node(0);
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

function rotate(head, k) {
  if (!head || detectCycle(head)) return null;
  let current = head;
  let length = 1;
  while (current.next) {
    current = current.next;
    length++;
  }
  current.next = head;
  k = k % length;
  for (let i = 0; i < length - k; i++) {
    current = current.next;
  }
  head = current.next;
  current.next = null;
  return head;
}

const LinkedList = {
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
};

module.exports = LinkedList;
