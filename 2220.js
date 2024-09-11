/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  // start es goal-ig 32bit hatvanyok?
  // vagy csak xor?
  // igazsagtablakbol 
  // 11 01 10 00 
  // 0  1  1  0
  // xor
  var xor = start ^ goal;
  var strXor = xor.toString(2);
  var res = 0;
  for (const char of strXor) {
    if (char == '1')
      res++;
  }
  return res;
};

console.log(minBitFlips(10, 7), 3);
console.log(minBitFlips(3, 4), 3);
