class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }
 
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	
    //   +===================================================+
    //   |                  WRITE YOUR CODE HERE             |
    //   | Description:                                      |
    //   | - This method partitions a linked list around a   |
    //   |   value `x`.                                      |
    //   | - It rearranges the nodes in such a way that all  |
    //   |   nodes less than `x` come before all nodes       |
    //   |   greater than or equal to `x`.                   |
    //   |                                                   |
    //   | Tips:                                             |
    //   | - We use two dummy nodes, `dummy1` and `dummy2`,  |
    //   |   to build two separate lists: one for elements   |
    //   |   smaller than `x` and one for elements greater   |
    //   |   or equal to `x`.                                |
    //   | - We then merge these two lists.                  |
    //   | - `prev1` and `prev2` are pointers to the last    |
    //   |   nodes of these lists.                           |
    //   | - The head of the resulting list is set as        |
    //   |   `dummy1.next`.                                  |
    //   +===================================================+
    
    /*
    === After Solution explanations ======

    Here's a step-by-step explanation of the logic:



1. If the head of the linked list is null, return, as there is nothing to rearrange.

2. Create two dummy nodes, dummy1 and dummy2. 
   These dummy nodes will be used to build two separate linked lists: 
   one for nodes with values less than x and the other for nodes with values greater than or equal to x.

3. Initialize two pointers, prev1 and prev2, pointing to dummy1 and dummy2, respectively. 
   These pointers will be used to append nodes to the two separate linked lists.

4. Initialize a current pointer pointing to the head of the linked list.

5. Iterate through the linked list using a while loop that continues as long as current is not null: 
   a. If the current node's value is less than x, 
      - update prev1.next to point to the current node 
      - and move prev1 forward. 
   b. If the current node's value is greater than or equal to x, 
      - update prev2.next to point to the current node 
      - and move prev2 forward. 
   c. Move the current pointer to the next node.

6. After the loop, set prev2.next to null to terminate the second linked list.

7. Connect the two separate linked lists by setting prev1.next to dummy2.next.

8. Update the head of the linked list to point to the next node of dummy1.



The function has a time complexity of O(n), where n is the number of nodes in the list, as it traverses the list only once.
    
    
    */
    partitionList(x){
        if(this.head === null) return;
        
        const dummy1 = new Node(0);
        const dummy2 = new Node(0);
        
        let prev1 = dummy1;
        let prev2 = dummy2;
        
        let currentNode = this.head;
        
        while(currentNode !== null){
            if(currentNode.value < x){
                prev1.next = currentNode;
                prev1 = currentNode;
            } else {
                prev2.next = currentNode;
                prev2 = currentNode
                
            }
            currentNode = currentNode.next
        }
        console.log('dummy1', dummy1, prev1)
        console.log('dummy2', dummy2, prev2.next)
        prev2.next = null;
        prev1.next = dummy2.next;
        this.head = dummy1.next;
    }
}





//  +=====================================================+
//  |                                                     |
//  |          THE TEST CODE BELOW WILL PRINT             |
//  |              OUTPUT TO "USER LOGS"                  |
//  |                                                     |
//  |  Use the output to test and troubleshoot your code  |
//  |                                                     |
//  +=====================================================+


// Helper function to create list from array
function createListFromArray(arr) {
    const ll = new LinkedList(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        ll.push(arr[i]);
    }
    return ll;
}

// Helper function to compare list with array
function listMatchesArray(ll, arr) {
    let temp = ll.head;
    let i = 0;
    while (temp !== null && i < arr.length) {
        if (temp.value !== arr[i]) {
            return false;
        }
        temp = temp.next;
        i++;
    }
    return (temp === null && i === arr.length);
}

// Function to run a single test
function runTest(testNum, description, ll, x, expectedArr) {
    console.log("---------------------------------------");
    console.log(`Test ${testNum}: ${description}`);
    console.log("BEFORE: ");
    ll.printList();
    console.log("PARTITION: " + x);
    ll.partitionList(x);
    console.log("AFTER: ");
    ll.printList();
    console.log(listMatchesArray(ll, expectedArr) ? "PASS" : "FAIL");
}


// Test 1: Basic partition
let ll1 = createListFromArray([1, 4, 3, 2, 5, 2]);
runTest(1, "Basic partition", ll1, 3, [1, 2, 2, 4, 3, 5]);

// Test 2: No elements to partition
let ll2 = createListFromArray([4, 5, 6]);
runTest(2, "No elements to partition", ll2, 3, [4, 5, 6]);

// Test 3: All elements smaller
let ll3 = createListFromArray([1, 2, 2]);
runTest(3, "All elements smaller", ll3, 3, [1, 2, 2]);

// Test 4: Single-element list
let ll4 = createListFromArray([1]);
runTest(4, "Single-element list", ll4, 3, [1]);

// Test 5: All elements equal to partition
let ll5 = createListFromArray([3, 3, 3]);
runTest(5, "All elements equal to partition", ll5, 3, [3, 3, 3]);

console.log("---------------------------------------");


