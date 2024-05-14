/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  var results = [];

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      // console.log(`r: ${row} c: ${cell}`);
      if (cell > 0) {
        //
        var visited = [];
        for (let i = 0; i < grid.length; i++) {
          const row = grid[i];
          visited.push(Array(row.length))
        }
        var value = matrixMaxAmount(grid, i, j, visited);
        results.push(value);

        // console.log(`starter: ${cell} ${value}`);
      }
    }
  }

  var max = 0;

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    if (result > max) max = result;
  }

  return max;
};

const matrixMaxAmount = (grid, row, col, visited) => {
  let val = grid[row][col];
  visited[row][col] = true;

  // contains the results of right left up down directions summarized gold value
  var directionResults = [];

  let value = 0;
  var left = grid[row][col - 1];
  if (left && left > 0 && !visited[row][col - 1]) {
    var visCopy = [...visited];
    value = matrixMaxAmount(grid, row, col - 1, visited);
    directionResults.push({ value, visited: visCopy });
  }

  var right = grid[row][col + 1];
  if (right && right > 0 && !visited[row][col + 1]) {
    var visCopy = [...visited];
    value = matrixMaxAmount(grid, row, col + 1, visited);
    directionResults.push({ value, visited: visCopy });
  }

  if (row - 1 > 0) {
    var up = grid[row - 1][col];
    if (up && up > 0 && !visited[row - 1][col]) {
      var visCopy = [...visited];
      value = matrixMaxAmount(grid, row - 1, col, visited);
      directionResults.push({ value, visited: visCopy });
    }
  }

  if (row + 1 < grid.length) {
    var down = grid[row + 1][col];
    if (down && down > 0 && !visited[row + 1][col]) {
      var visCopy = [...visited];
      value = matrixMaxAmount(grid, row + 1, col, visited);
      directionResults.push({ value, visited: visCopy });
    }
  }

  // azt a visited listat kell tovabb vinni amelyik itt a max keresesben is hasznalva van
  var max = { value: 0 };
  for (let i = 0; i < directionResults.length; i++) {
    const result = directionResults[i];
    if (result.value > max.value) max = result;
  }

  visited = max.visited;
  return val + max.value;
};

// exp 24
// console.log(getMaximumGold(
//   [[0, 6, 0], [5, 8, 7], [0, 9, 0]]
// ));

// exp 129
console.log(getMaximumGold(
  [
    [0, 0, 0, 0, 0, 0, 32, 0, 0, 20],
    [0, 0, 2, 0, 0, 0, 0, 40, 0, 32],
    [13, 20, 36, 0, 0, 0, 20, 0, 0, 0],
    [0, 31, 27, 0, 19, 0, 0, 25, 18, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 18, 0, 6],
    [0, 0, 0, 25, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 21, 0, 30, 0, 0, 0, 0],
    [19, 10, 0, 0, 34, 0, 2, 0, 0, 27],
    [0, 0, 0, 0, 0, 34, 0, 0, 0, 0]
  ]
));

// BFS: Used when you want to find the shortest path
// DFS + Backtracking: Used when you want to brute-force all possible combinations.
