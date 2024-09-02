/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {

  // i th sorban melyik a min
  var minRow = new Array(matrix.length)
  // i th sorban melyik a max
  var maxCol = new Array(matrix[0].length)
  // <int, int> - i th, maximum = array eleg
  var res = [];

  // ha van egyezes i th indexben akkor lucky number
  var limit = Math.max(matrix.length, matrix[0].length);

  for (let i = 0; i < limit; i++) {
    var row = matrix[i]
    let isRowMin = false;
    let rowMin = Number.MAX_SAFE_INTEGER;

    let isColMax = false;
    let colMax = 0;
    for (let j = 0; j < limit; j++) {
      // poniterek, sor es oszlop bejaras
      // matek => sor es oszlop bejaras
      // info  => memoria es tr => ketto memoria rekeszben lehet letarolni sor es oszlop infokat
      // at kell forditani a problemat, memoria tr problemara
      // memoriaban hogy nez ki a problema? elegge mas mint a matek, egyszeru logika oldala mert memoriaban van matematika helyett

      // mit kell limitalni a memorian tr.-n?
      // col counter
      if (j < matrix.length) {
        const valCol = matrix[j][i];

        if (valCol > colMax) {
          colMax = valCol;
        }
      }

      // row counter
      if (i < matrix.length) {
        const valRow = matrix[i][j];
        // min kereses sor
        // ketto rekesz osszehasonlitas
        if (valRow < rowMin) {
          rowMin = valRow;
        }
      }
    }
    // ketto memoria rekesz egyenlo
    if (rowMin === colMax) {

    }
    // az a baj ez a sorban nezi meg a minimumot, es oszlpban a minimumot
    // de az a kerdes hogy a ketto egyszerre igaz-e
    // akkor a vegen fasze hibas a row min === col max?
  }

  // 1 ciklussal viszont a beagyazott cikluson kivul kell valtozot kovetni
  return res;
};

console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]));
// 15
// console.log(luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]));
// 12
//console.log(luckyNumbers([[3, 6], [7, 1], [5, 2], [4, 8]]));
// []

// nincs egyenloseg jel matematika es algo kozott
// ketto kulon eletet el
// egyik szamok muveletek
// masik memoria es arra kotott tranzisztor labai (3db)

// olyan mint egy matrix szorzas
// minden sor elemet minden oszloppbal
