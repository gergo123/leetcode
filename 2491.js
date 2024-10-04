/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  // raadasul minden csapatra nezve kell egy max
  // a mar elosztott tagokat ki kene venni a listabol
  // sorba rendezes segit-e?

  // for (let i = 0; i < skill.length; i++) {
  //   const sk = skill[i];
  //   for (let j = 0; j < skill.length; j++) {
  //     const sk2 = skill[j];

  //     console.log(sk, sk2);
  //     // max keres?
  //     // egy cel pontszam miatt, mennyir kell kihozni
  //   }
  // }


  skill.sort((a, b) => a - b)
  var pairSet = new Set();
  var pairs = [];
  let pairSkill = -1, chemistry = 0;;
  for (let i = 0; i < skill.length / 2; i++) {
    const rightIndex = skill.length - i - 1;
    const sk = skill[i], sk2 = skill[rightIndex], index = `${sk}${sk2}`;
    if (pairSkill == -1) {
      pairSkill = sk + sk2;
    } else {
      if (pairSkill !== sk + sk2) return -1;
    }

    pairs.push(index)
    chemistry += sk * sk2;
    // index pairs
    // if (!pairSet.has(index)) {
    //   pairSet.add(index);
    // }
    // console.log(sk, sk2);
  }
  // sorba rendes es a ketto vegerol befele haladva parositani
  // min. optimista verzio 

  return chemistry;
  return Array.from(pairSet.values())
};

console.log(dividePlayers([3, 2, 5, 1, 3, 4]));
console.log(dividePlayers([1, 1, 2, 3]));

// nem kell vizsgalni aze fura, oke hogy optimalis a benat a joval
// de konkret ellenorzes nincs is
// lehet-e olyan? van hogy nem jon ki igen a skill egyenlore akkor return -1 
