/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let imbalance = 0, moves = 0, open = 0, close = 0;

  let res = [];
  // just return the number of imbalance? abs(open - close)
  for (let i = 0; i < s.length; i++) {
    const chr = s[i];
    if (imbalance == 0) {
      if (chr == ')') {
        moves++;
        res.push('(');
        res.push(chr);
        imbalance++;
      }
    }
    if (chr == '(') imbalance++;
    if (chr == ')') imbalance--;
  }

  for (let i = 0; i < imbalance; i++) {
    res.push(')');
    moves++;
  }
  // ha kell egy par mindnek, eleg lehet sorba rendezes?

  return moves;//[Math.abs(imbalance), moves];
};

console.log(minAddToMakeValid('())'), 1);
console.log(minAddToMakeValid('((('), 3);
console.log(minAddToMakeValid('()))(('), 4);
