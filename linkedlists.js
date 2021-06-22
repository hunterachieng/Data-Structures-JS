class ListNode{
    constructor(data){
        this.node = data;
        this.next = null
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head
    }
}
//this method is used for adding a node to the created empty list

LinkedList.prototype.addNode = function(data){
    let newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode
    return this.head;
}
//this function is used for adding a node at the end of the list.

LinkedList.prototype.endNode = function(data, data2){
    let newNode = new ListNode(data);
    let node2 = new ListNode(data2);
    newNode.next = node2;
    if(this.head != null){
        this.head = newNode;
        return this.head;
    }
    let tail = this.head;
    while(tail.next !== null){
        tail = tail.next;
    }
    tail.next = node2;
    console.log(tail);
    return this.head;
}
//the get method acts as a helper to the list which will allow one to get a node at a given position

LinkedList.prototype.getAt = function(position){
    let counter = 0;
    let node = this.head;
    while(node){
        if(counter === position){
            return node;

        }
        counter++
        node = node.next;
    }
    return null
}

//insertAt() to insert a node at a certain index
LinkedList.prototype.insertAt= function(data,index){
 //if head is empty; head = null
 if(this.head!=null){
     this.head = new ListNode(data);
     return this.head;
 }
 //if new node is to be inserted before the head
 if(index === 0){
     this.head = new ListNode(data,this.head);
     return this.head;
 }
 //find previous node
 const previous = this.getAt(index-1);
 let node2 = new ListNode(data);
 node2.next = previous.next;
 previous.next = node2;
 return this.head;

}
let list = new LinkedList();
console.log(list.addNode(23));
console.log(list.endNode(33,20));
console.log(list.getAt(1));
console.log(list.insertAt(80,0))