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

### createHead(value: any)

Provide any value and it will return a starter node with the given value.

```
LinkedList.createHead(1)

Output:
{
    value: 1,
    next: null
}
```

### createFromArray(array: any[])

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

### createCircularFromArray(array: any[])

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

### convertToArray(head: NodeObject)

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

### convertToObject(head: NodeObject)

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

### clone(head: NodeObject)

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
