/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
  // first run => key value ahol key a leve'l erteke, value pedig a node objektum lesz
  // masodik atfutasnal lehet ossze rakni az egeszet?
  // vagy eleg egyetlen atfutas?

  let prev = new Map();
  let vals = []; // all values
  let resNode = null;
  for (let desc of descriptions) {
    const [parentVal, childVal, valIsLeft] = desc;
    let parent = prev.get(parentVal);
    if (parent == null) {
      parent = new TreeNode(parentVal, null, null);
      prev.set(parentVal, parent);
      // vals.push(parentVal);
    }

    // child hely fontos, ne szerepeljen ott a szulo
    //
    let child = prev.get(childVal);
    if (child == null) {
      child = new TreeNode(childVal, null, null);
    }
    prev.set(childVal, child);
    vals.push(childVal);
    if (valIsLeft) {
      parent.left = child
    } else {
      parent.right = child;
    }
  }

  prev.forEach(node => {
    // nincs szuloje
    // mikor nincs szuloje, ha nem mutat ra semmi, se left se right-kent nem szerepel
    // ha a descriptorban a 2. helyen nincs az ertek
    let res = vals.indexOf(node.val);
    if (res == -1) resNode = node;
  })
  return resNode;
};

console.log(createBinaryTree([[20, 15, 1], [20, 17, 0], [50, 20, 1], [50, 80, 0], [80, 19, 1]]));
