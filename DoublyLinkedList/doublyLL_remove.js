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
        return temp
    }

    set(index, value) {
        if (!this.head || index < 0 || index > this.length) {
            return undefined
        } else {
            let temp = this.get(index)
            temp.value = value
        }
        return true
    }

    insert(index, value) {
        const newNode = new Node(value)
        if (index < 0 || index > this.length) return false
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index > 0 || index < this.length) {
            let before = this.get(index - 1)
            let after = before.next
            before.next = newNode
            newNode.prev = before

            newNode.next = after
            after.prev = newNode
        }
        this.length++
        return true
    }

    remove(index) {
        if (!this.head || index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let current = this.get(index)
        
        current.prev.next = current.next
        current.next.prev = current.prev

        current.next = null
        current.prev = null

        this.length--
        return current
    }
}

const myDoublyLinkedList = new DoublyLinkedList(2)
myDoublyLinkedList.push(4)
myDoublyLinkedList.push(6)


console.log('===== Before REMOVE method ======')
console.log(myDoublyLinkedList)

console.log('===== After REMOVE method ======')
console.log(myDoublyLinkedList.remove(1))
console.log(myDoublyLinkedList)
