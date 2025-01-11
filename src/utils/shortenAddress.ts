export function shortenAddress(address: string, start = 4, end = 4): string {
  if (!address.startsWith("0x") || address.length < 42) {
    return address;
  }

  return `${address.slice(0, 2 + start)}...${address.slice(-end)}`;
}
