var TreeRootNode = /** @class */ (function () {
    function TreeRootNode(value) {
        this.value = value;
        this.referenceToChild = [];
    }
    TreeRootNode.prototype.addChild = function (child) {
        this.referenceToChild.push(child);
    };
    return TreeRootNode;
}());
var rootNode = new TreeRootNode("rootNode");
var child1 = new TreeRootNode("childNode1");
var child2 = new TreeRootNode("childNode2");
rootNode.addChild(child1);
rootNode.addChild(child2);
console.log(rootNode);
