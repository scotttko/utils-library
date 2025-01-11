export function commaizeNumber(value: string | number) {
  const numStr = String(value);

  if (isNaN(Number(value))) {
    return numStr;
  }

  const commaRegex = /\B(?=(\d{3})+(?!\d))/g;

  if (numStr.includes(".")) {
    // 소수일 경우
    const splited = numStr.split(".");
    const integers = splited[0].replace(commaRegex, ","); // 정수
    const decimals = splited[1]; // 소수

    return `${integers}${!!decimals && `.${decimals}`}`;
  } else {
    // 정수일 경우
    return numStr.replace(commaRegex, ",");
  }
}
