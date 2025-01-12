export function compactNumber(value: string | number) {
  const num = Number(value);
  if (isNaN(num)) {
    return num.toString();
  }

  let formattedNum = "";

  if (num >= 1e12) {
    formattedNum = (num / 1e12).toFixed(1) + "T";
  } else if (num >= 1e9) {
    formattedNum = (num / 1e9).toFixed(1) + "B";
  } else if (num >= 1e6) {
    formattedNum = (num / 1e6).toFixed(1) + "M";
  } else if (num >= 1e3) {
    formattedNum = (num / 1e3).toFixed(1) + "K";
  } else {
    formattedNum = num.toString();
  }

  return formattedNum.replace(/\.0(?!\d)/, "");
}
