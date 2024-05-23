/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  let beauty = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    var remained = nums.slice(0, i + 1);

  }
};

console.log(4, beautifulSubsets([2, 4, 6], 2));
console.log(1, beautifulSubsets([1], 1));
