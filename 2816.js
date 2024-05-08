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
var doubleIt = function (head) {
  var currentItem = head;
  var num = '';
  while (currentItem) {
    num += currentItem.val;


    var tmp = currentItem;

    currentItem = currentItem.next;
    currentItem.next = currentItem;
  }

  var intNum = Number.parseInt(num);
  intNum *= 2;

  // cant brute force, should return the same list, with a new head if needed
  // should apply elementary school math, the math of multiplication
  // 189*2 6*2=18 leirom a 8, maradt az 1
  // 8*2 = 16, leirom a 6ot, de maradt az egy elozorol, hozzaadom, maradt megint az egy
  // 2*1 = 2 maradt az 1 elozobol, igy 3 lesz
  // === 378

  // reverse? az iranyt meg kell valtoztatni mikozben vegig iteralunk a listan? 

  // 378
  // ne kelljen tobb memoriat foglalni az a cel, o(1) memoria hasznalat es o(n) futas ido
  intNum.toString().split()

  return intNum;
};

console.log(doubleIt({
  val: 1,
  next: {
    val: 8,
    next: {
      val: 9,
      next: null
    }
  }
}));
