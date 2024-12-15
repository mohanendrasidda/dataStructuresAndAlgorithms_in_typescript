//N-ary Tree

class TreeRootNode<T>{
    value: T;
    referenceToChild:TreeRootNode<T>[];

    constructor(value:T){
        this.value=value;
        this.referenceToChild=[];

    }

    addChild(child:TreeRootNode<T>){
        this.referenceToChild.push(child);
    }
}


const rootNode = new TreeRootNode<string>("rootNode");
const child1 = new TreeRootNode<string>("childNode1");
const child2 = new TreeRootNode<string>("childNode2");

rootNode.addChild(child1);
rootNode.addChild(child2);
console.log(rootNode)