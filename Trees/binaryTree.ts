class binaryTreeNode<T>{
value: T;
referenceToLeftChild: binaryTreeNode<T> | null;
referenceToRightChild: binaryTreeNode<T> | null;

constructor(value:T){
    this.value=value;
}
}

const rootNodeBinary= new binaryTreeNode<number>(10)
const child1Binary= new binaryTreeNode<number>(5)
const child2Binary= new binaryTreeNode<number>(6)

rootNodeBinary.referenceToLeftChild= child1Binary
rootNodeBinary.referenceToRightChild=child2Binary

rootNodeBinary.value=4
rootNodeBinary.value=2

console.log(rootNodeBinary)