
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

var a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
var b = reverseList(a)(a)
console.log(b);
