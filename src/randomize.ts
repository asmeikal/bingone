import {
  everGreen,
  exclamations,
  ingredients,
  actions,
  noises,
  opinions,
  quantities,
  rarities,
} from "./pieces";

function randomIndex(input: string[]): number {
  return Math.floor(Math.random() * input.length);
}

function shuffle(input: readonly string[]): string[] {
  let res = [...input];
  for (let i = 0; i < res.length; i++) {
    const j = randomIndex(res);
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
}

export function randomize(size: number): string[][] {
  const chosen = shuffle(
    [
      ...shuffle(rarities).slice(0, 1),
      ...shuffle(everGreen).slice(0, 2),
      ...shuffle(noises).slice(0, 1),
      ...shuffle(actions).slice(0, 2),
      ...shuffle([
        ...shuffle(exclamations).slice(0, 5),
        ...shuffle(ingredients).slice(0, 5),
        ...shuffle(opinions).slice(0, 5),
        ...shuffle(quantities).slice(0, 5),
      ]),
    ].slice(0, size * size)
  );

  const result = [];

  for (let i = 0; i < size; i++) {
    const row = [];

    for (let j = 0; j < size; j++) {
      row.push(chosen.pop()!);
    }

    result.push(row);
  }

  return result;
}
