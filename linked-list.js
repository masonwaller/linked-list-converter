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

function convertToArray(head) {
  let current = head;
  let array = [];
  while (current) {
    array.push(current.value);
    current = current.next;
  }
  return array;
}

function convertToObject(head) {
  let current = head;
  let object = {};
  let i = 0;
  while (current) {
    object[i] = current.value;
    current = current.next;
    i++;
  }
  return object;
}

function clone(start) {
  let curr = start,
    temp = null;

  // insert additional node after
  // every node of original list
  while (curr != null) {
    temp = curr.next;

    // Inserting node
    curr.next = new Node(curr.value);
    curr.next.next = temp;
    curr = temp;
  }
  curr = start;

  // adjust the random pointers of the
  // newly added nodes
  while (curr != null) {
    // move to the next newly added node by
    // skipping an original node
    curr = curr.next != null ? curr.next.next : curr.next;
  }

  let original = start,
    copy = start.next;

  // save the start of copied linked list
  temp = copy;

  // now separate the original list and copied list
  while (original != null && copy != null) {
    original.next = original.next != null ? original.next.next : original.next;

    copy.next = copy.next != null ? copy.next.next : copy.next;
    original = original.next;
    copy = copy.next;
  }
  return temp;
}

// search
function search(head, value) {
  let current = head;
  while (current) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }
  return false;
}

function find(head, value) {
  let current = head;
  while (current) {
    if (current.value === value) {
      return current;
    }
    current = current.next;
  }
  return null;
}

function findLength(head) {
  let current = head;
  let length = 0;
  while (current) {
    length++;
    current = current.next;
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
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function findNthNodeFromEnd(head, n) {
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
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = new Node(value);
  return head;
}

function replace(head, index, value) {
  let current = head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  current.value = value;
  return head;
}

function insert(head, index, value) {
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
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function combine(head1, head2) {
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
