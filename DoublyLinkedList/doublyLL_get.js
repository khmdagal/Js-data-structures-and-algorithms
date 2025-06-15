class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}


class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        let temp = this.tail
        if (this.length === 0) {
            return undefined
        }

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {

            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null

        }
        this.length--
        return temp
    }

    unshift(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined
        let temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {

            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }


        this.length--
        return temp
    }
    get(value) {
        let requiredNode;
        // if (!this.head) return undefined;

        if (value < 0 || value >= this.length) return undefined;

        let temp = this.head
        if (value < this.length / 2) {
            for (let i = 0; i < value; i++) {
                temp = temp.next
            }
        } else {
            temp = this.tail
            for (let i = this.length - 1; i > value; i--) {
                temp = temp.prev
            }
        }
        return temp.value
    }
}

const myDoublyLinkedList = new DoublyLinkedList(0)
myDoublyLinkedList.push(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)

console.log(myDoublyLinkedList.get(1))


/*
.head.value, 
myDoublyLinkedList.head.next.value, 
myDoublyLinkedList.head.next.next.value,
myDoublyLinkedList.head.next.next.next.value,
myDoublyLinkedList.head.next.next.next.next.value
*/