import { randomize } from "./randomize";
import { pieces } from "./pieces";

export const size = 4;

document.documentElement.style.setProperty("--size", size.toString());

export const rows = randomize(pieces);
