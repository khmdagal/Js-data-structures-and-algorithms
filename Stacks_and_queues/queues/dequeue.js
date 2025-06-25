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
    }
}

const myQueues = new Queues(4)
myQueues.enqueue(7)
myQueues.enqueue(23)
myQueues.dequeues()
console.log(myQueues)