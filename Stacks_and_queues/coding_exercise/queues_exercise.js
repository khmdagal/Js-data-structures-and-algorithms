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

    enqueue(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode
            this.last = newNode
        }

        this.length++
        return this
    }

    dequeue(value){
        if(this.length === 0) return undefined

        let temp = this.first
        this.first = this.first.next;
        temp.next = null
        
        this.length--
        return temp
    }
}

const newQueue = new queues(1);

newQueue.enqueue(2)
newQueue.enqueue(3)
newQueue.enqueue(4)
console.log("===>>> enqueued",newQueue)

console.log("===>>> dequeued", newQueue.dequeue(), newQueue)

