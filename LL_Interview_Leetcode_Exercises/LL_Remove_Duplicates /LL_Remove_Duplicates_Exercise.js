/*
===========  Extra explanation ==========
==== Understanding what this line is doing "prevNode = currentNode" =====

The line previous = current; is part of the logic used to remove duplicate values from a singly linked list. Let's break down what it does in the context of the full method:

Context
You're iterating through a linked list with a current pointer and keeping track of the previous node with a previous pointer. You're also using a Set called values to track which values have already been seen.

The Line: previous = current;
This line is only executed if the current node is not a duplicate — meaning its value has not been seen before.

What it does:
It updates the previous pointer so that it points to the current node.

Why it's needed:
When you're removing duplicates, you need to know what node comes before the one you're examining so you can correctly "unlink" the duplicate. If the value is unique, you keep the node and update previous to reflect that this is now the last valid (non-duplicate) node you've seen. On the next loop iteration, if a duplicate is found, you'll use previous.next = current.next to skip over that duplicate.

Example Walkthrough:
Suppose the list is:

css
Copy
Edit
A -> B -> B -> C
current is A

A is not in values, so add it.

previous = current → previous now points to A

current moves to B

B is not in values, so add it.

previous = current → previous now points to B

current moves to next B

B is already in values, so it's a duplicate.

Skip it by setting previous.next = current.next (unlinking the second B)

current moves to C

C is not in values, so add it.

previous = current → previous now points to C

Summary
✅ previous = current; ensures that:

You always know the most recent non-duplicate node.

You can correctly unlink future duplicate nodes.





*/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    // WRITE THE REMOVEDUPLICATES METHOD HERE // 
    removeDuplicates() {
        const uniqueNodes = new Set();
        let currentNode = this.head;
        let prevNode = null

        while (currentNode !== null) {
            // we need to check of the node is already exist
            if (uniqueNodes.has(currentNode.value)) {
                // This line is unlinking the current node to the next
                // because it's already been seen
                // So we are linking the previous node to the node the is next to the current node.
                prevNode.next = currentNode.next;
                this.length -= 1;
            } else {
                uniqueNodes.add(currentNode.value)
                // When a node has not been seen before we added to the uniqueNode set
                // and importantly update the preVBode pointer to point the current node
                //
                prevNode = currentNode
            }

            currentNode = currentNode.next
        }

    }
    ////////////////////////////////////////////

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(5);


console.log("Original list:");
myLinkedList.printList();

myLinkedList.removeDuplicates();

console.log("\nList after removing duplicates:");
myLinkedList.printList();



/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    3
    4
    5
    5
    List after removing duplicates:
    1
    2
    3
    4
    5

*/
