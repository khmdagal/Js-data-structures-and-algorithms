class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value){
        const newNode = new Node(value)
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode
        }else{
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
        
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null

        }
        this.length--
        return temp
    }

    unshift(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.length++
        return this
    }
}

const myDoublyLinkedList = new DoublyLinkedList(3)
myDoublyLinkedList.push(4)
myDoublyLinkedList.push(5)

console.log('====== Before unshift method ====')
console.log(myDoublyLinkedList)

console.log('====== After unshift method ====')
myDoublyLinkedList.unshift(2)
myDoublyLinkedList.unshift(1)
console.log(myDoublyLinkedList)