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
    shift(){
        if(this.length === 0){
            return undefined;
        }
        let oldHead = this.head;
        this.head = this.head.next;
        oldHead.next = null;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return oldHead;
    }
    unshift(value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            let oldHead = this.head;
            this.head = node;
            node.next = oldHead;
        }
        this.length++;
        return this;
        
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if (index === 0) !!this.unshift(val)
        if (index === this.length) !!this.push(val)
        if (index < 0 || index > this.length) return false;

        let node = new Node(val);
        let prev = this.get(index-1);
        let current = prev.next;
        prev.next = node;
        node.next = current;
        this.length++;
        return true
    }
    remove(index){
        
    }
}
let list = new singlyLinkedList();
list.push("hey");
list.push("you");
list.push("there");
list.push("boy");
list.pop();
list.shift();
list.unshift("1000");
list.insert(2, "insert")
console.log(list);