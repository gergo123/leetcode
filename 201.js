// kozos nevezo, mert binaris & AND muveletnel elvesz a tobbi, a balra leptetes pedig hogy megkapjuk az eredeti szamot.
// Az AND muveletnek nem igazan van 10es szamrendszerbeli megfeleloje. Ez nem szorzas vagy osztas. Ez egy logikai muvelet. Nincs koze a 10es szamrendszerhez. A kezdo es vege range zavart meg

// pl

// [8, 16]

// 01000
// 10000 &
// =
// 0

// [8, 15]
// 01000

// ..., az elso egyes mogott van valtozas, de a sok nulla miatt mind1
// logikai leptetes jobbra 10es szamrendszerben nem segit. Csak bitekrol van szo

// 01111
// =
// 1 << 3 = 1000 = 8


/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
    var cnt = 0;

    while (left < right) {
        left = (left >> 1);
        right = (right >> 1);

        cnt++;
    }

    return (left << cnt);
};

