//a list node always has a data and apointer
//implementing a list node in javascript
class ListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
//implementing a linked list in javascript
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
size_of_list(data){
    //creating a list node and adding a pointer
    const node1 = new ListNode(data);  
    if(!this.head){
        this.head = node1; 
    }
    else{
        this.head = node1;
        node1.next = this.head;
    }
        this.size++;
    
    console.log(this.size);    
    
};
removeHead(){
    if(this.head === null){
        return  //returns empty if the head is empty
    }
    else{
        this.head = this.head.next;
        this.size --;
    }
    console.log(this.size);
}
}

//creating linked list from Linkedlist class
const list = new LinkedList();
list.size_of_list(5);
list.removeHead();



