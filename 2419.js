import data from './data/2419-data.js'
/**
 * @param {number[]} nums
 * @return {number}
 */

var longestSubarray = function (nums) {
  let maxValue = 0, maxArrLength = 1;

  let subArrLength = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num > maxValue) {
      maxValue = num;
      subArrLength = 1;
      maxArrLength = 0;
    } else if (num === maxValue) {
      subArrLength++;
    } else {
      // smaller
      subArrLength = 0;
    }
    if (maxArrLength < subArrLength)
      maxArrLength = subArrLength;
  }

  return maxArrLength;
};

console.log(longestSubarray([1, 2, 3, 3, 2, 2]), 2);
console.log(longestSubarray([1, 2, 3, 4]), 1);
// console.log(longestSubarray([174158, 874406, 800024, 800024]));
console.log(longestSubarray([100, 5, 5]), 1);
console.log(longestSubarray([96317, 96317, 96317, 96317, 96317, 96317, 96317, 96317, 96317, 279979]), 1);
console.log(longestSubarray(data), 8314);

// fel kene irni logikai muveletekkel. Kepletekekkel (a1 & a2) & (a2 & a3) stb
// es muvelet egyik tulajdonsagat fel leheten hasznalni?
// es muvelet miatt lenyegtelen a ketto kozott vegig menni, hanem az elso es utolso-t kell csak vizsgalni? A range elso es utolso elemet
// ez se igaz mert nullazhat kozben pl egy 0 elem, de sorrendbe van teve? Ott is lehet nulla az adott helyierteken a bit
// ezert jo a temp eredmeny tabla, ott vegig van vive. Es a kiindulasi pont oke? Az kumulativ eredmenyt fogja tovabb vinni, az lehet nem jo
// az arr[startIndex] & prefuxSum[endIndex]
// igy kijon a keplet

// reframe?
// a maximumot kell megkeresni, es hogy az milyen hosszan tart
// nem is kissebbre kell, hanem masik problemara atirni
