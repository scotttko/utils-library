export function toHex(value: number | bigint): string {
  return `0x${value.toString(16)}`;
}
