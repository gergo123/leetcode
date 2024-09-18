/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  var sorted = nums.sort((a, b) => {
    // az elso lesz a meghatarozo, de ha az elso ugyanaz, akkor a kovetkezo
    // mind egy a hosszusaga? ha az elso karakter nagyobb, mehet elore
    const str1Num = a.toString();
    const str2Num = b.toString();
    const split1Num = a.split('');
    const split2Num = b.split('');

    var left = 0, right = 0;
    while (left !== str1Num.length || right !== str2Num.length) {
      // mindig a nagyobb helyierteku szamit, ha megvan a nagyobb vege
      // ha egyenlo akkor menni kell tovabb
      const n1 = split1Num[left++];
      const n2 = split2Num[right++];
      if (n1 > n2) {
        return 1;
      }
      if (n2 > n1) {
        return -1;
      }
    }


    // megint kimaradt a rajz, csak neki akarok ugrani es megoldani
    // oke ember, szog kalapacs? fantaziaval

    // van-e maradek? ha a ketto parameter hossza kulonbozo
    // ugyanaz a ketto, csak az utolso karakter fogja eldonteni
    // kene a ketto ablak

    return 0;
  })

  return sorted;
};

console.log(largestNumber([3, 30, 34, 5, 9]), '9534330');
console.log(largestNumber([10, 2]), '210');
