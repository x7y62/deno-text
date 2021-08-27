import { main } from "./mod.ts";

async function _main(): Promise<void> {
  await main(true);
}


if (import.meta.url) {
  await _main();
}