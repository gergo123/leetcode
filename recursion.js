
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

// console.log(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))));

// mi lett volna jo megint, rajzolni

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
  // ez a head objektum ter vissza, ezt kapjuk meg rekurziv hivaskor egy ponton
  if (head.next == null) return head;

  let prev = head;
  let middle = head.next
  let next = head.next.next;

  // a kovetkezonek erre kene mutatnia
  middle.next = prev;
  // next = middle;

  if (next != null) {
    var reversedList = reverseList(next);
    reversedList.next = middle;
    return reverseList;
  } else {
    prev.next = null;
    return middle;
  }

};

// emlekszem hogy harom node is kell egyszerre, mert nincs szulo csak next
// two pointer helyett harom pointer kb
// de a rajz miatt jon ki

// var a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
// var b = reverseList(a)(a)

// console.log(b);

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  var rec = (node, currDepth) => {
    // base case
    if (node == null) return currDepth;

    // recursive 
    let lMax = rec(node.left, currDepth + 1)
    let rMax = rec(node.right, currDepth + 1);

    return Math.max(lMax, rMax);
  }

  return rec(root, 0);
};


var maxDepth = function (root) {
  // base case
  if (root == null) return 0;

  // recursive 
  let lMax = maxDepth(root.left)
  let rMax = maxDepth(root.right);

  return 1 + Math.max(lMax, rMax);
};

// console.log(maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // base case(s)
  if (n == 0) return 1;
  if (n == 1) return x;
  if (n == -1) return 1 / x;

  // recursive
  if (n > 1) return x * myPow(x, n - 1);
  else return 1 / x * myPow(x, n + 1);
};

var myPow = function (x, n) {
  var origiN = n;
  var res = x;
  while (n - 1 != 0) {
    if (res == 0) return 0
    res *= x;
    if (n > 0) {
      n--;
    } else {
      n++;
      // res = 1 / (res * x);
    }
  }

  if (origiN < 0) return 1 / res; else return res;
};

// console.log(myPow(2, -2), 0.25);
// console.log(myPow(2, 3), 8);
// console.log(myPow(0.00001, 2147483647), 0.25);
// // console.log(myPow(0.00001, -2147483647), 0.25);
// console.log(myPow(34.00515, -3), 3e-05);
// console.log(myPow(2, 3), 8);

// // = 0.25
// // 0.00001
// // 2147483647

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // edge
  // if (list1.next == null && list2.next == null) return null;
  if (list2 == null) return list1;
  if (list1 == null) return list2;

  // csak ketto node esete
  // nagyobb.next = mergeTwoLists(ha van next)

  var head = null;
  // base case
  if (list1.next != null || list2.next != null) {
    // recursive case
    var merged = mergeTwoLists(list1.next, list2.next);
    if (list1.val < list2.val) {
      list1.next = list2;
      list2.next = merged;
      return list1;
    } else {
      list2.next = list1;
      list1.next = merged;
      return list2;
    }
  } else {
    if (list1.val < list2.val) {
      list1.next = list2;
      list2.next = null;
      head = list1;
    } else {
      list2.next = list1;
      list1.next = null;
      head = list2;
    }
    return head;
  }
};


var n1 = new ListNode(1, new ListNode(2, new ListNode(4)));
var n2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// console.log(mergeTwoLists(n1, n2));

n1 = new ListNode(5);
n2 = new ListNode(1, new ListNode(2, new ListNode(4)));
console.log(mergeTwoLists(n1, n2), [1, 2, 4, 5]);
