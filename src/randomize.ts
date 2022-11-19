import { size } from "./setup";

export function randomize(input: string[]): string[][] {
  let available = [...input];
  const result = [];

  for (let i = 0; i < size; i++) {
    const row = [];

    for (let j = 0; j < size; j++) {
      const idx = Math.floor(Math.random() * available.length);

      row.push(available[idx]);
      available.splice(idx, 1);
    }

    result.push(row);
  }

  return result;
}
