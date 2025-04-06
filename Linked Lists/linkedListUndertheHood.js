// What is Node
// A node is a basic unit of a data structure, such as a linked list or tree, that contains data and a reference (or link) to the next node in the sequence.
// In a singly linked list, each node contains data and a reference to the next node.

///////   THE VALUE AND THE POINTER ////// The whole thing is a node
const node = {
  value: 4,
  next: null,
};

// The linked list looks like this:
// head            tail
// 4 -> null
// The linked 
// 4 -> 5 -> 6 -> null


// Linked list look link this nested object
const myLinkedList = {
  head: {
    value: 4,
    next: {
      value: 5,
      next: {
        value: 6,
        next: null, // this is the tail (which means the end of the list)
      },
    },
  },
};
