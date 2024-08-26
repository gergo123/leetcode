//  * // Definition for a _Node.
function _Node(val, children) {
  this.val = val;
  this.children = children;
};
//  */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {

  // memoria rekesz bejaras, tranzisztor, osszehasonlitas, ketto ertek
  // itt csak szamolas van, szal csak bejaras, memoria rekesz olvasas
  // depth vs breath
  // breath while with queue
  // var queue = [];
  // var results = [];

  // let item = root;
  // while (item != null) {
  //   // add children to queue
  //   queue.push(...item.children);
  //   results.push(item.val);

  //   item = queue.pop();
  // }

  // return results.reverse();

  // 'trivial' recursive version

  var recursiveValues = [];
  root?.children.forEach(child => {
    // recursion
    child && recursiveValues.push(...postorder(child));
  });

  // 'base case'
  return [...recursiveValues, root.val];
};

console.log(postorder(new _Node(1, [
  new _Node(3, [
    new _Node(5, []), new _Node(6, []),
  ]), new _Node(2, []), new _Node(4, [])
])));
