// WRITE NODE CLASS HERE //

class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }

}
///////////////////////////

class LinkedList {
	// WRITE LL CONSTRUCTOR HERE //
	constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head // You can also set this.tail = newNode, because they are pointig to the same object(node)
        this.length = 1
    }
	///////////////////////////////

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
    getHead(){
        if(this.head === null){
            console.log('Head: null')
        }else{
            console.log('Head: ', this.head.value)
        }
    }


   getTail(){
    if(this.tail === null){
        console.log('Tail: null')
    }else{
        console.log('Tail: ', this.tail.value)
    }
   }
    getLength() {
        console.log("Length: " + this.length);
    }

}

// let myLinkedList = new LinkedList(4);
// console.log(myLinkedList.printList())
// console.log(myLinkedList.getHead())

// == Instead of consoling one by one we bundled all the methods in one function to test them all at once == //

function test() {
    let myLinkedList = new LinkedList(4);
    
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/

/*
======= IMPORTANT =======
- The 'new' keyword creates a new instance of the class. which means it creates a new object in memory. 
- It calls the constructor method of the class, which initializes the properties of the object.


*/