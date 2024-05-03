/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  if (tickets.length === 0) return 0;

  var queue = [];
  // stack => [].pop
  // queue => [].shift
  // queue => very slow with larger elements
  let i = 0;
  // N
  tickets.forEach(tickets => {
    queue.push(i);
    i++;
  });

  let time = 0;
  // N
  while (typeof (client = queue.shift()) !== 'undefined' && tickets[k] > 0) {
    let amountWanted = tickets[client];
    // if (amountWanted > 0) {
    tickets[client]--;
    if (tickets[client] > 0)
      queue.push(client);
    // }
    time++;
  }

  // N*N ? runtime
  // vagy legyen N*lg n?
  // => worst case, tehat N*N, vagy N*M ahol M a maximum megvasarolando jegyek szama. Hanyszor fut le? Maximum(tickets), elso esetben 3, masodikban 5. N pedig az elemszam, elso esetben 3 masodikban 4.
  // N because of a new array (queue)
  return time;
};

var solution2 = (tickets, k) => {
  let time = 0, i = 0;

  // simulate queue with loops
  while (tickets[k] > 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i] !== 0) {
        tickets[i]--;
        time++;
      }
      if (tickets[k] === 0) return time;
    }
  }
}

// 2 ways of doing
// - Modell the situation, object oriented programming? Simulate the situation
// First, Brute force, than start to optimize 
// - Mathematically calculate the solution with available inputs

var input = [
  { tickets: [2, 3, 2], k: 2, expected: 6 },
  { tickets: [5, 1, 1, 1], k: 0, expected: 8 },
]

var res = input.map(x => solution2(x.tickets, x.k));
console.log(res);
