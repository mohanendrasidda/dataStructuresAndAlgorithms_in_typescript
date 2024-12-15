class nodeDoublyLinkedList<T>{
    previousNodeReference:nodeDoublyLinkedList<T>|null
    value:T;
    nextNodeReference:nodeDoublyLinkedList<T>|null
    constructor(value){
        this.value=value
    }
}

class doublyLinkedList<T>{
    head:nodeDoublyLinkedList<T>|null;

    constructor(value:T){
        this.head=null;
        this.head=new nodeDoublyLinkedList<T>(value)
    }

    insert(value:T){
        if(this.head!=null){
            let current=this.head
            while(current.nextNodeReference!=null){
                current=current.nextNodeReference
            }
            current.nextNodeReference=new nodeDoublyLinkedList<T>(value)
        }
    }
    display(){
        if(this.head!=null){
            let current=this.head
            let doublyLinkedList:T[]=[this.head.value];
            while(current.nextNodeReference!=null){
                current=current.nextNodeReference;
                doublyLinkedList.push(current.value)
            }
            console.log(doublyLinkedList)
        }
    }

    delete(){
        
    }

    reverse(){

    }
}

const doubleLinkedList=new doublyLinkedList<number>(15)
doubleLinkedList.insert(10)
doubleLinkedList.display()