import { convert } from "../utils/convert.ts";
import { stdout } from "./stdio.ts";

export function move(direction: number): void {
  // Ignore anything that isn't `^W`, `^A`, `^S`, `^D` and enter
  if (![23, 1, 19, 4, 13].includes(direction)) {
    return;
  }

  switch (direction) {
    // Move 1 line up
    case 23: {
      stdout.write(convert("\x1b[1A"));
      break;
    }

    // Move right
    case 1: {
      stdout.write(convert("\x1b[1D"));
      break;
    }

    // Move 1 line down
    case 13:
    case 19: {
      stdout.write(convert("\x1b[1B"));
      break;
    }

    // Move left
    case 4: {
      stdout.write(convert("\x1b[1C"));
      break;
    }
  }
}