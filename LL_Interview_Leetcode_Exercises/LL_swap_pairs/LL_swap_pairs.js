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
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
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

    swapPairs() {
        //   +===================================================+
        //   |               WRITE YOUR CODE HERE                |
        //   | Description:                                      |
        //   | - Swaps every two adjacent nodes in the linked    |
        //   |   list.                                           |
        //   | - Modifies the list in place without creating     |
        //   |   new nodes.                                      |
        //   |                                                   |
        //   | Behavior:                                         |
        //   | - A dummy node is used to simplify swapping from  |
        //   |   the head of the list.                           |
        //   | - In each loop iteration, two nodes (`first` and  |
        //   |   `second`) are swapped using pointer changes.    |
        //   | - The `previous` pointer tracks the last node     |
        //   |   before the swapped pair.                        |
        //   | - Updates `this.head` to the new first node.      |
        //   +===================================================+
        if (this.head === null) {
            return
        };

        let dummyNode = new Node(0);
        dummyNode.next = this.head

        let prevNode = dummyNode;
        let firstNode = this.head;
        
        while(firstNode !== null && firstNode.next !== null){
            let secondNode = firstNode.next;

            // Reassigning pointes to swap

            prevNode.next = secondNode
            firstNode.next = secondNode.next
            secondNode.next = firstNode

            console.log(firstNode.value, secondNode.value)
    
            prevNode = firstNode;
            firstNode = firstNode.next
        };

       this.head = dummyNode.next
    }

}






// Test cases:
console.log("\nTest Case 1: Even number of nodes");
const ll1 = new LinkedList(1);
ll1.push(2);
ll1.push(3);
ll1.push(4);
console.log("BEFORE:");
ll1.printList();
ll1.swapPairs();
console.log("AFTER:");
ll1.printList();

console.log("\nTest Case 2: Odd number of nodes");
const ll2 = new LinkedList(1);
ll2.push(2);
ll2.push(3);
ll2.push(4);
ll2.push(5);
console.log("BEFORE:");
ll2.printList();
ll2.swapPairs();
console.log("AFTER:");
ll2.printList();

console.log("\nTest Case 3: Single node");
const ll3 = new LinkedList(1);
console.log("BEFORE:");
ll3.printList();
ll3.swapPairs();
console.log("AFTER:");
ll3.printList();

console.log("\nTest Case 4: Empty list");
const ll4 = new LinkedList(1);
ll4.makeEmpty();
console.log("BEFORE:");
ll4.printList();
ll4.swapPairs();
console.log("AFTER:");
ll4.printList();

