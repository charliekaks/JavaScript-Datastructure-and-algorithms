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
    pop(){
        if(this.length === 0){
            return undefined;
        }
        let pre = this.head;
        let current = this.head.next
        while(current.next){
            current = current.next
            pre = pre.next   
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.tail = null;
            this.head = null;
        }
        return current;
    }
}
let list = new singlyLinkedList();
list.push("hey");
list.push("you");
list.push("there");
list.push("boy");
list.pop();
console.log(list);