/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const diffTime = (a, b) => {
    var splA = a.split(';');
    var splB = b.split(';');
    // ido az mi? Orajel ticks szamlalas
  }
  // ezt a fordulot hogy? ciklikus az ido, oke, ha >12 ?
  // orajel tick szamlalas, egy szam 1234
  // 12 orakat le lehet vonni belole? 12h ?p
  // unixepochba? de nem adja ki a vegen, tavol lesz, ez csak ido p, nincs nap ho stb
  // folytatolagos epoch nem jo. Bar kisse valotlan hogy sok idot osszehasonlit. Ha egy napon van minden idopont? Az se jo, aznap 0000 es aznap 2359 kozott 2359 ido telik el
  // 12 utan van akkor kov nap? fura ez is...ketto oldalrol lehet nezni kulonbseget

  // sorba rendezes meg oke, hanem az elso es utolso elemet kell megezni, min meg max-t Hogy visszafele kell-e nezni? Ora 
};

console.log(findMinDifference(["00:00", "23:59", "00:00"]));
console.log(findMinDifference(["23:59", "00:00"]));
