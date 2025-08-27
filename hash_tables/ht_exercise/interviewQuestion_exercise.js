/*
Return true of false 
if the provided two arrays has any iteam in common
 */


// ==== 
function hasCommentElement1(arr1, arr2) {
    let result;
    for (let i = 0; i < arr1.length; i++) {
        let valueInArr1 = arr1[i]
        console.log(valueInArr1)
        for (let j = 0; j < arr2.length; j++) {
            let valueInArr2 = arr2[j]
            console.log('inner', valueInArr2)
            if (valueInArr1 === valueInArr2) {
                result = true
            } else[
                result = false
            ]

        }
    }
    return result
};


//console.log(hasCommentElement([1, 2, 3], [4, 5, 3]))

// this is O(n2) which is inefficient operation


// ===== More efficient way O(n) 
// which we loop each array once

function hasCommentElement2(arr1, arr2) {

    // ======== Solution 1 =============
    let obj = {}
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true
    }
    for (let j = 0; j < arr2.length; j++) {
        if (obj[arr2[j]]) return true
    }
    return false


    // ========== Solution 2 ========
    // const myObj = new Map()

    // for (let i = 0; i < arr1.length; i++) {
    //     let valueInArr1 = arr1[i]
    //     myObj.set(valueInArr1, true)

    // }

    // for (let j = 0; j < arr2.length; j++) {
    //     let valueInArr2 = arr2[j]
    //     if (myObj.has(valueInArr2)) {
    //         return true
    //     }

    // }
    // return false


};

console.log(hasCommentElement2([1, 2, 3], [4, 5, 3]))


/// ===*********. Find out why the last solution is working? *******