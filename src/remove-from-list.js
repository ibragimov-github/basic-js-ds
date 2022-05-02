const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const indexOf = function(array, element) {
    let current = array;
    let index = 0;
    while(current) {
      if (current.value === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  const removeAt(l, position) {
    let current = l;
    let position = indexOf(l, k)
    if (position === 0) {
      l = current.next;
    } else {
      let prev = null;
      let index = 0;

      while(index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
    }
    l.length --;
    return current.value;
  }
  }
  while(!indexOf(l, k)) {
    removeAt(l, indexOf(l, k))
}

module.exports = {
  removeKFromList
};

