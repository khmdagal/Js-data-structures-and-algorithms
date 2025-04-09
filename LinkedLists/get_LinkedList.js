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

         this.tail = prev; 
         this.tail.next = null; 
         this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
          
        }
            
        return curent; 
    }
    unshift(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this;
    }

    shift(){
        if(!this.head) return undefined // if the list is empty, we return undefined
        
        let tempValue = this.head; 
        this.head = this.head.next; // if we have more than one node, we set the head to the next node
        this.length--;
        
        tempValue.next = null; // we set the next of the removed node to null

        if(this.length === 0){ // if we only had one node, we set the tail to null
            this.tail = null;
        }
       
        return tempValue; // we return the removed node
    }

    getIndex(index){
        
        if(index < 0 || index >= this.length) return undefined; // if the index is out of range, we return undefined

        let curentValue = this.head;
        for(let i = 0; i < index; i++){
            curentValue = curentValue.next
        }
       
        return curentValue; // we return the node at the index
    }
}


let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log(myLinkedList.getIndex(2));
