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

    shift(value){
        if(!this.head) return undefined // if the list is empty, we return undefined
        if(this.length === 1){ // if the list has only one node, to remove it we set head and tail to null
            this.head = null;
            this.tail = null;
        } else{
            this.head = this.head.next; // if we have more than one node, we set the head to the next node
        }
       

        this.length--;
        return this
    }
  
}


let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);


console.log('==Before ==',myLinkedList)
myLinkedList.shift();

console.log('==After ==',myLinkedList)

console.log(myLinkedList);
console.log('Head' , myLinkedList.head.value, 'Tail' , myLinkedList.tail.value);