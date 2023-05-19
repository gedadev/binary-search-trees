import BinarySearchTree from './bst.js';

function generateRandomArray(n) {
  const arr = [];
  for (let index = 0; index < n; index++) {
    arr.push(Math.floor(Math.random() * 1000));
  }
  return arr;
}

const bst = new BinarySearchTree(generateRandomArray(10));
console.log(bst.isBalanced());
// const node3 = bst.root.rightChild.leftChild.rightChild;
// bst.insertNode(11);
// bst.insertNode(12);
// bst.insertNode(13);
// function printNodes(node) {
//   console.log(node.value);
// }

// bst.levelOrder(printNodes);

// console.log(bst.getHeight(bst.root));

// console.log(bst.getHeight(bst.root.leftChild));
// console.log(bst.getHeight(bst.root.rightChild));
// console.log(bst.root);
// console.log(bst.isBalanced());
// bst.inOrderTraversal(bst.root, printNodes);
// console.log(bst.reBalance());
// console.log(bst.isBalanced());
