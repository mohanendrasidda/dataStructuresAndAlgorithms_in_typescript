var nodeLinkedList = /** @class */ (function () {
    function nodeLinkedList(value) {
        this.referenceToNextNode = null;
        this.value = value;
    }
    return nodeLinkedList;
}());
var linkedList = /** @class */ (function () {
    function linkedList(value) {
        this.head = null;
        this.head = new nodeLinkedList(value);
    }
    linkedList.prototype.insert = function (value) {
        if (this.head != null) {
            var current = this.head;
            while (current.referenceToNextNode != null) {
                current = current.referenceToNextNode;
            }
            current.referenceToNextNode = new nodeLinkedList(value);
        }
    };
    linkedList.prototype.display = function () {
        if (this.head != null) {
            var linkedList_1 = [this.head.value];
            var current = this.head;
            while (current.referenceToNextNode != null) {
                current = current.referenceToNextNode;
                linkedList_1.push(current.value);
            }
            console.log(linkedList_1);
        }
    };
    linkedList.prototype.length = function () {
        if (this.head != null) {
            var current = this.head;
            var length_1 = 1;
            while (current.referenceToNextNode != null) {
                length_1++;
                current = current.referenceToNextNode;
            }
            console.log(length_1);
        }
    };
    linkedList.prototype.search = function (value) {
        if (this.head != null) {
            var current = this.head;
            while (current.referenceToNextNode != null) {
                if (value == current.value)
                    return console.log(true);
                else {
                    current = current.referenceToNextNode;
                }
            }
            return console.log(false);
        }
    };
    linkedList.prototype.delete = function (value) {
        if (this.head != null) {
            var current = this.head;
            var previous = current;
            while (current.referenceToNextNode != null) {
                if (this.head != null && value == this.head.value) {
                    this.head = this.head.referenceToNextNode;
                    return;
                }
                else if (value == current.value) {
                    current = current.referenceToNextNode;
                    previous.referenceToNextNode = current;
                    return;
                }
                else {
                    previous = current;
                    current = current.referenceToNextNode;
                }
            }
            if (!value) {
                previous.referenceToNextNode = null;
            }
        }
        return;
    };
    return linkedList;
}());
var linkList = new linkedList(15);
linkList.insert(10);
linkList.insert(5);
linkList.insert(3);
linkList.insert(1);
linkList.insert(2);
linkList.display();
linkList.length();
linkList.delete(15);
linkList.display();
linkList.length();
linkList.search(20);
