const call = () => {
    var [left, right] = [5, 99];

    return [left, right];
};

var [a, b] = call(4, 5);
console.log(a, b);

console.log(call());
