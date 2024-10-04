/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  // ahany muvelet annyi zarojel n! ?
  // egy szam elott vagy utan allhat
  // zaro es nyito kulonbozo tulajdonsaggal bir
  var res = [];
  for (let i = 0; i < 3; i++) {
    // const element = 3;
    for (let j = 0; expression.length < i; j++) {
      let ch = expression[j];
      if (ch == '*' || ch == '-') {

      }
      console.log(i, j);
    }
  }
};

console.log(diffWaysToCompute('2*3-4*5'), [-34, -14, -10, -10, 10]);
