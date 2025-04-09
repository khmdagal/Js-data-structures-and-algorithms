// We are creating push method for linked list
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head; // You can also set this.tail = newNode, because they are pointing to the same object(node)
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        // Check if the list is empty first
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++; // Increment the length of the list whenever a new node is added
        return this; // Returing the entire list
    }
}
let myLinkedList = new LinkedList(4);
myLinkedList.push(5);
myLinkedList.push(6);



console.log("==",myLinkedList) 