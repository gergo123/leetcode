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
var mergeTwoLists = function (list1, list2) {
  // 2valtozo 4soros igazsagtabla => 4 ag, elso harom, es a folytatas az 1 1 sor
  if (list1 == null && list2 == null) return null;
  if (list1 == null && list2) return list2;
  if (list2 == null && list1) return list1;

  // base case
  if (list1.next == null && list2.next == null) {
    if (list1.val > list2.val) {
      // save prev next object? no need to, no more next
      list2.next = list1;
      return list2;
    } else {
      list1.next = list2;
      return list1;
    }
    // must reuse objects
  }

  // if (list1 == null) return null;
  // if (list2 == null) return null;

  // split(0,1)? maradekkal tovabb
  var orderedArray = mergeTwoLists(list1.next, list2.next);

  // merge, combine

  // relaciok igazsagtablaval?
  // el kell donteni az aktualis elem1 elem2 es a sorbarendezett lista viszonyat
  // hany db ossze hasonlitas lehettseges
  // harom elemunk van, hanyszor kell osszehasonlitani, mindent mindennel?
  // harom elemnek hany ketto kombinacioja letezik?
  // harombol kettot valasztani?
  if (list1.val > list2.val) {
    if (orderedArray.val < list2.val) {
      orderedArray.next = list2;
      list2.next = list1;
      return orderedArray;
    } else {
      // oa utolso elemet nem ismerjuk, azzal kene osszehasonlitani a list1.val-t?
      if (orderedArray.val < list1.val) {
        list2.next = orderedArray;
        orderedArray.next = list1;
        return list2;
      } else {
        list2.next = list1;
        list1.next = orderedArray;
        return list2;
      }
    }
  } else {
    if (orderedArray.val < list1.val) {
      orderedArray.next = list1;
      list1.next = list2;
      return list1;
    } else {
      if (orderedArray.val > list1.val) {
        list1.next = orderedArray;
        orderedArray.next = list2;
        return list1;
      } else {
        list2.next = orderedArray;
        list1.next = list2;
        return list1;
      }
    }
  }
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
