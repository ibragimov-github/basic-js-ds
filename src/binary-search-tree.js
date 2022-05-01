const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    return this.node||null;
  }
  add(data){
    let newNode = new Node(data);
    if(!this.node) {
      this.node = newNode;
    } else {
      let currentNode = this.node;
      while(currentNode) {
        if (newNode.data < currentNode.data) {
          if (!currentNode.left) {currentNode.left = newNode; break;}
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {currentNode.right = newNode; break;}
          currentNode = currentNode.right;
        }
      }
    }
  }
 
  has(data) {
    let currentNode = this.node;
    if(!currentNode) {return false;}
    while(currentNode) {
      if (data > currentNode.data) {
        currentNode = currentNode.right;
      }
      else if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
      else {
        return true;
      }
    }
    return false;
  }
  find(data) {
    let currentNode = this.node;
    if(!currentNode) {return null;}
    while(currentNode) {
      if (data > currentNode.data) {
        currentNode = currentNode.right;
      }
      else if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
      else {
        return currentNode;
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(!this.node) {return null;}
    let currentNode = this.node;
      while(currentNode) {
        if (!currentNode.left) {
          return currentNode.data;
        }
        currentNode = currentNode.left;
      }
  }

  max() {
    if(!this.node) {return null;}
    let currentNode = this.node;
      while(currentNode) {
        if (!currentNode.right) {
          return currentNode.data;
        }
        currentNode = currentNode.right;
      }
  }
}

module.exports = {
  BinarySearchTree
};

const BST = new BinarySearchTree();
BST.add(11);
BST.add(2);
BST.add(7);
BST.add(15);
console.log(BST.has(20));