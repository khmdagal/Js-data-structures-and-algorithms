class Stack{
    constructor(){
        this.stackList = []
    }


     push(value){
       const newNode = value
       this.stackList.push(newNode)
   }


   pop(){
    if(this.stackList.length === 0) return undefined
    const temp = this.stackList.pop()
    return temp
   }
}


const myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)

console.log(myStack.pop(), myStack)