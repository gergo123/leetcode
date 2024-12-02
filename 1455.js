/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let fIndex = -1;
  var parts = sentence.split(' ');
  // lehetne gyorsitani vele, hogy csak az elso talalatig vizsgalodunk
  //sentence.substring
  // hany db space van a szoban? iteralni kell, de ha iteralok akkor feles az indexOf

  for (let i = 0; i < parts.length && fIndex === -1; i++) {
    let word = parts[i];

    if (word.startsWith(searchWord)) fIndex = i + 1;

  }
  return fIndex;
};

console.log(isPrefixOfWord("this problem is an easy problem", 'pro'));
