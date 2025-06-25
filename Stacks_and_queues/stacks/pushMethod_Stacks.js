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

    push(value){
        const newNode = new Node(value)
        if(this.hight === 0){
            this.top = newNode
        } else{
            newNode.next = this.top
            this.top = newNode
        }
        this.hight++
        return this


        /*
        pushing an item onto a Stack, 
        like popping an item off, is an O(1) operation; 
        this means it takes a constant amount of time 
        regardless of the Stack's size. 
        Understanding this is essential 
        for efficiently managing data in stack structures.
        */
        
    }
}

const myStacks = new Stacks(4)
myStacks.push(1)
myStacks.push(2)
myStacks.push(5)
myStacks.push(8)


console.log(myStacks)