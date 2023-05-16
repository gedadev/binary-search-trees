import Node from './node.js';

export default class BinarySearchTree {
  constructor(arr) {
    this.root = this.buildBalancedTree(arr);
  }
}
