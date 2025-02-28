/*
obj1  ===>>> {
              value: 11
            }

this means obj1 is point this object in the memory
*/

const obj1 = {
    value: 11
}
const obj2 = obj1
/*
This doesn't create a new object similar to the one that obj1 is POINTING.
But both the obj1 and obj2 are both POINTING the exact same object in memory
*/

// If we change something now
obj2.value = 77

/*
What happened here is the value property of obj1 will be now 77,
since obj1 and obj2 are both POINTING exact place in memory or same thing
*/

// === Garbage Collection ===
/*   
If there is an object that nothing is POINTING 
There will no way to access that object
therefore this is take some part of the memory and 
can't be used, Then JavaScript periodically cleans up this can of things
through the process of GARBAGE COLLECTION
*/


