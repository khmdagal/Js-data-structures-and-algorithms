   function enqueue(value) {
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(value);
        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop());
        }
    }



/*
The enqueue() method of the MyQueue class adds an element to the queue using two stacks, stack1 and stack2.

Here's a step-by-step explanation of the logic:



Check if stack1 is not empty.

If it's not empty, move all the elements from stack1 to stack2 by popping elements from stack1 and pushing them onto stack2. This reverses the order of the elements, with the front of the queue at the top of stack2.

Push the new value onto stack1. Since stack1 is empty at this point, the new value becomes the only element in stack1.

Move all the elements back from stack2 to stack1 by popping elements from stack2 and pushing them onto stack1. This reverses the order of the elements again, returning them to their original order, with the front of the queue at the bottom of stack1.



By using two stacks and moving elements between them, the enqueue() method maintains the order of the elements in the queue, ensuring that the front of the queue is always at the bottom of stack1.





Code with inline comments:

*/

function enqueue(value) {
    // Transfer all elements from stack1 to stack2
    while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
    }
 
    // Push the new value onto stack1
    this.stack1.push(value);
 
    // Transfer all elements back from stack2 to stack1
    while (!this.stack2.isEmpty()) {
        this.stack1.push(this.stack2.pop());
    }
}