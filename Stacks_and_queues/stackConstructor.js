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