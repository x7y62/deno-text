export type STDIN = Deno.Reader & Deno.ReaderSync & Deno.Closer & {
  readonly rid: number;
}

export type STDERR = Deno.Writer & Deno.WriterSync & Deno.Closer & {
  readonly rid: number;
}

export type STDOUT = Deno.Writer & Deno.WriterSync & Deno.Closer & {
  readonly rid: number;
}