export function removeTrailingZero(value: string | number) {
  const numStr = String(value);

  if (!numStr.includes(".") || isNaN(Number(value))) {
    return numStr;
  }

  if (Number(value) === 0) {
    return "0";
  }

  return numStr.replace(/(\.\d*?[1-9])?0+$/, "$1");
}
