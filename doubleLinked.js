class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail =null;
        this.length = 0;
    }
}
DoubleLinkedList.prototype.AddNode = function (value){
var node ={
    value:value,
    next:null,
    prev: null
}
//if the length does not exist
if(!this.length){
   this.head = node;
   this.tail = node
}else{
    //if the length is more than 1. the tail points to the new node
    this.tail.next = node;
    node.prev= this.tail; 
    //the tail shifts from its previous position to become the new node
    this.tail = node;
}
this.length +=1
return node;
}

//removing the last node 
DoubleLinkedList.prototype.removeLastNode = function (){
    //if the length is still null, return null
    if(!this.length){
        return null
    }
    else{
        //saving the current tail with the node if the length is 1 or more
        const nodeToBeRemoved = this.tail;
    
     if(this.length === 1){
         //only one node exists
         this.head = null;
         this.tail = null;
     }
     else{
         //setting the node before the current tail as the new tail
         this.tail = this.tail.prev;
         // disconnect the new tail from the old tail
         this.tail.next = null;
         //disconnect the former tail from the current tail
         nodeToBeRemoved.prev = null;
     }
     //reducing the length by 1
     this.length --;
     return nodeToBeRemoved;
}
}
DoubleLinkedList.prototype.addNodeHead = function (value){
    let node = {
        value: value,
        prev : null,
        next : null
    }

    if(!this.length){
        this.head = node;
        this.tail = node;
    }
    else{
        // pointing the new node to the current head
        node.next =this.head;
        //seeting the current head prev's pointer to the new node
        this.head.prev = node;
        //changing the current head's position to the new node
        this.head = node;
    }
    this.length ++;
    return node;
}

DoubleLinkedList.prototype.removeHeadNode = function(){
    if(!this.length){
        return null;
    }
    else{
        const nodeToBeRemoved = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            //changing the current the head's position to the next node
            this.head = this.head.next;
            //disconnecting the new head's connection to the previous node;
            this.head.prev = null;
            //disconnecting the prev head from the current head
            nodeToBeRemoved.next = null;
        }
        this.length --;
        return nodeToBeRemoved;
    }
}
DoubleLinkedList.prototype.getAt = function (index){
    if(!this.length|| index <0 || index >= this.length){
        return null;
    }
    else{
        let node;
        if(index < this.length / 2){
            let counter = 0;
            //starting the count from the head
            node = this.head;
            while(counter < index){
                //move tot he next node untill the counter matches the index chosen
                node = node.next;
                counter ++;
            }
        }else{
            //adding a counter that starts from the top of the list/tail if the index is more that length half
            
            let counter = this.length - 1

            //starting from the tail
            node = this.tail;

            // go to the previous node until the index is matched with the counter
            while(counter< index){
                node = node.prev;
                counter --;
            }

        }
        return node;
    }
}

var doubleLinkedList = new DoubleLinkedList();
console.log(doubleLinkedList.AddNode(3));
console.log(doubleLinkedList.head);
console.log(doubleLinkedList.tail.next);
console.log(doubleLinkedList.AddNode(78));
console.log(doubleLinkedList);
console.log(doubleLinkedList.AddNode(308));
console.log(doubleLinkedList.AddNode(34));
console.log(doubleLinkedList.AddNode(8));
console.log(doubleLinkedList.AddNode(68));
console.log(doubleLinkedList);
console.log(doubleLinkedList.removeLastNode());
console.log(doubleLinkedList);
console.log(doubleLinkedList.addNodeHead(20));
console.log(doubleLinkedList);
console.log(doubleLinkedList.removeHeadNode());
console.log(doubleLinkedList);
console.log(doubleLinkedList.getAt(2));
console.log(doubleLinkedList);