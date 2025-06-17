class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
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

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // WRITE THE ISPALINDROME METHOD HERE //
    isPalindrome() {
        if (!this.head) return false
        if (this.length === 1 || this.length === 0) return true

        let left = this.head
        let right = this.tail
    

        while (left !== null && right !== null && left !== right && left.prev !== right ) {

          if(left.value !== right.value) return false

            left = left.next
            right = right.prev
        }

       
        return true
    }
    ////////////////////////////////////////

}



let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(1);

console.log("List 1:");
myDoublyLinkedList.printList();
console.log("Is List 1 a palindrome? " + myDoublyLinkedList.isPalindrome());

let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);


console.log("\nList 2:");
myDoublyLinkedList2.printList();
console.log("Is List 2 a palindrome? " + myDoublyLinkedList2.isPalindrome(2));

/*
    EXPECTED OUTPUT:
    ----------------
    List 1:
    1
    2
    3
    2
    1
    Is List 1 a palindrome? true

    List 2:
    1
    2
    3
    4
    5
    Is List 2 a palindrome? false
*/




// ======== Instruction ==========
/*
if (this.length === 0) return true; // An empty list is a palindrome
        if (this.length === 1) return true; // A single element list is a palindrome

        let left = this.head;
        let right = this.tail;

        while (left !== null && right !== null && left !== right && left.prev !== right) {
            if (left.value !== right.value) {
                return false; // Values do not match, not a palindrome
            }
            left = left.next; // Move forward from the head
            right = right.prev; // Move backward from the tail
        }

        return true; // All values matched, it is a palindrome







---------------------------
 
        left !== right &&   |
        left.prev !== right |
----------------------------

*/

 console.log(3 % 2)