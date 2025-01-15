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
        }

        let newHead = this.head.next;
        newHead.prev = null;
        removed.next = null;
        this.head = newHead;
        this.length--;
        return removed;
    }
}

let list = new DoublyLinkedList();
list.push("hey");
list.push("822");
list.push("about");
list.push("them");
list.pop();
console.log(list);
