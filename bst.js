import Node from './node.js';

export default class BinarySearchTree {
  constructor(arr) {
    this.root = this.buildBalancedTree(arr);
  }

  buildBalancedTree(arr) {
    if (arr.length === 0) {
      return null;
    }
    const sortedArr = arr.sort((a, b) => a - b);
    const midIndex = Math.floor(sortedArr.length / 2);
    const node = new Node(sortedArr[midIndex]);

    const leftArr = sortedArr.slice(0, midIndex);
    const rightArr = sortedArr.slice(midIndex + 1);

    node.leftChild = this.buildBalancedTree(leftArr);
    node.rightChild = this.buildBalancedTree(rightArr);

    return node;
  }
}
