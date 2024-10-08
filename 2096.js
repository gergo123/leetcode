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
  let childToParent = new Map();

  // a megadott cel erteket elerni legrovidebb uton, lepes szamot kell szamolni
  let distanceToTarget = (node, target, curr) => {
    if (node.val === target) return 1;

    // let lAmount = distanceToTarget(node.left, target, curr + 1);
    // let rAmount = distanceToTarget(node.right, target, curr + 1);

    // if (lAmount > lAmount) return rAmount + curr;
    // else return lAmount + curr;

    return curr++;
  }

  // brute force modellezni, a fel jobra balra irayokat? Mind rekurziv fut, a legrovidebb lepes szam fele megyunk
  // lepes szamot hogyan szomlunk bejaraskor? Hogyan tartjuk szamon?
  // true false, benne van-e az agban a keresett ertek

  // rekurziv callba kell egy +1 ertek
  // depth? azt kell vissza adni
  // meg mindig nincs meg a rekurzivrol hogy kell gondolkodni
  // mintha ott lenne az ertek a valtozoban

  // arra van-e a keresett, es hogy left vagy right depth a kissebb
  // rekurziv a hianyzo

  // keresunk valamit, addig megy a depth, mikor megvan visszakuldjuk

  return distanceToTarget(root, destValue, 0);
  // let queue = [];
  // queue.push(root);
  // let item = null;
  // while (item = queue.pop()) {
  //   item.left && queue.push(item.left);
  //   item.right && queue.push(item.right);
  // }
};

console.log(getDirections(
  new TreeNode(5, new TreeNode(1, new TreeNode(3, null, null)), new TreeNode(2, new TreeNode(6, null, null), new TreeNode(4, null, null))),
  3, 6
));


// base case
// recursive
// var recursiveResult = "cb"; //reverseString(str);
// return str[length - 1]
//length -1 => 0 elso esetben
// 1
// 2 + maradek
// valami alom mentes megoldas helyett egy bit alapu kellene, memoria es ra kotott tranzisztor

const reverseString = (s) => {
  var len = s.length;
  const wrap = (pad) => {
    var lIndex = pad;
    var rIndex = len - pad - 1;

    // base case
    if (lIndex >= rIndex) return;

    let cpy = s[lIndex];
    s[lIndex] = s[rIndex];
    s[rIndex] = cpy;

    // recursive
    wrap(pad + 1);
  }
  wrap(0);
}

// recursive call testing
console.log(reverseString("abc", 3));

// megirni csak ketto lepesre, majd ott betenni egy recursiv loop-t
// ja egy loop iteracio, goto gyakorlatilag
// mi a fuggveny, azt kell erteni =>
// a fuggveny pedig egy goto, szebb formaban, sub routin
// tr es memoria vilagban ez hogy is kotheto ide?
// ismetlodo memoria reszlethez ter vissza a tranzisztor
// ja fuggveny hivas, csak tobbszor, es vegtelen hivasnak tunik
// dehat a parameterek fuggvenye, csak folyamataban derul ki a hivas szam
// recursive problema => tobb fuggveny hivas, tobbszor ugyanaz a fuggveny, megint pszichologia fejlodes szabott hatart???
// kepes szetvalasztani a fantaziat a valosagtol
// csak tobbszor lefut ugyanaz a fgv, mas parameterekkel
// divide
// let inp = "Hello".split('');
// reverseString(inp);
// console.log(inp);


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var swapPairs = function (head) {
  if (head == null) return null;
  if (head.next == null) return head;

  let swappedPairs = swapPairs(head.next.next);
  var cpy = head.next;
  head.next = swappedPairs;
  cpy.next = head;

  return cpy;
};

console.log(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))));

// mi lett volna jo megint, rajzolni
