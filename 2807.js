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
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

let gcd = (a, b) => {
  if (a == 0)
    return b;
  return gcd(b % a, a);
};

var insertGreatestCommonDivisors = function (head) {
  if (!head) return null;
  if (!head.next) return head;

  let curr = head.next, prev = head;
  while (curr) {

    var first = prev.val;
    var scnd = curr.val;
    var grtstDiv = gcd(first, scnd);
    // console.log(first, scnd, grtstDiv);

    var gcdNode = new ListNode(grtstDiv, curr);
    prev.next = gcdNode;

    prev = curr;
    curr = curr.next;
  }

  return head;
};

console.log(insertGreatestCommonDivisors(new ListNode(18, new ListNode(6, new ListNode(10, new ListNode(3))))));
