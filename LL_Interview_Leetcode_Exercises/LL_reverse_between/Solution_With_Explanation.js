 reverseBetween(m, n) {
        if (this.head === null) return;
 
        const dummy = new Node(0);
        dummy.next = this.head;
        let prev = dummy;
 
        for (let i = 0; i < m; i++) {
            prev = prev.next;
        }
 
        let current = prev.next;
        for (let i = 0; i < n - m; i++) {
            const temp = current.next;
            current.next = temp.next;
            temp.next = prev.next;
            prev.next = temp;
        }
 
        this.head = dummy.next;
    }




//The reverseBetween(m, n) function is used to reverse a portion of a linked list between positions m and n, inclusive.

//Here's a step-by-step explanation of the logic:



// If the head of the linked list is null, return, as there is nothing to reverse.

// Create a dummy node and set its next pointer to the head of the linked list. This dummy node simplifies the manipulation of pointers, especially at the beginning of the list.

// Initialize a prev pointer and set it to the dummy node. Move the prev pointer m steps forward using a for loop. After the loop, prev will point to the node right before the mth node.

// Initialize a current pointer to the mth node by setting it to prev.next.

// Iterate through the list n - m times using a for loop, reversing the portion of the list between positions m and n: a. Create a temp pointer and set it to the next node of current. b. Update the next pointer of current to point to the node after temp. c. Update the next pointer of temp to point to the node right after prev. d. Update the next pointer of prev to point to temp.

// After the loop, the portion of the linked list between positions m and n has been reversed. Set the head of the linked list to the next pointer of the dummy node.



// The function traverses the list only once, making it efficient with a time complexity of O(n), where n is the number of nodes in the list.




// Code with inline comments:



// Function to reverse nodes in a linked list between positions m and n (0-based index)
reverseBetween(m, n) {
    // Check if the list is empty. If it is, no action is needed.
    if (this.head === null) {
        return
    }
 
    // Create a dummy node. This is a common technique used in linked list problems
    // to simplify edge cases, like when modifying the head of the list.
    const dummy = new Node(0);
 
    // Link this dummy node to the head of the list.
    // Now, dummy acts as a precursor to the head node.
    dummy.next = this.head;
 
    // 'prev' will eventually point to the node just before the start of the reversal.
    // Initially, 'prev' is set to the dummy node.
    let prev = dummy;
 
    // Iterate to position 'prev' to the node just before where reversal begins.
    // Since indices are 0-based, this loop moves 'prev' 'm' nodes forward.
    for (let i = 0; i < m; i++) {
        prev = prev.next;
    }
 
    // 'current' points to the first node that will be reversed.
    // This is the mth node in the list (considering 0-based indexing).
    let current = prev.next;
 
    // The loop for the actual reversal of the segment between m and n.
    // It runs (n - m) times, moving each node in turn to the position after 'prev'.
    for (let i = 0; i < n - m; i++) {
        // 'temp' temporarily stores the next node in line to be moved.
        const temp = current.next;
 
        // Bypass 'temp' in the current positioning.
        current.next = temp.next;
 
        // Insert 'temp' between 'prev' and 'prev.next'.
        // This step effectively moves 'temp' to the front of the reversal segment.
        temp.next = prev.next;
        prev.next = temp;
    }
 
    // Update the head of the list if the head was part of the reversal.
    // This is where the dummy node becomes useful, as it simplifies this operation.
    this.head = dummy.next;
}
