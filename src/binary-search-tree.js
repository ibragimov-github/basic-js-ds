const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = this.node||null;
  }
  root() {
    return this.rootTree;
  }

  add(data) {
    let node = new Node(data)
    if(!this.rootTree) {
      this.rootTree = node;
    } else {
      this.addNode(this.rootTree, node);
    }
  }
  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
          node.left = newNode;
      } else {
          this.addNode(node.left, newNode);
      }
  } else {
      if (node.right === null) {
          node.right = newNode;
      } else {
          this.addNode(node.right, newNode);
      }
  }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data, node = this.rootTree) {
    if (!node) {return null;}
    else if (data < node.data) {return this.find(data, node.left);}
    else if (data > node.data) {return this.find(data, node.right);}
    else {return node;}
  }
  minNode(node) {
    if (node.left === null)
        return node;
    else
        return this.minNode(node.left);
}
  remove(data) {
  this.rootTree = this.removeNode(this.rootTree, data);
  }
  removeNode(node, data) {
    if (!node) {return null;}
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }
    else {
      if (node.left === null && node.right === null) {node = null; return node;}
      if (node.left === null) {node = node.right; return node;}
      else if (node.right === null) {node = node.left; return node;}
    }
    let newNode = this.minNode(node.right);
    node.data = newNode.data;
    node.right = this.removeNode(node.right, newNode.data);
    return node;
  }
  min(currentNode = this.rootTree) {
    if(!currentNode) {return null;}
    if (currentNode.left) {
      return this.min(currentNode.left)
    }
    else {
      return currentNode.data;
    }
  }

  max(currentNode = this.rootTree) {
    if(!currentNode) {return null;}
    if (currentNode.right) {
      return this.max(currentNode.right)
    }
    else {
      return currentNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
tree.remove(6);
tree.remove(2);
console.log(tree.min())