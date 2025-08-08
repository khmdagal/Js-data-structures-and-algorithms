class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class queues {
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }
}