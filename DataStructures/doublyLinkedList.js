class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Adding a node to the end of a list
    push(val){
        let node = new Node(val);
        if (this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    //Removing a node at the end of the list
    pop(){
        if (this.head === null){
            return undefined;
        }
        let removed = this.tail;
        if (this.length === 1 ){ 
            this.head = null;
            this.tail = null;
        }

        this.tail = removed.prev;
        this.tail.next = null;
        removed.prev = null;
        this.length--;
        return removed;
    }
    //Adding a node to the begining of a list
    unshift(val){
        let node = new Node(val);
        if(this.head === null){
            this.head = node;
            this.tail = node;
        } else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }
    //Removing a node at the begining of the list
    shift(){
        if(this.head === null){
            return undefined;
        }
        let removed = this.head;
        if (this.length === 1 ){ 
            this.head = null;
            this.tail = null;
        } else{
            let newHead = this.head.next;
            newHead.prev = null;
            removed.next = null;
            this.head = newHead;
        }
        this.length--;
        return removed;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var removedNode = this.get(index);
        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

let list = new DoublyLinkedList();
list.push("hey");
list.push("822");
list.push("about");
list.push("them");
list.pop();
list.shift();
list.unshift("6")
console.log(list);
