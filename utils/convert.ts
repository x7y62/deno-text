export function convert(data: Uint8Array): string;
export function convert(data: string): Uint8Array;

export function convert(data: Uint8Array | string): string | Uint8Array {
  if (typeof data === "string") {
    return new TextEncoder().encode(data);
  }

  return new TextDecoder().decode(data);
}