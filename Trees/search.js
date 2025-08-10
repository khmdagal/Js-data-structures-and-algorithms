class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }


        let temp = this.root
        while (true) {
            if (newNode.value === temp.value) return undefined

            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    search(value) {
        if (this.root === null) return false

        let temp = this.root
        while (temp) {
            if (value < temp.value) {
                temp = temp.left
            } else if (value > temp.value) {
                temp = temp.right
            } else {
                return true
            }
        }
        return false
    }
}

const myTree = new BST();
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)

console.log(`Test : Expected : ${true} | Result : ${myTree.search(82)} ${myTree.search(82) === true  ? "✅ BST working" : "❌ BST working"}`)
console.log(`Test : Expected : ${false}| Result : ${myTree.search(81)} ${myTree.search(81) === false ? "✅ BST working" : "❌ BST working"}`)
console.log(`Test : Expected : ${true} | Result : ${myTree.search(27)} ${myTree.search(27) === true  ? "✅ BST working" : "❌ BST working"}`)
console.log(`Test : Expected : ${false}| Result : ${myTree.search(1)}  ${myTree.search(1)  === false ? "✅ BST working" : "❌ BST working"}`)

