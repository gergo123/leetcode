/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  // rajz megintcsak, egyszeruen kezzel felrajzolni a lepeseket
  // amiket kesobb a tranzisztor memoria segitsegevel megtesz
  // tranzisztor => osszehasonlit ketto memoria teruletet
  // melyik kettot?
  // majd modositani kell
  // de kezzel el kell jatszani, el kell babozni eloszor egy egyszeru megoldasat, brute force, egy iteracioban a memoria hogyan valtozzon. Mintha UI/UX terv keszulne
  // ez oke, hanem azt megtalalni hogy honnan kell elindulni, a kozepe, a legrobidebb palindroma a problemas
  // meg kene felezni, es vizsgalni mi a helyzet?
  if (s == s.split('').reverse().join('')) return s;

  // a-nak az indexe, valami tukrozesi pont lesz
  // ennek a menten erdemes elindulni
  // na de a legrovidebb palindrome? Honnan kene tudni az indexet?
  // van hogy elsotol vegig kell az ossze karakter, de van hogy csak az utolso karakter fog kelleni hogy palindrome legyen
  // for ciklus, vegig menni?
  let reverseS = s.split('');

  var palindromes = [];
  for (let j = 0; j < s.length; j++) {
    // const charS = s[j];
    let i = j;
    let arrS = s.split(''), isPalindrome = false;
    do {
      arrS.unshift(reverseS[i++]);
      isPalindrome = arrS.join('') === [...arrS].reverse().join('');
    } while (!isPalindrome && i < s.length);
    if (isPalindrome) {
      palindromes.push(arrS.join(''))
    }
  }

  let min = Number.MAX_VALUE, minVal = '';
  for (const res of palindromes) {
    if (res.length < min) {
      min = res.length;
      minVal = res;
    }
  }

  return minVal;
};

console.log(shortestPalindrome('aacecaaa'), 'aaacecaaa');
console.log(shortestPalindrome('abcd'), 'dcbabcd');
console.log(shortestPalindrome('ba'), 'aba');
console.log(shortestPalindrome('babc'), 'cbabc');
console.log(shortestPalindrome('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',));
