/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function (words) {
  var obj = {

  };

  // prefix occurence set or map?
  // new Set() // value only
  // new Map() // key and value, object internally

  // prefix map
  var prefixValues = new Map();
  for (const word of words) {
    var spl = word.split('');
    // for ciklus i=0, lenght-ig
    //  for ciklus j=i, length-ig
    // hany indexre van szukseg? Kettore, az mit jelent? ketto memoria rekesz, amiben indexek lesznek => ketto for ciklus
    // ami mit csinal, memoria rekesz erteket novel
    for (let i = 0; i < spl.length; i++) {
      const chr = spl[i];
      var prevValue = prefixValues.get(chr);

    }
  }

};

console.log(sumPrefixScores(["abc", "ab", "bc", "b"]), [5, 4, 3, 2]);
