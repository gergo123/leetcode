/**
 * @param {number[]} nums
 * @return {boolean}
 */

let divs = (num) => {
    var divs = [];
    for (let i = num; i > 1; i--) {
        if (num % i === 0) divs.push(i);
    }
    return divs;
}
let gcd = (num1, num2) => {
    var divs1 = divs(num1);
    var divs2 = divs(num2);

    let maxCommon = -1;
    // do while pop return an item
    // while (divs1)
    for (let item of divs1) {
        for (let item2 of divs2) {
            if (item === item2 && maxCommon < item) {
                maxCommon = item;
            }
        }
    }

    return maxCommon;
};
var canTraverseAllPairs = function (nums) {
    // build up possible pairs with condition i<j
    // valid pairs
    var pairs = [];
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        for (let j = 0; j < nums.length; j++) {
            const item2 = nums[j];
            var gcdGtOne = gcd(item, item2) > 1;
            if (i < j && gcdGtOne) {
                pairs.push([i, j]);
                console.log([i, j]);
            }
        }
    }
};


console.log(gcd(6, 3), 3);
console.log(gcd(2, 6), 2);
console.log(gcd(4, 3), 2);

console.log(canTraverseAllPairs([2, 3, 6]), true);
console.log(canTraverseAllPairs([3, 9, 5]), false);
console.log(canTraverseAllPairs([4, 3, 12, 8]), true);
