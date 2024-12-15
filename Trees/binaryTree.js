var binaryTreeNode = /** @class */ (function () {
    function binaryTreeNode(value) {
        this.value = value;
    }
    return binaryTreeNode;
}());
var rootNodeBinary = new binaryTreeNode(10);
var child1Binary = new binaryTreeNode(5);
var child2Binary = new binaryTreeNode(6);
rootNodeBinary.referenceToLeftChild = child1Binary;
rootNodeBinary.referenceToRightChild = child2Binary;
rootNodeBinary.value = 4;
rootNodeBinary.value = 2;
console.log(rootNodeBinary);
