import { handleIdle } from "./key/idle_mode.ts";
import { handleWork } from "./key/write_mode.ts";
import { stdout } from "./stdio.ts";
import { convert } from "../utils/convert.ts";
import { move } from "./cursor.ts";

// Handle the key here
export async function handle(key: Uint8Array, debug?: boolean): Promise<void> {
  if (debug) {
    // Open the file for writing
    const file = Deno.openSync("./log/debug.log", {
      read: true,
      create: true,
      append: true
    });

    // Convert the `data` to an `Uint8Array`
    const data = convert(
      `${new Date().toDateString()} DEBUG: Uint8Array(1) [ ${key[0]} ] ${key[0]} ${convert(key)}\n`
    )

    // Write the `data` and close it
    file.writeSync(data);
    file.close();
  }

  // Try to move cursor
  if ([23, 1, 19, 4, 13].includes(key[0])) {
    return move(key[0]);
  }

  // Write everything else to `stdout`
  await stdout.write(key);
}