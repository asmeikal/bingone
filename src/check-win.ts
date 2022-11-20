export function checkWin(
  board: string[][],
  clicks: { [key: string]: boolean },
  size: number
): string[] {
  if (size > board.length) {
    return [];
  }

  // check rows
  for (let row = 0; row < size; row++) {
    let rowComplete = true;

    for (let col = 0; col < size; col++) {
      if (!clicks[board[row][col]]) {
        rowComplete = false;
      }
    }

    if (rowComplete) {
      return [...board[row]];
    }
  }

  // check columns
  for (let col = 0; col < size; col++) {
    let colComplete = true;

    for (let row = 0; row < size; row++) {
      if (!clicks[board[row][col]]) {
        colComplete = false;
      }
    }

    if (colComplete) {
      return board.map((row) => row[col]);
    }
  }

  // check main diagonal
  let diagComplete = true;

  for (let i = 0; i < size; i++) {
    if (!clicks[board[i][i]]) {
      diagComplete = false;
    }
  }

  if (diagComplete) {
    return board.map((row, idx) => row[idx]);
  }

  // check other diagonal
  diagComplete = true;

  for (let i = 0; i < size; i++) {
    if (!clicks[board[size - 1 - i][i]]) {
      diagComplete = false;
    }
  }

  if (diagComplete) {
    return board.map((row, idx) => row[size - 1 - idx]);
  }

  return [];
}
