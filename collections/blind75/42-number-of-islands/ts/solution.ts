const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

type Point = [number, number];

export function numIslands(grid: string[][]): number {
  const seen: boolean[][] = new Array(grid.length).fill(0).map(() => []);
  let numIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (seen[i][j]) continue;
      if (grid[i][j] == "0") continue;
      numIslands++;
      dsa(grid, [i, j], seen);
    }
  }

  return numIslands;
}

function dsa(grid: string[][], curr: Point, seen: boolean[][]) {
  const [i, j] = curr;

  if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1) return;
  if (grid[i][j] === "0") return;
  if (seen[i][j]) return;

  seen[i][j] = true;
  for (let dir of directions) {
    dsa(grid, [i + dir[0], j + dir[1]], seen);
  }
}
