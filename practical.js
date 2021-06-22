//How do you do create a linked list in Javascript
class LinkedList{
    constructor(head = null){
        this.head = head
    }
}
  
LinkedList.prototype.createNode = function (data){
    var node ={
        value:data,
        next:null
    }
    if(!this.head){
        // node.next = this.head;
        this.head = node;
    }
    else{
        var currentNode = this.head;
    while(currentNode.next){
        currentNode = currentNode.next;
    
    }
    currentNode.next = node;

    }
    
}

LinkedList.prototype.getNode = function(index){
    let counter = 0;
    var node = this.head;
    while(node){
        if(counter === index){
            return node;
        }
        counter ++
        node = node.next;
    }
    return null
}
LinkedList.prototype.insert = function(data, index){
    let newNode = {
        value:data,
        next:null
    }
    if(!this.head){
        this.head = newNode;
    }
    //inserted at the front of the list
    if(index === 0){
        newNode.next = this.head;
       this.head = newNode;
    }
    //getat is used to identify the previous position
    else{
        const previousNode = this.getNode(index -1);
        newNode.next = previousNode.next;
        previousNode.next = newNode;      
    }
    return this.head;

}

//deleting nodes 
LinkedList.prototype.deleteNode1 = function (){
    if(!this.head){
        return;
    }
    this.head = this.head.next;
    return this.head;
}
LinkedList.prototype.deleteLastNode = function(){
    if(!this.head){
        return null;
    }

    //if only one node in the list
    if(!this.head.next){
        this.head = null;
        return;
    }
    //if more nodes are present
     var previous = this.head;
     var tail = this.head.next;

     while(tail.next != null){
         //loops through the list as long as tail.next != null
         previous = tail;
         tail = tail.next;
     }
     //when tail.next =null previous node's pointer changes to null
     previous.next = null;
     return previous;

}

//deleting random nodes

LinkedList.prototype.deleteRandom = function(data,index){
// if the head is null
let newNode = {
    value:data,
    next: null
}
if(!this.head){
    this.head = newNode;
}

//deleting the first node
if(index === 0){
    this.head = this.head.next;
    return this.head;
}
//use getNode to find desired index

let previousNode = this.getNode(index - 1);
if(!previousNode || !previousNode.next){
    return;
}else { 
//pointer jumps the deleted node to the next one
previousNode.next = previousNode.next.next;
return this.head;
};


}

let list = new LinkedList();
list.createNode(3);
list.createNode(4);
list.createNode(6);
list.createNode(12);
list.createNode(23);
list.createNode(35);
list.createNode(31);
console.log(list);
console.log(list.getNode(4));
console.log(list.insert(110,2));
console.log(list.insert(110,0));
console.log(list.deleteNode1());
console.log(list.deleteLastNode());
console.log(list.deleteRandom(200, 3));
console.log(list.head.next);




