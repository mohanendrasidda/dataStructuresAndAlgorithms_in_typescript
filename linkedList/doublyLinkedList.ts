class nodeDoublyLinkedList<T>{
    previousNodeReference:nodeDoublyLinkedList<T>
    value:T;
    nextNodeReference:nodeDoublyLinkedList<T>
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
            let previous:nodeDoublyLinkedList<T>|null
            while(current.nextNodeReference!=null){
                current=current.nextNodeReference
                
            }
            current.nextNodeReference=new nodeDoublyLinkedList<T>(value)
            previous=current
            current=current.nextNodeReference
            current.previousNodeReference=previous
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

    delete(value?:T){
        if(this.head!=null){
            let current=this.head
            if(value==current){
                current=current.nextNodeReference
                this.head=null
                return
            }
            while(current.nextNodeReference!=null){
                if(value==current.value){
                    let previousTempCurrent=current.previousNodeReference
                    current=current.nextNodeReference
                    current.previousNodeReference=previousTempCurrent
                    previousTempCurrent=current
                    current=current.previousNodeReference
                    current.nextNodeReference=previousTempCurrent
                    return
                }
                current=current.nextNodeReference
            }
            current=current.previousNodeReference
            current.nextNodeReference=null;

        }
    }

    reverse(){

    }
}

const doubleLinkedList=new doublyLinkedList<number>(15)
doubleLinkedList.insert(10)
doubleLinkedList.insert(9)
doubleLinkedList.insert(8)
doubleLinkedList.insert(7)
doubleLinkedList.insert(11)
doubleLinkedList.insert(19)
doubleLinkedList.insert(18)
doubleLinkedList.insert(17)
doubleLinkedList.delete()
doubleLinkedList.display()
doubleLinkedList.delete(7)
doubleLinkedList.display()
doubleLinkedList.delete(8)
doubleLinkedList.display()
