/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let answ = [], alreadyChecked = [];
  var iteration = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];

  for (let i = 0; i < score.length; i++) {
    let maxIndex = -1, max = -1;

    for (let h = 0; h < score.length; h++) {
      let item = score[h];
      if (item > max && !alreadyChecked[h]) {
        max = item;
        maxIndex = h;
      }
    }
    alreadyChecked[maxIndex] = true;
    let answText = iteration[i];
    if (answText)
      answ[maxIndex] = answText;
    else
      answ[maxIndex] = `${i + 1}`;
  }
  return answ;
};

// console.log(findRelativeRanks([5, 4, 3, 2, 1]));
console.log(findRelativeRanks([123123, 11921, 1, 0, 123]));

