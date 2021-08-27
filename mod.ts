import { iter } from "https://deno.land/std@0.106.0/io/util.ts";
import { stdin } from "./core/stdio.ts";
import { handle } from "./core/handle_key.ts";
import { setRaw } from "./core/raw.ts";

/**
 * @example
 * ```ts
 * import { main } from "https://deno.land/x/denotext/mod.ts";
 * await main();
 * ```
 */
export async function main(debug?: boolean): Promise<void> {
  setRaw(stdin, true);

  for await (const key of iter(Deno.stdin)) {
    if (key[0] === 17) {
      console.clear();
      Deno.exit(1);
    }
    
    await handle(key, !!debug);
  }
}