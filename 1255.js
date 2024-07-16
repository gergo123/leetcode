/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {

};

console.log(maxScoreWords(
  ["xxxz", "ax", "bx", "cx"],
  ["z", "a", "b", "c", "x", "x", "x"],
  [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10]
));

/*
(aramszolgaltatas support miatt)

consum all the letters, trying to recreate words with them, then connecting the letters used to scores array

set of
lehettseges opciok => set of

try and build out words from letters
  visited?
  mindegyik szo kombinacio kell?, 11 12 13 stb? ha elfogynak a felhasznalhato betuk vege (rekurziv? dfs vs bfs, rekurziv vs while pop queue)
    meg kell nezni, maradekbol lehet-e meg epiteni, ha nem break

minden elemet mindegyikkel kombinalni? keves lesz
combinations vs permutations

https://en.wikipedia.org/wiki/Combination
  Number of K combinations - n chose k (n k)
https://en.wikipedia.org/wiki/Permutation

*/
