/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var spiralMatrix = function (m, n, head) {
  let matrix = [...new Array(m)].map(x => new Array(n).fill(-1));
  // i - row
  // j - col
  let i = 0, j = 0, curr = head;
  let direction = 0;
  let visitedI = new Array(m).fill(false),
    visitedJ = new Array(n).fill(false);


  while (curr != null) {
    // right
    if (direction == 0) {
      if (visitedJ[j]) {
        // hit a vall change direction
      } else {
        j++;
      }
    } 
    // options: visited array or set, pointers
    // boundaries, or conditions to turn in future
    // boundaries and than turn left right up till boundary is hit
    // a future x and y param on which to 'turn' again
    // upward, downward, left, right ?
    // ith row is full
    // jth col is full
    // direction variable
    // when an ith or jth obstacle is hit, turn. Max limit or visited already

    // if (i % m == 0 && i != 0) {
    //   // end of line
    //   i++;
    // }
    // if (j % n == 0 && j != 0) {
    //   j++
    // }

    curr = head.next
  }

  return matrix;
};

console.log(spiralMatrix(3, 5, new ListNode(3, new ListNode(0, new ListNode(
  2,
  new ListNode(6, new ListNode(8), new ListNode(1))
)))));
