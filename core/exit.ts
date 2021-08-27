export function exit(code: number): never {
  console.clear();
  return Deno.exit(code);
}