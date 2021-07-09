//follows the rule of Last in First Out (LiFo). 
class Stack {
    constructor(){
        this.last = null;
        this.length = 0;
        
    }
}
Stack.prototype.addNode = function (value){
let node = {
    value:value,
    next:null
}
if(!this.length){
    this.last = node;
}
else{
    node.next = this.last;
    this.last = node;
     
}
this.length++;
return this.last;
}
Stack.prototype.removeLastNode = function (){

    if(!this.length){
        return null;
    }
    else{
        const nodeToBeRemoved = this.last;
        this.last = nodeToBeRemoved.next;
        nodeToBeRemoved.next = null;
        this.length --;
    return nodeToBeRemoved;
    }
   
}

let stack = new Stack();
console.log(stack.addNode(20));
console.log(stack);
console.log(stack.addNode(30));
console.log(stack.addNode(10));
console.log(stack);
console.log(stack.removeLastNode());
console.log(stack);