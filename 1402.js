/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
    let max = 0;

    // i = time it takes to cook the meal
    for (let i = 0; i < satisfaction.length; i++) {
        const sat = satisfaction[i];
        // if(sat)
    }
};


[
    [-1, -8, 0, 5, -7],
    [4, 3, 2],
    [-1, -4, -5],
].map((input) => {
    console.log(maxSatisfaction(input));
});