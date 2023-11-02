/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        const item = i;
        if (item % 3 === 0) {
            if (item % 5 === 0) {
                answer.push('FizzBuzz');
            } else {
                answer.push('Fizz')
            }
        } else if (item % 5 === 0) {
            answer.push('Buzz')
        } else {
            answer.push(item.toString())
        }
    }

    return answer;
};


[
    3,
    5,
    15,
].map((input) => {
    console.log(fizzBuzz(input));
})

// Time complexity O(N)
//  iterating over the array once
// Space complexiti O(1)
//  is constant because besides the return array no 
//  allocations are made
