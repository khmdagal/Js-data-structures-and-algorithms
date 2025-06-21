
function partitionList(x) {
        // If the list is empty, there's nothing to partition
        if (!this.head) return;
    
        // Create two dummy nodes for two partitions
        const dummy1 = new Node(0); // for nodes < x
        const dummy2 = new Node(0); // for nodes >= x
    
        // Pointers to build each new list
        let prev1 = dummy1;
        let prev2 = dummy2;
    
        // Start from the head of the original list
        let current = this.head;
    
        // Traverse the original list
        while (current !== null) {
            // Save the next node before detaching
            const nextNode = current.next;
    
            // Disconnect current node from original list
            current.next = null;
            current.prev = null;
    
            // If value is less than x, add to first list
            if (current.value < x) {
                prev1.next = current;
                current.prev = prev1;
                prev1 = current;
            } 
            // Otherwise, add to second list
            else {
                prev2.next = current;
                current.prev = prev2;
                prev2 = current;
            }
    
            // Move to the next node
            current = nextNode;
        }
    
        // Terminate the second list
        prev2.next = null;
    
        // Combine both lists
        prev1.next = dummy2.next;
        if (dummy2.next) {
            dummy2.next.prev = prev1;
        }
    
        // Set the new head of the combined list
        this.head = dummy1.next;
    
        // Ensure the head has no prev pointer
        if (this.head) {
            this.head.prev = null;
        }
    }




// 🧠 Explanation of the Code

// We are reorganizing the list into two parts:

// One list of nodes < x

// Another list of nodes >= x

// We use two dummy nodes (dummy1 and dummy2) to easily construct two separate chains. Each node from the original list is disconnected from its original spot and attached to the correct chain.

// After traversal:

// The two chains are connected.

// this.head is reassigned to the new combined list.

// We also ensure all prev pointers are fixed correctly.

/* 
======================================================

************* Chatgpt extr explanation *************
=======================================================

Great questions — let's break down why dummy nodes are used and why we detach currentNode from the list during partitioning.

🧱 Why Do We Use Dummy Nodes?
Dummy nodes (or sentinel nodes) are placeholder nodes that help us simplify list manipulation, 
especially when creating new lists.

************* ✅ Without dummy nodes: *************
You’d have to check if the list is empty every time you add a node.

You’d need special logic to handle the first node being added — e.g., assigning the head.

************* ✅ With dummy nodes: *************
You always have a starting point (dummyNode1 and dummyNode2) for the two partitions (< x and >= x).

You can safely and consistently build the lists without needing special edge case checks.

At the end, you simply return dummyNode1.next as the new head — clean and efficient.

Think of dummy nodes as training wheels — you don't ride on them, but they help you build the structure easily.

************* 🔗 Why Do We Detach currentNode from the List? *************
Each node is detached by setting:


currentNode.next = null;
currentNode.prev = null;


************* 🛠️ Purpose: *************
Avoid Accidental Cycles or Corruption:
If you don't remove next/prev, you might accidentally keep references to old parts of the list.
This could lead to cyclic references, corrupted list structure, or memory leaks (in languages without garbage collection).
Safe Insertion into New Lists:
You’re reusing the nodes in a brand-new structure, so you don’t want leftover links pointing to the old list.
Detaching ensures a clean slate before linking the node into either < x or >= x list.


************* Preserve Integrity: *************

It ensures that each node is connected to only one place — either the new left or right partition — not both.

************* 🧠 Summary *************
Concept	Why It’s Needed
Dummy Nodes	To simplify list building, avoid special cases for head/tail, and create cleaner logic.
Detaching Nodes	To prevent data corruption, cleanly reassign links, and safely reuse nodes in a new structure.
Would you like a diagram or animation-style explanation of how this partitioning works visually?




************* 📌 What Are prev1 and prev2? *************

They are tail pointers that keep track of the last node in each of the two new partitions:
prev1 is the tail of the < x list.
prev2 is the tail of the >= x list.
They start as references to the dummy nodes, and then move forward as new nodes are added to their respective lists.

************* ❓ Why Do We Need Them? *************
Let’s walk through the logic:

************* 🔁 While iterating: *************
Every time you find a node:


if (currentNode.value < x) {
    prev1.next = currentNode;  // Link it at the end of <x list
    currentNode.prev = prev1;  // Set the prev link
    prev1 = currentNode;       // Move tail pointer forward
}

************* If you didn’t have prev1: *************
You’d have to traverse the list from the dummy node every time just to find the tail.
That would make the operation O(n²) instead of O(n).

************* ➕ Why this is efficient: *************
prev1 and prev2 let you build each list incrementally, always appending to the end in O(1) time.

************* 🔄 Analogy *************
Think of prev1/prev2 as bookmark holders:
You’re building two chains of nodes.
Each time you add a node, you need to know where to attach it — the bookmark tells you where the last node is.

************* 🧠 Summary *************
Pointer	Role	Why It's Needed
prev1	Tail of < x list	To efficiently append new nodes to the end of this partition
prev2	Tail of >= x list	Same, but for the other partition
Without them	❌ You'd need to traverse the list each time to find the end → inefficient	

Let me know if you'd like a step-by-step dry run with example values to see these pointers in action!

======================================================
======================================================
*/