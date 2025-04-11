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
    
    insertIndex(index, value){
        if(index < 0 || index > this.length) return undefined; // if the index is out of range, we return undefined
        if(index === 0) return this.unshift(value); // if the index is 0, we call the unshift method
        if(index === this.length) return this.push(value);

        const newNode = new Node(value)
        let tempValue = this.getIndex(index - 1);
        newNode.next = tempValue.next;
        tempValue.next = newNode
        this.length++
        return this

        }


        

        printValues(){
            // Just to print values only
            let ListCollection = []
            for(let i = 0; i < this.length; i++){
                let current = myLinkedList.getIndex(i)
                ListCollection.push(current.value)

            }
            return ListCollection
        }
}


let myLinkedList = new LinkedList(0);
myLinkedList.push(2);
myLinkedList.push(3);


console.log("== Before ==",myLinkedList.printValues())

myLinkedList.insertIndex(1,1)

myLinkedList.insertIndex(2,7);
myLinkedList.insertIndex(3,4)

console.log("== After ==",myLinkedList.printValues())