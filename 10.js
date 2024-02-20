/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    // char: anything,      repeat: 1
    // char: exact,         repeat: 1
    // char: preceding ch   repeat: 0 or >1

    // this is not happening
    // because of having to end one pattern somewhere, to give room to the next pattern, if any left
    // match from the right ???
    // => If we have a match on the remaining strings after any of these operations, then the initial inputs matched.
    var inp = s.split('');
    for (let i = 0; i < p.length; i++) {
        const prevCh = p[i - 1];
        const ch = p[i];
        const nextCh = p[i + 1];

        // s: 'mississippi',
        // p: 'mis*is*p*.',

        // s: 'ippi',
        // p: '.',

        // s: 'ippi',
        // p: 'p*.',

        // s: 'ppi',
        // p: '.',

        // aab
        // c*a*b*

        // s: 'ab',
        // p: '.*c',
        if (ch == '*') continue;
        if (nextCh && nextCh === '*') {
            // i++;
            if (ch == '.') {
                // ??? match remaining pattern here

                // match inp[0] char until pattern changes
                // => have to match any char... last indexOf version
                // ha van tovabbi pattern, mint az aktualis, az igaz-e
                // return isMatch(s, p minues .*);
                var remainingP = p.slice(i + 2, p.length)
                if (remainingP.length > 0) {
                    return isMatch(s, remainingP);
                }
                var rmCh = '';
                // do {
                //     rmCh = inp.shift();
                // } while (rmCh == inp[0]);

                // var fCount = inp.lastIndexOf(ch);
                // if (fCount > 0) inp.splice(0, fCount + 1);

                // return true;
            } else {
                // need to match until pattern end
                // or zero ???
                let rmCh = ''
                // input i does not match
                // if (inp[0] != ch) return false;

                // remove until pattern of ch end instead of lastIndex
                // is matching => remove until last char of the ch
                while (ch == inp[0]) {
                    var elm = inp.shift();
                }
            }
        } else if (ch == '.') {
            inp.shift();
        } else {
            var elm = inp.shift();
            if (elm != ch) return false;
        }
    }

    if (inp.length == 0) return true;
    return false;
};

[
    {
        s: 'aa',
        p: 'a',
        e: false,
    },
    {
        s: 'aa',
        p: 'a*',
        e: true,
    },
    {
        s: 'a',
        p: '.*',
        e: true,
    },
    {
        s: 'a',
        p: '.',
        e: true,
    },
    {
        s: 'mississippi',
        p: 'mis*is*p*.',
        e: false,
    },
    {
        s: 'aab',
        p: 'c*a*b',
        e: true,
    },
    {
        s: 'ab',
        p: '.*c',
        e: false,
    },
    {
        s: 'ab',
        p: '.*',
        e: true,
    },
].forEach(a => {
    console.log(`${isMatch(a.s, a.p) == a.e ? 'OK' : 'NOK'}`);
    // console.log(`${isMatch(a.s, a.p)} exp: ${a.e}`);
})
