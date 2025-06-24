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

    push(value){
        const newNode = new Node(value)
        if(this.hight === 0){
            this.top = newNode
        } else{
            newNode.next = this.top
            this.top = newNode
        }
        this.hight++
        return this
        
    }

    pop(){
        if(this.hight === 0) return undefined

        let temp = this.top
        this.top = this.top.next
        temp.next = null


        this.hight--
        return temp
    }

}

const myStacks = new Stacks(4)
myStacks.push(1)
myStacks.push(2)
myStacks.push(5)
myStacks.push(8)


console.log('=====Before POP method======')
console.log(myStacks, myStacks.hight)
console.log('=====After POP method======')
console.log(myStacks.pop(), myStacks.hight)