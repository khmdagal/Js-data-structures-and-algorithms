class Node{
    constructor(value){
        this.value = value
    }
}


class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    // WRITE THE PUSH METHOD HERE // 
   push(value){
       const newNode = new Node(value)
       this.stackList.push(newNode)
   }
    ////////////////////////////////
    
}

const myStack = new Stack()
myStack.push(1)
myStack.push(2)
console.log(myStack.printStack())