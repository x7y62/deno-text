import { main } from "./mod.ts";

async function _main(): Promise<void> {
  await main();
}


if (import.meta.url) {
  await _main();
}