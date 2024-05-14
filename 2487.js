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
var removeNodes = function (head) {
  // iterate over all items
  // check for removal condtion
  var cHead = head;
  let current = cHead;
  let prev = null;
  while (current != undefined) {
    var hasGt = current.next && hasAnyGreater(current.next, current.val);
    if (hasGt) {
      // remove current item
      // how to remove very first item of a linked list
      if (prev) {
        // to remove the current item, set previous item next prop to curren item's next prop  
        prev.next = current.next;
      } else {
        // no need for current, start with current.next
        cHead = current.next;
      }
      // removal keep prev as is
    } else {
      prev = current;
    }

    current = current.next;
  }

  return cHead;
};

const hasAnyGreater = (next, current) => {
  var gt = next.val > current;
  if (gt)
    return true;
  else if (next.next)
    gt = hasAnyGreater(next.next, current);

  return gt;
}

console.log(hasAnyGreater({ val: 5, next: { val: 6, next: null } }, 7));
console.log(hasAnyGreater({ val: 5, next: { val: 6, next: null } }, 5));

let test =
{
  val: 5,
  next:
  {
    val: 2,
    next: {
      val: 13,
      next: {
        val: 3,
        next: {
          val: 8,
          next: undefined
        }
      }
    }
  }
};
// console.log(removeNodes({ val: 2, next: { val: 5, next: { val: 6, next: null } } }));
// console.log(removeNodes({ val: 9, next: { val: 5, next: { val: 6, next: null } } }));

console.log(removeNodes(test));

test = {
  val: 998,
  next:
  {
    val: 112,
    next: {
      val: 660,
      next: {
        val: 961,
        next: {
          val: 943,
          next: {
            val: 480,
          }
        }
      }
    }
  }
}

console.log(removeNodes(test));

// ha bevezetek egy maximumot? editorial-ban volt
// nincsenek sorrendben, veletlenszeruen vannak el rendezve a szamok ezert ertelmetlen

// nagyon konnyen es gyorsan vegig iteralok barmin
// az tranzisztorok szama kurva sok lett, gyakorlatilag el hanyagolhato ameddig megfelelo a tempo es nincs lassulas
// brute force modszer ez, ido limitbe utkozott, n^2
