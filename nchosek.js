const nChoseK = (set, nSubSet) => {
  var res = new Map();

  for (let i = 0; i < set.length; i++) {
    const item = set[i];
    for (let j = 0; j < set.length; j++) {
      const ndItem = set[j];
      for (let k = 0; k < set.length; k++) {
        const rdItem = set[k];
        res.get()
      }
      let resItem = res.get(`${}`)
    }
  }
};

console.log(nChoseK([1, 2, 3, 4, 5], 3));

// BRUTE FORCE
// amekkora az n annyiszor kellene nestelni, akkor rekurzivan? es hogyan lehetne le bontani kissebb feladatokra?

// n darabszor kell recurzivan iteralni? ahany elemu a set
// 5dbnal 5 melyseg
// proba 3 elemure, fixen 3 for ciklussal
// kombinaciokra vagyok kivancsi, nem a hany fele keppen lehet valasztani
// https://en.wikipedia.org/wiki/Combination#Number_of_k-combinations

// hogy lehet kivalasztani 3 elemet 5db elembol ugy hogy minden elem 1x szerepelhet

// egyszerusitsuk le? hogy lehet ketto elemu setbol 1-t kivalasztani
// igy kimarad a rekurziv, iterativ lepes

// 3bol kettot