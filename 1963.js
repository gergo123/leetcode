/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {

  // szamolas?
  // vagy bal es jobb mutatok?
  // sorba rendezes segithet?
  // igen nem validalashoz talan eleg, de index swaphoz keves
  // 
  // mi a cel most?
  // vagy csak almodozok???
  /*
az a baj hogy van hogy szar, tehat nincs mit szamolni
nincs mit szamolni?

Stack modszer? push pop peek? a parja lehet kesobb van az a baj. Lehet a vegen van a zaro par.
Set map?
  */

  let imbalanceCount = 0, swapCount = 0;

  let split = s.split('');
  for (let i = 0; i < s.length; i++) {
    const chr = split[i];
    if (chr === '[') imbalanceCount++;
    // there is nothing to close or balance out
    if (chr === ']' && imbalanceCount === 0) {
      swapCount++;

      // to swap with what?
      let temp = split[i], rIndex = split.lastIndexOf('[');
      split[i] = split[rIndex];
      split[rIndex] = temp;
    }
    if (chr === ']' && imbalanceCount > 0) imbalanceCount--;
  }

  return swapCount;
};

console.log(minSwaps('][]['));
// [[]]
console.log(minSwaps(']]][[['));
