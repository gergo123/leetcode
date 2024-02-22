/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if (n == 1) return 1;
    // keressuk meg azt akinek a trust szama = n
    // ha nincs akkor -1
    // => nincs n kapcsolat
    // hany db input output kapcsolat
    // max, es nem lehet kifele

    // OR one trust point only, and it has to be n-1
    // outgoing should be penalized, decrease from trust point

    // {in:, out:}
    var arr = {};

    // 
    var m = new Map();
    for (let [trustee, trusted] of trust) {
        var item = arr[trustee];
        var item2 = arr[trusted];
        if (item) arr[trustee].out++; else arr[trustee] = { in: 0, out: 1 };
        if (item2) arr[trusted].in++; else arr[trusted] = { in: 1, out: 0 };
    }

    for (let i = 1; i <= n; i++) {
        if (arr[i]?.in == n - 1 && arr[i].out == 0) return i;
    }

    return -1;
};


// findJudge(2, [[1, 2]])
findJudge(3, [[1, 3], [2, 3]])
