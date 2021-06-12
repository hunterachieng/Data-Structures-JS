class ListNode{
    constructor(data){
        this.node = data;
        this.next = null
    }
 }
 class LinkedList{
     constructor(head = null){
         this.head = head;
     }
     size(){
         let nodeCount = 0;
         let node = this.head;
         while(node){
             nodeCount ++
             node = node.next;
         }
         return nodeCount;
     }
    clear(){
         this.head = null;
         return this.head;
              }
    getLast(){
        let lastNode = this.head;
        if(lastNode){
            while(lastNode.next){
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }
    getFirst(){
        return this.head;
    }
    getNewHead(data){
      let newHead = new ListNode(data);
        newHead.next = this.head;
        this.head = newHead;
        return newHead;
    }
 }

 