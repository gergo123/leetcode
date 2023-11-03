/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var PUSH = 'Push';
var POP = 'Pop';
var buildArray = function (target, n) {
    // 
    var stack = [];
    var results = [];

    for (let i = 0; i < n && target.length < i; i++) {
        var s1 = target[i];
        var s2 = i;

        if (s1 == s2) {
            results.push(PUSH);
        } else {
            results.push(POP);
        }

        if (target.toString() === stack.toString()) {

        }
    }

    return results;
};

console.log(buildArray([1, 2, 3], 3));
