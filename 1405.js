/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {

  // memoria tranzisztor, ezert kell keresni ketto osszehasonlithato erteket
  // vagy amin vegig iteralhatunk

  // hogy optimalis el kezdeni feltolteni a stringet?
  // legnagyobbal kene kezdeni a harom parameter kozul?
  // mindig sorrendbe tartani ezeket?
  // legnagyobbol kell kivonni

  let valid = true, max = -1, maxChar = '', result = '';
  while (valid) {
    // harom feltetel harom paramhoz? maxot keresni, azt hasznalni
    if (a > max) {
      max = a;
      maxChar = 'a'
    }
    if (b > max) {
      max = b;
      maxChar = 'b'
    }
    if (c > max) {
      max = c;
      maxChar = 'c'
    }


    // mennyi vonhato ki, 1 vagy ketto
    let subtractAmount = 0;

    // kilepesi feltetel?
    switch (maxChar) {
      case 'a':
        break;
      case 'b':
        break;
      case 'c':
        break;
    }
  }

  return result;
};

console.log(longestDiverseString(1, 1, 7), 'ccaccbcc', 'ccbccacc');
