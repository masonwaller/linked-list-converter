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

The following functions are supported in thie package:

### createHead(value: any): Nodeobject

Provide any value and it will return a starter node with the given value.

```
LinkedList.createHead(1)

Output:
{
    value: 1,
    next: null
}
```

### createFromArray(array: any[]): NodeObject

Provide an array with any values and it will return a series of nodes in a linked list.

```
LinkedList.createFromArray([1, 2, 3])

Output:
{
    value: 1,
    next: {
        value: 2,
        next: { value: 3, next: null }
    }
}
```

### createCircularFromArray(array: any[]): NodeObject

Provide an array of any values and it will return a circular series of nodes in a looped linked list.

```
LinkedList.createCircularFromArray([1, 2])

Output:
{
    value: 1,
    next: {
        value: 2,
        next: // this points back to the first node value: 1
    }
}
```

### convertToArray(head: NodeObject): any[]

Provide a linked list of NodeObjects, circular or not, and it'll return an array.

```
LinkedList.convertToArray({
    value: 1,
    next: {
        value: 2,
        next: { value: 3, next: null }
    }
})

Output:
[1,2,3]
```

### convertToObject(head: NodeObject): any{}

Provide a linked list of NodeObjects, circular or not, and it'll return an object with the spot in the list as the key and the value is the value of the NodeObject.

```
LinkedList.convertToObject({
    value: 1,
    next: {
        value: 2,
        next: { value: 4, next: null }
    }
})

Output:
{
    1: 1,
    2: 2,
    3: 4
}
```

### clone(head: NodeObject): NodeObject

Provide a linked list, circular or not, and it'll copy and send back a clone or deep copy of that linked list. Used to not alter an existing linked list.

```
LinkedList.clone({
    value: 1,
    next: {
        value: 2,
        next: { value: 3, next: null }
    }
})

Output:
{
    value: 1,
    next: {
        value: 2,
        next: { value: 3, next: null }
    }
}
```

### search(head: NodeObject, value: any, searchFunction?: (value: any) => boolean): boolean

Provide a linked list, circular or not, and it'll search to see if the provided value is included in the linked list returning a boolean. You can also pass in a searchFunction if you are looking for a nested value or values that need to be computed.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: { value: 3, next: null }
    }
}
LinkedList.search(list, 1)

Output: true

const nestedValueList = {
    value: { this: 1, that: 1 },
    next: {
        value: { this: 2, that: 2 },
        next: { value: { this: 3, that: 3 }, next: null }
    }
}
LinkedList.search(list, 2, (val) => val.this)

Output: true
```

### find(head: NodeObject, value: any, searchFunction?: (value: any) => boolean): NodeObject | null

Provide a linked list, circular or not, and it'll find the provided value and return that Node, or if it cannot find the value it will return null. You can also pass in a searchFunction if you are looking for a nested value or values that need to be computed.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: { value: 3, next: null }
    }
}
LinkedList.find(list, 2)

Output: {
    value: 2,
    next: {
        value: 3,
        next: null
    }
}

const nestedValueList = {
    value: { this: 1, that: 1 },
    next: {
        value: { this: 2, that: 2 },
        next: { value: { this: 3, that: 3 }, next: null }
    }
}
LinkedList.find(list, 2, (val) => val.this)

Output: {
    value: { this: 2, that: 2 },
    next: {
        value: { this: 3, that: 3 },
        next: null
    }
}
```

### findLength(head: NodeObject): number

Provide a linked list, circular or not, and it'll find the length of the list.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: { value: 3, next: null }
    }
}
LinkedList.findLength(list)

Output: 3
```

### findNthNode(head: NodeObject, n: number): NodeObject | null

Provide a noncircular linked list and it'll return the nth node or null if the list is not long enough.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: { value: 3, next: null }
    }
}
LinkedList.findNthNode(list, 3)

Output: {
    value: 3,
    next: null
}
```

### findMiddle(head: NodeObject): NodeObject | null

Provide a noncircular linked list and it'll return the middle node or null if the list is circular or nonexistent.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: { value: 3, next: null }
    }
}
LinkedList.findMiddle(list)

Output: {
    value: 3,
    next: {
        value: 3
        next: null
    }
}
```

### findNthNodeFromEnd(head: NodeObject, n: number): NodeObject | null

Provide a noncircular linked list and it'll return the nth node from the end of the list or null if the list is not long enough.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: { value: 3, next: null }
    }
}
LinkedList.findNthNodeFromEnd(list, 1)

Output: {
    value: 3,
    next: null
}
```

### add(head: NodeObject, value: any): NodeObject

Provide a noncircular linked list and it'll return the same list with the new value added onto the end.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: null
    }
}
LinkedList.add(list, 3)

Output: {
    value: 1,
    next: {
        value: 2,
        next: { value: 3, next null }
    }
}
```

### replace(head: NodeObject, index: number, value: any): NodeObject

Provide a noncircular linked list and it'll return the same list with the new value replacing the value of the index provided.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: null
    }
}
LinkedList.replace(list, 2, 3)

Output: {
    value: 1,
    next: {
        value: 3,
        next: null
    }
}
```

### replaceNode(head: NodeObject, node: NodeObject, newNode: NodeObject): NodeObject

Provide a linked list, circular or not, and it'll return the same list with the specific node being replaced by the new node.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: null
    }
}
const oldNode = list.next
LinkedList.replaceNode(list, oldNode, { value: 3, next: { value: 4, next: null } })

Output: {
    value: 1,
    next: {
        value: 3,
        next: { value: 4, next null }
    }
}
```

### insert(head: NodeObject, index: number, value: any): NodeObject

Provide a noncircular linked list and it'll return the same list with the new value added at the provided index.

```
const list = {
    value: 1,
    next: {
        value: 3,
        next: null
    }
}
LinkedList.insert(list, 1, 2)

Output: {
    value: 1,
    next: {
        value: 2,
        next: { value: 3, next null }
    }
}
```

### removeIndex(head: NodeObject, index: number): NodeObject | null

Provide a noncircular linked list and it'll return the same list with the index provided removed from the list.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: { value: 3, next: null }
    }
}
LinkedList.removeIndex(list, 2)

Output: {
    value: 1,
    next: {
        value: 2,
        next: null
    }
}
```

### removeNodeCircular(head: NodeObject, node: NodeObject): NodeObject | null

Provide a circular linked list and it'll return the same list with the specified node removed.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: // this points back at the first node, value 1
        }
    }
}
LinkedList.removeNodeCircular(list, { value: 2, next: ... })

Output: {
    value: 1,
    next: {
        value: 3,
        next: // this points back at first node, value 1
    }
}
```

### removeNode(head: NodeObject, value: any): NodeObject | null

Provide a noncircular linked list and it'll return the same list with the specified node removed.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: null
    }
}
LinkedList.removeNode(list, { value: 2, next: null })

Output: {
    value: 1,
    next: null
}
```

### removeAfterIndex(head: NodeObject, index: number): NodeObject

Provide a linked list, circular or not, and it'll return the same list up until the index where everything after is removed. NOTE: this does break circular linked lists and makes then noncircular.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: null
    }
}
LinkedList.removeAfterIndex(list, 0)

Output: {
    value: 1,
    next: null
}
```

### removeValue(head: NodeObject, value: any, searchFunction?: (a: any) => boolean): NodeObject | null

Provide a noncircular linked list and it'll return the same list with all the values that equal the provided value. You can also provide a search function for nested values or values that need to be computed.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: null
    }
}
LinkedList.removeValue(list, 1)

Output: {
    value: 2,
    next: null
}
```

### reverse(head: NodeObject): NodeObject

Provide a linked list, circular or not, and it'll return the list reversed.

```
const list = {
    value: 1,
    next: {
        value: 2,
        next: null
    }
}
LinkedList.reverse(list)

Output: {
    value: 2,
    next: {
        value: 1,
        next: null
    }
}
```

### mergeSort(head: NodeObject): NodeObject

Provide a noncircular linked list and it'll return a new sorted list. Defaults to ascending order.

```
const list = {
    value: 2,
    next: {
        value: 1,
        next: null
    }
}
LinkedList.removeValue(list, 1)

Output: {
    value: 1,
    next: {
        value: 2,
        next: null
    }
}
```
