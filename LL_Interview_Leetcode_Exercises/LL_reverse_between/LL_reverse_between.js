class Node {
    constructor(value){
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

    // WRITE THE REVERSEBETWEEN METHOD HERE // 
    reverseBetween(m, n) {

        if(this.head === null){
            return 
        };

        let dummyNode = new Node(0);
        dummyNode.next = this.head
        let prevNode = dummyNode

        for(let i = 0; i < m; i++){
            prevNode = prevNode.next
        }

        let currentNode = prevNode.next
        
        for(let i = 0; i < n - m; i++){
            
        let temp = currentNode.next;
            currentNode.next = temp.next
            temp.next = prevNode.next
            prevNode.next = temp
        }
        this.head = dummyNode.next
        
    }
	
	

}

// let dummyNode = new Node(0)
//         dummyNode.next = this.head
//         let prevNode = dummyNode
//         const temp = this.head
//         for(let i = 0; i <= m; i++){
            
//             console.log('=Prev=>>',prevNode.value, )
//             prevNode = prevNode.next
//         }


let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");

const m = 2;
const n = 4;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1 -> 2 -> 3 -> 4 -> 5
    List after reversing between indexes of 2 and 4:
    1 -> 2 -> 5 -> 4 -> 3
*/



/*
=============== Correct Answer =============

    if (m < 1 || n > this.length || m >= n) {
            console.log("Invalid indices for reversal.");
            return;
        }

        let dummy = new Node(0);
        dummy.next = this.head;
        let prev = dummy;

        // Move prev to the node before the m-th node
        for (let i = 1; i < m; i++) {
            prev = prev.next;
        }

        // Start reversing from the m-th node
        let current = prev.next;
        let next = null;

        for (let i = 0; i < n - m; i++) {
            next = current.next;
            current.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }

        this.head = dummy.next; // Update head in case it was reversed

 */