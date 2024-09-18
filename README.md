# linked-list-operations

## Description

An easier way to deal with linked lists. This package is meant to stop the repetitiveness of functions used on linked lists. The linked lists class used for this package is:

```
class NodeObject {
  value: any;
  next: NodeObject | null;
  constructor(x: any) {
    this.value = x;
    this.next = null;
  }
}
```

Any other syntax for a linked list will not work with this package.

## How to use

First start by installing it using the command listed. After you can import it where it is needed by doing:

```
const { LinkedList } = require("linked-list-operations");
```

## Functions

### create
