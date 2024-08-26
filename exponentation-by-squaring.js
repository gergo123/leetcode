/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // base case
  if (n == 0) return 1;

  if (n < 0) {
    return myPow(1 / x, -n);
  }
  // recursive

  if (n % 2 == 1) { // odd
    return x * myPow(x * x, (n - 1) / 2)
  } else { // even
    return myPow(x * x, n / 2);
  }
};

console.log(myPow(2, -4));
