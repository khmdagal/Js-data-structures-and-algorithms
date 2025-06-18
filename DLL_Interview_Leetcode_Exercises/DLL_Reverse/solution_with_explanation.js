// reverse() {
//         let current = this.head;
//         let temp = null;
 
//         while (current !== null) {
//             temp = current.prev;
//             current.prev = current.next;
//             current.next = temp;
//             current = current.prev;
//         }
 
//         temp = this.head;
//         this.head = this.tail;
//         this.tail = temp;
//     }




// The reverse() method reverses the order of the nodes in the doubly linked list.

// Here's a step-by-step explanation of the logic:



// Variable Initialization

// let current = this.head;:

// This sets a variable called current to point at the very first node in the list. This is our starting point.

// let temp = null;:

// We also have a variable named temp, which we initially set to null. We'll use this as a temporary storage space shortly.

// Loop to Go Through the List

// while (current !== null) { ... }:

// We have a while loop that will run as long as current is not null. In other words, as long as there's a node to look at, keep going.

// Inside the Loop

// temp = current.prev;:

// We store the current node's prev pointer in temp. We're saving it because we're about to change what prev points to, and we don't want to lose this original information.

// current.prev = current.next;:

// Now, we change the prev pointer of the current node to point where its next pointer was pointing. This is a key part of the reversal process.

// current.next = temp;:

// Here, we set the next pointer of the current node to what we saved in temp. This is the original prev value.

// current = current.prev;:

// Finally, we move to the next node to repeat this process. Note that current.prev now holds what was originally in current.next, because we swapped them. So this actually moves us forward in the original list, which has now been partially reversed.

// Swap Head and Tail

// temp = this.head;:

// After the loop, we need to swap the head and tail pointers, so we store the original head in temp.

// this.head = this.tail;:

// We set the new head to be what was originally the tail.

// this.tail = temp;:

// We set the new tail to be what was originally the head.





// Code with inline comments:



// Define the 'reverse' method to reverse a doubly linked list.
function reverse() {
  // Start at the first node, known as the 'head'.
  let current = this.head;
  
  // Create a 'temp' variable set to null. 
  // We'll use this to temporarily store data.
  let temp = null;
 
  // Loop through each node in the list.
  // Continue as long as 'current' is not null.
  while (current !== null) {
 
    // Store the 'prev' pointer of the current node 
    // into 'temp'. This is like putting it in a safe box.
    temp = current.prev;
    
    // Now we swap the 'prev' and 'next' pointers. 
    // Make 'prev' point where 'next' was pointing.
    current.prev = current.next;
 
    // Make 'next' point where 'prev' was originally 
    // pointing, which we stored in 'temp'.
    current.next = temp;
 
    // Move to the next node in the original list.
    // Remember, 'prev' now holds the original 'next'.
    current = current.prev;
  }
 
  // We've reversed all the nodes. Now, let's switch the 
  // 'head' and 'tail'.
  
  // Store the original 'head' into 'temp'.
  temp = this.head;
 
  // Set the new 'head' to be the original 'tail'.
  this.head = this.tail;
 
  // Set the new 'tail' to be the original 'head', 
  // which we saved in 'temp'.
  this.tail = temp;
}