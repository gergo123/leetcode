/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  dictionary.sort((a, b) => b.length - a.length)
  for (const word of dictionary) {
    s = s.replace(new RegExp(word, 'g'), '');
  }

  return s.length
};

// reszeket kellene optimalisan szettorni, majd a maradekkal tovabb
// reszeket kell feltorni, majd a maradekot is
// min extra char => min kereses?

// console.log(minExtraChar('leetscode', ["leet", "code", "leetcode"]), 1);
// console.log(minExtraChar('dwmodizxvvbosxxw', ["ox", "lb", "diz", "gu", "v", "ksv", "o", "nuq", "r", "txhe", "e", "wmo", "cehy", "tskz", "ds", "kzbu"]), 7);
console.log(minExtraChar('azvzulhlwxwobowijiyebeaskecvtjqwkmaqnvnaomaqnvf', ["na", "i", "edd", "wobow", "kecv", "b", "n", "or", "jj", "zul", "vk", "yeb", "qnfac", "azv", "grtjba", "yswmjn", "xowio", "u", "xi", "pcmatm", "maqnv"]), 15);
