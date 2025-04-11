class Node{
    constructor(value){
        this.value = value;
        this.next = null;

    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined; // if the list is empty, we return undefined


         let curent = this.head;
         let prev = this.head;
        while(curent.next !== null){
            prev = curent
            curent = curent.next;
        }

         // Now we have the last node and the second last node and we are going to remove the last node
         this.tail = prev; // setting the tail to the second last node
         this.tail.next = null; // removing the last node by setting the next of the second last node to null
         this.length--;
        
        // In the case of having only one node in the list, which means both head and tail are pointing to the same node
        // the rest fo the code will be exactly the same but we need one more step to take.
        if(this.length === 0){
            this.head = null;
            this.tail = null;
            // we set both head and tail to null
        }
        
            
        return curent; // returning the last node;

    }
}


let myLinkedList = new LinkedList();



console.log('== BEFORE ==',myLinkedList)
console.log(myLinkedList.pop())
console.log('== AFTER ==',myLinkedList)