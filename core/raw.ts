import { STDIN } from "../types/global.d.ts";

export function setRaw(stdin: STDIN, raw?: boolean): void {
  return Deno.setRaw(stdin.rid, !!raw);
}