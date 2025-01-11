import { commaizeNumber } from "../commaizeNumber";

describe("commaizeNumber", () => {
  it("should format integers with commas", () => {
    expect(commaizeNumber(1000)).toBe("1,000");
    expect(commaizeNumber(123456789)).toBe("123,456,789");
  });

  it("should format decimal numbers with commas", () => {
    expect(commaizeNumber(1234.56)).toBe("1,234.56");
    expect(commaizeNumber(1234567.8901)).toBe("1,234,567.8901");
  });

  it("should format string inputs", () => {
    expect(commaizeNumber("1000")).toBe("1,000");
    expect(commaizeNumber("1234567.89")).toBe("1,234,567.89");
  });

  it("should return non-numeric strings as-is", () => {
    expect(commaizeNumber("hello")).toBe("hello");
    expect(commaizeNumber("123abc")).toBe("123abc");
  });

  it("should handle edge cases", () => {
    expect(commaizeNumber(0)).toBe("0");
    expect(commaizeNumber("0")).toBe("0");
    expect(commaizeNumber(".123")).toBe(".123");
    expect(commaizeNumber("")).toBe("");
  });

  it("should handle negative numbers", () => {
    expect(commaizeNumber(-1000)).toBe("-1,000");
    expect(commaizeNumber("-1234567.89")).toBe("-1,234,567.89");
  });

  it("should handle numbers without decimals", () => {
    expect(commaizeNumber(1234.0)).toBe("1,234");
    expect(commaizeNumber("1234.00")).toBe("1,234.00");
  });
});
