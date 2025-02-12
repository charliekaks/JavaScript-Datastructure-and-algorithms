class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = Node(value);
        if(this.root===null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(current.value === value) return undefined;
            if(current.value > value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else{
                if(current.value < value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
}
module.exports = BinarySearchTree;