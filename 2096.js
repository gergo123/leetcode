function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// a szamunkra erdekes agak fele kene menjunk, aztan valami inverz iranyokra ha kell
// ne a 3astol kelljen felfele haladni, majd lefel
// Miert? Mert szulo infonk nincs
// Egyik opcio hogy keszul egy graf szulo opcioval, vagy egy mappeles hogy melyik gyereknek ki a szuloje
// Habar belefer O(N)-be. Egy iteracio, nincs szukseg beagyazni egy masikat
// DFS-nek van ertelme? mindet vegig kell nezni? minden opciot?
// bfs es queue, vagy rekurziv?
// anno ez a D&C divide and conqourer

/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
  var queue = [];
  queue.push(root);

  let item = null;
  while (item = queue.pop()) {

    item.left && queue.push(item.left);
    item.right && queue.push(item.right);
  }
};

console.log(getDirections(
  new TreeNode(5, new TreeNode(1, new TreeNode(3, null, null)), new TreeNode(2, new TreeNode(6, null, null), new TreeNode(4, null, null))),
  3, 6
));
