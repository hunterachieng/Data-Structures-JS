/* Queues are a linear data structure that follows the FIFO rule of 'First In First Out'. 
Elements are added at the start/front of the queue and the next element will be the last/end of the
queue. 
New elements cannot be removed unless the ones preceeding it are removed
Adding elements = enqueue
Deleting elements = dequeue*/

class Queue {
    constructor(){
        this.length = 0;
        this.start = null;
        this.end = null;
    }
}

Queue.prototype.enqueue = function (value){
    let element = {
        value:value,
        next:null
    }
    if(!this.length){
        this.start = element;
        this.end = element;
    }
    else {
        this.end.next = element;
        this.end = element;
    }
    this.length ++;
    return element;


}
Queue.prototype.dequeue = function (){
    //removing the start element

    if(!this.length){
        return null;
    }
    else{
        //storing the current start element into a valiable
        let nodeToBeRemoved = this.start;

        //changing the position of the starting element to the next element
        this.start = this.start.next;

        //Disconnecting the pointer from the previous start element to the new start element
        nodeToBeRemoved.next = null

        // if queue wil be empty after removal, set the end the null
        if(this.length === 1){
            this.end = null;
        }
        this.length --;
        return nodeToBeRemoved;

        
    }
}

let queue = new Queue();
console.log(queue.enqueue(34));
console.log(queue);
console.log(queue.enqueue(40));
console.log(queue);
console.log(queue.dequeue());
console.log(queue);