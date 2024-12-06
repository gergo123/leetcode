/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (a, b) {
  let result = null;

  // Base cases
  if (a === null)
    return b;
  else if (b === null)
    return a;

  // Pick either a or b, and recur
  if (a.data <= b.data) {
    result = a;
    result.next = mergeTwoLists(a.next, b);
  }
  else {
    result = b;
    result.next = mergeTwoLists(a, b.next);
  }

  // de inplace merge: https://www.geeksforgeeks.org/merge-two-sorted-lists-place/
  return result;
};

// console.log(mergeTwoLists(
//   new ListNode(1, new ListNode(2, new ListNode(4))),
//   new ListNode(1, new ListNode(3, new ListNode(4)))
// ));
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

console.log(mergeTwoLists(
  new ListNode(5),
  new ListNode(1, new ListNode(2, new ListNode(4)))
));

// 1,2,4,5

console.log(mergeTwoLists(
  new ListNode(3),
  new ListNode(1, new ListNode(2, new ListNode(4)))
));

// 1,2,3,4
