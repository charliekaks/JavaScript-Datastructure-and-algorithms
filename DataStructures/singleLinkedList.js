class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let node = new Node(value);
        if(this.length === 0){
             this.head = node;
             this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;

    }
}
let list = new singlyLinkedList();
list.push("hey");
list.push("you");
list.push("there");
list.push("boy");
console.log(list);