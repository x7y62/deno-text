import { STDERR, STDOUT, STDIN } from "../types/global.d.ts";

export const stderr: STDERR = Deno.stderr;
export const stdout: STDOUT = Deno.stdout;
export const stdin: STDIN = Deno.stdin;