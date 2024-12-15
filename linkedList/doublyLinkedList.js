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
            while (current.nextNodeReference != null) {
                current = current.nextNodeReference;
            }
            current.nextNodeReference = new nodeDoublyLinkedList(value);
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
    doublyLinkedList.prototype.delete = function () {
    };
    doublyLinkedList.prototype.reverse = function () {
    };
    return doublyLinkedList;
}());
var doubleLinkedList = new doublyLinkedList(15);
doubleLinkedList.insert(10);
doubleLinkedList.display();
