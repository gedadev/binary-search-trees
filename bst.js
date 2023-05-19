/* eslint-disable no-param-reassign */
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

  insertNode(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (value < current.value) {
        if (!current.leftChild) {
          current.leftChild = node;
          break;
        }
        current = current.leftChild;
      } else if (value > current.value) {
        if (!current.rightChild) {
          current.rightChild = node;
          break;
        }
        current = current.rightChild;
      }
    }
  }

  deleteNode(value, node = this.root) {
    if (!node) {
      return null;
    }
    if (value < node.value) {
      node.leftChild = this.deleteNode(value, node.leftChild);
    } else if (value > node.value) {
      node.rightChild = this.deleteNode(value, node.rightChild);
    } else if (value === node.value) {
      BinarySearchTree.removeNode(node);
    } else {
      return null;
    }
    return node;
  }

  static removeNode(node) {
    if (!node.leftChild && !node.rightChild) {
      node = null;
    } else if (!node.leftChild) {
      node = node.rightChild;
    } else if (!node.rightChild) {
      node = node.leftChild;
    } else {
      let smallestNode = node.rightChild;
      while (smallestNode.leftChild !== null) {
        smallestNode = smallestNode.leftChild;
      }
      node.value = smallestNode.value;
      smallestNode = smallestNode.rightChild;
    }
  }

  findNode(value, current = this.root) {
    if (!current) {
      return null;
    }
    let node = null;
    if (value < current.value) {
      node = this.findNode(value, current.leftChild);
    }
    if (value > current.value) {
      node = this.findNode(value, current.rightChild);
    }
    if (value === current.value) {
      node = current;
    }
    return node;
  }

  levelOrder(fn) {
    if (!this.root) {
      return;
    }
    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      fn(current);

      if (current.leftChild) {
        queue.push(current.leftChild);
      }
      if (current.rightChild) {
        queue.push(current.rightChild);
      }
    }
  }

  getHeight(node) {
    if (!node) {
      return -1;
    }

    const leftHeight = this.getHeight(node.leftChild);
    const rightHeight = this.getHeight(node.rightChild);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  isBalanced(current = this.root) {
    if (!current) {
      return true;
    }

    const leftHeight = this.getHeight(current.leftChild);
    const rightHeight = this.getHeight(current.rightChild);

    if ((Math.abs(leftHeight - rightHeight)) > 1) {
      return false;
    }

    return this.isBalanced(current.leftChild) && this.isBalanced(current.rightChild);
  }

  inOrderTraversal(current, fn) {
    if (!current) {
      return;
    }

    this.inOrderTraversal(current.leftChild, fn);
    fn(current);
    this.inOrderTraversal(current.rightChild, fn);
  }
}
