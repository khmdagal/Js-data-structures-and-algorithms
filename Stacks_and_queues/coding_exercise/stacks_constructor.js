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
        this.length = 1
    }
}

const myStacks = new Stacks(2)
myStacks.push(3)
myStacks.push(4)
myStacks.push(5)
console.log(myStacks)