// leaf { currentValue, next: leaf }

// 1 2 3 4

// 1 2 4 3
var tree = {
    currentValue: 1,
    left: {
        currentValue: 2,
        right: {
            currentValue: 3
        }
    },
    right: {
        currentValue: 4,
    }
}
console.log(tree);
// lifo vs fifo?
// push pop
let stack = [];

// coffe shop, waiting in line
// amit nulla allapotkor eloszor bele tettem a kosarba
// vs amit mondjuk 5 elem szamnal utoljara tettem a kosarba
// a honnan nezem a fontos. Egy lista ha feltoltodik merre
// viszem az elemeket gondolatban

// should be 1 2 4 3
// cserelni kell a stacket?

// alap esetben meg kell szamolni hany szint van, majd iteralni a szinteken es bejarni az elemeket
// kozben vegig kovetve hogy hanyas szinten van a bejaras

// masik opcio: queue
// stack pop => idorendi sorrend desc
// queue pop => idorendi sorrend asc

// honnan nezzuk?
// hozzaadas sorrendje
// vagy a listaban a helye

// nincs rola jo mentalis modellem

// van rekurziv es data structure verzios bejaras is
// mind BF es DF -re is

// Egy logikai bejaras modot tobb felekeppen is meg lehet valositani, mas mas adatstrukturaval 
// iterativ vagy recursive

// ez binary tree, szal konyebb a helyzet. Elozo es kovetkezo van

stack.push(tree);
while (stack.length > 0) {
    var item = stack.shift();

    console.log(`visiting node with value ${item.currentValue}`);

    // szar a sorrend, queue like pop not array like pop
    // array.shift() pulls the first array element much as array.pop() pulls the last element.
    // should be 1 2 4 3
    // ordering of the rows: left to right or right to left
    item.left && stack.push(item.left);
    item.right && stack.push(item.right);
}

// egy array shift es pop kulonbseg
// egyik iterativ bejaras, masik lehet a breadth first, szelessegi bejaras

// egyszeruen novekszik a stack tartalma, tobb kerul bele
// PARHUZAMOSAN megy a bal es jobb oldal. Itt nem az van mint rekurziv esetben
// Bal es jobb egyszerre, rekurzivnal egyik oldalon vegig szaladunk, majd visszafele haladva a maradekok
// 