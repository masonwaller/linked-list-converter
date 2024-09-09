// converions
function createLinkedListFromArray(array) {
  if (array.length === 0) {
    return null;
  }
  let head = { value: array[0], next: null };
  let current = head;
  for (let i = 1; i < array.length; i++) {
    current.next = { value: array[i], next: null };
    current = current.next;
  }
  return head;
}

function convertLinkedListToArray(head) {
  let current = head;
  let array = [];
  while (current) {
    array.push(current.value);
    current = current.next;
  }
  return array;
}

function convertLinkedListToObject(head) {
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

// search
function searchInLinkedList(head, value) {
  let current = head;
  while (current) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }
  return false;
}

function findLengthOfLinkedList(head) {
  let current = head;
  let length = 0;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
}

function findNthNodeInLinkedList(head, n) {
  let current = head;
  for (let i = 0; i < n; i++) {
    current = current.next;
  }
  return current;
}

function findMiddleOfLinkedList(head) {
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
function reverseLinkedList(head) {
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

function detectCycleInLinkedList(head) {
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

function findCycleInLinkedList(head) {
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

function removeCycleInLinkedList(head) {
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

function mergeTwoSortedLinkedLists(head1, head2) {
  let dummy = { next: null };
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

function mergeLinkedLists(head1, head2) {
  if (!head1) {
    return head2;
  }
  if (!head2) {
    return head1;
  }
  if (head1.value < head2.value) {
    head1.next = mergeLinkedLists(head1.next, head2);
    return head1;
  }
  head2.next = mergeLinkedLists(head1, head2.next);
  return head2;
}

function rotateLinkedList(head, k) {
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
  createLinkedListFromArray,
  convertLinkedListToArray,
  convertLinkedListToObject,
  searchInLinkedList,
  findLengthOfLinkedList,
  findNthNodeInLinkedList,
  findMiddleOfLinkedList,
  findNthNodeFromEnd,
  reverseLinkedList,
  detectCycleInLinkedList,
  findCycleInLinkedList,
  removeCycleInLinkedList,
  mergeTwoSortedLinkedLists,
  mergeLinkedLists,
  rotateLinkedList,
};

module.exports = LinkedList;
