class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queues{
    constructor(value){
        const newNode = new Node(value);
        this.first = newNode
        this.last = newNode
        this.length = 1
    }
}

const myQueues = new Queues(4)
console.log(myQueues)