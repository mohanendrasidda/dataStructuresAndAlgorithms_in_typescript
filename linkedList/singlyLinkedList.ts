class nodeLinkedList<T> {
    value: T;
    referenceToNextNode: nodeLinkedList<T> | null = null
    constructor(value: T) {
        this.value = value
    }
}

class linkedList<T> {
    head: nodeLinkedList<T> | null;

    constructor(value: T) {
        this.head = null;
        this.head = new nodeLinkedList<T>(value)

    }

    insert(value: T) {
        if (this.head != null) {
            let current: nodeLinkedList<T> = this.head;
            while (current.referenceToNextNode != null) {

                current = current.referenceToNextNode;
            }

            current.referenceToNextNode = new nodeLinkedList<T>(value)
        }

    }

    display() {
        if (this.head != null) {
            const linkedList: T[] = [this.head.value];
            let current: nodeLinkedList<T> = this.head
            while (current.referenceToNextNode != null) {
                current = current.referenceToNextNode
                linkedList.push(current.value)
            }
            console.log(linkedList)
        }
    }

    length() {

        if (this.head != null) {
            let current = this.head;
            let length=1
            while (current.referenceToNextNode != null) {
                length++
                current=current.referenceToNextNode;
            }
            console.log(length)
        }
        
    }
    search(value:T){
        if(this.head!=null){
            let current=this.head
            while(current.referenceToNextNode!=null){
                if(value==current.value)
                    return console.log(true)
                else{
                    current=current.referenceToNextNode;
                }
            }
            return console.log(false)
            
        }
    }


    delete(value?: T) {
        if (this.head != null) {
            let current: nodeLinkedList<T> = this.head
            let previous: nodeLinkedList<T> = current
            while (current.referenceToNextNode != null) {
                if (this.head != null && value == this.head.value) {
                    this.head = this.head.referenceToNextNode
                    return
                }
                else if (value == current.value) {
                    current = current.referenceToNextNode
                    previous.referenceToNextNode = current
                    return
                }
                else {
                    previous = current
                    current = current.referenceToNextNode

                }

            }
            if (!value) {
                previous.referenceToNextNode = null;
            }

        }
        return
    }

}

const linkList = new linkedList<number>(15);
linkList.insert(10)
linkList.insert(5)
linkList.insert(3)
linkList.insert(1)
linkList.insert(2)
linkList.display()
linkList.length()
linkList.delete(15)
linkList.display()
linkList.length()
linkList.search(20)