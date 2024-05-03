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
  tickets.forEach(tickets => {
    queue.push(i);
    i++;
  });

  let time = 0;
  while (typeof (client = queue.shift()) !== 'undefined' && tickets[k] > 0) {
    let amountWanted = tickets[client];
    if (amountWanted > 0) {
      tickets[client]--;
      if (tickets[client] > 0)
        queue.push(client);
    }
    time++;
  }

  return time;
};

var input = [
  { tickets: [2, 3, 2], k: 2, expected: 6 },
  { tickets: [5, 1, 1, 1], k: 0, expected: 8 },
]

var res = input.map(x => timeRequiredToBuy(x.tickets, x.k));
console.log(res);
