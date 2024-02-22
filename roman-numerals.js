// Vannak egyesek tizesek, stb. Megprobalni a legnagyobbat kivonni
//  a szambol, es ha van maradek megynk tovabb, ha nincs maradek
// akkora kovetkezovel kell probalni, addig kell menni amig van maradek.

var romanNumbers = [];
romanNumbers[4] = 'IV';
romanNumbers[5] = 'V';
romanNumbers[9] = 'IX';
romanNumbers[10] = 'X';
romanNumbers[40] = 'XL';
romanNumbers[50] = 'L';
romanNumbers[90] = 'XC';
romanNumbers[100] = 'C';
romanNumbers[400] = 'CD';
romanNumbers[500] = 'D';
romanNumbers[900] = 'CM';
romanNumbers[1000] = 'M';

/*
18
X - 10
8
V - 5
3
I - 1
2
I - 1
1
I - 1

Nem lehet 4 egyezo karakter egy romai szamban
 */
var hasGroupWithMoreThan4 = function (str) {
    var items = {};
    for (let index = 0; index < str.length; index++) {
        const character = str[index];
        var prev = items[character]
        if (prev) {
            prev++;
        } else {
            prev = 1;
        }
    }
    var chars = Object.keys(items);
    for (let index = 0; index < chars.length; index++) {
        const Char = chars[index];
        if (items[chars] >= 4) return true;
    }
    return false;
};
var positionalNotion = function (number) {

    for (var index = romanNumbers.length - 1; index >= 0; index--) {
        const rNumber = romanNumbers[index];
        if (!rNumber || rNumber.length < 1) continue;

        if (number - index >= 0) {
            var remaining = positionalNotion(number - index);
            return rNumber + remaining;
        }
        else if (number <= 3) return 'I'.repeat(number);
    }
};

[14, 15, 16, 17, 18, 19, 20, 400, 499, 99, 999].forEach(number => {
    console.log(positionalNotion(number));
});
