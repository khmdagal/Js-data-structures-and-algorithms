class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stackList.pop();
    }
    
}



// WRITE THE ISBALANCEDPARENTHESES FUNCTION HERE //
function isBalancedParentheses(input){
    
    const newStacks = new Stack()

    for(const p of input){
        if(p === '('){
            newStacks.push(p)
        } else if(p === ')'){
            if(newStacks.isEmpty() || newStacks.pop() !== '('){
                return false
            }
        }
        
    }
 return newStacks.isEmpty()
    
}
///////////////////////////////////////////////////

/*

======= Another way to achieve this same solution ======
let countOpenParen = 0;
    let countCloseParen = 0;
    input.split('').filter(el=>{
    if(el === "("){
        countOpenParen++
    }
    if(el === ")"){
        countCloseParen++
    }
   })
    return countOpenParen === countCloseParen
*/

isBalancedParentheses("(())")
isBalancedParentheses("(()))")
const input1 = "(())";
const expected1 = true;
const result1 = isBalancedParentheses(input1);
console.log(`Result: ${result1} | ${expected1 === result1 ? "✅" : "❌"}`);

const input2 = "(()))";
const expected2 = false;
const result2 = isBalancedParentheses(input2);
console.log(`Result: ${result2} | ${expected2 === result2 ? "✅" : "❌"}`);

const input3 = "((()))";
const expected3 = true;
const result3 = isBalancedParentheses(input3);
console.log(`Result: ${result3} | ${expected3 === result3 ? "✅" : "❌"}`);

const input4 = "(((())";
const expected4 = false;
const result4 = isBalancedParentheses(input4);
console.log(`Result: ${result4} | ${expected4 === result4 ? "✅" : "❌"}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Input: "(())" | Expected: true | Result: true
    Input: "(()))" | Expected: false | Result: false
    Input: "((()))" | Expected: true | Result: true
    Input: "(((())" | Expected: false | Result: false

*/
