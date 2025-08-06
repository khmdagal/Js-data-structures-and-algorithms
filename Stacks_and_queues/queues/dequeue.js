class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queues {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode
        this.last = newNode
        this.length = 1
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode

        }



        this.length++
        return this

         /*
        adding/pushing/enqueueing a NODE into LAST a Queue have a time complexity of O(1), 
        meaning these operations are performed in constant time, 
        regardless of the size of the Queue. 
        This efficiency is crucial for implementing 
        fast and responsive data management systems.
        */
    }

    dequeues() {
        if (this.length === 0) return undefined
        let temp = this.first
        if (this.length === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
            temp.next = null
        }


        this.length--
        return temp

        /*
        removing FIRST NODE from a Queue have a time complexity of O(1), 
        meaning these operations are performed in constant time, 
        regardless of the size of the Queue. 
        This efficiency is crucial for implementing 
        fast and responsive data management systems.
        */
    }
}

const myQueues = new Queues(4)
myQueues.enqueue(7)
myQueues.enqueue(23)
myQueues.dequeues()
console.log(myQueues)