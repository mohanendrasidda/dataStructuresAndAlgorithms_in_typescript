var nodeDoublyLinkedList = /** @class */ (function () {
    function nodeDoublyLinkedList(value) {
        this.value = value;
    }
    return nodeDoublyLinkedList;
}());
var doublyLinkedList = /** @class */ (function () {
    function doublyLinkedList(value) {
        this.head = null;
        this.head = new nodeDoublyLinkedList(value);
    }
    doublyLinkedList.prototype.insert = function (value) {
        if (this.head != null) {
            var current = this.head;
            var previous = void 0;
            while (current.nextNodeReference != null) {
                current = current.nextNodeReference;
            }
            current.nextNodeReference = new nodeDoublyLinkedList(value);
            previous = current;
            current = current.nextNodeReference;
            current.previousNodeReference = previous;
        }
    };
    doublyLinkedList.prototype.display = function () {
        if (this.head != null) {
            var current = this.head;
            var doublyLinkedList_1 = [this.head.value];
            while (current.nextNodeReference != null) {
                current = current.nextNodeReference;
                doublyLinkedList_1.push(current.value);
            }
            console.log(doublyLinkedList_1);
        }
    };
    doublyLinkedList.prototype.delete = function (value) {
        if (this.head != null) {
            var current = this.head;
            if (value == current) {
                this.head = null;
                return;
            }
            while (current.nextNodeReference != null) {
                if (value == current.value) {
                    var previousTempCurrent = current.previousNodeReference;
                    current = current.nextNodeReference;
                    current.previousNodeReference = previousTempCurrent;
                    previousTempCurrent = current;
                    current = current.previousNodeReference;
                    current.nextNodeReference = previousTempCurrent;
                    return;
                }
                current = current.nextNodeReference;
            }
            current = current.previousNodeReference;
            current.nextNodeReference = null;
        }
    };
    doublyLinkedList.prototype.reverse = function () {
    };
    return doublyLinkedList;
}());
var doubleLinkedList = new doublyLinkedList(15);
doubleLinkedList.insert(10);
doubleLinkedList.insert(9);
doubleLinkedList.insert(8);
doubleLinkedList.insert(7);
doubleLinkedList.insert(11);
doubleLinkedList.insert(19);
doubleLinkedList.insert(18);
doubleLinkedList.insert(17);
doubleLinkedList.delete();
doubleLinkedList.display();
doubleLinkedList.delete(7);
doubleLinkedList.display();
doubleLinkedList.delete(8);
doubleLinkedList.display();
