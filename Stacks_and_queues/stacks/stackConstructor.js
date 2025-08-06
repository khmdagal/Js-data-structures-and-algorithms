class Node {
    constructor(value){
        this.value = value
        this.next = null

    }
}

class Stacks {
    constructor(value){
        const newNode = new Node(value);
        this.top = newNode
        this.hight = 1
    }
}

const myStacks = new Stacks(4)

console.log(myStacks)
/*
y implemented using arrays or linked lists, 
which are two fundamental data structures 
used to manage stack operations efficiently. 
This knowledge is essential for 
understanding how stacks function in different programming contexts.
*/